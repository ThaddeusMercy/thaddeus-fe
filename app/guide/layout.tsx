import type { Metadata } from "next";
import { Suspense } from "react";

import GuidesSubnav from "@/components/guides/GuidesSubnav";
import ShellBottomNav from "@/components/layout/ShellBottomNav";

export const metadata: Metadata = {
  title: "Free AI Guides",
  description:
    "Free AI guides from Mercy Thaddeus — setup, prompts, workflows, career, and creative playbooks. Attention Factory.",
};

export default function GuideLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-white pb-28 text-[#676767] md:pb-32">
      <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <Suspense fallback={null}>
            <GuidesSubnav />
          </Suspense>
        </div>
      </header>
      {children}
      <ShellBottomNav activeTab="guide" />
    </div>
  );
}
