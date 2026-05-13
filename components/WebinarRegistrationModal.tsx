"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";

import {
  WEBINAR_BANNER_ALT,
  WEBINAR_BANNER_SRC,
  WEBINAR_WAITLIST_URL,
  WEBINAR_WHATSAPP_GROUP_URL,
} from "@/lib/webinar";
import { trackEvent } from "@/lib/analytics";

const DELAY_MS = 5000;

export default function WebinarRegistrationModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (open) trackEvent("webinar_modal_open");
  }, [open]);

  const close = (reason: string) => {
    if (open) trackEvent("webinar_modal_close", { reason });
    setOpen(false);
  };

  const goRegister = () => {
    trackEvent("webinar_modal_waitlist_click");
    window.open(WEBINAR_WAITLIST_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const goWhatsAppGroup = () => {
    trackEvent("webinar_modal_whatsapp_click");
    window.open(WEBINAR_WHATSAPP_GROUP_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onClick={() => close("backdrop")}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="webinar-prompt-title"
            initial={{ scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 12 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-white p-4 shadow-2xl md:max-w-xl md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-[#1a1a1a] transition-colors hover:bg-secondary"
              onClick={() => close("close_button")}
            >
              <X className="h-5 w-5" weight="bold" />
            </button>

            <h2
              id="webinar-prompt-title"
              className="pr-12 text-lg font-semibold leading-snug text-[#1a1a1a] md:text-xl"
            >
              Have you registered for the webinar?
            </h2>
            <p className="mt-2 text-sm text-[#676767]">
              Opportunities in the Age of AI — free session from Attention
              Factory (attn.).
            </p>

            <a
              href={WEBINAR_WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block overflow-hidden rounded-xl border border-border shadow-sm transition-opacity hover:opacity-95"
              onClick={() => {
                trackEvent("webinar_modal_banner_click");
                close("banner_waitlist");
              }}
            >
              <Image
                src={WEBINAR_BANNER_SRC}
                alt={WEBINAR_BANNER_ALT}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 576px"
                unoptimized
                priority
              />
            </a>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                className="flex-1 rounded-full bg-[#1a1a1a] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
                onClick={goRegister}
              >
                Register on waitlist
              </button>
              <button
                type="button"
                className="flex-1 rounded-full border border-border bg-secondary px-4 py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-border"
                onClick={goWhatsAppGroup}
              >
                Yes, I&apos;m already registered
              </button>
            </div>
            <button
              type="button"
              className="mt-2 w-full text-center text-xs text-[#999] underline-offset-2 hover:underline"
              onClick={() => close("not_now")}
            >
              Not now
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
