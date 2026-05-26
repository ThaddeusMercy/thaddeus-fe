"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import NameInfiniteScroll from "@/components/Animations/NameInfiniteScroll";
import GeneralLayout from "@/components/layout/GeneralLayout";
import ResourcesRedirect from "@/components/ResourcesRedirect";

function HomeInner() {
  const searchParams = useSearchParams();
  const rawTab = searchParams.get("tab") || "home";
  const tab = rawTab === "pay" ? "home" : rawTab;
  if (tab === "resources") {
    return <ResourcesRedirect />;
  }

  const topPad =
    tab === "home"
      ? "pt-6 md:pt-10 2xl:pt-12"
      : "pt-16 md:pt-28 2xl:pt-32";

  return (
    <div className="relative">
      <NameInfiniteScroll />

      <div className={topPad}>
        <GeneralLayout />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeInner />
    </Suspense>
  );
}
