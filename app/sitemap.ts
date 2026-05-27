import { MetadataRoute } from "next";

import { PROMPT_VAULT_COLLECTIONS } from "@/components/blog/prompt-vault-data";
import { GUIDE_ENTRIES } from "@/components/guides/guides-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mercythaddeus.xyz";
  const now = new Date();

  const guidePosts = GUIDE_ENTRIES.map((entry) => ({
    url: `${baseUrl}/guide/${entry.slug}`,
    lastModified: new Date(entry.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/bio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/prompt-vault`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...PROMPT_VAULT_COLLECTIONS.map((collection) => ({
      url: `${baseUrl}/guide?sub=prompts&post=${collection.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...guidePosts,
  ];
}