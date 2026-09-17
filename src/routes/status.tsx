import { createFileRoute } from "@tanstack/react-router";
import { Search, ClipboardList, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Confirmation } from "@/components/apply/apply-form";
import { findApplication, listApplications, type SubmittedApplication } from "@/lib/applications";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Check Application Status — BioBridge 2026" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://biobridge.pages.dev/status" }],
  }),
  component: StatusPage,
});

function StatusPage() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<SubmittedApplication | null>(null);
  const [error, setError] = useState("");
  const [recent, setRecent] = useState<SubmittedApplication[]>([]);
  const [loadedRecent, setLoadedRecent] = useState(false);

  function lookup(value: string) {
    const found = findApplication(value.trim());
    if (found) {
      setResult(found);
      setError("");
    } else {
      setResult(null);
      setError("No application found with that ID on this device.");
    }
  }

  function showRecent() {
    setRecent(listApplications());
    setLoadedRecent(true);
  }

  return (
    <div className="bg-[#F4FAFB] min-h-screen">
      {/* ── Page header ── */}
      <div className="bg-white border-b border-[#BEE3EA]">
        <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-14">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1599B5]">
            Application Status
          </p>
          <h1 className="mt-2 font-display text-[38px] font-bold text-[#0B2A4A] sm:text-[42px]">
            Check Your Application
          </h1>
          <p className="mt-2 text-[15px] text-[#366273]">
            Enter the application ID from your submission slip, for example{" "}
            <code className="rounded bg-[#D9F2F6] px-1.5 py-0.5 font-mono text-sm text-[#1599B5]">
              BB-2026-4F7QA
            </code>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-10 md:px-8">
        {/* ── Lookup form ── */}
        <form
          className="flex flex-wrap gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            lookup(id);
          }}
        >
          <div className="flex min-w-[240px] flex-1 items-center gap-2.5 rounded-xl border border-[#BEE3EA] bg-white px-4 shadow-[0_2px_8px_-4px_rgba(11,42,74,0.08)] focus-within:border-[#1599B5] focus-within:shadow-[0_0_0_3px_rgba(21,153,181,0.15)] transition-all">
            <Search className="h-4 w-4 shrink-0 text-[#366273]" />
            <input
              value={id}
              onChange={(e) => setId(e.target.value.toUpperCase())}
              placeholder="BB-2026-XXXXX"
              className="w-full bg-transparent py-3.5 font-mono text-sm uppercase text-[#0B2A4A] outline-none placeholder:text-[#366273]/50"
              aria-label="Application ID"
              maxLength={14}
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-[#1599B5] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_-4px_rgba(21,153,181,0.45)] transition-all hover:bg-[#0E7E96]"
          >
            Check Status
          </button>
        </form>

        {/* ── Error state ── */}
        {error && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5">
            <span className="mt-0.5 text-red-500">⚠️</span>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* ── Recent applications ── */}
        {!result && (
          <div className="mt-6 rounded-2xl border border-[#BEE3EA] bg-white p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <ClipboardList className="h-4 w-4 text-[#1599B5]" />
              <p className="text-sm font-semibold text-[#0B2A4A]">
                Applications on this device
              </p>
            </div>
            {!loadedRecent ? (
              <button
                type="button"
                onClick={showRecent}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1599B5] hover:underline"
              >
                Show submitted applications <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <ul className="space-y-2.5">
                {recent.length === 0 ? (
                  <li className="rounded-xl border border-[#BEE3EA] bg-[#F4FAFB] p-4 text-center text-sm text-[#366273]">
                    No applications submitted from this device yet.
                  </li>
                ) : (
                  recent.map((a) => (
                    <li key={a.applicationId}>
                      <button
                        type="button"
                        onClick={() => {
                          setId(a.applicationId);
                          lookup(a.applicationId);
                        }}
                        className="flex w-full flex-wrap items-center gap-x-4 gap-y-1.5 rounded-xl border border-[#BEE3EA] bg-[#F4FAFB] px-4 py-3.5 text-left text-sm transition-all hover:border-[#1599B5] hover:bg-[#D9F2F6]"
                      >
                        <span className="font-mono text-xs font-bold text-[#1599B5]">
                          {a.applicationId}
                        </span>
                        <span className="font-semibold text-[#0B2A4A]">{a.teamName}</span>
                        <span className="font-mono text-[11px] text-[#366273]">
                          {a.statementCode}
                        </span>
                        <span className="text-[13px] text-[#366273]">{a.college}</span>
                        <span className="ml-auto font-mono text-[10px] text-[#366273]">
                          {new Date(a.submittedAt).toLocaleDateString("en-IN")}
                        </span>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        )}

        {/* ── Result ── */}
        {result && (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => { setResult(null); setError(""); setId(""); }}
              className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#366273] hover:text-[#1599B5]"
            >
              ← Search again
            </button>
            <Confirmation application={result} />
          </div>
        )}
      </div>
    </div>
  );
}
