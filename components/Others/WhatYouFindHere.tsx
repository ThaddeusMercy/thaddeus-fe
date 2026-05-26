import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

import {
  homeBanner,
  homeConsult,
  homeFindHere,
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
        <ul className="space-y-6">
          {homeFindHere.items.map((item) => (
            <li key={item.title}>
              <FindLink
                item={item}
                className="group block space-y-1.5 transition-colors"
              >
                <p className="flex items-center gap-2 font-medium text-[#1a1a1a] group-hover:text-pink-500">
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-[#999] group-hover:text-pink-500"
                    aria-hidden
                  />
                  {item.title}
                </p>
                <p className="pl-6 text-sm leading-relaxed text-[#676767]">
                  {item.description}
                </p>
              </FindLink>
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
