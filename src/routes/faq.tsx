import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — BioBridge 2026" },
    ],
  }),
  component: FAQPage,
});

type FAQ = { q: string; a: string };

const FAQS: { section: string; items: FAQ[] }[] = [
  {
    section: "Eligibility & Teams",
    items: [
      {
        q: "Who can apply to BioBridge?",
        a: "Any student currently enrolled in a recognised Indian college or university. This includes undergraduate, postgraduate, and research scholars across any discipline — biotechnology, life sciences, engineering, computer science, medicine, and more.",
      },
      {
        q: "What is the team size requirement?",
        a: "Teams must have a minimum of 2 and a maximum of 4 members. Solo applications are not accepted. Cross-disciplinary and cross-institution teams are strongly encouraged.",
      },
      {
        q: "Can team members be from different colleges?",
        a: "Yes. Cross-institution teams are allowed. The team lead's college is treated as the primary institution for communication and logistics.",
      },
      {
        q: "Can I be on more than one team?",
        a: "No. Each student may belong to only one team. Duplicate registrations will result in disqualification of the later entry.",
      },
      {
        q: "Is there a registration fee?",
        a: "No. BioBridge 2026 is completely free to apply and participate in.",
      },
    ],
  },
  {
    section: "Application Process",
    items: [
      {
        q: "What does the application involve?",
        a: "The application is a five-step online form covering your contact details, college information, team members, your selected problem statement, and a one-page PDF proposal. The entire process takes roughly 10–15 minutes with your team details ready.",
      },
      {
        q: "What is the one-pager template?",
        a: "The one-pager is a structured single-page PDF document where you outline your understanding of the problem, your proposed approach, and a brief feasibility argument. Download the official template from the Apply page or from the home page.",
      },
      {
        q: "What is the submission deadline?",
        a: "31 October 2026 at 6:30 PM IST. No extensions will be granted. We recommend submitting at least 24 hours before the deadline to avoid last-minute issues.",
      },
      {
        q: "Can we change our problem statement after submitting?",
        a: "No. Once submitted, the problem statement is locked. Make sure your team has agreed on the statement before completing the application.",
      },
      {
        q: "Can we submit more than one application?",
        a: "No. Each team may submit only one application. Additional submissions will be disqualified.",
      },
      {
        q: "How do I check my application status?",
        a: "Use the Check Status page and enter your Application ID (e.g. BB-2026-XXXXX) — it appears on your submission slip immediately after applying.",
      },
    ],
  },
  {
    section: "Problem Statements & Tracks",
    items: [
      {
        q: "How many problem statements are available?",
        a: "There are 36 curated problem statements across 7 innovation tracks: Precision Biotherapeutics, Diagnostics & Medical Devices, Bioinformatics & Bio-AI, Agri-Biotech, Functional Foods & Nutrition, Environmental & Industrial Biotech, and the Open Bio Track.",
      },
      {
        q: "Can we propose our own problem?",
        a: "Yes — the Open Bio Track includes a Wildcard statement (BB-OB-06) specifically for self-proposed problems. You must provide a self-proposed title and justify the need, feasibility, and impact in your one-pager.",
      },
      {
        q: "Can we work on a problem from any track?",
        a: "Yes. Any team member from any discipline may apply to any of the 7 tracks. There is no restriction based on your academic background.",
      },
      {
        q: "Where can I see all 36 problem statements?",
        a: "Visit the Challenges page. You can search by keyword, filter by track, and view the full description of each statement. Clicking 'Apply for this statement' takes you directly to the form with your choice preselected.",
      },
    ],
  },
  {
    section: "Mentoring Weekends",
    items: [
      {
        q: "What are the mentoring weekends?",
        a: "Shortlisted teams attend four structured weekend sessions with domain mentors: Weekend 1 (problem deep dive), Weekend 2 (design review), Weekend 3 (build sprint checkpoint), and Weekend 4 (pitch rehearsal). Exact dates are communicated after shortlisting.",
      },
      {
        q: "Is attendance at all four weekends mandatory?",
        a: "Yes. All team members must attend all four sessions. Missing more than one session will result in the team being withdrawn from the finale.",
      },
      {
        q: "Are the mentoring sessions online or in-person?",
        a: "This will be confirmed after shortlisting. Historically, BioBridge sessions have been a mix of in-person at KSR College of Technology and virtual sessions for outstation teams.",
      },
      {
        q: "Who are the mentors?",
        a: "Mentors are drawn from academia, biotech industry, startups, and research institutions. Each shortlisted team is paired with a domain mentor aligned to their problem statement's track.",
      },
    ],
  },
  {
    section: "Shortlisting & Finale",
    items: [
      {
        q: "How are teams shortlisted?",
        a: "Shortlisting is based on the quality and feasibility of the one-pager submission, team composition, and clarity of the problem-solution fit. Results are communicated within two weeks of the submission deadline.",
      },
      {
        q: "What happens at the grand finale?",
        a: "Shortlisted teams present a prototype or proof-of-concept and pitch their solution to a panel of jury members from academia and industry. The finale is held on campus at KSR College of Technology.",
      },
      {
        q: "Are there prizes?",
        a: "Yes — prize details including tracks and amounts will be announced on the website before the deadline. Follow the site and check back for updates.",
      },
    ],
  },
  {
    section: "Technical & Other",
    items: [
      {
        q: "The application saved my progress. Where is it stored?",
        a: "Your draft and submitted application are stored in your browser's localStorage. They are not sent to a server. This means data is specific to your browser and device — do not clear your browser data before submitting.",
      },
      {
        q: "I lost my Application ID. How do I find it?",
        a: "Visit the Check Status page and click 'Show applications submitted on this device'. This will list all applications saved in your browser's localStorage.",
      },
      {
        q: "Whom do I contact for support?",
        a: "Email biobridge@ksrct.ac.in for any queries not covered here. We typically respond within 2 business days.",
      },
    ],
  },
];

function AccordionItem({ q, a }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#CDEDD8] last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-semibold text-[#0E2F25]">{q}</span>
        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-[#18A957] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-[14px] leading-relaxed text-[#4A7A60]">{a}</p>}
    </div>
  );
}

function FAQPage() {
  return (
    <div className="bg-[#F8FCF8] min-h-screen">
      {/* ── Page header ── */}
      <div className="bg-white border-b border-[#CDEDD8]">
        <div className="mx-auto max-w-3xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#18A957]">
            Help Centre
          </p>
          <h1 className="mt-2 font-display text-[38px] font-extrabold text-[#0E2F25] sm:text-[46px]">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-[15.5px] text-[#4A7A60]">
            Everything you need to know about BioBridge 2026. Can't find your answer?{" "}
            <a
              href="mailto:biobridge@ksrct.ac.in"
              className="font-semibold text-[#18A957] underline underline-offset-2 hover:text-[#087A43]"
            >
              Email us.
            </a>
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="mx-auto max-w-3xl px-5 py-10 md:px-8">
        <div className="space-y-8">
          {FAQS.map((section) => (
            <div
              key={section.section}
              className="rounded-2xl border border-[#CDEDD8] bg-white shadow-[0_2px_8px_-4px_rgba(24,169,87,0.06)]"
            >
              {/* Section header */}
              <div className="border-b border-[#CDEDD8] px-6 py-4">
                <h2 className="font-display text-[16px] font-bold text-[#0E2F25]">
                  {section.section}
                </h2>
              </div>
              {/* Items */}
              <div className="px-6">
                {section.items.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Still have questions ── */}
        <div className="mt-10 rounded-2xl border border-[#CDEDD8] bg-[#0E2F25] p-8 text-center">
          <h3 className="font-display text-[22px] font-bold text-white">Still have questions?</h3>
          <p className="mt-2 text-[14px] text-white/65">
            Write to us at{" "}
            <a
              href="mailto:biobridge@ksrct.ac.in"
              className="font-semibold text-[#22C46A] hover:underline"
            >
              biobridge@ksrct.ac.in
            </a>{" "}
            or explore the website.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
              className="inline-flex items-center gap-2 rounded-xl bg-[#18A957] px-6 py-3 text-sm font-semibold text-white hover:bg-[#22C46A]"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/problems"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
            >
              Browse Challenges
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
