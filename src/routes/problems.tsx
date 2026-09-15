import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, categoryById, problems } from "@/data/problems";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/problems")({
  validateSearch: (search: Record<string, unknown>): { track?: string } =>
    typeof search["track"] === "string" ? { track: search["track"] } : {},
  head: () => ({
    meta: [
      { title: "36 Problem Statements — BioBridge 2026" },
      {
        name: "description",
        content:
          "Browse all 36 BioBridge problem statements across 7 biotech tracks, search by keyword or code, and apply directly.",
      },
    ],
  }),
  component: ProblemsPage,
});

const CATEGORY_ICONS: Record<string, string> = {
  "precision-biotherapeutics": "🧬",
  "diagnostics-devices": "🔬",
  "bioinformatics-bio-ai": "💻",
  "agri-biotech": "🌱",
  "functional-foods": "🥗",
  "environmental-industrial": "♻️",
  "open-bio-track": "✨",
};

const TRACK_COLORS: Record<string, string> = {
  "precision-biotherapeutics": "#18A957",
  "diagnostics-devices": "#38BFC4",
  "bioinformatics-bio-ai": "#163D50",
  "agri-biotech": "#087A43",
  "functional-foods": "#22C46A",
  "environmental-industrial": "#4A7A60",
  "open-bio-track": "#18A957",
};

function ProblemsPage() {
  const { track = "all" } = Route.useSearch();
  const navigate = useNavigate({ from: "/problems" });
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return problems.filter((p) => {
      const inTrack = track === "all" || p.categoryId === track;
      if (!inTrack) return false;
      if (!q) return true;
      const cat = categoryById(p.categoryId)?.name ?? "";
      return `${p.code} ${p.title} ${p.description} ${cat}`.toLowerCase().includes(q);
    });
  }, [query, track]);

  const setTrack = (value: string) => navigate({ search: { track: value } });

  const clearFilters = () => {
    setQuery("");
    setTrack("all");
  };

  const hasFilters = track !== "all" || query.trim().length > 0;
  const activeCategory = track !== "all" ? categoryById(track) : null;

  return (
    <div className="bg-[#F8FCF8] min-h-screen">
      {/* ── Page header ── */}
      <div className="bg-white border-b border-[#CDEDD8]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#18A957]">
            Problem Statement Explorer
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-[38px] font-bold text-[#0E2F25] sm:text-[44px]">
                36 Statements. <span className="bio-gradient-text">7 Tracks.</span>
              </h1>
              <p className="mt-2 max-w-2xl text-[15px] text-[#4A7A60]">
                Search by keyword or statement code, filter by track, and apply straight into the
                registration form with your statement preselected.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[#CDEDD8] bg-[#EAF7EF] px-4 py-2.5">
              <SlidersHorizontal className="h-4 w-4 text-[#18A957]" />
              <span className="font-mono text-[11px] font-semibold text-[#18A957]">
                {filtered.length} / {problems.length} showing
              </span>
            </div>
          </div>

          {/* ── Search + filter controls ── */}
          <div className="mt-7 space-y-4">
            {/* Search bar */}
            <div className="flex items-center gap-2.5 rounded-xl border border-[#CDEDD8] bg-white px-4 py-3 shadow-[0_1px_4px_rgba(24,169,87,0.06)] focus-within:border-[#18A957] focus-within:shadow-[0_0_0_3px_rgba(24,169,87,0.12)] transition-all">
              <Search className="h-4 w-4 shrink-0 text-[#4A7A60]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search statements, e.g. diagnostics, BB-AG-02, enzymes…"
                className="w-full bg-transparent text-sm text-[#0E2F25] outline-none placeholder:text-[#4A7A60]/60"
                aria-label="Search problem statements"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF7EF] text-[#4A7A60] hover:bg-[#CDEDD8]"
                  aria-label="Clear search"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Track filter pills — scrollable on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => setTrack("all")}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-all",
                  track === "all"
                    ? "border-[#18A957] bg-[#18A957] text-white shadow-[0_2px_8px_-2px_rgba(24,169,87,0.4)]"
                    : "border-[#CDEDD8] bg-white text-[#4A7A60] hover:border-[#18A957] hover:text-[#18A957]",
                )}
              >
                All tracks ({problems.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setTrack(c.id)}
                  className={cn(
                    "shrink-0 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-all",
                    track === c.id
                      ? "border-[#18A957] bg-[#EAF7EF] text-[#18A957]"
                      : "border-[#CDEDD8] bg-white text-[#4A7A60] hover:border-[#18A957] hover:text-[#18A957]",
                  )}
                >
                  <span>{CATEGORY_ICONS[c.id]}</span>
                  {c.code}
                </button>
              ))}
            </div>

            {/* Active filter chip */}
            {hasFilters && (
              <div className="flex flex-wrap items-center gap-2">
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CDEDD8] bg-white px-3 py-1 text-xs font-medium text-[#0E2F25]">
                    {CATEGORY_ICONS[activeCategory.id]} {activeCategory.name}
                    <button
                      onClick={() => setTrack("all")}
                      className="ml-0.5 text-[#4A7A60] hover:text-[#18A957]"
                      aria-label="Remove track filter"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {query && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CDEDD8] bg-white px-3 py-1 text-xs font-medium text-[#0E2F25]">
                    "{query}"
                    <button
                      onClick={() => setQuery("")}
                      className="ml-0.5 text-[#4A7A60] hover:text-[#18A957]"
                      aria-label="Clear search query"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs font-medium text-[#4A7A60] underline hover:text-[#18A957]"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Problem cards ── */}
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {filtered.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-[#4A7A60]">
              Showing <strong className="text-[#0E2F25]">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "statement" : "statements"}
              {activeCategory && (
                <>
                  {" "}
                  in <strong className="text-[#0E2F25]">{activeCategory.name}</strong>
                </>
              )}
            </p>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => {
                const cat = categoryById(p.categoryId);
                const trackColor = TRACK_COLORS[p.categoryId] ?? "#18A957";
                return (
                  <article
                    key={p.code}
                    className="group flex flex-col rounded-2xl border border-[#CDEDD8] bg-white shadow-[0_2px_8px_-4px_rgba(24,169,87,0.08)] transition-all hover:border-[#18A957] hover:shadow-[0_8px_28px_-8px_rgba(24,169,87,0.18)] hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Color accent top bar */}
                    <div
                      className="h-1 w-full shrink-0"
                      style={{ background: trackColor }}
                      aria-hidden
                    />

                    <div className="flex flex-1 flex-col p-5">
                      {/* Header row */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] font-bold text-[#18A957]">
                          {p.code}
                        </span>
                        <div className="flex items-center gap-1.5 rounded-full border border-[#CDEDD8] px-2.5 py-1">
                          <span className="text-[11px]" aria-hidden>
                            {CATEGORY_ICONS[p.categoryId] ?? "🔬"}
                          </span>
                          <span className="font-mono text-[9.5px] font-semibold uppercase tracking-wider text-[#4A7A60]">
                            {cat?.code}
                          </span>
                        </div>
                      </div>

                      {/* Category label */}
                      <p className="mt-2 text-[11px] font-medium text-[#4A7A60]">{cat?.name}</p>

                      {/* Title */}
                      <h2 className="mt-2.5 text-[15px] font-bold leading-snug text-[#0E2F25]">
                        {p.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#4A7A60] line-clamp-3">
                        {p.description}
                      </p>

                      {/* Wildcard badge */}
                      {p.wildcard && (
                        <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full border border-[#CDEDD8] bg-[#EAF7EF] px-2.5 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-[#18A957]">
                          ✨ Wildcard · Propose your own
                        </span>
                      )}

                      {/* CTA */}
                      <a
                        href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
                        search={{ statement: p.code }}
                        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#EAF7EF] px-4 py-2.5 text-[12.5px] font-semibold text-[#18A957] transition-all group-hover:bg-[#18A957] group-hover:text-white"
                      >
                        Apply for this statement <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-[#CDEDD8] bg-white p-12 text-center">
            <span className="text-4xl" aria-hidden>
              🔍
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#0E2F25]">No statements match</h3>
            <p className="mt-2 text-sm text-[#4A7A60]">
              Try a different keyword or remove the track filter.
            </p>
            <button
              onClick={clearFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#EAF7EF] px-5 py-2.5 text-sm font-semibold text-[#18A957] hover:bg-[#18A957] hover:text-white transition-all"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
