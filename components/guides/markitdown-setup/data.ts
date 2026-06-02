export const MARKITDOWN_SETUP_SLUG = "markitdown-mcp-claude-setup";

export const CLAUDE_CONFIG_JSON = `{
  "mcpServers": {
    "markitdown": {
      "command": "markitdown-mcp",
      "args": []
    }
  }
}`;

export const SIMPLE_PROMPT =
  "Convert this to markdown using markitdown, then answer my question.";

export const SYSTEM_PROMPT = `For every file the user uploads, call markitdown's
convert_to_markdown tool first and use the result as
the source of truth before answering anything.`;

export const TOC_ITEMS = [
  { id: "why", n: "01", label: "Why PDFs burn so many tokens" },
  { id: "install", n: "02", label: "Install MarkItDown on your machine" },
  { id: "connect", n: "03", label: "Connect it to Claude Desktop" },
  { id: "use", n: "04", label: "Test the setup and use it daily" },
] as const;

export const FILE_TYPES = [
  { label: "PDFs", ext: ".pdf" },
  { label: "Word", ext: ".docx" },
  { label: "PowerPoint", ext: ".pptx" },
  { label: "Excel", ext: ".xlsx" },
  { label: "YouTube", ext: "URL" },
] as const;
