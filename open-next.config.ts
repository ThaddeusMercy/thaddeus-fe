import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

export default {
  ...config,
  // Workers Builds runs `npm run build`. That script is OpenNext, so OpenNext
  // must invoke Next directly or it recurses into itself.
  buildCommand: "next build",
};
