import { redirect } from "next/navigation";

import {
  PROMPT_VAULT_COLLECTION,
  getPromptBySlug,
} from "@/components/blog/prompt-vault-data";
import { guideHubHref } from "@/lib/guide-urls";

type PageProps = { params: Promise<{ slug: string }> };

export default async function PromptVaultSlugRedirectPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === PROMPT_VAULT_COLLECTION.slug) {
    redirect(guideHubHref("prompts", { post: slug }));
  }

  const entry = getPromptBySlug(slug);
  if (entry) {
    redirect(guideHubHref("prompts", { post: entry.slug }));
  }

  redirect("/guide?sub=prompts");
}
