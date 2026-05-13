import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Webinar, Attention Factory, and curated resources for AI images and video from Mercy Thaddeus.",
};

export default function BlogResourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
