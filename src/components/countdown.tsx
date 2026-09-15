import { useEffect, useState } from "react";
import { SUBMISSION_DEADLINE } from "@/lib/applications";
import { Clock } from "lucide-react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1_000) % 60),
    expired: ms === 0,
  };
}

export const DEADLINE_LABEL = "31 October 2026 · 6:30 PM IST";

type TimeUnit = {
  label: string;
  value: number | undefined;
};

function Unit({ label, value }: TimeUnit) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center rounded-xl border border-[#CDEDD8] bg-white px-2 py-3 text-center shadow-[0_2px_8px_-4px_rgba(24,169,87,0.12)]">
      <span className="font-display text-[26px] font-bold leading-none tracking-tight text-[#18A957]">
        {value === undefined ? "--" : String(value).padStart(2, "0")}
      </span>
      <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#4A7A60]">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const target = new Date(SUBMISSION_DEADLINE).getTime();
  const [time, setTime] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setTime(diff(target));
    const id = window.setInterval(() => setTime(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (time?.expired) {
    return (
      <div className="card-surface rounded-2xl p-5">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#18A957]">
          Applications closed
        </p>
        <p className="mt-1 text-sm text-[#4A7A60]">The submission window has ended.</p>
      </div>
    );
  }

  return (
    <div className="card-surface rounded-2xl p-5">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF7EF] text-[#18A957]">
          <Clock className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#18A957]">
            Applications Close
          </p>
          <p className="text-xs text-[#4A7A60]">{DEADLINE_LABEL}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Unit label="Days" value={time?.days} />
        <Unit label="Hours" value={time?.hours} />
        <Unit label="Min" value={time?.minutes} />
        <Unit label="Sec" value={time?.seconds} />
      </div>
    </div>
  );
}
