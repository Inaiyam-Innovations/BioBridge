import { Dna, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { STAGES } from "@/data/home";

export function StagesPipeline() {
  return (
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
              Your participant roadmap: from launch and rolling selection through the 4-week build phase to in-person finals.
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
  );
}
