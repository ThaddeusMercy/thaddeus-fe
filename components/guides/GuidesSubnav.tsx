"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { guideHubHref, type GuideSubTab } from "@/lib/guide-urls";

const tabs: { sub: GuideSubTab; label: string }[] = [
  { sub: "guides", label: "Guides" },
  { sub: "prompts", label: "Prompts" },
  { sub: "links", label: "Links" },
];

export default function GuidesSubnav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const onHub = pathname === "/guide";
  const sub = searchParams.get("sub");
  const activeSub: GuideSubTab =
    sub === "prompts" || sub === "links" ? sub : "guides";

  if (!onHub) {
    return (
      <nav className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
        <Link
          href="/guide"
          className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-[#676767] transition-colors hover:bg-border sm:text-sm"
        >
          All guides
        </Link>
      </nav>
    );
  }

  return (
    <nav className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
      {tabs.map(({ sub: tabSub, label }) => {
        const active = activeSub === tabSub;
        return (
          <Link
            key={tabSub}
            href={guideHubHref(tabSub)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
              active
                ? "bg-[#1a1a1a] text-white"
                : "bg-secondary text-[#676767] hover:bg-border"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
