"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links: {
  href: string;
  label: string;
  isActive?: (pathname: string) => boolean;
}[] = [
  { href: "/blog", label: "Overview", isActive: (p) => p === "/blog" },
  { href: "/?tab=resources&sub=prompts", label: "Prompt vault" },
  { href: "/?tab=resources&sub=links", label: "Links" },
];

export default function BlogSubnav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
      {links.map(({ href, label, isActive }) => {
        const active = isActive ? isActive(pathname) : false;
        return (
          <Link
            key={href}
            href={href}
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
