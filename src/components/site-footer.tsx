import { Link } from "@tanstack/react-router";
import { Phone, ArrowUpRight, ExternalLink } from "lucide-react";

const REGISTER_URL =
  "https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

const NAV_SECTIONS = [
  {
    heading: "Programme",
    links: [
      { to: "/problems", label: "Challenges (36)" },
      { to: "/#how-it-works", label: "How It Runs" },
      { to: "/#sessions", label: "Weekend Sessions" },
      { to: "/#speakers", label: "Speakers & Grand Jury" },
      { to: "/#prizes", label: "Prizes & Incubation" },
      { to: "/#partners", label: "Partners & Consortium" },
    ],
  },
  {
    heading: "Participate",
    links: [
      { to: REGISTER_URL, label: "Register on Unstop", external: true },
      { to: "/status", label: "Check Application Status" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/#faq", label: "Frequently Asked Questions" },
      { to: "/problems", label: "Download Challenge Directory" },
    ],
  },
] as const;

const ORGANIZERS = [
  {
    name: "K.S.Rangasamy College of Technology",
    sub: "Department of Biotechnology",
    logo: "/ksrct-logo.png",
  },
  {
    name: "MARABANU",
    sub: "Venture Incubation & Mentorship",
    logo: "/marabanu-logo.png",
  },
  {
    name: "StartupTN Government of Tamil Nadu",
    sub: "StartupTN (TANSIM)",
    logo: "/startuptn-logo.png",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#BEE3EA] bg-gradient-to-b from-[#F4FAFB] via-[#EDF7F9] to-[#E3F2F6]">
      {/* Upper Footer: Brand, Navigation, and Organizers */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Column 1: Final Hero Brand Logo & Mission (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link
              to="/"
              className="group inline-flex items-center transition-transform hover:scale-[1.01]"
              aria-label="BioBridge home"
            >
              <img
                src="/biobridge-wordmark.png"
                alt="BioBridge — Ideas for a healthier tomorrow"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_4px_rgba(11,42,74,0.06)]"
                draggable={false}
              />
            </Link>

            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-[#366273]">
              A national student biotechnology hackathon uniting biology, technology, and commercial
              rigour to take campus innovators from prototype to market.
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1599B5]">
                <Phone className="h-3.5 w-3.5" />
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  Organizers Contact
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="tel:+919751664966"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#BEE3EA] bg-white px-3.5 py-2 text-xs font-semibold text-[#0B2A4A] shadow-sm transition-all hover:border-[#1599B5] hover:text-[#1599B5] hover:shadow"
                >
                  <Phone className="h-3.5 w-3.5 text-[#1599B5]" />
                  +91 9751664966
                </a>

                <a
                  href="tel:+919489243775"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#BEE3EA] bg-white px-3.5 py-2 text-xs font-semibold text-[#0B2A4A] shadow-sm transition-all hover:border-[#1599B5] hover:text-[#1599B5] hover:shadow"
                >
                  <Phone className="h-3.5 w-3.5 text-[#1599B5]" />
                  +91 9489243775
                </a>

                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#1599B5] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#0E7E96] hover:shadow"
                >
                  Register on Unstop
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#D9F2F6]/60 px-3 py-1.5 border border-[#BEE3EA]">
              <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-[#0E7E96] uppercase tracking-wide">
                Finals (1-Day Event): Oct 30 · Department of Biotechnology, K.S.Rangasamy College of Technology
              </span>
            </div>
          </div>

          {/* Column 2 & 3: Navigation Links (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {NAV_SECTIONS.map((section) => (
              <div key={section.heading}>
                <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#1599B5]">
                  {section.heading}
                </p>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[13.5px] font-medium text-[#366273] transition-colors hover:text-[#1599B5]"
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </a>
                      ) : (
                        <Link
                          to={link.to}
                          className="text-[13.5px] font-medium text-[#366273] transition-colors hover:text-[#1599B5]"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Organizers Strip (3 cols) */}
          <div className="lg:col-span-3">
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#1599B5]">
              Jointly Organized By
            </p>
            <div className="flex flex-col gap-2.5">
              {ORGANIZERS.map((org) => (
                <div
                  key={org.name}
                  className="flex items-center gap-3 rounded-xl border border-[#BEE3EA] bg-white/90 p-2.5 shadow-sm transition-all hover:border-[#1599B5]"
                >
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="h-7 max-w-[90px] object-contain shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-[#0B2A4A] truncate">{org.name}</p>
                    <p className="font-mono text-[10px] text-[#366273] truncate">{org.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lower Sub-Footer: Copyright, Developer Credit, Legal */}
      <div className="border-t border-[#BEE3EA] bg-[#D9F2F6]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
          {/* Copyright */}
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#366273]">
            © 2026 BioBridge · All rights reserved
          </p>

          {/* Inaiyam Innovations Credit */}
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#366273]">
              Designed &amp; Developed by
            </span>
            <a
              href="https://www.inaiyam.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-lg border border-[#BEE3EA] bg-white px-2.5 py-1 shadow-sm transition-all hover:border-[#1599B5] hover:shadow"
              title="Inaiyam Innovations — www.inaiyam.org.in"
            >
              <img
                src="/inaiyam-logo.png"
                alt="Inaiyam Innovations"
                className="h-5 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to remote URL if needed
                  e.currentTarget.src = "https://inaiyam.org.in/assets/logo-nlWR2DRL.png";
                }}
              />
            </a>
          </div>

          {/* Quick Legal Links */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/terms"
              className="font-mono text-[11px] text-[#366273] transition-colors hover:text-[#1599B5]"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/about"
              className="font-mono text-[11px] text-[#366273] transition-colors hover:text-[#1599B5]"
            >
              About
            </Link>
            <Link
              to="/faq"
              className="font-mono text-[11px] text-[#366273] transition-colors hover:text-[#1599B5]"
            >
              FAQs
            </Link>
            <p className="font-mono text-[11px] text-[#366273]/80">
              Data stored locally on this device
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
