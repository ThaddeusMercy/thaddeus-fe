import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Long-form posts and AI resources from Mercy Thaddeus — Attention Factory.",
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-12 px-4 py-12 md:py-16">
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-widest text-[#999]">
          Blog
        </p>
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Writing
        </h1>
        <p className="text-base leading-relaxed">
          Long-form posts live in the{" "}
          <Link
            href="/?tab=blog"
            className="font-medium text-[#1a1a1a] underline underline-offset-2 hover:no-underline"
          >
            blog tab
          </Link>
          . Guides, prompts, and links live on{" "}
          <Link
            href="/guide"
            className="font-medium text-[#1a1a1a] underline underline-offset-2 hover:no-underline"
          >
            /guide
          </Link>
          .
        </p>
      </div>

      <ul className="space-y-4">
        <li>
          <Link
            href="/guide"
            className="group block rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
          >
            <p className="text-xs uppercase tracking-wide text-[#999]">
              Free library
            </p>
            <h2 className="mt-1 text-xl font-semibold text-[#1a1a1a] group-hover:underline">
              Guides · Prompts · Links
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              AI playbooks, the prompt vault, webinar waitlist, and Attention
              Factory — all in one place.
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="/guide?sub=prompts"
            className="group block rounded-2xl border border-border bg-secondary p-6 transition-shadow hover:shadow-md"
          >
            <p className="text-xs uppercase tracking-wide text-[#999]">
              Prompt vault
            </p>
            <h2 className="mt-1 text-xl font-semibold text-[#1a1a1a] group-hover:underline">
              10 image & video prompts
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              One post with all 10 copy-paste prompts, open from the guide hub.
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="/?tab=blog"
            className="group block rounded-2xl border border-dashed border-border p-6 transition-colors hover:bg-secondary"
          >
            <p className="text-xs uppercase tracking-wide text-[#999]">
              Archive
            </p>
            <h2 className="mt-1 text-xl font-semibold text-[#1a1a1a] group-hover:underline">
              Long-form posts
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              DevRel, AI tools, and engineering notes from the blog tab.
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
