import { useEffect, useState } from "react";
import { SUBMISSION_DEADLINE } from "@/lib/applications";
import { ArrowRight, Sparkles, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

export const DEADLINE_LABEL = "30 September 2026 · 11:59 PM IST";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1_000) % 60),
    totalSeconds: Math.floor(ms / 1000),
    expired: ms === 0,
  };
}

interface BiotechCountdownProps {
  className?: string;
  variant?: "hero" | "card" | "banner";
}

export function BiotechCountdown({ className, variant = "hero" }: BiotechCountdownProps) {
  const target = new Date(SUBMISSION_DEADLINE).getTime();
  const [time, setTime] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setTime(diff(target));
    const interval = window.setInterval(() => {
      setTime(diff(target));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [target]);

  const REGISTER_URL =
    "https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

  if (time?.expired) {
    return (
      <div
        className={cn(
          "w-full max-w-xl rounded-2xl border border-rose-200 bg-rose-50/80 p-5 text-center backdrop-blur-md",
          className
        )}
      >
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-rose-600">
          Registration Closed
        </p>
        <p className="mt-1 text-sm text-rose-800">
          The registration window for BioBridge 2026 closed on {DEADLINE_LABEL}.
        </p>
      </div>
    );
  }

  const units = [
    { label: "DAYS", value: time?.days, nucleotide: "A", sub: "CYCLES" },
    { label: "HOURS", value: time?.hours, nucleotide: "T", sub: "CHRONO" },
    { label: "MINS", value: time?.minutes, nucleotide: "G", sub: "METABOLIC" },
    { label: "SECS", value: time?.seconds, nucleotide: "C", sub: "PULSE" },
  ];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-[#BEE3EA] bg-white/95 p-5 sm:p-7 shadow-[0_16px_50px_-10px_rgba(21,153,181,0.22)] backdrop-blur-xl transition-all hover:border-[#1599B5] hover:shadow-[0_20px_60px_-8px_rgba(21,153,181,0.28)]",
        className
      )}
    >
      {/* Decorative Bio-Tech Ambient Glow Backgrounds */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#1599B5]/20 to-[#10B981]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-[#0B2A4A]/15 to-[#20AFC5]/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Top Header Bar */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-[#EAF4F7]">
        <div className="flex items-center gap-3">
          {/* Animated Glowing Beacon */}
          <span className="relative flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981]" />
          </span>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#0E7E96]">
                REGISTRATION CLOSING
              </span>
              <span className="inline-flex items-center rounded-full bg-[#E0F5F8] px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-[#0B2A4A]">
                SEP 30
              </span>
            </div>
            <p className="text-[13px] sm:text-[14px] font-medium text-[#366273]">
              Free entry • Batch 01 rolling intake ends Sept 30, 11:59 PM IST
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* DNA Base Pairs Indicator Badge */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-xl border border-[#D9F2F6] bg-[#F4FAFB] px-3 py-1 text-[11px] font-mono font-semibold text-[#1599B5]">
            <span className="text-[#0B2A4A] font-bold">[A·T]</span>
            <span className="text-[#BEE3EA]">|</span>
            <span className="text-[#0E7E96] font-bold">[G·C]</span>
            <span className="ml-1 text-[10px] text-[#366273]">GENETIC SPRINT</span>
          </div>
        </div>
      </div>

      {/* 4 Time Digit Cards */}
      <div className="relative mt-4 grid grid-cols-4 gap-2.5 sm:gap-4">
        {units.map((u, i) => (
          <div
            key={u.label}
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-[#D9F2F6] bg-gradient-to-b from-[#F7FCFD] to-white py-3 px-2 sm:py-4.5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1599B5] hover:shadow-lg"
          >
            {/* Corner Nucleotide Tag */}
            <span className="absolute top-1.5 right-2 hidden sm:inline-block font-mono text-[9.5px] sm:text-[10.5px] font-extrabold text-[#1599B5]/90 bg-[#EAF7FA] px-1.5 py-0.5 rounded">
              {u.nucleotide}
            </span>

            {/* Numeric Digits */}
            <span className="font-mono text-2xl sm:text-5xl font-black tracking-tight text-[#0B2A4A] transition-colors group-hover:text-[#0E7E96]">
              {u.value === undefined ? "--" : String(u.value).padStart(2, "0")}
            </span>

            {/* Primary Unit Label */}
            <span className="mt-1 font-mono text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#1599B5]">
              {u.label}
            </span>

            {/* Biotech Subtitle */}
            <span className="mt-0.5 hidden text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#7BA1B0] sm:block">
              {u.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Biotech Metabolic Progress Bar & Micro Action */}
      <div className="relative mt-4 pt-3.5 border-t border-[#EAF4F7] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#1599B5]" />
          <span className="text-[13px] sm:text-[14.5px] font-semibold text-[#0B2A4A]">
            1-Day Event on Oct 30 at K.S.Rangasamy College of Technology
          </span>
          <span className="hidden sm:inline-block text-[12.5px] text-[#366273]">
            • Top 25 Teams Shortlisted
          </span>
        </div>

        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#0B2A4A] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#1599B5] hover:shadow-lg hover:scale-[1.02]"
        >
          Apply Before Sep 30 <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
