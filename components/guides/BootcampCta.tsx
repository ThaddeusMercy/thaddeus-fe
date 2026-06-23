import Image from "next/image";
import Link from "next/link";

import { BOOTCAMP_CLOSE_DATE, BOOTCAMP_URL } from "@/lib/bootcamp";
import { WEBINAR_BANNER_ALT, WEBINAR_BANNER_SRC } from "@/lib/webinar";

type BootcampCtaProps = {
  variant?: "footer" | "section";
  className?: string;
};

function BootcampCtaCopy({
  align = "left",
}: {
  align?: "left" | "center";
}) {
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-2xl space-y-3 leading-relaxed text-[#52493f] ${textAlign}`}>
      <p className="text-base md:text-lg">
        The AI Accelerator Bootcamp is a guided cohort where you learn to use
        AI to turn your ideas into systems, and actual income and growth.
      </p>
      <p className="text-base md:text-lg">
        You&apos;ll build the automations and systems that handle the repetitive
        work for you, so your time goes to what grows your business and life
        instead of what drains it.
      </p>
      <p className="text-base font-medium text-[#1a1a1a] md:text-lg">
        Registration closes {BOOTCAMP_CLOSE_DATE}, save your spot.
      </p>
    </div>
  );
}

export default function BootcampCta({
  variant = "footer",
  className = "",
}: BootcampCtaProps) {
  if (variant === "section") {
    return (
      <section
        className={`border-b border-border bg-secondary/70 ${className}`.trim()}
      >
        <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-12">
          <h2 className="text-xl font-bold leading-tight text-[#1a1a1a] md:text-2xl">
            Learn to actually build with AI
          </h2>
          <div className="mt-3">
            <BootcampCtaCopy />
          </div>
          <Link
            href={BOOTCAMP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
          >
            See what&apos;s inside
          </Link>
        </div>
      </section>
    );
  }

  return (
    <aside
      className={`border-t border-border bg-white ${className}`.trim()}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-10 md:px-6 md:py-12">
        <BootcampCtaCopy align="center" />
        <Link
          href={BOOTCAMP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
        >
          See what&apos;s inside
        </Link>
        <Link
          href={BOOTCAMP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-opacity hover:opacity-95"
        >
          <Image
            src={WEBINAR_BANNER_SRC}
            alt={WEBINAR_BANNER_ALT}
            width={1024}
            height={768}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
            unoptimized
          />
        </Link>
      </div>
    </aside>
  );
}
