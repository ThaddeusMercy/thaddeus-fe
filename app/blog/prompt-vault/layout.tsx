import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Prompt Vault",
  description:
    "10 AI prompts to make your images and videos look good — structured prompts for Nano Banana, GPT Image, Gemini, and Midjourney.",
};

export default function PromptVaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
