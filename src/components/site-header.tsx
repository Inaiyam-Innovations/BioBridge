import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const REGISTER_URL =
  "https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

const NAV_LINKS = [
  { href: "/#home", label: "Home", isRoute: false },
  { href: "/problems", label: "Challenges", isRoute: true },
  { href: "/#how-it-works", label: "How It Works", isRoute: false },
  { href: "/#sessions", label: "Sessions", isRoute: false },
  { href: "/#prizes", label: "Prizes", isRoute: false },
  { href: "/#partners", label: "Partners", isRoute: false },
  { href: "/#faq", label: "FAQs", isRoute: false },
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        pathname === "/" && "bio-site-header",
        scrolled
          ? "border-[#BEE3EA] bg-white/[0.96] shadow-[0_2px_20px_-4px_rgba(11,42,74,0.08)] backdrop-blur-xl"
          : "border-[#BEE3EA]/60 bg-white/[0.95] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        {/* Final Hero Logo */}
        <Link
          to="/"
          className="group flex shrink-0 items-center transition-transform duration-200 hover:scale-[1.02]"
          aria-label="BioBridge home"
        >
          <img
            src="/biobridge-wordmark.png"
            alt="BioBridge — Ideas for a healthier tomorrow"
            className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_1px_2px_rgba(11,42,74,0.06)]"
            draggable={false}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-[13px] font-medium transition-colors",
                  pathname.startsWith(item.href)
                    ? "bg-[#D9F2F6] text-[#1599B5]"
                    : "text-[#366273] hover:bg-[#EDF7F9] hover:text-[#0B2A4A]",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.label === "FAQs") {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent("open-biobridge-faq"));
                  }
                }}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-[#366273] transition-colors hover:bg-[#EDF7F9] hover:text-[#0B2A4A]"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        {/* Desktop Register Button */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#1599B5] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-[#0E7E96] hover:shadow-[0_4px_14px_-4px_rgba(21,153,181,0.5)]"
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
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#BEE3EA] bg-white text-[#0B2A4A] transition-colors hover:bg-[#D9F2F6] lg:hidden"
        >
          {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-[#BEE3EA] bg-white px-5 pb-5 pt-3 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-[14px] font-medium transition-colors",
                    pathname.startsWith(item.href)
                      ? "bg-[#D9F2F6] text-[#1599B5]"
                      : "text-[#366273] hover:bg-[#EDF7F9] hover:text-[#0B2A4A]",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setOpen(false);
                    if (item.label === "FAQs") {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent("open-biobridge-faq"));
                    }
                  }}
                  className="rounded-xl px-4 py-3 text-[14px] font-medium text-[#366273] transition-colors hover:bg-[#EDF7F9] hover:text-[#0B2A4A]"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-[#BEE3EA] pt-4">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1599B5] px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#0E7E96]"
            >
              Register Now <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
