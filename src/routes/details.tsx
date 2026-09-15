import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  ArrowRight,
  Clock,
  Milestone,
} from "lucide-react";

export const Route = createFileRoute("/details")({
  head: () => ({
    meta: [
      { title: "How It Works — Timeline, Eligibility & Rules — BioBridge 2026" },
    ],
  }),
  component: DetailsPage,
});

const TIMELINE = [
  {
    phase: "Registrations Open",
    detail: "Team registration and one-pager submissions go live.",
    status: "done",
  },
  {
    phase: "Submission Deadline",
    detail: "31 October 2026, 6:30 PM IST — no extensions.",
    status: "active",
  },
  {
    phase: "Shortlist Announced",
    detail: "Selected teams notified by email within two weeks.",
    status: "upcoming",
  },
  {
    phase: "Mentoring Weekends",
    detail: "Four guided weekend sessions with domain mentors.",
    status: "upcoming",
  },
  {
    phase: "Grand Finale",
    detail: "Final pitch, prototype demo and jury evaluation on campus.",
    status: "upcoming",
  },
];

const SESSIONS = [
  {
    num: "01",
    title: "Problem Deep Dive",
    detail:
      "Statement scoping with mentors, literature and market grounding, mentor allocation for each team.",
  },
  {
    num: "02",
    title: "Design Review",
    detail:
      "Experiment or prototype design review, feasibility assessment, and resource planning session.",
  },
  {
    num: "03",
    title: "Build Sprint Checkpoint",
    detail:
      "Progress review, data quality assessment, biosafety and ethics checks with domain experts.",
  },
  {
    num: "04",
    title: "Pitch Rehearsal",
    detail:
      "Storyline refinement, validation evidence review, and pitch coaching before the finale.",
  },
];

const ELIGIBILITY = [
  "Open to students currently enrolled in any recognised Indian institution",
  "Teams of 2 to 4 members — members may come from different departments",
  "Cross-institution teams are allowed; team lead's college is the primary institution",
  "One team member may belong to only one team",
  "Undergraduate, postgraduate and research scholars are all welcome",
  "Relevant backgrounds: biotech, life sciences, engineering, CS, medicine",
];

const RULES = [
  "One problem statement per team, selected from the 36 published statements",
  "Wildcard entries (Open Bio Track) must include a self-proposed problem title",
  "The one-pager must be a PDF under 5 MB, named TeamName_StatementCode.pdf",
  "Use the official BioBridge one-pager template — extra pages are ignored",
  "Work must be original; prior art and third-party datasets must be credited",
  "Attendance at all four mentoring weekends is mandatory for shortlisted teams",
];

function DetailsPage() {
  return (
    <div className="bg-[#F8FCF8] min-h-screen">
      {/* ── Page header ── */}
      <div className="bg-white border-b border-[#CDEDD8]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#18A957]">
            Hackathon Details
          </p>
          <h1 className="mt-2 font-display text-[38px] font-bold text-[#0E2F25] sm:text-[44px]">
            How BioBridge Runs
          </h1>
          <p className="mt-3 max-w-2xl text-[15.5px] text-[#4A7A60]">
            A guided build programme — not a one-night sprint. Pick a real problem, develop with
            mentors across four weekends, and present validated progress at the finale.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* ── Timeline ── */}
          <section className="rounded-2xl border border-[#CDEDD8] bg-white p-7 shadow-[0_2px_8px_-4px_rgba(24,169,87,0.08)]">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF7EF] text-[#18A957]">
                <CalendarCheck className="h-4.5 w-4.5" />
              </span>
              <h2 className="text-[18px] font-bold text-[#0E2F25]">Timeline</h2>
            </div>
            <ol className="relative space-y-0 border-l border-[#CDEDD8] pl-5">
              {TIMELINE.map((t, i) => (
                <li key={t.phase} className="relative pb-6 last:pb-0">
                  {/* Dot */}
                  <span
                    className={`absolute -left-[11px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      t.status === "done"
                        ? "border-[#18A957] bg-[#18A957]"
                        : t.status === "active"
                          ? "border-[#18A957] bg-white"
                          : "border-[#CDEDD8] bg-white"
                    }`}
                  >
                    {t.status === "done" ? (
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    ) : (
                      <span
                        className={`h-2 w-2 rounded-full ${
                          t.status === "active" ? "bg-[#18A957]" : "bg-[#CDEDD8]"
                        }`}
                      />
                    )}
                  </span>

                  <div className="ml-5">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-[#0E2F25]">{t.phase}</p>
                      {t.status === "active" && (
                        <span className="rounded-full bg-[#EAF7EF] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-[#18A957]">
                          Now open
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[13px] text-[#4A7A60]">{t.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Mandatory sessions ── */}
          <section className="rounded-2xl border border-[#CDEDD8] bg-white p-7 shadow-[0_2px_8px_-4px_rgba(24,169,87,0.08)]">
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF7EF] text-[#18A957]">
                <ShieldCheck className="h-4.5 w-4.5" />
              </span>
              <h2 className="text-[18px] font-bold text-[#0E2F25]">Mandatory Weekend Sessions</h2>
            </div>
            <p className="mb-5 text-[13px] text-[#4A7A60]">
              All four sessions are compulsory. Missing more than one session withdraws the team
              from the finale.
            </p>
            <ul className="space-y-3">
              {SESSIONS.map((s) => (
                <li
                  key={s.num}
                  className="flex gap-4 rounded-xl border border-[#CDEDD8] bg-[#F8FCF8] p-4"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF7EF] font-display text-[13px] font-bold text-[#18A957]">
                    {s.num}
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-[#0E2F25]">
                      Weekend {s.num} — {s.title}
                    </p>
                    <p className="mt-1 text-[13px] text-[#4A7A60]">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Eligibility ── */}
          <section className="rounded-2xl border border-[#CDEDD8] bg-white p-7 shadow-[0_2px_8px_-4px_rgba(24,169,87,0.08)]">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF7EF] text-[#18A957]">
                <CheckCircle2 className="h-4.5 w-4.5" />
              </span>
              <h2 className="text-[18px] font-bold text-[#0E2F25]">Eligibility</h2>
            </div>
            <ul className="space-y-3">
              {ELIGIBILITY.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF7EF]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#18A957]" />
                  </span>
                  <span className="text-[#0E2F25]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Submission rules ── */}
          <section className="rounded-2xl border border-[#CDEDD8] bg-white p-7 shadow-[0_2px_8px_-4px_rgba(24,169,87,0.08)]">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF7EF] text-[#18A957]">
                <FileCheck2 className="h-4.5 w-4.5" />
              </span>
              <h2 className="text-[18px] font-bold text-[#0E2F25]">Submission Rules</h2>
            </div>
            <ul className="space-y-3">
              {RULES.map((r, i) => (
                <li key={r} className="flex items-start gap-3 text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F0F8F3] font-mono text-[10px] font-bold text-[#18A957]">
                    {i + 1}
                  </span>
                  <span className="text-[#0E2F25]">{r}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ── Ready CTA ── */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-[#CDEDD8] bg-[#0E2F25] p-7">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Milestone className="h-4 w-4 text-[#22C46A]" />
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-[#22C46A]">
                Ready to register?
              </p>
            </div>
            <h3 className="text-xl font-bold text-white">Start your BioBridge application</h3>
            <p className="mt-1 text-sm text-white/60">
              Takes about 10 minutes. Applications close 31 October 2026.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
              className="inline-flex items-center gap-2 rounded-xl bg-[#18A957] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#22C46A] hover:shadow-[0_4px_20px_-4px_rgba(24,169,87,0.5)]"
            >
              Start application <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/problems"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Browse challenges
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
