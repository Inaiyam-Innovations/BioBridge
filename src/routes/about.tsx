import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Dna,
  FlaskConical,
  Globe,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
  Leaf,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BioBridge 2026" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Lightbulb,
    title: "Student-Led Innovation",
    desc: "Every idea starts in a classroom. BioBridge gives student innovators the platform, mentors, and resources to take their concepts further.",
  },
  {
    icon: FlaskConical,
    title: "Real-World Problems",
    desc: "Our 36 curated challenges are drawn from genuine gaps in therapeutics, diagnostics, agriculture, nutrition, and environmental science.",
  },
  {
    icon: Users,
    title: "Cross-Disciplinary Teams",
    desc: "The best biotech solutions combine biology, engineering, data science, and design. We actively encourage diverse team compositions.",
  },
  {
    icon: Globe,
    title: "National Reach",
    desc: "Open to college students across India — from premier institutes to tier-2 and tier-3 colleges. Geography should never limit great ideas.",
  },
  {
    icon: GraduationCap,
    title: "Structured Mentorship",
    desc: "Four guided weekends with domain experts provide structured feedback at every stage — not just a one-time pitch event.",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    desc: "BioBridge is about solutions that endure. We prioritise feasibility, biosafety, and real-world deployability alongside innovation.",
  },
];

const ORGANIZERS = [
  {
    name: "MARABANU",
    role: "Lead Organizer",
    desc: "A student innovation and biotech ecosystem that connects campus talent with real-world opportunities across India.",
    accent: "#18A957",
  },
  {
    name: "StartupTN",
    role: "Government Partner",
    desc: "The Government of Tamil Nadu's flagship initiative to build a world-class startup ecosystem, supporting student entrepreneurs and innovators.",
    accent: "#38BFC4",
  },
  {
    name: "KSR College of Technology",
    role: "Host Institution",
    desc: "A premier engineering and technology institution in Namakkal, Tamil Nadu, providing infrastructure, faculty mentors and hosting the finale.",
    accent: "#163D50",
  },
];

const TIMELINE_ITEMS = [
  { year: "2024", event: "Concept & founding — BioBridge initiated by MARABANU student network." },
  { year: "2025", event: "Pilot cohort — first edition with 12 teams across 4 tracks." },
  { year: "2026", event: "National scale — 36 challenges, 7 tracks, open to all Indian colleges." },
  {
    year: "Future",
    event: "Global ambitions — international participation and industry-linked problem statements.",
  },
];

function AboutPage() {
  return (
    <div className="bg-[#F8FCF8] min-h-screen">
      {/* ── Page header ── */}
      <div className="bg-white border-b border-[#CDEDD8]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#18A957]">
                About BioBridge
              </p>
              <h1 className="mt-3 font-display text-[42px] font-extrabold leading-tight text-[#0E2F25] sm:text-[52px]">
                Where Student Ideas <span className="bio-gradient-text">Meet Biology.</span>
              </h1>
              <p className="mt-5 text-[16px] leading-relaxed text-[#4A7A60]">
                BioBridge is a national collegiate biotechnology hackathon that brings together
                student innovators, domain experts, and industry-relevant challenges — building a
                pipeline from campus ideas to practical biotech solutions.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#18A957] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(24,169,87,0.45)] transition-all hover:bg-[#087A43]"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/problems"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#CDEDD8] bg-white px-6 py-3.5 text-sm font-semibold text-[#0E2F25] hover:border-[#18A957] hover:text-[#18A957]"
                >
                  Explore Challenges
                </Link>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, value: "36", label: "Problem Statements" },
                { icon: Dna, value: "7", label: "Innovation Tracks" },
                { icon: Users, value: "2–4", label: "Members per Team" },
                { icon: FlaskConical, value: "4", label: "Mentoring Weekends" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-[#CDEDD8] bg-[#F8FCF8] p-6 text-center"
                >
                  <s.icon className="h-6 w-6 text-[#18A957]" />
                  <div>
                    <p className="font-display text-3xl font-extrabold text-[#0E2F25]">{s.value}</p>
                    <p className="mt-0.5 text-xs text-[#4A7A60]">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 space-y-16">
        {/* ── Mission ── */}
        <section className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#18A957]">
              Our Mission
            </p>
            <h2 className="mt-2 font-display text-[34px] font-bold text-[#0E2F25] sm:text-[40px]">
              Turning Campus Research Into Real Impact
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[#4A7A60]">
              India trains some of the world's most talented science and engineering students, yet
              the gap between academic knowledge and practical application remains wide. BioBridge
              exists to close that gap.
            </p>
            <p className="mt-3 text-[15.5px] leading-relaxed text-[#4A7A60]">
              By pairing students with real, industry-informed problems and structured mentoring
              across four weekends, we don't just run a competition — we run a development programme
              designed to produce ideas worth pursuing.
            </p>
          </div>
          <div className="rounded-2xl border border-[#CDEDD8] bg-[#EAF7EF] p-8">
            <blockquote className="text-[18px] font-semibold leading-relaxed text-[#0E2F25]">
              "The best ideas don't need the best labs. They need the right problem, the right team,
              and the right guidance."
            </blockquote>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-[#18A957]">
              — BioBridge 2026
            </p>
          </div>
        </section>

        {/* ── Values ── */}
        <section>
          <div className="mb-10 text-center">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#18A957]">
              What We Stand For
            </p>
            <h2 className="mt-2 font-display text-[34px] font-bold text-[#0E2F25] sm:text-[40px]">
              Our Values
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[#CDEDD8] bg-white p-6 shadow-[0_2px_8px_-4px_rgba(24,169,87,0.08)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7EF]">
                  <v.icon className="h-5 w-5 text-[#18A957]" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#0E2F25]">{v.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#4A7A60]">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Organizers ── */}
        <section>
          <div className="mb-10 text-center">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#18A957]">
              Organised by
            </p>
            <h2 className="mt-2 font-display text-[34px] font-bold text-[#0E2F25] sm:text-[40px]">
              The BioBridge Partners
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {ORGANIZERS.map((o) => (
              <div
                key={o.name}
                className="overflow-hidden rounded-2xl border border-[#CDEDD8] bg-white shadow-[0_2px_8px_-4px_rgba(24,169,87,0.08)]"
              >
                <div className="h-1.5 w-full" style={{ background: o.accent }} aria-hidden />
                <div className="p-6">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#4A7A60]">
                    {o.role}
                  </p>
                  <h3 className="mt-1.5 text-[17px] font-bold text-[#0E2F25]">{o.name}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-[#4A7A60]">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Story timeline ── */}
        <section>
          <div className="mb-10 text-center">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#18A957]">
              Our Story
            </p>
            <h2 className="mt-2 font-display text-[34px] font-bold text-[#0E2F25] sm:text-[40px]">
              The BioBridge Journey
            </h2>
          </div>
          <div className="mx-auto max-w-2xl">
            <ol className="relative border-l border-[#CDEDD8] pl-7 space-y-8">
              {TIMELINE_ITEMS.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#18A957] bg-white">
                    <span className="h-2 w-2 rounded-full bg-[#18A957]" />
                  </span>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#18A957]">
                    {t.year}
                  </p>
                  <p className="mt-1 text-sm text-[#0E2F25]">{t.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-2xl border border-[#CDEDD8] bg-[#0E2F25] p-10 text-center">
          <h2 className="font-display text-[32px] font-bold text-white sm:text-[38px]">
            Be Part of BioBridge 2026
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-[15px] text-white/65">
            Applications close 31 October 2026. Form your team, pick a challenge, and submit your
            one-page proposal to join India's premier student biotech hackathon.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
              className="inline-flex items-center gap-2 rounded-xl bg-[#18A957] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(24,169,87,0.5)] hover:bg-[#22C46A]"
            >
              Apply for BioBridge <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/problems"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20"
            >
              Browse Challenges
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
