export type GuideSubTab = "guides" | "prompts" | "tools" | "links";

export function guideHubHref(
  sub: GuideSubTab = "guides",
  opts?: { post?: string },
): string {
  const params = new URLSearchParams();
  params.set("sub", sub);
  if (opts?.post) params.set("post", opts.post);
  return `/guide?${params.toString()}`;
}

export const GUIDE_PROMPTS_INDEX = guideHubHref("prompts");
export const GUIDE_TOOLKIT_INDEX = guideHubHref("tools");

export function resourcesTabToGuide(pathname: string, search: string): string | null {
  if (pathname !== "/") return null;
  const params = new URLSearchParams(search);
  if (params.get("tab") !== "resources") return null;

  const sub = params.get("sub");
  const post = params.get("post");

  if (sub === "links") return guideHubHref("links");
  if (sub === "prompts" || post) {
    return guideHubHref("prompts", post ? { post } : undefined);
  }
  return guideHubHref("prompts");
}
