"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Article,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

import {
  ACCENT,
  brandPartners,
  contact,
  hero,
  press,
  selectedWork,
  siteFooter,
  speaking,
  whatIDo,
  writing,
  type WritingBlock,
} from "@/content/portfolio-site";

type Pillar = { title: string; points: string[] };

/** Supports current `pillars` + legacy `blocks` during HMR / partial reloads. */
function normalizePillars(): Pillar[] {
  const w = whatIDo as unknown as {
    pillars?: { title: string; points?: string[] }[];
    blocks?: { title: string; body?: string; points?: string[] }[];
  };
  if (Array.isArray(w.pillars) && w.pillars.length > 0) {
    return w.pillars.map((p) => ({
      title: p.title,
      points: Array.isArray(p.points) ? p.points : [],
    }));
  }
  if (Array.isArray(w.blocks)) {
    return w.blocks.map((b) => ({
      title: b.title,
      points: Array.isArray(b.points)
        ? b.points
        : typeof b.body === "string"
          ? [b.body]
          : [],
    }));
  }
  return [];
}

function writingPoints(
  block: WritingBlock | { title: string; body?: string; points?: string[] },
): string[] {
  if (Array.isArray(block.points) && block.points.length > 0) {
    return [...block.points];
  }
  const legacy = block as { body?: string };
  if (typeof legacy.body === "string" && legacy.body.trim()) {
    return [legacy.body];
  }
  return [];
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-b border-border py-14 md:py-20 last:border-b-0 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1370px] px-5 md:px-10">
        {children}
      </div>
    </section>
  );
}

function BulletList({
  items,
  dense = false,
  className = "",
}: {
  items?: readonly string[] | null;
  dense?: boolean;
  className?: string;
}) {
  const list = items ?? [];
  return (
    <ul className={`${dense ? "space-y-2" : "space-y-3"} ${className}`}>
      {list.map((text) => (
        <li
          key={text}
          className={`flex gap-3 ${dense ? "text-sm leading-relaxed" : "text-[15px] leading-relaxed md:text-base"}`}
        >
          <span
            className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: ACCENT }}
            aria-hidden
          />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function ProjectLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (href.startsWith("http")) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function LandingHome() {
  const pillars = normalizePillars();
  const heroBullets = hero.bullets ?? [];
  const heroImg = hero.image ?? {
    src: "/display_image.svg",
    alt: "Mercy Thaddeus",
  };
  const contactBullets = contact.bullets ?? [];

  return (
    <div className="text-[#676767]">
      {/* Hero */}
      <section
        id="top"
        className="scroll-mt-28 border-b border-border bg-gradient-to-b from-secondary/80 via-white to-white pb-20 pt-8 md:pb-24 md:pt-12"
      >
        <div className="mx-auto grid w-full max-w-[1370px] items-center gap-10 px-5 max-md:pb-4 md:gap-16 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,400px)]">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#999]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-2xl text-3xl font-medium leading-[1.08] tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {hero.headline.split(". ").map((line, i, arr) => (
                <span key={line} className="block">
                  {line}
                  {i < arr.length - 1 ? "." : ""}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#555] md:text-lg lg:text-xl">
              {hero.lead}
            </p>
            <BulletList items={heroBullets} className="mt-8 max-w-xl" />
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={hero.ctaPrimary.href}
                className="inline-flex items-center justify-center rounded-full bg-[#ff5b1f] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(255,91,31,0.55)] transition-transform hover:-translate-y-0.5 hover:opacity-95"
              >
                {hero.ctaPrimary.label}
              </a>
              <Link
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-[#1a1a1a]/15 bg-white px-7 py-3.5 text-sm font-semibold text-[#1a1a1a] shadow-sm transition-colors hover:border-[#ff5b1f]/40 hover:text-[#ff5b1f]"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:order-2 lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -bottom-6 -left-6 right-8 top-8 -z-10 rounded-[2rem] bg-[#ff5b1f]/[0.12] blur-3xl"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-secondary shadow-[0_28px_80px_-32px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.04]">
              <Image
                src={heroImg.src}
                alt={heroImg.alt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <Section id="about">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold not-italic text-[#1a1a1a] md:text-4xl">
            {whatIDo.heading}
          </h2>
          <p className="max-w-md text-sm font-medium leading-relaxed text-[#888] md:text-right md:text-base">
            {whatIDo.intro}
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md md:p-7"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                  aria-hidden
                />
                <h3 className="text-lg font-semibold tracking-tight text-[#1a1a1a]">
                  {pillar.title}
                </h3>
              </div>
              <BulletList
                items={pillar.points}
                dense
                className="mt-5 text-[#676767]"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section id="work" className="bg-secondary/35">
        <h2 className="text-3xl font-bold not-italic text-[#1a1a1a] md:text-4xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#777] md:text-base">
          Product, platforms, and experiments — each with a clear role and a sharp
          problem statement.
        </p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {(selectedWork ?? []).map((p) => (
            <li
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1a1a1a]/12 hover:shadow-lg md:p-7"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#1a1a1a]">
                {p.title}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#ff5b1f]">
                {p.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#666]">
                {p.tagline}
              </p>
              <BulletList
                items={p.highlights ?? []}
                dense
                className="mt-4 flex-1 text-[#555]"
              />
              <ProjectLink
                href={p.href}
                className="mt-6 inline-flex text-sm font-semibold text-[#1a1a1a] underline decoration-[#ff5b1f] decoration-2 underline-offset-[6px] transition-colors group-hover:text-[#ff5b1f]"
              >
                {p.href.startsWith("http") ? "Open link →" : "Details →"}
              </ProjectLink>
            </li>
          ))}
        </ul>
      </Section>

      {/* Speaking */}
      <Section id="speaking">
        <h2 className="text-3xl font-bold not-italic text-[#1a1a1a] md:text-4xl">
          {speaking.heading}
        </h2>
        <p className="mt-4 max-w-xl text-sm text-[#777] md:text-base">
          {speaking.intro}
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
              {speaking.trainingsHeading}
            </h3>
            <BulletList
              items={speaking.trainings ?? []}
              dense
              className="mt-6"
            />
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
              {speaking.judgingHeading}
            </h3>
            <BulletList
              items={speaking.judging ?? []}
              dense
              className="mt-6"
            />
          </div>
        </div>
      </Section>

      {/* Brands */}
      <Section id="brands">
        <h2 className="text-3xl font-bold not-italic text-[#1a1a1a] md:text-4xl">
          {brandPartners.heading}
        </h2>
        <p className="mt-4 max-w-xl text-sm text-[#777] md:text-base">
          {brandPartners.intro}
        </p>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {(brandPartners.brands ?? []).map((name) => (
            <span
              key={name}
              className="rounded-full border border-border bg-white px-4 py-2.5 text-sm font-medium text-[#1a1a1a] transition-colors hover:border-[#ff5b1f] hover:text-[#ff5b1f]"
            >
              {name}
            </span>
          ))}
        </div>
      </Section>

      {/* Press */}
      <Section id="press" className="bg-secondary/25">
        <h2 className="text-3xl font-bold not-italic text-[#1a1a1a] md:text-4xl">
          {press.heading}
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {(press.items ?? []).map((item) => (
            <li
              key={`${item.outlet}-${item.line}`}
              className="rounded-xl border border-border bg-white px-5 py-4"
            >
              {item.year ? (
                <p className="text-xs font-bold tabular-nums text-[#ff5b1f]">
                  {item.year}
                </p>
              ) : null}
              <p className="mt-1 font-semibold text-[#1a1a1a]">{item.outlet}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#666]">
                {item.line}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Writing */}
      <Section id="writing">
        <h2 className="text-3xl font-bold not-italic text-[#1a1a1a] md:text-4xl">
          {writing.heading}
        </h2>
        <p className="mt-4 max-w-xl text-sm text-[#777] md:text-base">
          {writing.intro}
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {(writing.blocks ?? []).map((block) => (
            <div
              key={block.title}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 md:p-7"
            >
              <h3 className="text-base font-semibold text-[#1a1a1a]">
                {block.title}
              </h3>
              <BulletList
                items={writingPoints(block)}
                dense
                className="mt-4 flex-1 text-[#666]"
              />
              <div className="mt-6 space-y-2 border-t border-border pt-5">
                {block.href.startsWith("/") ? (
                  <Link
                    href={block.href}
                    className="inline-flex text-sm font-semibold text-[#ff5b1f] hover:underline"
                  >
                    {block.linkLabel}
                  </Link>
                ) : (
                  <ExternalLink
                    href={block.href}
                    className="inline-flex text-sm font-semibold text-[#ff5b1f] hover:underline"
                  >
                    {block.linkLabel}
                  </ExternalLink>
                )}
                {block.extraLinks?.map((l) => (
                  <ExternalLink
                    key={l.href}
                    href={l.href}
                    className="block text-sm font-medium text-[#1a1a1a] underline underline-offset-2 hover:text-[#ff5b1f]"
                  >
                    {l.label} →
                  </ExternalLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold not-italic text-[#1a1a1a] md:text-4xl">
              {contact.heading}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#666] md:text-base">
              {contact.lead}
            </p>
            <BulletList items={contactBullets} className="mt-6 max-w-lg" />
          </div>
          <div className="rounded-2xl border border-border bg-secondary/50 p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#999]">
              Direct lines
            </p>
            <ul className="mt-5 space-y-5">
              {(contact.lines ?? []).map((line) => (
                <li key={line.label}>
                  <p className="text-xs font-semibold text-[#1a1a1a]">
                    {line.label}
                  </p>
                  <a
                    href={line.href}
                    className="mt-1 inline-flex break-all text-sm font-semibold text-[#ff5b1f] hover:underline"
                    {...(line.href.startsWith("mailto")
                      ? {}
                      : {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                  >
                    {line.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-border pt-10">
          <ExternalLink
            href="https://www.instagram.com/mercythaddeus_"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-[#1a1a1a] transition-all hover:border-[#ff5b1f] hover:text-[#ff5b1f]"
            aria-label="Instagram"
          >
            <InstagramLogo className="h-5 w-5" weight="regular" />
          </ExternalLink>
          <ExternalLink
            href="https://x.com/global_techgirl"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-[#1a1a1a] transition-all hover:border-[#ff5b1f] hover:text-[#ff5b1f]"
            aria-label="X"
          >
            <XLogo className="h-5 w-5" weight="regular" />
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/mercythaddeus"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-[#1a1a1a] transition-all hover:border-[#ff5b1f] hover:text-[#ff5b1f]"
            aria-label="LinkedIn"
          >
            <LinkedinLogo className="h-5 w-5" weight="regular" />
          </ExternalLink>
          <ExternalLink
            href="https://attentionfactory.io?ref=mercythaddeus"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-[#1a1a1a] transition-all hover:border-[#ff5b1f] hover:text-[#ff5b1f]"
            aria-label="Writing"
          >
            <Article className="h-5 w-5" weight="regular" />
          </ExternalLink>
          <ExternalLink
            href="https://attentionfactory.io?ref=mercythaddeus"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-[#1a1a1a] transition-all hover:border-[#ff5b1f] hover:text-[#ff5b1f]"
            aria-label="Attention Factory"
          >
            <Globe className="h-5 w-5" weight="regular" />
          </ExternalLink>
        </div>
      </Section>

      <footer className="border-t border-border bg-white py-12 md:py-14">
        <div className="mx-auto flex w-full max-w-[1370px] flex-col gap-8 px-5 md:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <p className="max-w-xs text-sm font-medium leading-relaxed text-[#1a1a1a]">
              {siteFooter.location}
            </p>
            <nav
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#777]"
              aria-label="Footer"
            >
              {(siteFooter.nav ?? []).map((item) =>
                item.href.startsWith("http") ? (
                  <ExternalLink
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-[#ff5b1f]"
                  >
                    {item.label}
                  </ExternalLink>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-[#ff5b1f]"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
          <p className="text-xs text-[#aaa]">{siteFooter.legal}</p>
        </div>
      </footer>
    </div>
  );
}
