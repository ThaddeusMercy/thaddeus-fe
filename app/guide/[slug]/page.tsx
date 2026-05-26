import { notFound } from "next/navigation";
import type { Metadata } from "next";

import GuidePostView from "@/components/guides/GuidePostView";
import {
  GUIDE_ENTRIES,
  getGuideBySlug,
} from "@/components/guides/guides-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDE_ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) return { title: "Guide not found" };

  return {
    title: entry.title,
    description: entry.excerpt,
  };
}

export default async function GuidePostPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) notFound();

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <GuidePostView entry={entry} />
    </div>
  );
}
