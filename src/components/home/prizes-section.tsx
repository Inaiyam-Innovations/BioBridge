import {
  Sparkles,
  Award,
  Trophy,
  Star,
  CheckCircle2,
  Lightbulb,
  Building2,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";

export function PrizesSection() {
  return (
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
                Incubation &amp; Scale
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
                  <strong className="text-[15.5px] font-bold text-white">IP &amp; Costing Guidance</strong>
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
  );
}
