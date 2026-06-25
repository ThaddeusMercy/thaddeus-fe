"use client";

import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";

import { WHATSAPP_CHANNEL_URL } from "@/lib/webinar";

export default function GuideWhatsAppCta() {
  return (
    <aside className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between md:px-6 md:py-12">
        <div className="max-w-xl">
          <p className="text-base font-semibold text-[#1a1a1a] md:text-lg">
            Join the community
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[#676767] md:text-base">
            Follow the Learn AI with Mercy &amp; Koha channel on WhatsApp for the
            daily drops.
          </p>
        </div>
        <Link
          href={WHATSAPP_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
        >
          <WhatsappLogo className="h-5 w-5" weight="fill" aria-hidden />
          Join on WhatsApp
        </Link>
      </div>
    </aside>
  );
}
