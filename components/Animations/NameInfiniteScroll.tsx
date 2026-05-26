"use client";

import { useSearchParams } from "next/navigation";

/** Large tab title for sub-pages; home uses the in-page hero instead. */
const NameInfiniteScroll = () => {
  const searchParams = useSearchParams();
  const rawTab = searchParams.get("tab") || "home";
  const tab = rawTab === "pay" ? "home" : rawTab;

  if (tab === "home") return null;

  const title = tab === "blog" ? "Blogs" : "Talks";

  return (
    <div className="fixed -top-7 md:-top-15 lg:-top-18 2xl:-top-24 z-50 w-full overflow-hidden">
      <h1 className="-ml-5 font-bold text-secondary text-7xl md:text-9xl lg:text-[165px] 2xl:text-[220px]">
        {title}
      </h1>
    </div>
  );
};

export default NameInfiniteScroll;
