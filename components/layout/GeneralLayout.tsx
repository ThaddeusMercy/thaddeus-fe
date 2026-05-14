"use client";

// Library import
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Components
import HomeComponent from "../pages-components/Home";
import Talks from "../pages-components/Talks";
import Blog from "../pages-components/Blog";
import Resources from "../pages-components/Resources";
import WebinarRegistrationModal from "../WebinarRegistrationModal";

import { Tabs } from "@/helpers";
import { trackEvent, trackSpaPageView } from "@/lib/analytics";

const GeneralLayout = () => {
  const searchParams = useSearchParams();
  const rawTab = searchParams.get("tab") || "home";
  const tab = rawTab === "pay" ? "home" : rawTab;
  const searchKey = searchParams.toString();
  const skipSpaPageView = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    trackEvent("portfolio_shell_loaded", {
      page_path: `${window.location.pathname}${window.location.search}`,
    });
  }, []);

  useEffect(() => {
    trackEvent("portfolio_tab_view", {
      tab,
      query: searchKey || "default",
    });
    if (skipSpaPageView.current) {
      skipSpaPageView.current = false;
      return;
    }
    trackSpaPageView();
  }, [tab, searchKey]);

  const tabs: Tabs[] = [
    {
      id: 0,
      label: `${tab === "talks" ? "home" : "talks"}`,
      path: `${tab === "talks" ? "/" : "/?tab=talks"}`,
    },
    {
      id: 1,
      label: `${tab === "blog" ? "home" : "blog"}`,
      path: `${tab === "blog" ? "/" : "/?tab=blog"}`,
    },
    {
      id: 2,
      label: `${tab === "resources" ? "home" : "resources"}`,
      path: `${tab === "resources" ? "/" : "/?tab=resources"}`,
    },
  ];

  function generateLocalTimeHTML() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
      hour12: false, // Use 24-hour format
    });
    const formattedTime = formatter.format(now);

    return `${formattedTime}`;
  }

  const timeHTML = generateLocalTimeHTML();

  return (
    <div>
      {tab !== "resources" && (
        <nav
          className="py-2 px-4 sm:px-5 bg-secondary border border-border rounded-xl
       flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-[min(100vw-2rem,380px)] mx-auto fixed bottom-20 md:bottom-17 left-1/2 -translate-x-1/2 z-50 shadow-sm"
        >
          {tabs.map((t, index) => (
            <Link
              key={index}
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

          <div className="h-4 w-[2px] bg-border"></div>

          <Image
            src={`/play_icon.svg`}
            width={15}
            height={15}
            alt="Play icon"
            className="cursor-pointer"
          />
        </nav>
      )}

      {/* Main */}
      <div
        className={`w-full px-5 md:px-0 md:max-w-[600px] mx-auto space-y-14 relative ${
          tab === "resources" ? "pb-24" : "pb-40"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {tab === "home" && <HomeComponent />}
            {tab === "talks" && <Talks />}
            {tab === "blog" && <Blog />}
            {tab === "resources" && <Resources />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      {/* <footer className="md:flex justify-center gap-5 bottom-5 w-full px-5 md:px-0 text-[#D8D8D8] z-50 hidden">
        <p>
          Designed by <span className="font-bold text-[#676767]"><Link href="https://koha.wtf" target="_blank">Koha</Link></span>,
          Built by me
        </p>

        <p>{timeHTML}</p>

        <p>© Mercy Thaddeus</p>
      </footer> */}

      <WebinarRegistrationModal />
    </div>
  );
};

export default GeneralLayout;
