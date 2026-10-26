/* Tiny, dependency-free Markdown → HTML renderer.
 *
 * Used by the public article page (`CaseView`) and by the admin editor's live
 * preview, so both must stay in lock-step.
 *
 * Safety model: every byte of author input is HTML-escaped before any markup
 * is generated, and raw HTML is never passed through. The only things that
 * survive are the explicit constructs handled below, which is enough for
 * article prose while keeping things like `<script>` inert. Post bodies are
 * repo content written by the site owner, but escaping anyway means a pasted
 * snippet can never turn into executable markup.
 *
 * Supported: headings, paragraphs (single newline = line break), bold,
 * italic, inline code, fenced code blocks, links, images, blockquotes,
 * ordered/unordered lists, horizontal rules. */

const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ESCAPES[char]);
}

/* Only allow schemes that cannot execute script when clicked. */
function safeUrl(raw: string): string | null {
  const url = raw.trim();
  if (!url) return null;
  if (/^(?:https?:\/\/|mailto:|tel:|\/|#|\.\/|\.\.\/)/i.test(url)) return url;
  return null;
}

const CODE_TOKEN = "\u0000code:";

function inline(rawLine: string): string {
  let text = escapeHtml(rawLine);
  const codes: string[] = [];

  // Inline code is swapped out first so `**` inside it stays literal.
  text = text.replace(/`([^`]+)`/g, (_match, code: string) => {
    codes.push(`<code>${code}</code>`);
    return `${CODE_TOKEN}${codes.length - 1}\u0000`;
  });

  text = text.replace(
    /!\[([^\]]*)\]\(([^)\s]+)\)/g,
    (match, alt: string, src: string) => {
      const url = safeUrl(src);
      if (!url) return match;
      return `<img src="${url}" alt="${alt}" loading="lazy" />`;
    }
  );

  text = text.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (match, label: string, href: string) => {
      const url = safeUrl(href);
      if (!url) return match;
      const external = /^https?:\/\//i.test(url);
      const attrs = external ? ' target="_blank" rel="noreferrer"' : "";
      return `<a href="${url}"${attrs}>${label}</a>`;
    }
  );

  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  text = text.replace(/(^|[^_\w])_([^_\n]+)_/g, "$1<em>$2</em>");

  text = text.replace(
    new RegExp(`${CODE_TOKEN}(\\d+)\\u0000`, "g"),
    (_match, index: string) => codes[Number(index)] ?? ""
  );

  return text;
}

const BLOCK_START = /^(?:#{1,6}\s|```|>|\s*[-*+]\s+|\s*\d+[.)]\s+|\s*(?:-{3,}|\*{3,}|_{3,})\s*$)/;

export function renderMarkdown(markdown: string): string {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const blocks: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    const fence = line.match(/^```(\S*)\s*$/);
    if (fence) {
      const language = fence[1];
      const buffer: string[] = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) {
        buffer.push(lines[i]);
        i++;
      }
      i++; // closing fence (tolerates an unterminated block at EOF)
      const className = language ? ` class="language-${escapeHtml(language)}"` : "";
      blocks.push(`<pre><code${className}>${escapeHtml(buffer.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const level = heading[1].length;
      blocks.push(`<h${level}>${inline(heading[2].trim())}</h${level}>`);
      i++;
      continue;
    }

    if (/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      blocks.push("<hr />");
      i++;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quoted: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quoted.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(`<blockquote>${renderMarkdown(quoted.join("\n"))}</blockquote>`);
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) {
        items.push(inline(lines[i].replace(/^\s*[-*+]\s+/, "")));
        i++;
      }
      blocks.push(`<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+[.)]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) {
        items.push(inline(lines[i].replace(/^\s*\d+[.)]\s+/, "")));
        i++;
      }
      blocks.push(`<ol>${items.map((item) => `<li>${item}</li>`).join("")}</ol>`);
      continue;
    }

    const paragraph: string[] = [];
    while (i < lines.length && lines[i].trim() && !BLOCK_START.test(lines[i])) {
      paragraph.push(lines[i].trim());
      i++;
    }
    if (paragraph.length) {
      blocks.push(`<p>${paragraph.map(inline).join("<br />")}</p>`);
    }
  }

  return blocks.join("\n");
}

/* Rough reading time for the editor's hint text (Markdown stripped). */
export function countWords(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`[\]()!-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}
