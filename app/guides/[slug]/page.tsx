import { redirect } from "next/navigation";

type PageProps = { params: Promise<{ slug: string }> };

export default async function GuidesSlugRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/guide/${slug}`);
}
