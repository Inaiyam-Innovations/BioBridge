import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { PARTNERS, SUPPORTED_BY } from "@/data/home";

export function PartnersSection() {
  return (
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
  );
}
