import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  FlaskConical,
  Leaf,
  Sparkles,
  Users,
  Trophy,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Building2,
  Lightbulb,
  Star,
  Milestone,
  Bot,
  Dna,
  GraduationCap,
  Microscope,
  Activity,
  Atom,
  Clock,
  Phone,
} from "lucide-react";
import { categories, problemsByCategory } from "@/data/problems";
import DecryptedText from "@/components/decrypted-text";
import { BiotechCountdown } from "@/components/biotech-countdown";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIO BRIDGE | National Student Biotech Sprint 2026" },
      {
        name: "description",
        content:
          "Four-week biotech venture-building sprint for student teams across India, ending in an in-person finals day at KSRCT. Organized by MARABANU, StartupTN, and K.S.Rangasamy College of Technology.",
      },
    ],
    links: [{ rel: "canonical", href: "https://biobridge.pages.dev/" }],
  }),
  component: Home,
});

const REGISTER_URL =
  "https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

const QUICK_SPECS = [
  {
    step: "01",
    tag: "GENOME 01",
    codon: "ATG // INITIATE",
    label: "FORMAT",
    val: "Four-week build, then finals",
    sub: "Venture sprint + in-person pitch",
    bioConcept: "Bio-Incubation Sprint",
    bioMeta: "28-Day Protocol",
    icon: Dna,
    color: "#1599B5",
    pillBg: "bg-[#D9F2F6] text-[#0E7E96]",
    glowBorder: "group-hover:border-[#1599B5]",
    iconGlow: "bg-[#1599B5]/10 text-[#1599B5] border-[#1599B5]/25",
  },
  {
    step: "02",
    tag: "CELL-LINE 02",
    codon: "PAN // SCHOLARS",
    label: "OPEN TO",
    val: "Any student in India",
    sub: "UG, PG, & research scholars",
    bioConcept: "All Academic Disciplines",
    bioMeta: "Universal Cohort",
    icon: GraduationCap,
    color: "#0E7E96",
    pillBg: "bg-[#EBF7F9] text-[#0E7E96]",
    glowBorder: "group-hover:border-[#0E7E96]",
    iconGlow: "bg-[#0E7E96]/10 text-[#0E7E96] border-[#0E7E96]/25",
  },
  {
    step: "03",
    tag: "CO-FACTOR 03",
    codon: "SYN // 2-4 NUCLEI",
    label: "TEAM SIZE",
    val: "2 to 4 members",
    sub: "Cross-disciplinary encouraged",
    bioConcept: "Molecular Synergy",
    bioMeta: "Multi-domain Bonding",
    icon: Users,
    color: "#0B2A4A",
    pillBg: "bg-[#E2F1F5] text-[#0B2A4A]",
    glowBorder: "group-hover:border-[#0B2A4A]",
    iconGlow: "bg-[#0B2A4A]/10 text-[#0B2A4A] border-[#0B2A4A]/20",
  },
  {
    step: "04",
    tag: "ENZYME 04",
    codon: "CAT // ZERO BARRIER",
    label: "ENTRY FEE",
    val: "None (100% Free)",
    sub: "No fee at any stage",
    bioConcept: "Zero Activation Energy",
    bioMeta: "100% Subsidized",
    icon: ShieldCheck,
    color: "#059669",
    pillBg: "bg-emerald-100/80 text-emerald-800",
    glowBorder: "group-hover:border-emerald-500",
    iconGlow: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25",
  },
  {
    step: "05",
    tag: "ASSAY 05",
    codon: "CUT // TOP 50",
    label: "SHORTLIST",
    val: "Top 50 teams build",
    sub: "Intimated within 2 days of close",
    bioConcept: "Rolling Genetic Screening",
    bioMeta: "48-Hour Turnaround",
    icon: FlaskConical,
    color: "#2563EB",
    pillBg: "bg-blue-100/80 text-blue-800",
    glowBorder: "group-hover:border-blue-500",
    iconGlow: "bg-blue-500/10 text-blue-700 border-blue-500/25",
  },
  {
    step: "06",
    tag: "SUMMIT 06",
    codon: "APEX // KSRCT",
    label: "FINALS",
    val: "Top 25 present in person",
    sub: "At KSRCT campus",
    bioConcept: "Phenotype Demo Day",
    bioMeta: "In-Person Pitch",
    icon: Trophy,
    color: "#D97706",
    pillBg: "bg-amber-100/80 text-amber-800",
    glowBorder: "group-hover:border-amber-500",
    iconGlow: "bg-amber-500/10 text-amber-700 border-amber-500/25",
  },
];

const STAGES = [
  {
    num: "01",
    phase: "Launch",
    timing: "Day zero",
    summary:
      "The poster goes out with the application link and the event website. The website carries the full set of problem statements across the six biotech categories and the open bio track, so teams choose a statement before they apply rather than after.",
    badge: "36 Problem Statements Live",
  },
  {
    num: "02",
    phase: "Application window",
    timing: "2 weeks",
    summary:
      "Teams of two to four students apply through the form. Along with the form they submit a one-pager on their idea, written to a template we supply — so every application arrives in a comparable shape and can be read quickly. No registration fee at any stage.",
    badge: "Submit One-Pager",
  },
  {
    num: "03",
    phase: "Rolling selection",
    timing: "Within 2 days of close",
    summary:
      "Applications are reviewed as they arrive rather than in one batch at the end, which is what makes the two-day turnaround possible. The top 50 teams are intimated within two days of the window closing.",
    badge: "Top 50 Shortlisted",
  },
  {
    num: "04",
    phase: "Build phase",
    timing: "4 weeks",
    summary:
      "The 50 selected teams build their product. Four online sessions run across the weekends of this period and attendance is mandatory for every member of every team — not just the team lead.",
    badge: "4 Mandatory Weekends",
  },
  {
    num: "05",
    phase: "Submission and second cut",
    timing: "End of build phase",
    summary:
      "Teams submit a pitch deck to a supplied template, along with a product demo or video. From these, the top 25 teams are shortlisted and called to the finals.",
    badge: "Top 25 Finalists",
  },
  {
    num: "06",
    phase: "Finals day",
    timing: "In person at KSRCT",
    summary:
      "The 25 finalist teams present in person. Three prizes are awarded, and the winning teams enter a six-month venture-building engagement with the MARABANU team.",
    badge: "Campus Finals & Venture Sprint",
  },
];

const WEEKEND_SESSIONS = [
  {
    num: "01",
    name: "IPR",
    title: "Intellectual Property Rights",
    desc: "What is protectable in a biotech idea and what is not, and when to act on it.",
    focus: "Patentability scoping, prior art landscape, and IP protection timing.",
  },
  {
    num: "02",
    name: "Building a pitch deck",
    title: "Pitch Deck Architecture",
    desc: "Run against the deck template teams are required to submit.",
    focus: "Translating scientific validation into a commercial narrative that resonates.",
  },
  {
    num: "03",
    name: "Financial modelling",
    title: "Unit Economics & Costing",
    desc: "Costing a bio product and building numbers a panel will accept.",
    focus: "Lab-to-market costing, CAPEX/OPEX modelling, and pricing frameworks.",
  },
  {
    num: "04",
    name: "Research and development",
    title: "Lab to Demonstrable Product",
    desc: "Taking a lab-stage idea to something demonstrable.",
    focus: "Validation protocols, prototype staging, and evidence synthesis.",
  },
];

const PARTNERS = [
  {
    name: "K.S.Rangasamy College of Technology",
    tag: "Host Institution",
    accent: "#0B2A4A",
    logo: "/ksrct-logo.png",
    logoAlt: "K.S. Rangasamy College of Technology",
    logoClass: "h-14 sm:h-16 max-w-[240px]",
    role: "Campus Venue, Biotech Labs & Innovation Cell",
  },
  {
    name: "MARABANU",
    tag: "Organiser & Operator",
    accent: "#1599B5",
    logo: "/marabanu-logo.png",
    logoAlt: "MARABANU",
    logoClass: "h-10 sm:h-12 max-w-[220px]",
    role: "Venture Incubation, Mentorship & Hackathon Operator",
  },
  {
    name: "StartupTN Government of Tamil Nadu",
    subName: "StartupTN (TANSIM)",
    tag: "Ecosystem Partner",
    accent: "#20AFC5",
    logo: "/startuptn-logo.png",
    logoAlt: "StartupTN Government of Tamil Nadu",
    logoClass: "h-14 sm:h-16 max-w-[240px]",
    role: "Tamil Nadu State Startup Agency & Funding Pathways",
  },
];

const SUPPORTED_BY = [
  {
    name: "ACIC KSRCTIF",
    logo: "/acic-logo.png",
    logoClass: "max-h-16 sm:max-h-20",
  },
  {
    name: "KSRCT MSME Business Incubator",
    logo: "/msme-logo.png",
    logoClass: "max-h-14 sm:max-h-16",
  },
  {
    name: "IEEE EMBS",
    logo: "/ieee-embs-logo.jpg",
    logoClass: "max-h-16 sm:max-h-20",
  },
  {
    name: "Neomutants Department of Biotechnology",
    logo: "/neomutants-logo.jpg",
    logoClass: "max-h-16 sm:max-h-20",
  },
];

const TRACK_ICONS = [FlaskConical, Users, Leaf];

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = async () => {
      try {
        if (video.paused) {
          await video.play();
        }
      } catch {
        // Autoplay fallback
      }
    };

    void startVideo();
    video.addEventListener("loadeddata", startVideo);
    video.addEventListener("canplay", startVideo);

    return () => {
      video.removeEventListener("loadeddata", startVideo);
      video.removeEventListener("canplay", startVideo);
    };
  }, []);

  return (
    <div className="bio-home overflow-x-hidden">
      {/* ── 1. HERO SECTION ── */}
      <section className="bio-hero" id="home">
        {/* Background video */}
        <video
          ref={videoRef}
          className="bio-hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/V-poster.jpg"
          aria-hidden="true"
        >
          <source src="/V.mp4" type="video/mp4" />
        </video>

        <div className="bio-hero-video-overlay" aria-hidden="true" />

        <div className="bio-container bio-hero-grid">
          <div className="bio-hero-copy">
            {/* ── TOP ORGANIZERS LOGOS & JOINTLY ORGANIZES ── */}
            <div className="flex flex-col items-center gap-2.5 mb-1.5 sm:mb-2">
              <div className="bio-organizers-pill">
                <a
                  href="#partners"
                  className="bio-organizer-logo-wrap"
                  title="K.S. Rangasamy College of Technology — Host Institution"
                >
                  <img
                    src="/ksrct-logo.png"
                    alt="K.S. Rangasamy College of Technology"
                    className="bio-organizer-logo bio-logo-ksrct"
                  />
                </a>
                <span className="bio-organizer-divider" aria-hidden="true" />
                <a
                  href="#partners"
                  className="bio-organizer-logo-wrap"
                  title="MARABANU — Organiser & Operator"
                >
                  <img
                    src="/marabanu-logo.png"
                    alt="MARABANU"
                    className="bio-organizer-logo bio-logo-marabanu"
                  />
                </a>
                <span className="bio-organizer-divider" aria-hidden="true" />
                <a
                  href="#partners"
                  className="bio-organizer-logo-wrap"
                  title="StartupTN — Ecosystem Partner"
                >
                  <img
                    src="/startuptn-logo.png"
                    alt="StartupTN Government of Tamil Nadu"
                    className="bio-organizer-logo bio-logo-startuptn"
                  />
                </a>
              </div>

              <span className="font-mono text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#1599B5]">
                <DecryptedText
                  text="JOINTLY ORGANIZES"
                  speed={25}
                  maxIterations={10}
                  characters="ATGC01Δμλ"
                  revealDirection="center"
                  className="bio-revealed"
                  encryptedClassName="bio-encrypted"
                  animateOn="view"
                />
              </span>
            </div>

            {/* BioBridge PNG Wordmark */}
            <h1 className="bio-wordmark-title">
              <img
                src="/biobridge-wordmark.png"
                alt="BioBridge — Ideas for a healthier tomorrow"
                className="bio-wordmark"
                draggable={false}
              />
            </h1>

            <p className="bio-hero-description">
              A four-week biotech venture-building sprint for student teams across India, ending in
              an in-person finals day at K.S.Rangasamy College of Technology.
            </p>

            <div className="bio-actions">
              <a
                href={REGISTER_URL}
                className="bio-button bio-button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register now <ArrowRight size={19} />
              </a>

              <Link to="/problems" className="bio-button bio-button-ghost">
                View Challenges (36)
              </Link>
            </div>

            {/* ── BIOTECH REGISTRATION COUNTDOWN (CLOSING SEP 30) ── */}
            <div className="mt-6 w-full max-w-4xl mx-auto">
              <BiotechCountdown />
            </div>

            <div className="bio-highlights">
              <div>
                <Sparkles />
                <span>
                  <strong>4 Weeks</strong>
                  <small>Build sprint</small>
                </span>
              </div>

              <div>
                <Users />
                <span>
                  <strong>Top 50</strong>
                  <small>Build cohort</small>
                </span>
              </div>

              <div>
                <Leaf />
                <span>
                  <strong>Top 25</strong>
                  <small>Finals at KSRCT</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BIOLOGICAL SPECIFICATIONS INFOGRAPHIC ── */}
      <section
        className="relative overflow-hidden border-b border-[#BEE3EA] bg-gradient-to-b from-white via-[#F4FAFB] to-white py-8 sm:py-12"
        id="overview"
      >
        {/* Subtle biological background matrix grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(rgba(21, 153, 181, 0.15) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="bio-container relative z-10">
          {/* Infographic Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BEE3EA] bg-white px-3.5 py-1.5 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1599B5] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1599B5]" />
              </span>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#1599B5]">
                Biological Architecture // Core Blueprint
              </span>
            </div>

            <h2 className="mt-4 font-display text-[28px] font-bold tracking-tight text-[#0B2A4A] sm:text-[38px] md:text-[42px]">
              The BioBridge <span className="bio-gradient-text">Sprint Anatomy</span>
            </h2>

            <p className="mt-2.5 text-[15px] sm:text-[16.5px] leading-relaxed text-[#366273]">
              Six interconnected biological checkpoints engineered to incubate collegiate biotechnology
              from student research into validated market ventures.
            </p>
          </div>

          {/* Biological Infographic Pipeline Ribbon (Desktop) */}
          <div className="mt-10 hidden items-center justify-between rounded-2xl border border-[#BEE3EA]/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm lg:flex">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9F2F6] text-[#1599B5]">
                <Dna className="h-4 w-4" />
              </span>
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0B2A4A]">
                  Synthesis Conduit
                </p>
                <p className="font-mono text-[10px] text-[#366273]">
                  Sequential 6-Phase Incubation Vector
                </p>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-evenly px-6">
              {QUICK_SPECS.map((s, idx) => (
                <div key={s.step} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#BEE3EA] bg-[#F8FCFD] font-mono text-[10px] font-bold text-[#0B2A4A]">
                    {s.step}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#366273]">
                    {s.label}
                  </span>
                  {idx < QUICK_SPECS.length - 1 && (
                    <span className="mx-2 h-0.5 w-8 bg-gradient-to-r from-[#BEE3EA] to-[#1599B5]/40" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5 border border-emerald-200/80">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-emerald-800">
                100% Free
              </span>
            </div>
          </div>

          {/* 6 Biological Infographic Modules */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {QUICK_SPECS.map((spec) => {
              const IconComp = spec.icon;
              return (
                <div
                  key={spec.label}
                  className={cn(
                    "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#BEE3EA] bg-white p-5 shadow-sm transition-all duration-300",
                    "hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-10px_rgba(21,153,181,0.2)]",
                    spec.glowBorder,
                  )}
                >
                  {/* Subtle DNA helix watermark background */}
                  <div
                    className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.14]"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full text-[#1599B5]">
                      <path
                        d="M20,10 C40,30 60,30 80,50 C60,70 40,70 20,90"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M80,10 C60,30 40,30 20,50 C40,70 60,70 80,90"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      <line x1="28" y1="20" x2="72" y2="20" stroke="currentColor" strokeWidth="4" />
                      <line x1="22" y1="50" x2="78" y2="50" stroke="currentColor" strokeWidth="4" />
                      <line x1="28" y1="80" x2="72" y2="80" stroke="currentColor" strokeWidth="4" />
                    </svg>
                  </div>

                  <div>
                    {/* Top Metadata: Step & Codon tag */}
                    <div className="flex items-center justify-between gap-2 border-b border-[#EAF4F7] pb-3">
                      <span className="font-mono text-[10px] font-bold tracking-wider text-[#366273]">
                        {spec.tag}
                      </span>
                      <span className="font-mono text-[9px] font-medium tracking-tight text-[#1599B5]/80 bg-[#D9F2F6]/50 px-1.5 py-0.5 rounded">
                        {spec.codon}
                      </span>
                    </div>

                    {/* Specimen Capsule Icon + Label */}
                    <div className="mt-4 flex items-center gap-3">
                      <div
                        className={cn(
                          "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110",
                          spec.iconGlow,
                        )}
                      >
                        <IconComp className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1599B5]">
                          {spec.label}
                        </span>
                        <p className="font-mono text-[9.5px] font-medium text-[#366273]">
                          {spec.bioMeta}
                        </p>
                      </div>
                    </div>

                    {/* Main Metric / Content */}
                    <h3 className="mt-3.5 font-display text-[17px] font-bold leading-snug text-[#0B2A4A] sm:text-[18px]">
                      {spec.val}
                    </h3>

                    {/* Subtitle description */}
                    <p className="mt-1.5 text-[12.5px] font-medium leading-normal text-[#366273]">
                      {spec.sub}
                    </p>
                  </div>

                  {/* Bottom Biological Concept Chip */}
                  <div className="mt-4 pt-3 border-t border-[#F0F8FA]">
                    <div
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-semibold",
                        spec.pillBg,
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                      {spec.bioConcept}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Infographic Telemetry Footer Strip */}
          <div className="mt-8 rounded-2xl border border-[#BEE3EA] bg-white p-4 shadow-sm sm:p-5">
            <div className="grid grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#BEE3EA]/60 lg:grid-cols-4">
              <div className="pt-2 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#366273] block">
                  Incubation Protocol
                </span>
                <p className="mt-1 font-bold text-[14px] text-[#0B2A4A]">
                  4-Week Build Sprint + Finals
                </p>
                <small className="text-[11.5px] text-[#1599B5] font-medium">
                  Mentored by MARABANU
                </small>
              </div>

              <div className="pt-3 sm:pt-0 sm:px-4">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#366273] block">
                  Activation Cost
                </span>
                <p className="mt-1 font-bold text-[14px] text-emerald-700">
                  ₹0 Registration (100% Free)
                </p>
                <small className="text-[11.5px] text-[#366273] font-medium">
                  Zero fee at all phases
                </small>
              </div>

              <div className="pt-3 sm:pt-0 sm:px-4">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#366273] block">
                  Cohort Selection Assays
                </span>
                <p className="mt-1 font-bold text-[14px] text-[#0B2A4A]">
                  Top 50 ➔ Top 25 Finalists
                </p>
                <small className="text-[11.5px] text-[#1599B5] font-medium">
                  2-Day review turnaround
                </small>
              </div>

              <div className="pt-3 sm:pt-0 sm:px-4">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#366273] block">
                  Host &amp; Apex Venue
                </span>
                <p className="mt-1 font-bold text-[14px] text-[#0B2A4A]">
                  K.S.Rangasamy College of Technology
                </p>
                <small className="text-[11.5px] text-[#366273] font-medium">
                  Namakkal, Tamil Nadu
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HOW THE EVENT RUNS (RUNNING MOTION DNA PIPELINE) ── */}
      <section className="relative overflow-hidden bio-section bio-schedule" id="how-it-works">
        {/* Subtle background matrix */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `radial-gradient(rgba(21, 153, 181, 0.12) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="bio-container relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#BEE3EA] bg-white px-3.5 py-1.5 shadow-sm mb-3">
                <Dna className="h-3.5 w-3.5 text-[#1599B5] animate-spin" style={{ animationDuration: "12s" }} />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#1599B5]">
                  Stage by Stage Pipeline
                </span>
              </div>
              <h2 className="text-[32px] font-bold text-[#0B2A4A] sm:text-[44px]">
                How the event runs, <span className="bio-gradient-text">stage by stage.</span>
              </h2>
              <p className="mt-2.5 text-[16px] sm:text-[17.5px] text-[#366273]">
                From launch and rolling selection through the 4-week build phase to in-person finals.
              </p>
            </div>

            {/* Live Pipeline Flow Status */}
            <div className="flex items-center gap-2.5 rounded-2xl border border-[#BEE3EA] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1599B5] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1599B5]" />
              </span>
              <div className="font-mono text-[11px] font-semibold text-[#0B2A4A]">
                Connected via <span className="text-[#1599B5] font-bold">DNA Synthesis Vector</span>
              </div>
            </div>
          </div>

          {/* DNA Connected Timeline Structure with Running Motion */}
          <div className="relative mt-14">
            {/* Desktop Central Running DNA Double Helix (visible on lg: screens) */}
            <div
              className="pointer-events-none absolute left-1/2 top-4 bottom-4 -translate-x-1/2 hidden lg:flex flex-col items-center justify-between w-20 z-0"
              aria-hidden="true"
            >
              {/* Continuous vertical running double helix SVG */}
              <svg className="h-full w-16 text-[#1599B5]" viewBox="0 0 64 1200" preserveAspectRatio="none" fill="none">
                <defs>
                  <linearGradient id="dnaStrandGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1599B5" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#20AFC5" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="dnaStrandGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0E7E96" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.7" />
                  </linearGradient>
                </defs>

                {/* Animated Running Strand A */}
                <path
                  d="M16,0 C48,100 48,200 16,300 C-16,400 -16,500 16,600 C48,700 48,800 16,900 C-16,1000 -16,1100 16,1200"
                  stroke="url(#dnaStrandGrad1)"
                  strokeWidth="3.5"
                  className="animate-dna-run-down"
                />

                {/* Animated Running Strand B */}
                <path
                  d="M48,0 C16,100 16,200 48,300 C80,400 80,500 48,600 C16,700 16,800 48,900 C80,1000 80,1100 48,1200"
                  stroke="url(#dnaStrandGrad2)"
                  strokeWidth="3.5"
                  className="animate-dna-run-up"
                />

                {/* Periodic base pair rungs */}
                {Array.from({ length: 24 }).map((_, i) => (
                  <g key={i}>
                    <line
                      x1="16"
                      y1={i * 50 + 25}
                      x2="48"
                      y2={i * 50 + 25}
                      stroke="rgba(190, 227, 234, 0.75)"
                      strokeWidth="2"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx="32"
                      cy={i * 50 + 25}
                      r="2"
                      fill="#1599B5"
                      opacity="0.8"
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Mobile Vertical DNA Running Strand (visible on < lg: screens) */}
            <div
              className="pointer-events-none absolute left-5 top-4 bottom-4 w-1 lg:hidden bg-gradient-to-b from-[#1599B5] via-[#20AFC5] to-emerald-500 rounded-full opacity-60"
              aria-hidden="true"
            />

            {/* Stages Stack / Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-16 lg:gap-x-24">
              {STAGES.map((s, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={s.num}
                    className={cn(
                      "relative flex flex-col pl-14 sm:pl-16 lg:pl-0 z-10",
                      isEven ? "lg:col-start-2" : "lg:col-start-1",
                    )}
                  >
                    {/* Mobile DNA node on left vertical spine */}
                    <div
                      className="absolute left-2.5 top-6 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1599B5] text-white shadow-md lg:hidden font-mono text-[11px] font-bold animate-dna-node-pulse"
                    >
                      {s.num}
                    </div>

                    {/* Mobile DNA horizontal bridge */}
                    <div
                      className="absolute left-6 top-9 h-0.5 w-7 bg-gradient-to-r from-[#1599B5] to-[#BEE3EA] lg:hidden"
                      aria-hidden="true"
                    />

                    {/* Desktop DNA locus connector bridge */}
                    <div
                      className={cn(
                        "hidden lg:flex items-center absolute top-10 z-20",
                        isEven
                          ? "-left-12 flex-row"
                          : "-right-12 flex-row-reverse",
                      )}
                      aria-hidden="true"
                    >
                      {/* Nucleotide capsule node in center running spine */}
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#1599B5] text-white shadow-lg font-display text-[13px] font-bold transition-transform hover:scale-125 animate-dna-node-pulse"
                      >
                        {s.num}
                      </div>

                      {/* Horizontal covalent bridge */}
                      <div className="h-0.5 w-12 bg-gradient-to-r from-[#1599B5]/80 via-[#20AFC5] to-[#BEE3EA]" />
                    </div>

                    {/* Stage Card */}
                    <div
                      className={cn(
                        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#BEE3EA] bg-white/95 p-6 sm:p-7 shadow-sm backdrop-blur-md transition-all duration-300",
                        "hover:-translate-y-1 hover:border-[#1599B5] hover:shadow-[0_16px_36px_-10px_rgba(21,153,181,0.22)]",
                      )}
                    >
                      <div>
                        {/* Card Header: Stage Number & Timing */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2F1F5] pb-3.5">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#D9F2F6] font-display text-[15px] font-bold text-[#1599B5] border border-[#BEE3EA]">
                            {s.num}
                          </span>

                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EBF7F9] px-3 py-1 font-mono text-[11px] font-semibold text-[#1599B5]">
                            <Clock className="h-3 w-3" />
                            {s.timing}
                          </span>
                        </div>

                        {/* Stage Phase Title */}
                        <h3 className="mt-4 text-[21px] sm:text-[23px] font-bold text-[#0B2A4A] tracking-tight">
                          {s.phase}
                        </h3>

                        {/* Summary Copy */}
                        <p className="mt-2.5 text-[14.5px] sm:text-[15px] text-[#366273] leading-relaxed">
                          {s.summary}
                        </p>
                      </div>

                      {/* Card Footer: Milestone Badge */}
                      <div className="mt-6 pt-4 border-t border-[#F0F8FA] flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1599B5]">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          {s.badge}
                        </span>

                        <span className="font-mono text-[11px] text-[#366273] font-medium">
                          Phase {s.num} of 06
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. THE FOUR WEEKEND SESSIONS ── */}
      <section className="bio-section !py-10 sm:!py-14 bg-white border-y border-[#BEE3EA]" id="sessions">
        <div className="bio-container">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2F1F5] pb-5">
            <div>
              <p className="bio-section-tag">CURRICULUM</p>
              <h2 className="text-[28px] font-bold text-[#0B2A4A] sm:text-[38px]">
                The Four Weekend Sessions
              </h2>
              <p className="mt-1 text-[15px] sm:text-[16.5px] text-[#366273]">
                Four online sessions run across the weekends of the 4-week build period.
              </p>
            </div>

            <div className="rounded-xl border border-[#FED7AA] bg-[#FFFBEB] px-4 py-2.5 text-right">
              <span className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#B45309]">
                Condition of Staying in Programme
              </span>
              <span className="text-[13px] font-semibold text-[#0B2A4A]">
                Mandatory for every member of every team
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WEEKEND_SESSIONS.map((sess) => (
              <div
                key={sess.num}
                className="rounded-2xl border border-[#D9F2F6] bg-[#FAFDFE] p-5 sm:p-6 transition-all hover:bg-white hover:border-[#1599B5] hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1599B5] font-display text-[13px] font-bold text-white">
                      {sess.num}
                    </span>
                    <span className="font-mono text-[10.5px] text-[#1599B5] font-bold">WEEKEND</span>
                  </div>

                  <h3 className="mt-3 text-[17px] sm:text-[18px] font-bold text-[#0B2A4A]">{sess.name}</h3>
                  <p className="mt-1.5 text-[13.5px] text-[#366273] leading-relaxed">{sess.desc}</p>
                </div>
                <div className="mt-3.5 rounded-xl bg-[#EBF7F9] p-3 text-[12px] text-[#0B2A4A]">
                  <strong>Focus:</strong> {sess.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ULTRA-ATTRACTIVE PRIZES ANNOUNCEMENT SECTION ── */}
      {/* ── 5. ULTRA-PREMIUM PRIZES ANNOUNCEMENT SECTION ── */}
      <section className="relative overflow-hidden bio-section bio-prizes bg-gradient-to-b from-[#F4FAFB] via-white to-[#F4FAFB]" id="prizes">
        {/* Ambient lighting backdrop */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-amber-200/25 via-[#1599B5]/10 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <div className="bio-container relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/80 px-4 py-1.5 font-mono text-[11.5px] font-bold uppercase tracking-wider text-amber-800 shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-600" />
              Official Hackathon Prize Pool
            </span>
            <h2 className="mt-4 font-display text-[36px] font-extrabold text-[#0B2A4A] sm:text-[50px] leading-tight tracking-tight">
              Win Cash Grants.{" "}
              <span className="bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
                Build a Real Venture.
              </span>
            </h2>
            <p className="mt-3 text-[16.5px] sm:text-[18px] text-[#366273] leading-relaxed">
              Three non-dilutive cash prizes awarded on finals day at KSRCT, coupled with six months of
              venture-building partnership alongside MARABANU and StartupTN.
            </p>
          </div>

          {/* Premium Overview Metrics Strip */}
          <div className="mt-10 mx-auto max-w-4xl grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-4 text-center shadow-sm backdrop-blur-sm">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                Total Cash Pool
              </span>
              <p className="mt-1 text-[22px] sm:text-[26px] font-extrabold text-[#0B2A4A]">₹18,000</p>
              <small className="text-[11.5px] text-[#366273] font-medium">Non-dilutive awards</small>
            </div>

            <div className="rounded-2xl border border-[#BEE3EA] bg-white/90 p-4 text-center shadow-sm backdrop-blur-sm">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1599B5] block">
                Venture Sprint
              </span>
              <p className="mt-1 text-[22px] sm:text-[26px] font-extrabold text-[#0B2A4A]">6 Months</p>
              <small className="text-[11.5px] text-[#366273] font-medium">With MARABANU</small>
            </div>

            <div className="rounded-2xl border border-[#BEE3EA] bg-white/90 p-4 text-center shadow-sm backdrop-blur-sm">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1599B5] block">
                Govt Funding
              </span>
              <p className="mt-1 text-[22px] sm:text-[26px] font-extrabold text-[#0B2A4A]">StartupTN</p>
              <small className="text-[11.5px] text-[#366273] font-medium">Direct state routes</small>
            </div>

            <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-4 text-center shadow-sm backdrop-blur-sm">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Registration
              </span>
              <p className="mt-1 text-[22px] sm:text-[26px] font-extrabold text-emerald-800">100% Free</p>
              <small className="text-[11.5px] text-[#366273] font-medium">Zero equity taken</small>
            </div>
          </div>

          {/* 3 Ultra-Premium Podium Cards */}
          <div className="bio-podium-grid mt-12">
            {/* 2nd Prize Card - Silver */}
            <div className="bio-podium-card bio-podium-card-silver order-2 lg:order-1">
              <div>
                <span className="bio-prize-badge bio-badge-silver">
                  <Award className="h-4 w-4 text-[#64748B]" />
                  Second Prize • Runner-Up
                </span>
                <h3 className="text-[20px] font-bold text-[#0B2A4A]">First Runner-Up</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="bio-prize-amount bio-prize-amount-silver">₹5,000</span>
                  <span className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-[#64748B]">Cash Grant</span>
                </div>
                <p className="mt-2 text-[14.5px] font-medium text-[#366273]">
                  Non-dilutive cash grant awarded live on finals day at KSRCT.
                </p>

                <ul className="mt-6 space-y-3 text-[14px] text-[#0B2A4A]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>Runner-up trophy &amp; official citations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>MARABANU ecosystem mentorship access</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>Direct access to StartupTN jury networks</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>University partner recognition</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-[#CBD5E1] text-[12px] font-bold uppercase tracking-wider text-[#475569]">
                Runner-Up Cohort Recognition
              </div>
            </div>

            {/* 1st Prize Gold Card - The Champion (Centerpiece) */}
            <div className="bio-podium-card bio-podium-card-gold order-1 lg:order-2 relative lg:-translate-y-3">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-lg">
                ★ Grand Champion ★
              </div>

              <div>
                <span className="bio-prize-badge bio-badge-gold">
                  <Trophy className="h-4 w-4 text-[#D97706]" />
                  First Prize • Champion
                </span>
                <h3 className="text-[24px] font-extrabold text-[#0B2A4A]">Champion Team</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="bio-prize-amount bio-prize-amount-gold">₹10,000</span>
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#B45309]">Cash Grant</span>
                </div>
                <p className="mt-2 text-[15px] font-medium text-[#366273]">
                  Highest tournament honors awarded live on finals day at KSRCT.
                </p>

                <ul className="mt-6 space-y-3 text-[14.5px] text-[#0B2A4A]">
                  <li className="flex items-center gap-2.5 font-bold text-[#0B2A4A]">
                    <Star className="h-5 w-5 text-[#F59E0B] shrink-0 fill-[#F59E0B]" />
                    <span><strong>6 Months Venture Building</strong> alongside MARABANU</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                    <span>Direct pathway to <strong className="text-[#0B2A4A]">StartupTN state funding grants</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>First place champion trophy &amp; official citations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>Dedicated biotech mentor &amp; clinical advisor</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>KSRCT advanced biotechnology laboratory trial access</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-[#FCD34D] text-[12.5px] font-extrabold uppercase tracking-wider text-[#B45309] flex items-center justify-between">
                <span>Full Venture Incubation</span>
                <span className="text-[11px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                  KSRCT + MARABANU
                </span>
              </div>
            </div>

            {/* 3rd Prize Card - Bronze */}
            <div className="bio-podium-card bio-podium-card-bronze order-3">
              <div>
                <span className="bio-prize-badge bio-badge-bronze">
                  <Award className="h-4 w-4 text-[#D97706]" />
                  Third Prize • Second Runner-Up
                </span>
                <h3 className="text-[20px] font-bold text-[#0B2A4A]">Second Runner-Up</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="bio-prize-amount bio-prize-amount-bronze">₹3,000</span>
                  <span className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-[#9A3412]">Cash Grant</span>
                </div>
                <p className="mt-2 text-[14.5px] font-medium text-[#366273]">
                  Non-dilutive cash grant awarded live on finals day at KSRCT.
                </p>

                <ul className="mt-6 space-y-3 text-[14px] text-[#0B2A4A]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>Second runner-up trophy &amp; official citations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>Venture mentorship &amp; project review</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>Partner &amp; university recognition</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>Biotech network access</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-[#FDBA74] text-[12px] font-bold uppercase tracking-wider text-[#9A3412]">
                Finalist Cohort Recognition
              </div>
            </div>
          </div>

          {/* Grand Venture Acceleration Highlight */}
          <div className="bio-venture-grand-card mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#1599B5]/30 border border-[#38BDF8]/40 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Incubation & Scale
                </span>
                <h3 className="mt-4 font-display text-[26px] sm:text-[34px] font-extrabold text-white leading-tight">
                  Six Months of Venture Building alongside MARABANU
                </h3>
                <p className="mt-3.5 text-[16px] sm:text-[17.5px] text-[#F0F9FF] leading-relaxed">
                  Beyond the cash, the substantive prize is <strong className="text-[#38BDF8] font-bold">six months of venture building
                  alongside the MARABANU team</strong> — the winning teams are taken forward as
                  real-world ventures rather than sent home with a cheque.
                </p>
                <small className="mt-4 block text-[13px] text-[#BAE6FD]">
                  * Terms of that engagement are discussed directly with the selected teams and are not
                  published in the event material.
                </small>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bio-venture-feature-card p-5">
                  <div className="flex items-center gap-2.5">
                    <Lightbulb className="h-5 w-5 text-[#38BDF8] shrink-0" />
                    <strong className="text-[15.5px] font-bold text-white">Lab to Market</strong>
                  </div>
                  <p className="mt-1 text-[13px] text-[#D6F1FA] leading-snug">
                    Packaging academic research into viable, demonstrable biotech products.
                  </p>
                </div>

                <div className="bio-venture-feature-card p-5">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="h-5 w-5 text-[#38BDF8] shrink-0" />
                    <strong className="text-[15.5px] font-bold text-white">State Funding Routes</strong>
                  </div>
                  <p className="mt-1 text-[13px] text-[#D6F1FA] leading-snug">
                    Direct pathways toward StartupTN state grants and venture seed support.
                  </p>
                </div>

                <div className="bio-venture-feature-card p-5">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-[#38BDF8] shrink-0" />
                    <strong className="text-[15.5px] font-bold text-white">IP & Costing Guidance</strong>
                  </div>
                  <p className="mt-1 text-[13px] text-[#D6F1FA] leading-snug">
                    Patent attorneys and financial modelers to construct defensible moats.
                  </p>
                </div>

                <div className="bio-venture-feature-card p-5">
                  <div className="flex items-center gap-2.5">
                    <FlaskConical className="h-5 w-5 text-[#38BDF8] shrink-0" />
                    <strong className="text-[15.5px] font-bold text-white">Campus Lab Access</strong>
                  </div>
                  <p className="mt-1 text-[13px] text-[#D6F1FA] leading-snug">
                    Continued access to KSRCT biotechnology labs and equipment for trials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHO WE ARE TRYING TO ATTRACT & ZERO FEE ── */}
      <section className="bio-section bg-white border-b border-[#BEE3EA]" id="ethos">
        <div className="bio-container bio-narrow">
          <p className="bio-section-tag">APPLICANT PROFILE</p>
          <h2 className="text-[32px] font-bold text-[#0B2A4A] sm:text-[44px]">
            Built for Builders, <span>Not Just Pitchers.</span>
          </h2>
          <div className="mt-5 space-y-4 text-[16px] sm:text-[17px] text-[#366273] leading-relaxed">
            <p>
              <strong>The priority applicant:</strong> The student team already working on a
              problem in this space — a project that has been running in a lab, a final-year
              build, or an idea a team has been circling for months.
            </p>
            <p>
              Four weeks is enough time to sharpen and package existing work; it is short for
              starting from zero. The problem statements give those teams a frame to apply through,
              and give genuinely new teams somewhere to start.
            </p>
            <div className="rounded-2xl border border-[#D9F2F6] bg-[#F4FAFB] p-6 text-[15px] text-[#0B2A4A]">
              <strong className="text-[#1599B5]">Why zero entry fee is deliberate:</strong>
              <p className="mt-1.5">
                Dropping the registration fee is deliberate. It removes the main reason a serious team
                from a smaller college self-selects out, and it widens the funnel at the top — which
                matters when only 50 of the applications carry through to the build phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CHALLENGES & TRACKS PREVIEW (LINKING TO THE ONLY SEPARATE PAGE: /problems) ── */}
      <section className="bio-section bio-tracks" id="tracks">
        <div className="bio-container">
          <p className="bio-section-tag">HACKATHON TRACKS</p>
          <div className="bio-section-heading">
            <div>
              <h2 className="text-[32px] sm:text-[46px]">
                Choose your <span>challenge.</span>
              </h2>
              <p className="mt-2 text-[15.5px] sm:text-[17px] text-[#366273]">
                36 curated problem statements across 7 domain tracks. Pick before you apply.
              </p>
            </div>
            <Link to="/problems" className="bio-text-link font-bold text-[#1599B5]">
              View All 36 Challenges <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bio-track-grid">
            {categories.slice(0, 3).map((category, index) => {
              const Icon = TRACK_ICONS[index] ?? FlaskConical;
              return (
                <Link
                  key={category.id}
                  to="/problems"
                  search={{ track: category.id }}
                  className="bio-track-card"
                >
                  <span className="bio-track-number">0{index + 1}</span>
                  <Icon />
                  <h3>{category.name}</h3>
                  <p>{category.blurb}</p>
                  <small>
                    {problemsByCategory(category.id).length} problem statements{" "}
                    <ArrowRight size={13} />
                  </small>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#BEE3EA] bg-white p-6 shadow-sm">
            <div>
              <strong className="block text-[15px] text-[#0B2A4A]">
                Explore All 7 Innovation Tracks
              </strong>
              <p className="text-[13px] text-[#366273]">
                Precision Biotherapeutics, Diagnostics, Bioinformatics & Bio-AI, Agri-Biotech,
                Functional Foods, Environmental Biotech, and Open Bio.
              </p>
            </div>
            <Link
              to="/problems"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1599B5] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0E7E96]"
            >
              Open Challenges Directory <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. ORGANIZED BY & SUPPORTED BY ── */}
      <section className="bio-section bg-[#F4FAFB] border-b border-[#BEE3EA]" id="partners">
        <div className="bio-container">
          <div className="text-center max-w-3xl mx-auto">
            <p className="bio-section-tag">CONSORTIUM &amp; ECOSYSTEM</p>
            <h2 className="text-[32px] font-bold text-[#0B2A4A] sm:text-[46px]">
              Organized By
            </h2>
            <p className="mt-2 text-[16px] sm:text-[17.5px] text-[#366273]">
              Organised and operated collaboratively to take campus innovators from prototype to market.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="group rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#1599B5] hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#EAF4F7]">
                    <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#1599B5] bg-[#D9F2F6]/60 px-2.5 py-1 rounded-md border border-[#BEE3EA]">
                      {p.tag}
                    </span>
                  </div>

                  {/* Dedicated Large Logo Stage */}
                  <div className="mb-5 flex h-28 sm:h-32 items-center justify-center rounded-xl bg-gradient-to-b from-[#F8FCFD] to-white border border-[#E1F1F4] p-5 transition-colors group-hover:bg-[#F2FAFC]">
                    <img
                      src={p.logo}
                      alt={p.logoAlt}
                      className={cn(
                        "object-contain w-auto transition-transform duration-300 group-hover:scale-105",
                        p.logoClass
                      )}
                    />
                  </div>

                  <h3 className="text-[20px] font-bold text-[#0B2A4A] leading-snug">{p.name}</h3>
                  {"subName" in p && p.subName ? (
                    <p className="font-mono text-[12px] font-semibold text-[#1599B5] mt-1">{p.subName}</p>
                  ) : null}
                  <p className="mt-2.5 text-[14px] font-medium text-[#366273] leading-relaxed">{p.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Organizers Helpline Contact */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-2xl border border-[#BEE3EA] bg-white/90 px-6 py-3.5 shadow-sm max-w-xl mx-auto">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1599B5]">
              Organizers Contact:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="tel:+919751664966"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0B2A4A] transition-colors hover:text-[#1599B5]"
              >
                <Phone className="h-3.5 w-3.5 text-[#1599B5]" />
                +91 9751664966
              </a>
              <span className="text-[#BEE3EA]" aria-hidden="true">·</span>
              <a
                href="tel:+919489243775"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0B2A4A] transition-colors hover:text-[#1599B5]"
              >
                <Phone className="h-3.5 w-3.5 text-[#1599B5]" />
                +91 9489243775
              </a>
            </div>
          </div>

          {/* ── SUPPORTED BY ── */}
          <div className="mt-14 pt-10 border-t border-[#BEE3EA]">
            <div className="text-center mb-8">
              <p className="bio-section-tag">ECOSYSTEM PARTNERS</p>
              <h3 className="text-[24px] sm:text-[30px] font-bold text-[#0B2A4A]">
                Supported By
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
              {SUPPORTED_BY.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-[#BEE3EA] bg-white p-5 sm:p-6 shadow-sm flex items-center justify-center h-28 sm:h-32 transition-all hover:border-[#1599B5] hover:shadow-md group"
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className={cn(
                      "object-contain max-h-16 sm:max-h-20 w-auto transition-transform duration-300 group-hover:scale-105",
                      s.logoClass
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. READY TO BUILD CALLOUT ── */}
      <section className="bio-register" id="register">
        <div className="bio-container bio-register-card">
          <div>
            <p className="bio-section-tag">READY TO BUILD?</p>
            <h2>
              Your idea can
              <br />
              <span>shape tomorrow.</span>
            </h2>
            <p className="mt-2 max-w-md text-[14px] text-white/70">
              Applications are free and reviewed on rolling submission. Form your team of 2–4 and
              submit your one-pager today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={REGISTER_URL}
              className="bio-button bio-button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for BIO BRIDGE <ArrowRight size={17} />
            </a>
            <Link to="/problems" className="bio-button bio-button-ghost text-white border-white/20">
              Browse 36 Challenges
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
