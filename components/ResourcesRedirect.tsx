"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { resourcesTabToGuide } from "@/lib/guide-urls";

/** Sends legacy `/?tab=resources` URLs to `/guide`. */
export default function ResourcesRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const target = resourcesTabToGuide("/", searchParams.toString());
    if (target) router.replace(target);
  }, [router, searchParams]);

  return null;
}
