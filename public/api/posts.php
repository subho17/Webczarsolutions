<?php
/**
 * Webczar Solutions - Live Blog Publishing Endpoint (Hostinger / Apache / PHP)
 * Allows the web-based admin panel (/admin) to directly create, update, and delete
 * blog articles in real-time on the live production server.
 */

// Allow CORS from webczar domains and local development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Admin-Pass, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$ADMIN_PASS = "webczar2026";
$dataFile = __DIR__ . '/../posts-data.json';
if (!file_exists($dataFile)) {
    if (file_exists(__DIR__ . '/posts-data.json')) {
        $dataFile = __DIR__ . '/posts-data.json';
    }
}

function loadPosts($file) {
    if (!file_exists($file)) {
        return [];
    }
    $content = file_get_contents($file);
    $data = json_decode($content, true);
    return is_array($data) ? $data : [];
}

function savePosts($file, $posts) {
    // Sort posts: newest date first, then order, then title
    usort($posts, function($a, $b) {
        $ad = isset($a['date']) ? $a['date'] : (isset($a['year']) ? $a['year'] : '');
        $bd = isset($b['date']) ? $b['date'] : (isset($b['year']) ? $b['year'] : '');
        if ($ad !== $bd) {
            return ($ad < $bd) ? 1 : -1;
        }
        $ao = isset($a['order']) ? (int)$a['order'] : 999;
        $bo = isset($b['order']) ? (int)$b['order'] : 999;
        if ($ao !== $bo) {
            return $ao - $bo;
        }
        return strcmp(isset($a['slug']) ? $a['slug'] : '', isset($b['slug']) ? $b['slug'] : '');
    });

    $json = json_encode($posts, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    return file_put_contents($file, $json);
}

function parseInline($text) {
    $text = preg_replace('/\*\*(.*?)\*\*/', '<strong>$1</strong>', $text);
    $text = preg_replace('/\*([^\*]+)\*/', '<em>$1</em>', $text);
    $text = preg_replace('/\`([^\`]+)\`/', '<code>$1</code>', $text);
    return $text;
}

function renderMarkdownToHtml($md) {
    if (empty($md)) return '';
    $lines = explode("\n", $md);
    $html = '';
    $inList = false;

    foreach ($lines as $line) {
        $trimmed = trim($line);
        if (empty($trimmed)) {
            if ($inList) {
                $html .= "</ul>\n";
                $inList = false;
            }
            continue;
        }

        if (strpos($trimmed, '### ') === 0) {
            if ($inList) { $html .= "</ul>\n"; $inList = false; }
            $text = htmlspecialchars(substr($trimmed, 4));
            $html .= "<h3>" . parseInline($text) . "</h3>\n";
            continue;
        }

        if (strpos($trimmed, '## ') === 0) {
            if ($inList) { $html .= "</ul>\n"; $inList = false; }
            $text = htmlspecialchars(substr($trimmed, 3));
            $html .= "<h2>" . parseInline($text) . "</h2>\n";
            continue;
        }

        if (strpos($trimmed, '> ') === 0) {
            if ($inList) { $html .= "</ul>\n"; $inList = false; }
            $text = htmlspecialchars(substr($trimmed, 2));
            $html .= "<blockquote>" . parseInline($text) . "</blockquote>\n";
            continue;
        }

        if (strpos($trimmed, '- ') === 0 || strpos($trimmed, '* ') === 0) {
            if (!$inList) {
                $html .= "<ul>\n";
                $inList = true;
            }
            $text = htmlspecialchars(substr($trimmed, 2));
            $html .= "<li>" . parseInline($text) . "</li>\n";
            continue;
        }

        if ($inList) {
            $html .= "</ul>\n";
            $inList = false;
        }

        $text = htmlspecialchars($trimmed);
        $html .= "<p>" . parseInline($text) . "</p>\n";
    }

    if ($inList) {
        $html .= "</ul>\n";
    }

    return $html;
}

function generateStaticHtmlForPost($post) {
    $title = htmlspecialchars($post['title'] ?? 'Article');
    $oneLiner = htmlspecialchars($post['oneLiner'] ?? '');
    $slug = htmlspecialchars($post['slug'] ?? '');
    $date = htmlspecialchars($post['date'] ?? $post['year'] ?? date('Y'));
    $tags = isset($post['tags']) && is_array($post['tags']) ? implode(' · ', array_map('htmlspecialchars', $post['tags'])) : '';
    $coverBg = htmlspecialchars($post['cover']['bg'] ?? '#6D3BF5');
    $coverSrc = htmlspecialchars($post['cover']['src'] ?? '');
    $coverLabel = htmlspecialchars($post['coverLabel'] ?? 'ARTICLE');
    $role = htmlspecialchars($post['study']['role'] ?? 'Growth & Engineering');
    $timeline = htmlspecialchars($post['study']['timeline'] ?? '5 min read');
    $context = htmlspecialchars($post['study']['context'] ?? '');
    $problem = htmlspecialchars($post['study']['problem'] ?? '');
    $reflection = htmlspecialchars($post['study']['reflection'] ?? '');
    $bodyHtml = renderMarkdownToHtml($post['study']['body'] ?? '');

    $processHtml = '';
    if (!empty($post['study']['process']) && is_array($post['study']['process'])) {
        $i = 1;
        foreach ($post['study']['process'] as $step) {
            $sTitle = htmlspecialchars($step['title'] ?? '');
            $sBody = htmlspecialchars($step['body'] ?? '');
            $num = str_pad($i, 2, '0', STR_PAD_LEFT);
            $processHtml .= "<div class=\"step\"><span class=\"step-num\">{$num}</span><div><h3>{$sTitle}</h3><p>{$sBody}</p></div></div>";
            $i++;
        }
    }

    $outcomesHtml = '';
    if (!empty($post['study']['outcomes']) && is_array($post['study']['outcomes'])) {
        foreach ($post['study']['outcomes'] as $outcome) {
            $outcomesHtml .= "<p class=\"outcome\"><span>✦</span> " . htmlspecialchars($outcome) . "</p>";
        }
    }

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{$title} — Webczar Blog</title>
  <meta name="description" content="{$oneLiner}" />
  <meta property="og:title" content="{$title} — Webczar Blog" />
  <meta property="og:description" content="{$oneLiner}" />
  <meta property="og:type" content="article" />
  <link rel="canonical" href="https://webczarsolutions.com/blog/{$slug}/" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #09090b;
      --card-bg: rgba(255,255,255,0.03);
      --border: rgba(255,255,255,0.08);
      --ink: #f4f4f5;
      --ink-dim: #a1a1aa;
      --accent: #6D3BF5;
      --accent-glow: rgba(109,59,245,0.25);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--ink);
      font-family: 'Inter', -apple-system, sans-serif;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    .nav {
      position: sticky; top: 0; z-index: 50;
      display: flex; align-items: center; justify-content: space-between;
      padding: 18px 24px;
      backdrop-filter: blur(14px);
      background: rgba(9,9,11,0.85);
      border-bottom: 1px solid var(--border);
    }
    .nav-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }
    .nav-brand img { height: 32px; width: auto; }
    .back-btn {
      color: var(--ink-dim); text-decoration: none; font-size: 14px; font-weight: 600;
      display: flex; align-items: center; gap: 6px;
      padding: 8px 14px; border-radius: 999px; background: rgba(255,255,255,0.05);
      border: 1px solid var(--border); transition: all 0.2s;
    }
    .back-btn:hover { color: #fff; border-color: rgba(255,255,255,0.2); }
    .wa-btn {
      display: inline-flex; align-items: center; gap: 8px;
      background: #25d366; color: #000; font-weight: 700; font-size: 13px;
      padding: 8px 16px; border-radius: 999px; text-decoration: none;
    }
    .container { max-width: 860px; margin: 0 auto; padding: 48px 20px 100px; }
    .kicker { font-size: 12px; font-weight: 800; letter-spacing: 0.15em; color: var(--accent); text-transform: uppercase; margin-bottom: 12px; }
    h1 { font-size: clamp(28px, 5vw, 44px); font-weight: 900; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 18px; }
    .one-liner { font-size: 18px; color: var(--ink-dim); line-height: 1.5; margin-bottom: 32px; }
    .meta-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px; padding: 20px; background: var(--card-bg);
      border: 1px solid var(--border); border-radius: 16px; margin-bottom: 36px;
    }
    .meta-item b { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-dim); margin-bottom: 4px; }
    .meta-item span { font-size: 14px; font-weight: 600; }
    .cover-wrap {
      width: 100%; border-radius: 20px; overflow: hidden; margin-bottom: 48px;
      background: {$coverBg}; min-height: 240px; display: flex; align-items: center; justify-content: center;
      border: 1px solid var(--border);
    }
    .cover-wrap img { width: 100%; height: auto; max-height: 480px; object-fit: cover; display: block; }
    .cover-label { font-size: 20px; font-weight: 800; letter-spacing: 0.1em; color: #fff; padding: 40px; text-align: center; }
    .section-card {
      background: var(--card-bg); border: 1px solid var(--border); border-radius: 18px;
      padding: 32px; margin-bottom: 32px;
    }
    .sec-label { font-size: 12px; font-weight: 800; letter-spacing: 0.15em; color: var(--accent); text-transform: uppercase; margin-bottom: 14px; }
    .steps { display: flex; flex-direction: column; gap: 20px; margin-top: 18px; }
    .step { display: flex; gap: 18px; align-items: flex-start; }
    .step-num { font-size: 22px; font-weight: 900; color: var(--accent); line-height: 1; min-width: 36px; }
    .step h3 { font-size: 17px; font-weight: 700; margin-bottom: 4px; }
    .step p { font-size: 14px; color: var(--ink-dim); }
    .outcomes { display: flex; flex-direction: column; gap: 12px; margin-top: 14px; }
    .outcome { display: flex; gap: 10px; font-size: 15px; font-weight: 500; }
    .outcome span { color: #10b981; }
    .article-body { margin-top: 40px; line-height: 1.8; font-size: 16px; color: #e4e4e7; }
    .article-body h2 { font-size: 24px; font-weight: 800; margin: 36px 0 16px; color: #fff; }
    .article-body h3 { font-size: 20px; font-weight: 700; margin: 28px 0 12px; color: #fff; }
    .article-body p { margin-bottom: 20px; }
    .article-body ul { margin: 0 0 24px 24px; }
    .article-body li { margin-bottom: 8px; }
    .article-body blockquote {
      border-left: 3px solid var(--accent); padding-left: 18px; margin: 24px 0;
      color: var(--ink-dim); font-style: italic; font-size: 17px;
    }
    .reflection {
      font-size: 18px; font-style: italic; line-height: 1.6; color: #fff;
      border-left: 3px solid var(--accent); padding-left: 20px;
    }
    .bottom-cta {
      margin-top: 60px; padding: 36px; border-radius: 20px;
      background: linear-gradient(135deg, rgba(109,59,245,0.18), rgba(0,0,0,0.5));
      border: 1px solid rgba(109,59,245,0.4); text-align: center;
    }
    .bottom-cta h3 { font-size: 24px; font-weight: 800; margin-bottom: 12px; }
    .bottom-cta p { color: var(--ink-dim); margin-bottom: 24px; max-width: 520px; margin-left: auto; margin-right: auto; }
    @media (max-width: 640px) {
      .container { padding: 32px 16px 80px; }
      .section-card { padding: 22px; }
    }
  </style>
</head>
<body>
  <header class="nav">
    <a href="/" class="nav-brand">
      <img src="/images/Screenshot_2026-09-16_125328-removebg-preview.png" alt="Webczar Solutions" />
    </a>
    <div style="display:flex;gap:10px;align-items:center;">
      <a href="/blog/" class="back-btn">← Back to Blog</a>
      <a href="https://wa.me/919988221729" target="_blank" rel="noopener noreferrer" class="wa-btn">WhatsApp</a>
    </div>
  </header>

  <main class="container">
    <div class="kicker">ARTICLE · {$date}</div>
    <h1>{$title}</h1>
    <p class="one-liner">{$oneLiner}</p>

    <div class="meta-grid">
      <div class="meta-item">
        <b>Topic</b>
        <span>{$role}</span>
      </div>
      <div class="meta-item">
        <b>Read Time</b>
        <span>{$timeline}</span>
      </div>
      <div class="meta-item">
        <b>Categories</b>
        <span>{$tags}</span>
      </div>
    </div>

    <div class="cover-wrap">
      {$coverImgHtml}
    </div>

    {$contextSection}
    {$problemSection}
    {$processSection}
    {$outcomesSection}
    {$reflectionSection}

    <div class="article-body">
      {$bodyHtml}
    </div>

    <div class="bottom-cta">
      <h3>Ready to Scale Your Digital Growth?</h3>
      <p>Partner with Webczar Solutions for high-performance software engineering, UI/UX, and data-backed marketing.</p>
      <a href="https://wa.me/919988221729" target="_blank" rel="noopener noreferrer" class="wa-btn" style="padding:12px 24px;font-size:15px;">
        Chat With Our Specialists →
      </a>
    </div>
  </main>
</body>
</html>
HTML;
}

function checkAuth($pass, $expected) {
    return ($pass === $expected);
}

$method = $_SERVER['REQUEST_METHOD'];

// ================= GET: Retrieve all published posts =================
if ($method === 'GET') {
    if (isset($_GET['health'])) {
        echo json_encode([
            "ok" => true,
            "engine" => "php-hostinger",
            "writable" => is_writable(dirname($dataFile)) || is_writable($dataFile),
            "total" => count(loadPosts($dataFile))
        ]);
        exit;
    }

    $posts = loadPosts($dataFile);
    echo json_encode([
        "success" => true,
        "posts" => $posts,
        "count" => count($posts)
    ]);
    exit;
}

// ================= POST: Publish or update a post =================
if ($method === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw, true);

    if (!$payload) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Invalid JSON payload"]);
        exit;
    }

    $providedPass = isset($payload['pass']) ? $payload['pass'] : (isset($_SERVER['HTTP_X_ADMIN_PASS']) ? $_SERVER['HTTP_X_ADMIN_PASS'] : '');
    if (!checkAuth($providedPass, $ADMIN_PASS)) {
        http_response_code(401);
        echo json_encode(["success" => false, "error" => "Unauthorized: Incorrect admin passkey"]);
        exit;
    }

    $post = isset($payload['post']) ? $payload['post'] : null;
    $originalSlug = isset($payload['originalSlug']) ? trim($payload['originalSlug']) : '';

    if (!$post || empty($post['slug']) || empty($post['title'])) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Missing required post fields (title or slug)"]);
        exit;
    }

    // Clean slug
    $slug = preg_replace('/[^a-z0-9-]/', '', strtolower(trim($post['slug'])));
    $post['slug'] = $slug;

    $posts = loadPosts($dataFile);

    // If editing, remove old post by originalSlug or new slug
    $targetSlug = !empty($originalSlug) ? $originalSlug : $slug;
    $filtered = [];
    foreach ($posts as $p) {
        if ($p['slug'] !== $targetSlug && $p['slug'] !== $slug) {
            $filtered[] = $p;
        }
    }

    // Add new post
    array_unshift($filtered, $post);

    if (savePosts($dataFile, $filtered) === false) {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => "Failed to write posts data to server storage"]);
        exit;
    }

    // Attempt to write static HTML folder for direct Apache web serving
    $baseBlogDir = dirname($dataFile) . '/blog';
    if (!empty($originalSlug) && $originalSlug !== $slug) {
        $oldDir = $baseBlogDir . '/' . $originalSlug;
        if (is_dir($oldDir)) {
            @unlink($oldDir . '/index.html');
            @rmdir($oldDir);
        }
    }

    $postDir = $baseBlogDir . '/' . $slug;
    if (!is_dir($postDir)) {
        @mkdir($postDir, 0755, true);
    }
    if (is_dir($postDir)) {
        $coverSrc = !empty($post['cover']['src']) ? htmlspecialchars($post['cover']['src']) : '';
        $coverLabel = !empty($post['coverLabel']) ? htmlspecialchars($post['coverLabel']) : 'ARTICLE';
        $coverImgHtml = $coverSrc ? "<img src=\"{$coverSrc}\" alt=\"{$coverLabel}\" />" : "<div class=\"cover-label\">{$coverLabel}</div>";

        $contextSection = !empty($post['study']['context']) ? "<div class=\"section-card\"><div class=\"sec-label\">Overview</div><p>" . htmlspecialchars($post['study']['context']) . "</p></div>" : '';
        $problemSection = !empty($post['study']['problem']) ? "<div class=\"section-card\"><div class=\"sec-label\">The Challenge</div><p>" . htmlspecialchars($post['study']['problem']) . "</p></div>" : '';

        $processSteps = '';
        if (!empty($post['study']['process']) && is_array($post['study']['process'])) {
            $i = 1;
            foreach ($post['study']['process'] as $step) {
                $st = htmlspecialchars($step['title'] ?? '');
                $sb = htmlspecialchars($step['body'] ?? '');
                $num = str_pad($i, 2, '0', STR_PAD_LEFT);
                $processSteps .= "<div class=\"step\"><span class=\"step-num\">{$num}</span><div><h3>{$st}</h3><p>{$sb}</p></div></div>";
                $i++;
            }
        }
        $processSection = $processSteps ? "<div class=\"section-card\"><div class=\"sec-label\">Strategic Deep Dive</div><div class=\"steps\">{$processSteps}</div></div>" : '';

        $outcomesBullets = '';
        if (!empty($post['study']['outcomes']) && is_array($post['study']['outcomes'])) {
            foreach ($post['study']['outcomes'] as $outcome) {
                $outcomesBullets .= "<p class=\"outcome\"><span>✦</span> " . htmlspecialchars($outcome) . "</p>";
            }
        }
        $outcomesSection = $outcomesBullets ? "<div class=\"section-card\"><div class=\"sec-label\">Key Takeaways & Impact</div><div class=\"outcomes\">{$outcomesBullets}</div></div>" : '';

        $reflectionSection = !empty($post['study']['reflection']) ? "<div class=\"section-card\"><div class=\"sec-label\">Conclusion</div><p class=\"reflection\">“" . htmlspecialchars($post['study']['reflection']) . "”</p></div>" : '';

        // Generate complete HTML
        $html = generateStaticHtmlForPost($post);
        // Replace placeholders if any
        $html = str_replace('{$coverImgHtml}', $coverImgHtml, $html);
        $html = str_replace('{$contextSection}', $contextSection, $html);
        $html = str_replace('{$problemSection}', $problemSection, $html);
        $html = str_replace('{$processSection}', $processSection, $html);
        $html = str_replace('{$outcomesSection}', $outcomesSection, $html);
        $html = str_replace('{$reflectionSection}', $reflectionSection, $html);

        @file_put_contents($postDir . '/index.html', $html);
    }

    echo json_encode([
        "success" => true,
        "slug" => $slug,
        "message" => "Post published successfully to server",
        "total" => count($filtered)
    ]);
    exit;
}

// ================= DELETE: Remove a post =================
if ($method === 'DELETE') {
    $slug = isset($_GET['slug']) ? trim($_GET['slug']) : '';
    $providedPass = isset($_GET['pass']) ? $_GET['pass'] : (isset($_SERVER['HTTP_X_ADMIN_PASS']) ? $_SERVER['HTTP_X_ADMIN_PASS'] : '');

    if (!checkAuth($providedPass, $ADMIN_PASS)) {
        http_response_code(401);
        echo json_encode(["success" => false, "error" => "Unauthorized"]);
        exit;
    }

    if (empty($slug)) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Missing slug"]);
        exit;
    }

    $posts = loadPosts($dataFile);
    $initialCount = count($posts);
    $filtered = [];
    foreach ($posts as $p) {
        if ($p['slug'] !== $slug) {
            $filtered[] = $p;
        }
    }

    if (count($filtered) === $initialCount) {
        http_response_code(404);
        echo json_encode(["success" => false, "error" => "Post not found"]);
        exit;
    }

    savePosts($dataFile, $filtered);

    // Remove generated folder
    $postDir = dirname($dataFile) . '/blog/' . $slug;
    if (is_dir($postDir)) {
        @unlink($postDir . '/index.html');
        @rmdir($postDir);
    }

    echo json_encode(["success" => true, "message" => "Post deleted successfully"]);
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
