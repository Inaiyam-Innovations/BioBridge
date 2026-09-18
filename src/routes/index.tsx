import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
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
  ChevronLeft,
  ChevronRight,
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
  User,
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
          "Four-week biotech venture-building sprint for student teams across India, culminating in a 1-day in-person Grand Finale on Oct 30 at KSRCT. Organized by MARABANU, StartupTN, and K.S.Rangasamy College of Technology.",
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
    sub: "Venture sprint + 1-day Oct 30 pitch",
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
    label: "EVENT DATE",
    val: "Oct 30 · 1-Day Event",
    sub: "Top 25 in person at KSRCT",
    bioConcept: "Grand Finale Pitch",
    bioMeta: "Oct 30 · 1-Day Demo",
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
    phase: "Finals Day (Oct 30)",
    timing: "Oct 30 · 1-day in-person event",
    summary:
      "The 25 finalist teams present in person during the one-day grand finale on October 30. Three prizes are awarded, and the winning teams enter a six-month venture-building engagement with the MARABANU team.",
    badge: "Oct 30 · 1-Day Finals & Venture Sprint",
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

const MENTORS = [
  { num: "01", name: "Mentor 01", image: null },
  { num: "02", name: "Mentor 02", image: null },
  { num: "03", name: "Mentor 03", image: null },
  { num: "04", name: "Mentor 04", image: null },
];

const JURY_MEMBERS = [
  { num: "01", name: "Jury Member 01", image: null },
  { num: "02", name: "Jury Member 02", image: null },
  { num: "03", name: "Jury Member 03", image: null },
  { num: "04", name: "Jury Member 04", image: null },
  { num: "05", name: "Jury Member 05", image: null },
  { num: "06", name: "Jury Member 06", image: null },
];

const PARTNERS = [
  {
    name: "Department of Biotechnology",
    accent: "#0B2A4A",
    logo: "/ksrct-logo.png",
    logoAlt: "Department of Biotechnology, K.S. Rangasamy College of Technology",
    logoClass: "h-14 sm:h-16 max-w-[240px]",
    role: "Academic Host, Advanced Biotech Research Labs & Innovation Support",
  },
  {
    name: "MARABANU",
    accent: "#1599B5",
    logo: "/marabanu-logo.png",
    logoAlt: "MARABANU",
    logoClass: "h-10 sm:h-12 max-w-[220px]",
    role: "Venture Ecosystem, Sprint Mentorship & Hackathon Partner",
  },
  {
    name: "StartupTN Government of Tamil Nadu",
    accent: "#20AFC5",
    logo: "/startuptn-logo.png",
    logoAlt: "StartupTN Government of Tamil Nadu",
    logoClass: "h-14 sm:h-16 max-w-[240px]",
    role: "State Startup Ecosystem Partner & Innovation Support",
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

function SpotlightCarousel({
  members,
  roleLabel,
  isPaused,
}: {
  members: { num: string; name: string; image: string | null }[];
  roleLabel: string;
  isPaused: boolean;
}) {
  const totalCount = members.length;
  const isN6 = totalCount === 6;

  const [stepOffset, setStepOffset] = useState(0);

  // Auto-advance every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setStepOffset((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeIdx = ((stepOffset % totalCount) + totalCount) % totalCount;

  const handlePrev = () => {
    setStepOffset((prev) => prev - 1);
  };

  const handleNext = () => {
    setStepOffset((prev) => prev + 1);
  };

  const handleDotClick = (dotIdx: number) => {
    let diff = dotIdx - activeIdx;
    if (diff > totalCount / 2) diff -= totalCount;
    if (diff < -totalCount / 2) diff += totalCount;
    setStepOffset((prev) => prev + diff);
  };

  const handleCardClick = (cardIdx: number) => {
    let diff = cardIdx - activeIdx;
    if (diff > totalCount / 2) diff -= totalCount;
    if (diff < -totalCount / 2) diff += totalCount;
    setStepOffset((prev) => prev + diff);
  };

  // Get slot configuration based on N=4 or N=6
  const getSlotStyle = (slot: number) => {
    if (isN6) {
      // 6-member layout matching Image 2 (contiguous pentagonal round arc):
      // Slot 0: Center Front
      // Slot 1: Right Front (connected to center's right edge, angled backward)
      // Slot 2: Right Back (connected to right front's outer edge, angled further)
      // Slot 3: Center Back (depth scale behind center)
      // Slot 4: Left Back (connected to left front's outer edge, angled further)
      // Slot 5: Left Front (connected to center's left edge, angled backward)
      switch (slot) {
        case 0:
          return {
            left: "50%",
            marginLeft: "calc(-1 * var(--cw) / 2)",
            transformOrigin: "center center",
            transform: "translate3d(0, -50%, 35px) scale(1) rotateY(0deg)",
            zIndex: 40,
            opacity: 1,
            isCenter: true,
          };
        case 1:
          return {
            left: "50%",
            marginLeft: "calc(var(--cw) / 2)",
            transformOrigin: "left center",
            transform: "translate3d(0, -50%, 0) rotateY(-38deg) scale(0.92)",
            zIndex: 30,
            opacity: 0.95,
            isCenter: false,
          };
        case 2:
          return {
            left: "50%",
            marginLeft: "calc(var(--cw) / 2 + var(--cw) * 0.788)",
            transformOrigin: "left center",
            transform: "translate3d(0, -50%, calc(-1 * var(--cw) * 0.615)) rotateY(-56deg) scale(0.82)",
            zIndex: 20,
            opacity: 0.80,
            isCenter: false,
          };
        case 3:
          return {
            left: "50%",
            marginLeft: "calc(-1 * var(--cw) / 2)",
            transformOrigin: "center center",
            transform: "translate3d(0, calc(-50% - 24px), calc(-1.3 * var(--cw))) scale(0.68) rotateY(0deg)",
            zIndex: 10,
            opacity: 0.45,
            isCenter: false,
          };
        case 4:
          return {
            left: "50%",
            marginLeft: "calc(-1 * var(--cw) / 2 - var(--cw) * 0.788)",
            transformOrigin: "right center",
            transform: "translate3d(-100%, -50%, calc(-1 * var(--cw) * 0.615)) rotateY(56deg) scale(0.82)",
            zIndex: 20,
            opacity: 0.80,
            isCenter: false,
          };
        case 5:
          return {
            left: "50%",
            marginLeft: "calc(-1 * var(--cw) / 2)",
            transformOrigin: "right center",
            transform: "translate3d(-100%, -50%, 0) rotateY(38deg) scale(0.92)",
            zIndex: 30,
            opacity: 0.95,
            isCenter: false,
          };
        default:
          return {
            left: "50%",
            marginLeft: "calc(-1 * var(--cw) / 2)",
            transformOrigin: "center center",
            transform: "translate3d(0, -50%, -200px) scale(0.6)",
            zIndex: 0,
            opacity: 0,
            isCenter: false,
          };
      }
    } else {
      // 4-member layout matching Image 1:
      // Slot 0: Center Front
      // Slot 1: Right
      // Slot 2: Center Back (visible peeking behind center)
      // Slot 3: Left
      switch (slot) {
        case 0:
          return {
            left: "50%",
            marginLeft: "calc(-1 * var(--cw) / 2)",
            transformOrigin: "center center",
            transform: "translate3d(0, -50%, 30px) scale(1) rotateY(0deg)",
            zIndex: 35,
            opacity: 1,
            isCenter: true,
          };
        case 1:
          return {
            left: "50%",
            marginLeft: "calc(var(--cw) / 2)",
            transformOrigin: "left center",
            transform: "translate3d(0, -50%, 0) rotateY(-38deg) scale(0.90)",
            zIndex: 25,
            opacity: 0.92,
            isCenter: false,
          };
        case 2:
          return {
            left: "50%",
            marginLeft: "calc(-1 * var(--cw) / 2)",
            transformOrigin: "center center",
            transform: "translate3d(0, calc(-50% - 24px), calc(-1.2 * var(--cw))) scale(0.70) rotateY(0deg)",
            zIndex: 10,
            opacity: 0.50,
            isCenter: false,
          };
        case 3:
          return {
            left: "50%",
            marginLeft: "calc(-1 * var(--cw) / 2)",
            transformOrigin: "right center",
            transform: "translate3d(-100%, -50%, 0) rotateY(38deg) scale(0.90)",
            zIndex: 25,
            opacity: 0.92,
            isCenter: false,
          };
        default:
          return {
            left: "50%",
            marginLeft: "calc(-1 * var(--cw) / 2)",
            transformOrigin: "center center",
            transform: "translate3d(0, -50%, -200px) scale(0.6)",
            zIndex: 0,
            opacity: 0,
            isCenter: false,
          };
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* 3D Pentagonal Round Stage */}
      <div className="bio-pentagon-stage relative w-full max-w-5xl h-[360px] sm:h-[420px] lg:h-[460px] flex items-center justify-center overflow-hidden sm:overflow-visible">
        {members.map((person, idx) => {
          const slot = ((idx - (stepOffset % totalCount)) % totalCount + totalCount) % totalCount;
          const slotStyle = getSlotStyle(slot);
          const isCenter = slotStyle.isCenter;

          return (
            <div
              key={person.num}
              onClick={() => handleCardClick(idx)}
              className={cn(
                "absolute top-1/2 flex flex-col items-center transition-all cursor-pointer",
                !isCenter && "hover:opacity-100"
              )}
              style={{
                width: "var(--cw)",
                height: "var(--ch)",
                left: slotStyle.left,
                marginLeft: slotStyle.marginLeft,
                transformOrigin: slotStyle.transformOrigin,
                transform: slotStyle.transform,
                zIndex: slotStyle.zIndex,
                opacity: slotStyle.opacity,
                transition: "all 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              title={!isCenter ? `Switch to ${roleLabel} #${person.num}` : undefined}
            >
              {/* Minimalist Professional Frame */}
              <div
                className={cn(
                  "relative w-full h-full rounded-2xl sm:rounded-3xl p-3.5 sm:p-4.5 flex flex-col justify-between transition-all duration-300",
                  isCenter
                    ? "bg-white border-2 border-[#1599B5] shadow-[0_20px_45px_rgba(15,118,110,0.14)] ring-4 ring-[#1599B5]/12"
                    : "bg-white/95 border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:border-slate-300"
                )}
              >
                {/* Header inside frame */}
                <div className="flex items-center justify-between w-full">
                  <span
                    className={cn(
                      "font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full",
                      isCenter
                        ? "bg-[#EBF7F9] text-[#1599B5] border border-[#BEE3EA]"
                        : "bg-slate-100 text-slate-500 border border-slate-200/60"
                    )}
                  >
                    #{person.num}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[9.5px] sm:text-[10px] uppercase tracking-wider",
                      isCenter ? "text-[#1599B5] font-semibold" : "text-slate-400 font-medium"
                    )}
                  >
                    {roleLabel}
                  </span>
                </div>

                {/* Photo / Avatar Placeholder Area */}
                <div
                  className={cn(
                    "relative w-full flex-1 my-2.5 sm:my-3 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-3 sm:p-4 text-center border",
                    isCenter
                      ? "bg-gradient-to-b from-[#FAFDFE] via-white to-[#F0F9FB] border-[#D9F2F6]"
                      : "bg-gradient-to-b from-slate-50/90 via-white to-slate-50/60 border-slate-100"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-2xl flex items-center justify-center transition-all duration-300",
                      isCenter
                        ? "h-14 w-14 sm:h-16 sm:w-16 bg-[#EBF7F9] border border-[#BEE3EA] text-[#1599B5] shadow-xs"
                        : "h-11 w-11 sm:h-13 sm:w-13 bg-slate-100 border border-slate-200/80 text-slate-400"
                    )}
                  >
                    <Dna className={cn(isCenter ? "h-7 w-7 sm:h-8 sm:w-8 animate-pulse text-[#1599B5]" : "h-5 w-5 sm:h-6 sm:w-6")} />
                  </div>

                  <h4
                    className={cn(
                      "font-display font-bold tracking-tight text-[#0B2A4A]",
                      isCenter ? "mt-3 text-[16px] sm:text-[18px]" : "mt-2 text-[13px] sm:text-[14px]"
                    )}
                  >
                    Coming Soon
                  </h4>

                  <p
                    className={cn(
                      "font-mono font-medium",
                      isCenter ? "mt-0.5 text-[11px] sm:text-[12px] text-[#1599B5]" : "mt-0.5 text-[10px] text-slate-400"
                    )}
                  >
                    {roleLabel} #{person.num}
                  </p>
                </div>

                {/* Minimalist Bottom Docked Pill */}
                <div className="flex items-center justify-center w-full">
                  <div
                    className={cn(
                      "w-full py-1 sm:py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 font-mono text-center transition-all",
                      isCenter
                        ? "bg-[#0B2A4A] text-white text-[11px] sm:text-[12px] font-bold shadow-xs"
                        : "bg-slate-50 border border-slate-200/70 text-slate-600 text-[10px] sm:text-[10.5px] font-semibold"
                    )}
                  >
                    {isCenter && <Sparkles className="h-3.5 w-3.5 text-[#20AFC5]" />}
                    <span>Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls: < Dots > */}
      <div className="mt-8 flex flex-col items-center gap-2.5">
        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-sm">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous member"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 hover:text-[#0B2A4A] transition-colors cursor-pointer active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-1.5">
            {members.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "transition-all duration-300 rounded-full cursor-pointer",
                  idx === activeIdx
                    ? "h-2.5 w-6 bg-[#1599B5]"
                    : "h-2.5 w-2.5 bg-slate-200 hover:bg-slate-300"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next member"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 hover:text-[#0B2A4A] transition-colors cursor-pointer active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Auto-scroll Status */}
        <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] font-mono text-slate-500">
          <span
            className={cn(
              "h-2 w-2 rounded-full",
              isPaused ? "bg-amber-400" : "bg-[#1599B5] animate-pulse"
            )}
          />
          <span>
            {isPaused ? "Auto-rotation Paused (Hovering)" : "Auto-rotating 3D Showcase"}
          </span>
          <span>•</span>
          <span>Click any card to spotlight</span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [panelView, setPanelView] = useState<"mentors" | "jury">("mentors");
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

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
              A four-week biotech venture-building sprint for student teams across India, culminating in
              a 1-day in-person Grand Finale on Oct 30 at Department of Biotechnology, K.S.Rangasamy College of Technology.
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
                  <strong>Oct 30</strong>
                  <small>1-Day Event at KSRCT</small>
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

      {/* ── 4B. KEYNOTE MENTORS & GRAND JURY PENTAGON SHOWCASE ── */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#BEE3EA]" id="mentors">
        <span id="speakers" className="sr-only">Mentors and Jury</span>
        <div className="bio-container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#1599B5]">
              <Users className="h-3.5 w-3.5" />
              Mentorship &amp; Evaluation
            </span>
            <h2 className="mt-2.5 font-display text-[28px] sm:text-[36px] font-extrabold text-[#0B2A4A] tracking-tight">
              Keynote Mentors &amp; Grand Jury
            </h2>
            <p className="mt-2 text-[14px] sm:text-[15px] text-[#64748B]">
              Distinguished experts guiding student biotech innovators through the 4-week sprint and Grand Finale on Oct 30 at KSRCT.
            </p>

            {/* Minimal Interactive Tab Switcher: Mentors FIRST, Jury NEXT */}
            <div className="mt-6 inline-flex items-center rounded-full border border-[#BEE3EA] bg-[#F8FCFD] p-1 shadow-xs">
              <button
                type="button"
                onClick={() => setPanelView("mentors")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 sm:px-5 py-1.5 font-mono text-[11.5px] sm:text-[12px] font-bold transition-all cursor-pointer",
                  panelView === "mentors"
                    ? "bg-[#0B2A4A] text-white shadow-xs"
                    : "text-[#64748B] hover:text-[#0B2A4A]"
                )}
              >
                <Sparkles className="h-3.5 w-3.5 text-[#20AFC5]" />
                Keynote Mentors (4)
              </button>
              <button
                type="button"
                onClick={() => setPanelView("jury")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 sm:px-5 py-1.5 font-mono text-[11.5px] sm:text-[12px] font-bold transition-all cursor-pointer",
                  panelView === "jury"
                    ? "bg-[#0B2A4A] text-white shadow-xs"
                    : "text-[#64748B] hover:text-[#0B2A4A]"
                )}
              >
                <Award className="h-3.5 w-3.5 text-[#38BDF8]" />
                Grand Jury (6)
              </button>
            </div>
          </div>

          {/* Spotlight Multi-Frame Sliding Carousel */}
          <div
            className="mt-8 relative w-full max-w-6xl mx-auto flex flex-col items-center select-none"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <SpotlightCarousel
              key={panelView}
              members={panelView === "mentors" ? MENTORS : JURY_MEMBERS}
              roleLabel={panelView === "mentors" ? "Keynote Mentor" : "Grand Jury Member"}
              isPaused={isCarouselPaused}
            />
          </div>
        </div>
      </section>

      {/* ── 5. ULTRA-ATTRACTIVE PRIZES ANNOUNCEMENT SECTION ── */}
      {/* ── 5. ULTRA-PREMIUM PRIZES ANNOUNCEMENT SECTION ── */}
      <section className="relative overflow-hidden bio-section bio-prizes bg-gradient-to-b from-[#F4FAFB] via-white to-[#F4FAFB]" id="prizes">
        {/* Ambient lighting backdrop */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-[#20AFC5]/15 via-[#1599B5]/10 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <div className="bio-container relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D9F2F6]/90 border border-[#BEE3EA] px-4 py-1.5 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[#0B2A4A] shadow-sm">
              <Sparkles className="h-4 w-4 text-[#1599B5]" />
              Official Hackathon Prize Pool
            </span>
            <h2 className="mt-4 font-display text-[36px] font-extrabold text-[#0B2A4A] sm:text-[50px] leading-tight tracking-tight">
              Win Cash Grants.{" "}
              <span className="bg-gradient-to-r from-[#1599B5] via-[#20AFC5] to-[#0B2A4A] bg-clip-text text-transparent">
                Build a Real Venture.
              </span>
            </h2>
            <p className="mt-3 text-[16.5px] sm:text-[18px] text-[#366273] leading-relaxed">
              Three non-dilutive cash prizes awarded on the Oct 30 one-day Grand Finale at KSRCT, coupled with six months of
              venture-building partnership alongside MARABANU and StartupTN.
            </p>
          </div>

          {/* Premium Overview Metrics Strip */}
          <div className="mt-10 mx-auto max-w-4xl grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-[#BEE3EA] bg-white/90 p-4 text-center shadow-sm backdrop-blur-sm">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1599B5] block">
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
                Govt Support
              </span>
              <p className="mt-1 text-[22px] sm:text-[26px] font-extrabold text-[#0B2A4A]">StartupTN</p>
              <small className="text-[11.5px] text-[#366273] font-medium">Ecosystem support</small>
            </div>

            <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-4 text-center shadow-sm backdrop-blur-sm">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Registration
              </span>
              <p className="mt-1 text-[22px] sm:text-[26px] font-extrabold text-emerald-800">100% Free</p>
              <small className="text-[11.5px] text-emerald-700 font-medium">Open to all students</small>
            </div>
          </div>

          {/* 3 Blue-Themed Podium Cards (Light Blue, Dark Blue Champion, Very Light Blue) */}
          <div className="bio-podium-grid mt-12">
            {/* 2nd Prize Card - Light Blue Theme */}
            <div className="bio-podium-card bio-podium-card-light order-2 lg:order-1">
              <div>
                <span className="bio-prize-badge bio-badge-light">
                  <Award className="h-4 w-4 text-[#0284C7]" />
                  Second Prize • Runner-Up
                </span>
                <h3 className="text-[20px] font-bold text-[#0B2A4A]">First Runner-Up</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="bio-prize-amount bio-prize-amount-light">₹5,000</span>
                  <span className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-[#0284C7]">Cash Grant</span>
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
                    <span>StartupTN ecosystem interaction &amp; guidance</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#1599B5] shrink-0" />
                    <span>University partner recognition</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-[#BAE6FD] text-[12px] font-bold uppercase tracking-wider text-[#0284C7]">
                Runner-Up Cohort Recognition
              </div>
            </div>

            {/* 1st Prize Dark Blue Card - The Grand Champion (Centerpiece) */}
            <div className="bio-podium-card bio-podium-card-dark order-1 lg:order-2 relative lg:-translate-y-3">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#1599B5] via-[#20AFC5] to-[#0284C7] px-5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25">
                ★ Grand Champion ★
              </div>

              <div>
                <span className="bio-prize-badge bio-badge-dark">
                  <Trophy className="h-4 w-4 text-[#38BDF8]" />
                  First Prize • Champion
                </span>
                <h3 className="text-[24px] font-extrabold text-white">Champion Team</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="bio-prize-amount bio-prize-amount-dark">₹10,000</span>
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#38BDF8]">Cash Grant</span>
                </div>
                <p className="mt-2 text-[15px] font-medium text-[#BAE6FD]">
                  Highest tournament honors awarded live on finals day at KSRCT.
                </p>

                <ul className="mt-6 space-y-3 text-[14.5px] text-[#F0F9FF]">
                  <li className="flex items-center gap-2.5 font-bold text-white">
                    <Star className="h-5 w-5 text-[#38BDF8] shrink-0 fill-[#38BDF8]" />
                    <span><strong>6 Months Venture Building</strong> alongside MARABANU</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#38BDF8] shrink-0" />
                    <span>Mentorship guidance &amp; <strong className="text-white">StartupTN ecosystem support</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#38BDF8] shrink-0" />
                    <span>First place champion trophy &amp; official citations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#38BDF8] shrink-0" />
                    <span>Dedicated biotech mentor &amp; clinical advisor</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#38BDF8] shrink-0" />
                    <span>KSRCT advanced biotechnology laboratory trial access</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-[#1599B5]/40 text-[12.5px] font-extrabold uppercase tracking-wider text-[#38BDF8] flex items-center justify-between">
                <span>Full Venture Incubation</span>
                <span className="text-[11px] font-mono font-bold bg-[#1599B5]/25 text-[#E0F2FE] border border-[#38BDF8]/40 px-2.5 py-0.5 rounded">
                  KSRCT + MARABANU
                </span>
              </div>
            </div>

            {/* 3rd Prize Card - Very Light Blue Theme */}
            <div className="bio-podium-card bio-podium-card-very-light order-3">
              <div>
                <span className="bio-prize-badge bio-badge-very-light">
                  <Award className="h-4 w-4 text-[#0284C7]" />
                  Third Prize • Second Runner-Up
                </span>
                <h3 className="text-[20px] font-bold text-[#0B2A4A]">Second Runner-Up</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="bio-prize-amount bio-prize-amount-very-light">₹3,000</span>
                  <span className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-[#0284C7]">Cash Grant</span>
                </div>
                <p className="mt-2 text-[14.5px] font-medium text-[#366273]">
                  Non-dilutive cash grant awarded live on finals day at KSRCT.
                </p>

                <ul className="mt-6 space-y-3 text-[14px] text-[#0B2A4A]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#0EA5E9] shrink-0" />
                    <span>Second runner-up trophy &amp; official citations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#0EA5E9] shrink-0" />
                    <span>Venture mentorship &amp; project review</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#0EA5E9] shrink-0" />
                    <span>Partner &amp; university recognition</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#0EA5E9] shrink-0" />
                    <span>Biotech network access</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-[#E0F2FE] text-[12px] font-bold uppercase tracking-wider text-[#0284C7]">
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
                    <strong className="text-[15.5px] font-bold text-white">State Ecosystem Pathways</strong>
                  </div>
                  <p className="mt-1 text-[13px] text-[#D6F1FA] leading-snug">
                    Mentorship, networking, and guidance through the StartupTN startup ecosystem.
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
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="group rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#1599B5] hover:shadow-xl flex flex-col justify-between"
              >
                <div>
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

                  <h3 className="text-[20px] font-bold text-[#0B2A4A] leading-snug">
                    {p.name}
                  </h3>
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
