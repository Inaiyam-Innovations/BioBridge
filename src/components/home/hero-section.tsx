import { useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Users,
  Leaf,
  Dna,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REGISTER_URL, QUICK_SPECS } from "@/data/home";
import { DecryptedText } from "@/components/decrypted-text";
import { BiotechCountdown } from "@/components/biotech-countdown";

export function HeroSection() {
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
    <>
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
    </>
  );
}
