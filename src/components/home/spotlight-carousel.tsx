import { useState, useEffect } from "react";
import { Dna, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SpotlightMember {
  num: string;
  name: string;
  image: string | null;
}

export interface SpotlightCarouselProps {
  members: SpotlightMember[];
  roleLabel: string;
  isPaused: boolean;
}

export function SpotlightCarousel({
  members,
  roleLabel,
  isPaused,
}: SpotlightCarouselProps) {
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
