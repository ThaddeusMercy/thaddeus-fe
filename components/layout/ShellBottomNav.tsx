"use client";

import Link from "next/link";
import Image from "next/image";

import { trackEvent } from "@/lib/analytics";

export type ShellNavTab = "home" | "talks" | "blog" | "projects" | "guide";

type ShellBottomNavProps = {
  activeTab: ShellNavTab;
};

export default function ShellBottomNav({ activeTab }: ShellBottomNavProps) {
  const tabs = [
    {
      label: activeTab === "talks" ? "home" : "talks",
      path: activeTab === "talks" ? "/" : "/?tab=talks",
    },
    {
      label: activeTab === "blog" ? "home" : "blog",
      path: activeTab === "blog" ? "/" : "/?tab=blog",
    },
    {
      label: activeTab === "projects" ? "home" : "projects",
      path: activeTab === "projects" ? "/" : "/?tab=projects",
    },
    {
      label: activeTab === "guide" ? "home" : "guide",
      path: activeTab === "guide" ? "/" : "/guide",
    },
  ];

  return (
    <nav
      className="fixed bottom-20 left-1/2 z-50 mx-auto flex max-w-[min(100vw-2rem,420px)] -translate-x-1/2 flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-xl border border-border bg-secondary px-4 py-2 shadow-sm sm:px-5 md:bottom-17"
      aria-label="Site sections"
    >
      {tabs.map((t) => (
        <Link
          key={t.label}
          href={t.path}
          className="font-medium lowercase"
          onClick={() =>
            trackEvent("shell_nav_click", {
              label: t.label,
              path: t.path,
            })
          }
        >
          {t.label}
        </Link>
      ))}

      <div className="h-4 w-[2px] bg-border" aria-hidden />

      <Image
        src="/play_icon.svg"
        width={15}
        height={15}
        alt="Play icon"
        className="cursor-pointer"
      />
    </nav>
  );
}
