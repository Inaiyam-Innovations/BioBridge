import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Apple,
  ArrowRight,
  Dna,
  Laptop,
  Leaf,
  Microscope,
  Recycle,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
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
          "Explore 36 BioBridge 2026 biotech problem statements across seven tracks, including healthcare, bio-AI, agriculture, food, and sustainability.",
      },
    ],
    links: [{ rel: "canonical", href: "https://biobridge.pages.dev/problems" }],
  }),
  component: ProblemsPage,
});

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "precision-biotherapeutics": Dna,
  "diagnostics-devices": Microscope,
  "bioinformatics-bio-ai": Laptop,
  "agri-biotech": Leaf,
  "functional-foods": Apple,
  "environmental-industrial": Recycle,
  "open-bio-track": Sparkles,
};

const TRACK_COLORS: Record<string, string> = {
  "precision-biotherapeutics": "#1599B5",
  "diagnostics-devices": "#20AFC5",
  "bioinformatics-bio-ai": "#0B2A4A",
  "agri-biotech": "#0E7E96",
  "functional-foods": "#48CAE4",
  "environmental-industrial": "#2C5E70",
  "open-bio-track": "#1599B5",
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
    <div className="bg-[#F4FAFB] min-h-screen">
      {/* ── Page header ── */}
      <div className="bg-white border-b border-[#BEE3EA]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1599B5]">
            Problem Statement Explorer
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-[38px] font-bold text-[#0B2A4A] sm:text-[44px]">
                36 Statements. <span className="bio-gradient-text">7 Tracks.</span>
              </h1>
              <p className="mt-2 max-w-2xl text-[15px] text-[#366273]">
                Search by keyword or statement code, filter by track, and apply straight into the
                registration form with your statement preselected.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[#BEE3EA] bg-[#D9F2F6] px-4 py-2.5">
              <SlidersHorizontal className="h-4 w-4 text-[#1599B5]" />
              <span className="font-mono text-[11px] font-semibold text-[#1599B5]">
                {filtered.length} / {problems.length} showing
              </span>
            </div>
          </div>

          {/* ── Search + filter controls ── */}
          <div className="mt-7 space-y-4">
            {/* Search bar */}
            <div className="flex items-center gap-2.5 rounded-xl border border-[#BEE3EA] bg-white px-4 py-3 shadow-[0_1px_4px_rgba(21,153,181,0.06)] focus-within:border-[#1599B5] focus-within:shadow-[0_0_0_3px_rgba(21,153,181,0.15)] transition-all">
              <Search className="h-4 w-4 shrink-0 text-[#366273]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search statements, e.g. diagnostics, BB-AG-02, enzymes…"
                className="w-full bg-transparent text-sm text-[#0B2A4A] outline-none placeholder:text-[#366273]/60"
                aria-label="Search problem statements"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9F2F6] text-[#366273] hover:bg-[#BEE3EA]"
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
                    ? "border-[#1599B5] bg-[#1599B5] text-white shadow-[0_2px_8px_-2px_rgba(21,153,181,0.4)]"
                    : "border-[#BEE3EA] bg-white text-[#366273] hover:border-[#1599B5] hover:text-[#1599B5]",
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
                      ? "border-[#1599B5] bg-[#D9F2F6] text-[#1599B5]"
                      : "border-[#BEE3EA] bg-white text-[#366273] hover:border-[#1599B5] hover:text-[#1599B5]",
                  )}
                >
                  {(() => {
                    const Icon = CATEGORY_ICONS[c.id];
                    return <Icon className="h-3.5 w-3.5" aria-hidden="true" />;
                  })()}
                  {c.name}
                </button>
              ))}
            </div>

            {/* Active filter chip */}
            {hasFilters && (
              <div className="flex flex-wrap items-center gap-2">
                {activeCategory && (
                  <div className="flex basis-full items-start gap-2 rounded-xl border border-[#BEE3EA] bg-white px-3.5 py-3 text-xs text-[#366273]">
                    {(() => {
                      const Icon = CATEGORY_ICONS[activeCategory.id];
                      return (
                        <Icon
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#1599B5]"
                          aria-hidden="true"
                        />
                      );
                    })()}
                    <span>
                      <strong className="font-semibold text-[#0B2A4A]">
                        {activeCategory.name}
                      </strong>
                      <span className="ml-1.5">{activeCategory.blurb}</span>
                    </span>
                    <button
                      onClick={() => setTrack("all")}
                      className="ml-auto shrink-0 text-[#366273] hover:text-[#1599B5]"
                      aria-label="Remove track filter"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
                {query && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BEE3EA] bg-white px-3 py-1 text-xs font-medium text-[#0B2A4A]">
                    "{query}"
                    <button
                      onClick={() => setQuery("")}
                      className="ml-0.5 text-[#366273] hover:text-[#1599B5]"
                      aria-label="Clear search query"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs font-medium text-[#366273] underline hover:text-[#1599B5]"
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
            <p className="mb-6 text-sm text-[#366273]">
              Showing <strong className="text-[#0B2A4A]">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "statement" : "statements"}
              {activeCategory && (
                <>
                  {" "}
                  in <strong className="text-[#0B2A4A]">{activeCategory.name}</strong>
                </>
              )}
            </p>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => {
                const cat = categoryById(p.categoryId);
                const trackColor = TRACK_COLORS[p.categoryId] ?? "#1599B5";
                return (
                  <article
                    key={p.code}
                    className="group flex flex-col rounded-2xl border border-[#BEE3EA] bg-white shadow-[0_2px_8px_-4px_rgba(11,42,74,0.08)] transition-all hover:border-[#1599B5] hover:shadow-[0_8px_28px_-8px_rgba(21,153,181,0.2)] hover:-translate-y-1 overflow-hidden"
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
                        <span className="font-mono text-[11px] font-bold text-[#1599B5]">
                          {p.code}
                        </span>
                        <div className="flex items-center gap-1.5 rounded-full border border-[#BEE3EA] px-2.5 py-1">
                          {(() => {
                            const Icon = CATEGORY_ICONS[p.categoryId] ?? Microscope;
                            return <Icon className="h-3 w-3 text-[#1599B5]" aria-hidden="true" />;
                          })()}
                          <span className="text-[10px] font-semibold leading-tight text-[#366273]">
                            {cat?.name}
                          </span>
                        </div>
                      </div>

                      {/* Category label */}
                      <p className="mt-2 text-[11px] font-medium text-[#366273]">{cat?.name}</p>

                      {/* Title */}
                      <h2 className="mt-2.5 text-[15px] font-bold leading-snug text-[#0B2A4A]">
                        {p.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#366273]">
                        {p.description}
                      </p>

                      {/* Wildcard badge */}
                      {p.wildcard && (
                        <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full border border-[#BEE3EA] bg-[#D9F2F6] px-2.5 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-[#1599B5]">
                          <Sparkles className="h-3 w-3" aria-hidden="true" />
                          Wildcard · Propose your own
                        </span>
                      )}

                      {/* CTA */}
                      <a
                        href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#D9F2F6] px-4 py-2.5 text-[12.5px] font-semibold text-[#1599B5] transition-all group-hover:bg-[#1599B5] group-hover:text-white"
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
          <div className="rounded-2xl border border-[#BEE3EA] bg-white p-12 text-center">
            <Search className="mx-auto h-9 w-9 text-[#1599B5]" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-[#0B2A4A]">No statements match</h3>
            <p className="mt-2 text-sm text-[#366273]">
              Try a different keyword or remove the track filter.
            </p>
            <button
              onClick={clearFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#D9F2F6] px-5 py-2.5 text-sm font-semibold text-[#1599B5] hover:bg-[#1599B5] hover:text-white transition-all"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
