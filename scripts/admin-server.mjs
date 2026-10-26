/* Lightweight Local Admin Bridge Server for Webczar Solutions
 *
 * Runs locally to enable the web-based admin panel (/admin) to directly read,
 * create, edit, and delete post JSON files in content/posts/ and automatically
 * execute `node scripts/posts.mjs` to keep content/posts/index.ts synchronized.
 *
 * Zero external dependencies (uses built-in Node.js http, fs, and path).
 * Start with: `node scripts/admin-server.mjs` or `npm run admin`
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { exec } from "node:child_process";

const PORT = process.env.ADMIN_PORT ? parseInt(process.env.ADMIN_PORT, 10) : 3001;
const root = process.cwd();
const postsDir = path.join(root, "content", "posts");
const postsScript = path.join(root, "scripts", "posts.mjs");

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(res, statusCode, data) {
  setCors(res);
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

function runSync(callback) {
  exec(`node "${postsScript}"`, (error, stdout, stderr) => {
    if (error) {
      console.error("Sync error:", stderr || error.message);
      callback(false, stderr || error.message);
    } else {
      console.log(stdout.trim());
      callback(true);
    }
  });
}

const server = http.createServer((req, res) => {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // Health check
  if (url.pathname === "/api/health") {
    sendJson(res, 200, { ok: true, version: "1.0.0", root });
    return;
  }

  // Get all posts
  if (url.pathname === "/api/posts" && req.method === "GET") {
    try {
      if (!fs.existsSync(postsDir)) {
        sendJson(res, 200, { success: true, posts: [] });
        return;
      }
      const files = fs
        .readdirSync(postsDir)
        .filter((f) => f.toLowerCase().endsWith(".json"))
        .sort();

      const posts = files
        .map((f) => {
          try {
            return JSON.parse(fs.readFileSync(path.join(postsDir, f), "utf8"));
          } catch {
            return null;
          }
        })
        .filter(Boolean);

      sendJson(res, 200, { success: true, posts });
    } catch (err) {
      sendJson(res, 500, { success: false, error: err.message });
    }
    return;
  }

  // Save / Update post
  if (url.pathname === "/api/posts" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const { post, originalSlug } = JSON.parse(body);
        if (!post || !post.slug) {
          sendJson(res, 400, { success: false, error: "Missing post or slug" });
          return;
        }

        // Handle rename if slug changed
        if (originalSlug && originalSlug !== post.slug) {
          const oldFile = path.join(postsDir, `${originalSlug}.json`);
          if (fs.existsSync(oldFile)) {
            fs.unlinkSync(oldFile);
          }
        }

        const targetFile = path.join(postsDir, `${post.slug}.json`);
        fs.writeFileSync(targetFile, JSON.stringify(post, null, 2), "utf8");

        // Run posts.mjs to rebuild index.ts
        runSync((success, errMsg) => {
          if (!success) {
            sendJson(res, 500, {
              success: false,
              error: `Post written but sync failed: ${errMsg}`,
            });
          } else {
            sendJson(res, 200, {
              success: true,
              slug: post.slug,
              message: "Post published and index synced successfully",
            });
          }
        });
      } catch (err) {
        sendJson(res, 400, { success: false, error: err.message });
      }
    });
    return;
  }

  // Delete post
  if (url.pathname === "/api/posts" && req.method === "DELETE") {
    const slug = url.searchParams.get("slug");
    if (!slug) {
      sendJson(res, 400, { success: false, error: "Missing ?slug=" });
      return;
    }
    const targetFile = path.join(postsDir, `${slug}.json`);
    if (!fs.existsSync(targetFile)) {
      sendJson(res, 404, { success: false, error: "Post file not found" });
      return;
    }

    try {
      fs.unlinkSync(targetFile);
      runSync((success, errMsg) => {
        if (!success) {
          sendJson(res, 500, {
            success: false,
            error: `Post deleted but sync failed: ${errMsg}`,
          });
        } else {
          sendJson(res, 200, {
            success: true,
            message: `Post ${slug} deleted and index synced`,
          });
        }
      });
    } catch (err) {
      sendJson(res, 500, { success: false, error: err.message });
    }
    return;
  }

  sendJson(res, 404, { error: "Not found" });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Webczar Blog Admin Bridge running at http://localhost:${PORT}`);
  console.log(`Watching content/posts/ directory\n`);
});
