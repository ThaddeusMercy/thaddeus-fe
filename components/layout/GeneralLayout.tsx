"use client";

// Library import
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Components
import HomeComponent from "../pages-components/Home";
import Talks from "../pages-components/Talks";
import Blog from "../pages-components/Blog";
import ProjectsPage from "../pages-components/ProjectsPage";

import ShellBottomNav, {
  type ShellNavTab,
} from "@/components/layout/ShellBottomNav";
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

  const shellTab: ShellNavTab =
    tab === "talks"
      ? "talks"
      : tab === "blog"
        ? "blog"
        : tab === "projects"
          ? "projects"
          : "home";

  return (
    <div>
      <ShellBottomNav activeTab={shellTab} />

      <div
        className="relative mx-auto w-full max-w-[600px] space-y-14 px-5 pb-40 md:px-0"
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
            {tab === "projects" && <ProjectsPage />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer — uncomment and wire local time when needed */}
      {/* <footer className="md:flex justify-center gap-5 bottom-5 w-full px-5 md:px-0 text-[#D8D8D8] z-50 hidden">
        <p>
          Designed by <span className="font-bold text-[#676767]"><Link href="https://koha.wtf" target="_blank">Koha</Link></span>,
          Built by me
        </p>
        <p>© Mercy Thaddeus</p>
      </footer> */}
    </div>
  );
};

export default GeneralLayout;
