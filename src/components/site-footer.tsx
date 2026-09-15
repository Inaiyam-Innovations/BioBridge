import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const REGISTER_URL =
	"https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

const NAV_SECTIONS = [
	{
		heading: "Hackathon",
		links: [
			{ to: "/problems", label: "Challenges" },
			{ to: "/details", label: "How It Works" },
			{ to: "/details", label: "Timeline" },
			{ to: "/about", label: "About BioBridge" },
		],
	},
	{
		heading: "Participate",
		links: [
			{ to: REGISTER_URL, label: "Register Now", external: true },
			{ to: "/status", label: "Check Status" },
			{ to: "/faq", label: "FAQs" },
		],
	},
] as const;

const PARTNERS = [
	{ name: "MARABANU" },
	{ name: "StartupTN" },
	{ name: "KSR College of Technology" },
] as const;

export function SiteFooter() {
	return (
		<footer className="mt-24 border-t border-[#CDEDD8] bg-[#F0F8F3]">
			<div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
					<div className="lg:col-span-2">
						<Link to="/" className="group inline-flex items-center gap-3" aria-label="BioBridge home">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#CDEDD8] bg-[#EAF7EF] transition-all group-hover:border-[#18A957]">
								<img src="/biobridge-logo.png" alt="BioBridge logo" className="h-8 w-8 object-contain" width={32} height={32} draggable={false} />
							</span>
							<span className="flex flex-col leading-none">
								<span className="font-display text-[18px] font-bold tracking-tight text-[#0E2F25]">Bio<span className="bio-gradient-text">Bridge</span></span>
								<span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#4A7A60]">Collegiate Hackathon 2026</span>
							</span>
						</Link>
						<p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-[#4A7A60]">A national student biotechnology hackathon bringing ideas, technology, biology and innovation together to solve real-world challenges across India.</p>
						<a href="mailto:biobridge@ksrct.ac.in" className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#CDEDD8] bg-white px-3.5 py-2 text-xs font-medium text-[#0E2F25] transition-colors hover:border-[#18A957] hover:text-[#18A957]"><Mail className="h-3.5 w-3.5" />biobridge@ksrct.ac.in</a>
					</div>
					{NAV_SECTIONS.map((section) => (
						<div key={section.heading}>
							<p className="mb-4 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#18A957]">{section.heading}</p>
							<ul className="space-y-2.5">
								{section.links.map((link) => (
									<li key={link.label}>{"external" in link && link.external ? <a href={link.to} target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-[#4A7A60] transition-colors hover:text-[#18A957]">{link.label}</a> : <Link to={link.to} className="text-[13.5px] text-[#4A7A60] transition-colors hover:text-[#18A957]">{link.label}</Link>}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="mt-12 border-t border-[#CDEDD8] pt-8">
					<p className="mb-4 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#18A957]">Supported by</p>
					<div className="flex flex-wrap gap-3">{PARTNERS.map((partner) => <div key={partner.name} className="inline-flex items-center gap-2.5 rounded-lg border border-[#CDEDD8] bg-white px-4 py-2.5"><span className="h-1.5 w-1.5 rounded-full bg-[#18A957]" /><span className="text-[13px] font-medium text-[#0E2F25]">{partner.name}</span></div>)}</div>
				</div>
			</div>
			<div className="border-t border-[#CDEDD8] bg-[#EAF7EF]"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-8"><p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#4A7A60]">© 2026 BioBridge · All rights reserved</p><div className="flex flex-wrap items-center gap-4"><Link to="/about" className="font-mono text-[11px] text-[#4A7A60] transition-colors hover:text-[#18A957]">About</Link><Link to="/faq" className="font-mono text-[11px] text-[#4A7A60] transition-colors hover:text-[#18A957]">FAQs</Link><p className="font-mono text-[11px] text-[#4A7A60]">Data stored locally on this device</p></div></div></div>
		</footer>
	);
}
