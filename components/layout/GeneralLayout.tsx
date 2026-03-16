"use client";

// Library import
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Components
import HomeComponent from "../pages-components/Home";
import Talks from "../pages-components/Talks";
import Blog from "../pages-components/Blog";
import Pay from "../pages-components/Pay";

import { Tabs } from "@/helpers";

const GeneralLayout = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "home";

  const tabs: Tabs[] = [
    {
      id: 0,
      label: `${tab === "talks" ? "home" : "talks"}`,
      path: `${tab === "talks" ? "/" : "/?tab=talks"} `,
    },
    {
      id: 1,
      label: `${tab === "blog" ? "Home" : "blog"}`,
      path: `${tab === "blog" ? "/" : "/?tab=blog"} `,
    },
    {
      id: 2,
      label: `${tab === "pay" ? "home" : "pay"}`,
      path: `${tab === "pay" ? "/" : "/?tab=pay"} `,
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
      {/* Nav */}
      <nav
        className="py-2 px-5 bg-secondary border border-border rounded-xl
       flex items-center justify-center gap-5 max-w-[250px] mx-auto fixed bottom-20 md:bottom-17 left-1/2 -translate-x-1/2 z-50 shadow-sm"
      >
        {tabs.map((tab, index) => (
          <Link key={index} href={tab.path} className="font-medium lowercase">
            {tab.label}
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

      {/* Main */}
      <div className="w-full px-5 md:px-0 md:max-w-[600px] mx-auto space-y-14 relative pb-40">
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
            {tab === "pay" && <Pay />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="md:flex justify-center gap-5 bottom-5 w-full px-5 md:px-0 text-[#D8D8D8] z-50 hidden">
        <p>
          Designed by <span className="font-bold text-[#676767]"><Link href="https://koha.wtf" target="_blank">Koha</Link></span>,
          Built by me
        </p>

        <p>{timeHTML}</p>

        <p>© Mercy Thaddeus</p>
      </footer>
    </div>
  );
};

export default GeneralLayout;
