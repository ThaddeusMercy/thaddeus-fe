"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";

import BootcampCta from "@/components/guides/BootcampCta";
import ToolkitView from "@/components/guides/ToolkitView";
import {
  GUIDE_ENTRIES,
  getGuideFilters,
  guideMatchesFilter,
  guideMatchesSearch,
  type GuideEntry,
} from "@/components/guides/guides-data";

type SortOrder = "newest" | "oldest";

function filterToParam(id: string): string | null {
  if (id === "all") return null;
  if (id === "toolkit") return "toolkit";
  if (id.startsWith("tool:")) return id.slice(5);
  if (id.startsWith("topic:")) return id.slice(6);
  return id;
}

function paramToFilter(
  param: string | null,
  validIds: Set<string>,
): string {
  if (!param || param === "all") return "all";
  if (param === "toolkit" && validIds.has("toolkit")) return "toolkit";
  const asTool = `tool:${param}`;
  if (validIds.has(asTool)) return asTool;
  const asTopic = `topic:${param}`;
  if (validIds.has(asTopic)) return asTopic;
  return "all";
}

function FilterPills({
  options,
  value,
  onChange,
}: {
  options: readonly { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "bg-[#1a1a1a] text-white"
                : "bg-secondary text-[#676767] hover:bg-border"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function GuideCard({ entry }: { entry: GuideEntry }) {
  return (
    <Link
      href={`/guide/${entry.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 transition-shadow hover:shadow-md md:p-6"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999]">
        {entry.category}
      </span>
      <h2 className="mt-2 text-lg font-semibold leading-snug text-[#1a1a1a] group-hover:underline md:text-xl">
        {entry.title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#676767]">
        {entry.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a]">
        Read guide
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Link>
  );
}

export default function GuidesIndex() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filters = useMemo(() => getGuideFilters(), []);
  const validFilterIds = useMemo(
    () => new Set(filters.map((f) => f.id)),
    [filters],
  );

  const [filter, setFilter] = useState(() =>
    paramToFilter(searchParams.get("filter"), validFilterIds),
  );
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOrder>("newest");

  const setFilterAndUrl = useCallback(
    (id: string) => {
      setFilter(id);
      const params = new URLSearchParams(searchParams.toString());
      params.delete("sub");
      const param = filterToParam(id);
      if (param) params.set("filter", param);
      else params.delete("filter");
      const qs = params.toString();
      router.replace(qs ? `/guide?${qs}` : "/guide", { scroll: false });
    },
    [router, searchParams],
  );

  useEffect(() => {
    setFilter(paramToFilter(searchParams.get("filter"), validFilterIds));
  }, [searchParams, validFilterIds]);

  const isToolkit = filter === "toolkit";

  const filtered = useMemo(() => {
    if (isToolkit) return [];
    let list = GUIDE_ENTRIES.filter(
      (e) => guideMatchesFilter(e, filter) && guideMatchesSearch(e, search),
    );
    list = [...list].sort((a, b) => {
      const da = new Date(a.publishedAt).getTime();
      const db = new Date(b.publishedAt).getTime();
      return sort === "newest" ? db - da : da - db;
    });
    return list;
  }, [filter, search, sort, isToolkit]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      {!isToolkit ? (
        <header className="space-y-4 border-b border-border pb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D8D8D8]">
            Free guides
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#1a1a1a] md:text-4xl">
            All my free guides & resources :)
          </h1>
          <p className="text-sm font-medium uppercase tracking-wide text-[#D8D8D8]">
            Mercy Thaddeus <span className="text-border">{"//"}</span> Attention
            Factory
          </p>
          <p className="max-w-2xl leading-relaxed">
            Setup playbooks, prompts, workflows, and career notes, the same
            material I use persoanlly and in corporate trainings, free to read
            and steal.
          </p>
        </header>
      ) : null}

      {!isToolkit ? <BootcampCta variant="section" /> : null}

      <div className="space-y-6 rounded-2xl border border-border bg-secondary/60 p-5 md:p-6">
        <FilterPills
          options={filters}
          value={filter}
          onChange={setFilterAndUrl}
        />

        {!isToolkit ? (
          <>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="relative min-w-0 flex-1">
                <MagnifyingGlass
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#999]"
                  aria-hidden
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Try a tool or keyword. E.g. claude, prompts, career…"
                  className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-sm outline-none transition-shadow focus:border-[#1a1a1a] focus:shadow-sm"
                  aria-label="Search guides"
                />
              </div>
              <label className="flex shrink-0 flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#999]">
                Sort by
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOrder)}
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium normal-case text-[#1a1a1a] outline-none focus:border-[#1a1a1a]"
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                </select>
              </label>
            </div>

            <p className="text-sm text-[#999]">
              Showing {filtered.length}{" "}
              {filtered.length === 1 ? "resource" : "resources"}
            </p>
          </>
        ) : null}
      </div>

      {isToolkit ? (
        <ToolkitView />
      ) : filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-white px-4 py-12 text-center text-sm text-[#999]">
          No guides match those filters yet. Try resetting one of them.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry) => (
            <li key={entry.slug}>
              <GuideCard entry={entry} />
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
