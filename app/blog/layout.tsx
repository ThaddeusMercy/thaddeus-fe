import type { Metadata } from "next";
import Link from "next/link";

import BlogSubnav from "@/components/blog/BlogSubnav";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "AI prompts, resources, and writing from Mercy Thaddeus — Attention Factory.",
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-white text-[#676767]">
      <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-[#1a1a1a] hover:underline"
          >
            ← Home
          </Link>
          <BlogSubnav />
        </div>
      </header>
      {children}
    </div>
  );
}
