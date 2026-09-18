import { useState } from "react";
import { Users, Sparkles, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { MENTORS, JURY_MEMBERS } from "@/data/home";
import { SpotlightCarousel } from "./spotlight-carousel";

export function MentorsSection() {
  const [panelView, setPanelView] = useState<"mentors" | "jury">("mentors");
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  return (
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
  );
}
