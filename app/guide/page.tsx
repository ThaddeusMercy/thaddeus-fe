import { Suspense } from "react";

import GuideHub from "@/components/guides/GuideHub";

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <Suspense>
        <GuideHub />
      </Suspense>
    </div>
  );
}
