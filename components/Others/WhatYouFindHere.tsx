import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

import {
  homeBanner,
  homeConsult,
  homeFindHere,
  homeRecentGuides,
  type HomeFindItem,
} from "@/content/home-site";
import { sectionHeadingClass } from "@/lib/typography";

function FindLink({
  item,
  children,
  className,
}: {
  item: HomeFindItem;
  children: React.ReactNode;
  className?: string;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {children}
    </Link>
  );
}

const WhatYouFindHere = () => {
  return (
    <section className="space-y-14">
      <div className="rounded-xl border border-border bg-secondary px-5 py-6 text-base leading-relaxed not-italic">
        <p className="text-[#676767]">
          {homeBanner.lead}{" "}
          <span className="font-semibold text-[#1a1a1a]">
            {homeBanner.emphasis}
          </span>
        </p>
      </div>

      <div className="space-y-6">
        <p className={sectionHeadingClass}>{homeFindHere.heading}</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {homeFindHere.items.map((item) => (
            <li key={item.title}>
              <FindLink
                item={item}
                className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-white px-5 py-5 transition-colors hover:border-[#1a1a1a]"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-[#999]">
                  {item.num}
                </span>
                <span className="font-semibold text-[#1a1a1a]">
                  {item.title}
                </span>
                <span className="flex-1 text-sm leading-relaxed text-[#676767]">
                  {item.description}
                </span>
                <span className="flex items-center gap-1.5 pt-1 text-sm font-medium text-[#1a1a1a] group-hover:text-pink-500">
                  {item.cta}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </FindLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className={sectionHeadingClass}>{homeRecentGuides.heading}</p>
          <Link
            href={homeRecentGuides.all.href}
            className="shrink-0 text-sm font-medium text-[#676767] underline underline-offset-2 hover:text-pink-500"
          >
            {homeRecentGuides.all.label}
          </Link>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {homeRecentGuides.items.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="group flex items-center justify-between gap-4 py-4"
              >
                <span className="font-medium text-[#1a1a1a] group-hover:text-pink-500">
                  {guide.title}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#999] group-hover:text-pink-500">
                  Read
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 rounded-xl border border-border bg-secondary px-5 py-6">
        <p className={sectionHeadingClass}>{homeConsult.heading}</p>
        <p className="text-sm leading-relaxed md:text-base">{homeConsult.body}</p>
        <a
          href={`mailto:${homeConsult.email}`}
          className="inline-flex rounded-3xl bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {homeConsult.cta}
        </a>
      </div>
    </section>
  );
};

export default WhatYouFindHere;
