import type { Metadata } from "next";

/** Not linked from the public site; direct URL only. Do not index. */
export const metadata: Metadata = {
  title: "Rate kit",
  robots: { index: false, follow: false },
};

export default function KitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
