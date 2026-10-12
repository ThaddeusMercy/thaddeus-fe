import { ArrowRight } from "@phosphor-icons/react";

import { homeLaunch } from "@/content/home-site";

/** Launch strip at the top of the home tab (AI University, Oct 2026). */
const LaunchBanner = () => {
  return (
    <a
      href={homeLaunch.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl bg-[#1a1a1a] px-4 py-3 text-sm text-white transition-opacity hover:opacity-90"
    >
      <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]">
        {homeLaunch.label}
      </span>
      <span className="min-w-0 flex-1 font-medium">
        {homeLaunch.text}{" "}
        <span className="text-[#bdbdbd] group-hover:text-white">
          {homeLaunch.cta}
        </span>
      </span>
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
    </a>
  );
};

export default LaunchBanner;
