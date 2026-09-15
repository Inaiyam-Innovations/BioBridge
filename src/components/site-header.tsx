import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const REGISTER_URL =
  "https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

const NAV_LINKS = [
  { to: "/", label: "Home", exact: true },
  { to: "/problems", label: "Challenges", exact: false },
  { to: "/details", label: "How It Works", exact: false },
  { to: "/faq", label: "FAQs", exact: false },
  { to: "/about", label: "About", exact: true },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string, exact: boolean) => {
    if (exact) {
      return pathname === to;
    }

    return pathname.startsWith(to);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        pathname === "/" && "bio-site-header",
        scrolled
          ? "border-[#CDEDD8] bg-white/[0.96] shadow-[0_2px_20px_-4px_rgba(24,169,87,0.09)] backdrop-blur-xl"
          : "border-[#CDEDD8]/60 bg-white/[0.95] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="BioBridge home"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#CDEDD8] bg-[#EAF7EF] transition-all group-hover:border-[#18A957]">
            <img
              src="/biobridge-logo.png"
              alt="BioBridge logo"
              className="h-7 w-7 object-contain"
              width={28}
              height={28}
              draggable={false}
            />
          </span>

          <span className="flex flex-col leading-none">
            <span className="font-display text-[16.5px] font-bold tracking-tight text-[#0E2F25]">
              Bio<span className="bio-gradient-text">Bridge</span>
            </span>

            <span
              className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-[#4A7A60]"
              aria-hidden="true"
            >
              Collegiate Hackathon
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={cn(
                "rounded-lg px-3 py-2 text-[13px] font-medium transition-colors",
                isActive(item.to, item.exact)
                  ? "bg-[#EAF7EF] text-[#18A957]"
                  : "text-[#4A7A60] hover:bg-[#F0F8F3] hover:text-[#0E2F25]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Register Button */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#18A957] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-[#087A43] hover:shadow-[0_4px_14px_-4px_rgba(24,169,87,0.5)]"
          >
            Register Now
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#CDEDD8] bg-white text-[#0E2F25] transition-colors hover:bg-[#EAF7EF] lg:hidden"
        >
          {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-[#CDEDD8] bg-white px-5 pb-5 pt-3 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-[14px] font-medium transition-colors",
                  isActive(item.to, item.exact)
                    ? "bg-[#EAF7EF] text-[#18A957]"
                    : "text-[#4A7A60] hover:bg-[#F0F8F3] hover:text-[#0E2F25]",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-[14px] font-medium transition-colors",
                pathname === "/about"
                  ? "bg-[#EAF7EF] text-[#18A957]"
                  : "text-[#4A7A60] hover:bg-[#F0F8F3] hover:text-[#0E2F25]",
              )}
            >
              About
            </Link>
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-[#CDEDD8] pt-4">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#18A957] px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#087A43]"
            >
              Register Now <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
