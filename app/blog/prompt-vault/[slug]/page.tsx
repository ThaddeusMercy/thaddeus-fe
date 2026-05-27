import { redirect } from "next/navigation";

import { resolvePromptVaultPost } from "@/components/blog/prompt-vault-data";
import { guideHubHref } from "@/lib/guide-urls";

type PageProps = { params: Promise<{ slug: string }> };

export default async function PromptVaultSlugRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolvePromptVaultPost(slug);

  if (resolved) {
    const base = guideHubHref("prompts", { post: resolved.collection.slug });
    redirect(
      resolved.highlightSlug ? `${base}#${resolved.highlightSlug}` : base,
    );
  }

  redirect("/guide?sub=prompts");
}
