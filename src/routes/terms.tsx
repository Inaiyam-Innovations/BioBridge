import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Printer,
  ChevronRight,
  ExternalLink,
  ArrowUp,
  FileCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — BioBridge 2026" },
      {
        name: "description",
        content:
          "Official Terms & Conditions for BioBridge – Bio Innovation Hackathon. Organised collaboratively by K.S. Rangasamy College of Technology (KSRCT), Marabanu, and StartupTN.",
      },
    ],
    links: [{ rel: "canonical", href: "https://biobridge.pages.dev/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>("sec-1");

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("section[id^='sec-']");
      const scrollPos = window.scrollY + 200;
      for (const h of headings) {
        const top = (h as HTMLElement).offsetTop;
        const height = (h as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(h.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F4FAFB] py-10 sm:py-14 text-[#0B2A4A]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-[#366273]">
          <Link to="/" className="transition-colors hover:text-[#1599B5]">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#BEE3EA]" />
          <span className="text-[#0B2A4A] font-semibold">Terms &amp; Conditions</span>
        </nav>

        {/* Hero Document Header */}
        <header className="relative overflow-hidden rounded-3xl border border-[#BEE3EA] bg-white p-7 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-[#D9F2F6] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0E7E96] border border-[#BEE3EA]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Official Hackathon Regulations
              </div>
              <h1 className="mt-3 font-display text-[32px] sm:text-[44px] font-bold text-[#0B2A4A] leading-tight">
                BioBridge – Bio Innovation Hackathon
              </h1>
              <p className="font-display text-lg sm:text-xl font-semibold text-[#1599B5] mt-1">
                Terms &amp; Conditions
              </p>
              <p className="mt-2 text-sm sm:text-base text-[#366273] font-medium">
                Theme: <span className="text-[#0B2A4A] font-semibold">Bio-based Solutions for a Sustainable Tomorrow</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#BEE3EA] bg-white px-4 py-2.5 text-xs font-bold text-[#0B2A4A] shadow-sm transition-all hover:border-[#1599B5] hover:text-[#1599B5]"
              >
                <Printer className="h-4 w-4 text-[#1599B5]" />
                Print / Save PDF
              </button>
              <a
                href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#1599B5] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#0E7E96]"
              >
                Register on Unstop
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#EAF4F7] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#366273]">Organised By</span>
              <p className="font-bold text-[#0B2A4A] mt-0.5 leading-snug">
                KSRCT (Dept. of Biotech) · Marabanu · StartupTN
              </p>
            </div>
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#366273]">Registration Fee</span>
              <p className="font-bold text-emerald-700 mt-0.5">Free – No Registration Fee</p>
            </div>
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#366273]">Team Size</span>
              <p className="font-bold text-[#0E7E96] mt-0.5">2 to 4 Members (Same College)</p>
            </div>
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#366273]">Governing Law</span>
              <p className="font-bold text-[#0B2A4A] mt-0.5">Laws of India</p>
            </div>
          </div>
        </header>

        {/* Single Official Rule Callout */}
        <aside aria-label="Official Rule" className="mt-6 rounded-2xl border border-[#BEE3EA] bg-gradient-to-r from-[#D9F2F6]/70 via-white to-[#D9F2F6]/70 p-4 sm:p-5 text-xs text-[#366273] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <FileCheck className="h-5 w-5 text-[#1599B5] shrink-0" />
            <p className="leading-relaxed">
              <strong className="text-[#0B2A4A]">Organiser Check:</strong> One administrative point is kept consistent across Unstop, the website, registration form, and Terms &amp; Conditions — the official team size is strictly <strong>2–4 members</strong>.
            </p>
          </div>
          <Link
            to="/problems"
            className="shrink-0 rounded-lg bg-[#0B2A4A] px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#1599B5]"
          >
            Browse 36 Challenges →
          </Link>
        </aside>

        {/* Content Body: Table of Contents + Full Verbatim Sections */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          {/* Quick TOC Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-20 max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-[#BEE3EA] bg-white p-5 shadow-sm [scrollbar-width:thin]">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#1599B5] mb-3">
                Clauses Directory (1–52)
              </p>
              <ul className="space-y-1 text-xs">
                {[
                  { id: "sec-1", label: "1. About BioBridge" },
                  { id: "sec-2", label: "2. Organisers" },
                  { id: "sec-3", label: "3. Nature of the Event" },
                  { id: "sec-4", label: "4. Eligibility" },
                  { id: "sec-5", label: "5. Team Participation (2–4 members)" },
                  { id: "sec-6", label: "6. Registration (No Fee)" },
                  { id: "sec-7", label: "7. Problem Statement Structure" },
                  { id: "sec-8", label: "8. Problem Statement Selection" },
                  { id: "sec-9", label: "9. Problem Statement Codes" },
                  { id: "sec-10", label: "10. Open Bio Track – Wildcard" },
                  { id: "sec-11", label: "11. Round 1 – Idea Submission" },
                  { id: "sec-12", label: "12. Submission Deadlines" },
                  { id: "sec-13", label: "13. Evaluation and Shortlisting" },
                  { id: "sec-14", label: "14. Hackathon / Build Phase" },
                  { id: "sec-15", label: "15. Use of AI & Digital Tools" },
                  { id: "sec-16", label: "16. Biosafety & Responsible Innovation" },
                  { id: "sec-17", label: "17. Medical & Health-Related Solutions" },
                  { id: "sec-18", label: "18. Data, Privacy & Confidential Info" },
                  { id: "sec-19", label: "19. Originality & Plagiarism" },
                  { id: "sec-20", label: "20. Intellectual Property Rights" },
                  { id: "sec-21", label: "21. Third-Party Technology" },
                  { id: "sec-22", label: "22. Project Ownership & Responsibility" },
                  { id: "sec-23", label: "23. Participant Conduct" },
                  { id: "sec-24", label: "24. Fair Participation" },
                  { id: "sec-25", label: "25. Communication" },
                  { id: "sec-26", label: "26. Event Platform & Requirements" },
                  { id: "sec-27", label: "27. Presentation & Demonstration" },
                  { id: "sec-28", label: "28. Jury Evaluation" },
                  { id: "sec-29", label: "29. Mentoring" },
                  { id: "sec-30", label: "30. Certificates" },
                  { id: "sec-31", label: "31. Prizes & Recognition (₹18,000)" },
                  { id: "sec-32", label: "32. Prize Distribution Within Teams" },
                  { id: "sec-33", label: "33. Disqualification" },
                  { id: "sec-34", label: "34. Right to Verify Submissions" },
                  { id: "sec-35", label: "35. Modification of Event Format" },
                  { id: "sec-36", label: "36. Event Cancellation / Force Majeure" },
                  { id: "sec-37", label: "37. Photography, Video & Media" },
                  { id: "sec-38", label: "38. Publicity of Projects" },
                  { id: "sec-39", label: "39. Confidentiality" },
                  { id: "sec-40", label: "40. Limitation of Liability" },
                  { id: "sec-41", label: "41. No Guarantee of Outcomes" },
                  { id: "sec-42", label: "42. Regulatory Compliance" },
                  { id: "sec-43", label: "43. Research Material & References" },
                  { id: "sec-44", label: "44. Responsibility for Project Claims" },
                  { id: "sec-45", label: "45. Participant Data" },
                  { id: "sec-46", label: "46. Official Decision-Making" },
                  { id: "sec-47", label: "47. No Payment or Refund Policy" },
                  { id: "sec-48", label: "48. Acceptance of Terms" },
                  { id: "sec-49", label: "49. Amendments to Terms" },
                  { id: "sec-50", label: "50. Governing Law and Jurisdiction" },
                  { id: "sec-51", label: "51. Contact & Communication" },
                  { id: "sec-52", label: "52. Final Acknowledgement" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                        activeSection === item.id
                          ? "bg-[#D9F2F6] font-bold text-[#0E7E96]"
                          : "text-[#366273] hover:bg-[#F4FAFB] hover:text-[#0B2A4A]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Full Verbatim Text (8 cols desktop) */}
          <main className="lg:col-span-8 space-y-8">
            {/* 1. ABOUT BIOBRIDGE */}
            <section id="sec-1" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                1. About BioBridge
              </h2>
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <p>
                  BioBridge – Bio Innovation Hackathon is an innovation-focused hackathon designed to encourage students to identify, understand, and develop practical solutions to real-world challenges in biotechnology and allied sectors.
                </p>
                <p>
                  The event brings together <strong>biology, biotechnology, healthcare, agriculture, environmental science, food technology, bioinformatics, artificial intelligence, engineering, design, entrepreneurship, and other interdisciplinary domains</strong> to encourage the development of technology-enabled biological solutions.
                </p>
                <p>
                  BioBridge is structured around multiple challenge areas covering healthcare, diagnostics, genomics, agriculture, food, environmental biotechnology, industrial biotechnology, and emerging biological applications.
                </p>
                <p>
                  The objective of BioBridge is not limited to software development or conventional laboratory research. Participants are encouraged to think across disciplines and develop solutions that demonstrate:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Scientific relevance</li>
                  <li>Practical applicability</li>
                  <li>Innovation</li>
                  <li>Technical feasibility</li>
                  <li>Responsible biological innovation</li>
                  <li>Social or environmental impact</li>
                  <li>Scalability</li>
                  <li>Potential for real-world implementation</li>
                  <li>Entrepreneurship and deployment potential</li>
                </ul>
                <p>
                  The hackathon provides participants with an opportunity to transform an identified biological or biotechnology-related challenge into a structured solution concept, prototype, technology demonstration, research pathway, or deployable innovation.
                </p>
                <p>
                  Participation in BioBridge is subject to the eligibility criteria, submission requirements, timelines, safety requirements, evaluation procedures, and other conditions specified in these Terms &amp; Conditions.
                </p>
              </div>
            </section>

            {/* 2. ORGANISERS */}
            <section id="sec-2" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                2. Organisers
              </h2>
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <p>BioBridge is organised collaboratively by:</p>
                <ol className="list-decimal pl-5 space-y-1 font-semibold text-[#0B2A4A]">
                  <li>K.S. Rangasamy College of Technology (KSRCT) — Department of Biotechnology</li>
                  <li>Marabanu</li>
                  <li>StartupTN</li>
                </ol>
                <p>
                  The organisers may appoint coordinators, mentors, technical experts, scientific experts, jury members, volunteers, partner organisations, and other authorised personnel for conducting various stages of the event.
                </p>
                <p>
                  The organisers reserve the right to issue additional instructions, guidelines, templates, schedules, submission formats, or operational instructions during the event where necessary.
                </p>
                <p>
                  Such instructions, when officially communicated through the designated communication channels, shall be treated as supplementary to these Terms &amp; Conditions.
                </p>
              </div>
            </section>

            {/* 3. NATURE OF THE EVENT */}
            <section id="sec-3" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                3. Nature of the Event
              </h2>
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <p>
                  BioBridge is an innovation and problem-solving hackathon. Depending on the selected challenge and the participant's proposed approach, a solution may involve one or more of the following:
                </p>
                <div className="flex flex-wrap gap-1.5 py-2">
                  {[
                    "Software", "Artificial intelligence / Machine learning", "Bioinformatics", "Computational biology",
                    "Data science", "Digital health", "Diagnostics", "Hardware", "Sensors", "IoT", "Embedded systems",
                    "Biotechnology workflows", "Laboratory concepts", "Simulation", "Digital twins", "Mobile / Web apps",
                    "Research methodologies", "Agricultural biotechnology", "Food biotechnology", "Environmental biotechnology",
                    "Industrial biotechnology", "Sustainable biological processes", "Product concepts", "Business models",
                    "Hybrid technology solutions"
                  ].map((tag) => (
                    <span key={tag} className="rounded-md border border-[#BEE3EA] bg-[#F4FAFB] px-2.5 py-1 font-mono text-[11px] text-[#0E7E96]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p>
                  Participants are not required to use a particular programming language, framework, platform, laboratory technique, or technology stack unless specifically required by the selected problem statement.
                </p>
              </div>
            </section>

            {/* 4. ELIGIBILITY */}
            <section id="sec-4" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                4. Eligibility
              </h2>
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <p>
                  BioBridge is intended primarily for student innovators and interdisciplinary teams interested in biotechnology and allied fields. Participants should provide accurate academic and institutional information during registration.
                </p>
                <p>
                  Students from different academic disciplines may participate, provided that their proposed solution is relevant to the selected BioBridge challenge. Relevant disciplines include:
                </p>
                <p className="text-xs font-mono bg-[#F8FCFD] p-3 rounded-xl border border-[#E1F1F4] text-[#0B2A4A]">
                  Biotechnology · Bioinformatics · Microbiology · Biochemistry · Biomedical Engineering · Medicine and allied health sciences · Agriculture · Agricultural Engineering · Food Technology · Chemical Engineering · Environmental Science · Life Sciences · Computer Science · AI &amp; ML · Information Technology · Electronics &amp; Communication · Electrical Engineering · Mechanical Engineering · Design · Management · Entrepreneurship · Data Science.
                </p>
                <p>Interdisciplinary participation is encouraged.</p>
                <p>
                  The organisers reserve the right to verify participant eligibility at any stage of the event. Submission of false, misleading, incomplete, or unverifiable information may result in disqualification.
                </p>
              </div>
            </section>

            {/* 5. TEAM PARTICIPATION */}
            <section id="sec-5" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                5. Team Participation
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <p>
                  BioBridge shall be conducted through team-based participation. The official application specification provides for a <strong>team size of 2 to 4 members</strong>. Each team must register its members through the designated registration process.
                </p>
                <div className="rounded-xl border border-[#BEE3EA] bg-[#F8FCFD] p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-[#0B2A4A]">5.1 Team Size</h3>
                    <p className="text-xs sm:text-sm text-[#366273]"><strong>Minimum:</strong> 2 members · <strong>Maximum:</strong> 4 members. A team may not exceed the maximum permitted number of members.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B2A4A]">5.2 Single Institution Requirement</h3>
                    <p className="text-xs sm:text-sm text-[#366273]">All members of a team must belong to the <strong>same college or institution</strong>. A participant may not simultaneously represent multiple teams for the same problem statement or hackathon submission where such participation creates a conflict with the official event rules.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B2A4A]">5.3 Team Lead</h3>
                    <p className="text-xs sm:text-sm text-[#366273]">Each team must nominate one member as the Team Lead, who acts as the primary point of contact for registration, submission communication, shortlisting announcements, queries, presentation coordination, and clarifications.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B2A4A]">5.4 Team Member Information</h3>
                    <p className="text-xs sm:text-sm text-[#366273]">Each member may be required to provide full name, email address, mobile number, college/institution, course/programme, and year of study.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B2A4A]">5.5 Changes to Team Composition</h3>
                    <p className="text-xs sm:text-sm text-[#366273]">Once registration closes, changes to team composition are restricted. Any request to add, remove, or replace a member is considered only at the sole discretion of the organisers.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. REGISTRATION */}
            <section id="sec-6" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                6. Registration
              </h2>
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950">
                  <h3 className="font-bold">6.1 No Registration Fee</h3>
                  <p className="mt-1 text-xs sm:text-sm">
                    There is <strong>No registration fee</strong>, <strong>No application fee</strong>, <strong>No participation fee</strong>, and <strong>No payment required</strong> to submit an entry. Participants should not make any payment to any individual claiming to represent BioBridge unless officially communicated.
                  </p>
                </div>
                <h3 className="font-bold text-[#0B2A4A] pt-2">6.2 Registration Information</h3>
                <p>
                  Participants must complete the official registration form within the specified window. It collects team lead details, institution details, team members, category selection, problem statement selection, wildcard details where applicable, and the one-pager document.
                </p>
                <h3 className="font-bold text-[#0B2A4A] pt-2">6.3 Accurate Information</h3>
                <p>
                  Participants are responsible for ensuring all submitted details are accurate, complete, current, verifiable, and belong to the actual participating individuals.
                </p>
              </div>
            </section>

            {/* 7. PROBLEM STATEMENT STRUCTURE */}
            <section id="sec-7" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                7. Problem Statement Structure
              </h2>
              <div className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <p>
                  The official problem statement document contains <strong>36 problem statements across six core categories and an Open Bio Track</strong>:
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="p-3.5 rounded-xl border border-[#BEE3EA] bg-[#F8FCFD]">
                    <span className="font-mono text-xs font-bold text-[#1599B5]">7.1 Track BB-PB</span>
                    <h3 className="font-bold text-[#0B2A4A]">Precision Biotherapeutics &amp; Drug Discovery</h3>
                    <p className="text-xs text-[#366273] mt-0.5">Drug discovery, repurposing, protein structures, molecular interactions, AMR, antimicrobial peptides, biologics.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#BEE3EA] bg-[#F8FCFD]">
                    <span className="font-mono text-xs font-bold text-[#1599B5]">7.2 Track BB-DM</span>
                    <h3 className="font-bold text-[#0B2A4A]">Diagnostics &amp; Medical Devices</h3>
                    <p className="text-xs text-[#366273] mt-0.5">Low-cost diagnostics, screening, medical devices, point-of-care technologies, digital health, clinical decision support.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#BEE3EA] bg-[#F8FCFD]">
                    <span className="font-mono text-xs font-bold text-[#1599B5]">7.3 Track BB-BG</span>
                    <h3 className="font-bold text-[#0B2A4A]">Bioinformatics, Genomics &amp; Bio-AI</h3>
                    <p className="text-xs text-[#366273] mt-0.5">Genomics, variant analysis, bioinformatics, eDNA, pharmacogenomics, biomedical artificial intelligence, AI reliability.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#BEE3EA] bg-[#F8FCFD]">
                    <span className="font-mono text-xs font-bold text-[#1599B5]">7.4 Track BB-CA</span>
                    <h3 className="font-bold text-[#0B2A4A]">Climate-Resilient Agriculture &amp; Agri-Biotech</h3>
                    <p className="text-xs text-[#366273] mt-0.5">Agricultural biotechnology, crop health, biological inputs, soil health, traceability, tissue culture, climate resilience.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#BEE3EA] bg-[#F8FCFD]">
                    <span className="font-mono text-xs font-bold text-[#1599B5]">7.5 Track BB-FN</span>
                    <h3 className="font-bold text-[#0B2A4A]">Functional Foods, Nutrition &amp; Smart Proteins</h3>
                    <p className="text-xs text-[#366273] mt-0.5">Alternative proteins, food biotechnology, fermentation, food safety, nutrition, edible coatings, food adulteration.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#BEE3EA] bg-[#F8FCFD]">
                    <span className="font-mono text-xs font-bold text-[#1599B5]">7.6 Track BB-EW</span>
                    <h3 className="font-bold text-[#0B2A4A]">Environmental, Industrial &amp; Waste-to-Value Biotech</h3>
                    <p className="text-xs text-[#366273] mt-0.5">Bioremediation, waste valorisation, plastic degradation, industrial biotechnology, groundwater monitoring, agro-residue utilisation.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#BEE3EA] bg-[#F8FCFD]">
                    <span className="font-mono text-xs font-bold text-[#1599B5]">7.7 Track BB-OB</span>
                    <h3 className="font-bold text-[#0B2A4A]">Open Bio Track</h3>
                    <p className="text-xs text-[#366273] mt-0.5">Space life support, biosafety compliance, regulatory pathways, herbal authentication, virtual labs, and participant-proposed Wildcard.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 8–10: SELECTION, CODES & WILDCARD */}
            <section id="sec-8" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                8–10. Selection, Codes &amp; Wildcard
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">8. Problem Statement Selection</h3>
                  <p className="mt-1">Each team selects one problem statement. Once shortlisted, it is treated as locked unless permission is explicitly granted. Solutions must directly address the selected challenge.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">9. Problem Statement Codes</h3>
                  <p className="mt-1">Follows <code className="bg-[#D9F2F6] px-1.5 py-0.5 rounded font-mono text-xs font-bold text-[#0E7E96]">BB-[TRACK]-[NUMBER]</code> (e.g. BB-PB-01, BB-DM-01, BB-BG-01, BB-CA-01, BB-FN-01, BB-EW-01, BB-OB-01). Must be quoted accurately on all submissions.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">10. Open Bio Track – Wildcard</h3>
                  <p className="mt-1">Teams may propose their own challenge, which must be genuinely biological, defined, safe, and lawful. Wildcard ideas are reviewed by organisers prior to approval.</p>
                </div>
              </div>
            </section>

            {/* 11–12: ROUND 1 SUBMISSION & DEADLINES */}
            <section id="sec-11" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                11–12. Round 1 – Idea Submission &amp; Deadlines
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">11. Round 1 – Idea Submission</h3>
                  <p className="mt-1">
                    Teams submit a structured <strong>one-pager in PDF format</strong> following the supplied template (max 5 MB).
                  </p>
                  <p className="mt-2 text-xs text-[#366273]">
                    <strong>Should communicate:</strong> Problem understanding, target user/beneficiary, proposed solution, biological/scientific basis, technology approach, innovation, impact, feasibility, implementation, scalability. Recommended filename: <code className="bg-[#D9F2F6] px-1 rounded font-mono">TeamName_StatementCode.pdf</code>.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">12. Submission Deadlines</h3>
                  <p className="mt-1">Submissions must be completed before the deadline. Technical issues or device errors do not guarantee extensions.</p>
                </div>
              </div>
            </section>

            {/* 13–15: EVALUATION, BUILD & AI TOOLS */}
            <section id="sec-13" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                13–15. Evaluation, Build Phase &amp; AI Tools
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">13. Evaluation &amp; Shortlisting</h3>
                  <p className="mt-1">Evaluated by an expert panel of faculty, researchers, industry specialists, and entrepreneurs. Panel decisions are final.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">14. Hackathon / Build Phase</h3>
                  <p className="mt-1">Shortlisted teams advance to the 4-week build sprint with 4 mandatory online weekend sessions, developing prototypes, decks, and validation pathways.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">15. Use of AI and Digital Tools</h3>
                  <p className="mt-1">AI tools are permitted, but participants are strictly accountable for scientific claims, data accuracy, and citations. Fabricated citations lead to immediate disqualification.</p>
                </div>
              </div>
            </section>

            {/* 16–18: BIOSAFETY, HEALTHCARE & PRIVACY */}
            <section id="sec-16" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                16–18. Biosafety, Health Solutions &amp; Data
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">16. Biological Safety and Responsible Innovation</h3>
                  <p className="mt-1">
                    Biosafety and responsible innovation are fundamental. No unauthorised laboratory experiments, handling of hazardous biological agents, or unapproved human/animal testing. BioBridge does not provide external laboratory access or regulatory permits.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">17. Medical and Health-Related Solutions</h3>
                  <p className="mt-1">Must distinguish between prototypes/concepts and clinically validated medical products. Any medical decision-support must acknowledge the requirement for professional clinician involvement.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">18. Data, Privacy and Confidential Information</h3>
                  <p className="mt-1">Do not submit confidential patient records, unanonymised genetic data, or proprietary third-party datasets without authorization.</p>
                </div>
              </div>
            </section>

            {/* 19–22: ORIGINALITY, IP & THIRD PARTY */}
            <section id="sec-19" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                19–22. Originality, IP Rights &amp; Third-Party Tech
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">19. Originality and Plagiarism</h3>
                  <p className="mt-1">Work must be original. Plagiarism, data fabrication, or copying other teams results in immediate disqualification.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">20. Intellectual Property Rights</h3>
                  <p className="mt-1">
                    Participants <strong>retain ownership of intellectual property</strong> that they independently create, subject to existing institutional policies or open-source licences.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">21. Third-Party Technology</h3>
                  <p className="mt-1">APIs, open-source libraries, and models must comply with their respective licences.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">22. Project Ownership &amp; Team Responsibility</h3>
                  <p className="mt-1">The team is collectively responsible for internal arrangements regarding contribution and IP.</p>
                </div>
              </div>
            </section>

            {/* 23–26: CONDUCT, FAIRNESS & PLATFORMS */}
            <section id="sec-23" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                23–26. Conduct, Fair Participation &amp; Platforms
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">23–24. Conduct &amp; Fair Participation</h3>
                  <p className="mt-1">Professional conduct, mutual respect, and fairness are strictly enforced. Cheating, bribery, impersonation, or platform abuse will trigger immediate removal.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">25–26. Communication &amp; Platforms</h3>
                  <p className="mt-1">Official communication flows through email, Unstop, and the official website. Participants are responsible for having standard laptop and internet resources.</p>
                </div>
              </div>
            </section>

            {/* 27–30: PRESENTATIONS, JURY, MENTORING & CERTIFICATES */}
            <section id="sec-27" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                27–30. Presentations, Jury, Mentoring &amp; Certificates
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">27–28. Presentation &amp; Jury Evaluation</h3>
                  <p className="mt-1">Shortlisted teams pitch before a grand jury evaluated on problem understanding, scientific relevance, innovation, feasibility, impact, scalability, and responsible innovation.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">29–30. Mentoring &amp; Certificates</h3>
                  <p className="mt-1">Mentoring offers guidance without commercial guarantee. Participation certificates are awarded to eligible teams who satisfy all requirements.</p>
                </div>
              </div>
            </section>

            {/* 31–33: PRIZES & DISQUALIFICATION */}
            <section id="sec-31" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                31–33. Prizes, Recognition &amp; Disqualification
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">31. Prizes and Recognition</h3>
                  <p className="mt-1">The currently announced prize structure is:</p>
                  <div className="mt-2.5 overflow-hidden rounded-xl border border-[#BEE3EA]">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#D9F2F6] font-mono text-[#0B2A4A]">
                        <tr>
                          <th className="p-3">Position</th>
                          <th className="p-3 text-right">Prize</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EAF4F7]">
                        <tr>
                          <td className="p-3 font-semibold">1st Prize</td>
                          <td className="p-3 text-right font-bold text-[#0B2A4A]">₹10,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">2nd Prize</td>
                          <td className="p-3 text-right font-bold text-[#0B2A4A]">₹5,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">3rd Prize</td>
                          <td className="p-3 text-right font-bold text-[#0B2A4A]">₹3,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs font-mono font-bold text-[#1599B5]">Total announced prize pool: ₹18,000</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A]">32–33. Prize Distribution &amp; Disqualification</h3>
                  <p className="mt-1">Prizes are distributed to the registered team upon verification. Disqualification may occur at any stage for violations of rules, eligibility, or safety guidelines.</p>
                </div>
              </div>
            </section>

            {/* 34–40: OPERATIONS, MEDIA & LIABILITY */}
            <section id="sec-34" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                34–40. Operations, Media &amp; Liability
              </h2>
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <p><strong>34. Right to Verify:</strong> Organisers may request additional academic, institutional, or dataset proof.</p>
                <p><strong>35. Format Modification:</strong> Organisers reserve the right to modify schedules, rounds, or formats when administratively required.</p>
                <p><strong>36. Force Majeure:</strong> Delays caused by natural disasters, government restrictions, or outages will be rescheduled where reasonably possible.</p>
                <p><strong>37–39. Photography, Media &amp; Confidentiality:</strong> Event proceedings may be recorded for legitimate institutional and promotional purposes. Presentations are public; teams with patentable inventions should take precautions prior to demo day.</p>
                <p><strong>40. Limitation of Liability:</strong> Organisers and partner institutions are not liable for participants' personal equipment or data loss.</p>
              </div>
            </section>

            {/* 41–47: REGULATORY, CLAIMS & NO REFUND */}
            <section id="sec-41" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                41–47. Regulatory Compliance, Claims &amp; No Refund Policy
              </h2>
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <p><strong>41. No Commercial Guarantee:</strong> Participation does not guarantee funding, employment, or commercialisation.</p>
                <p><strong>42. Regulatory Compliance:</strong> Participants are responsible for understanding applicable regulations (CDSCO, FSSAI, GEAC, BIS, etc.).</p>
                <p><strong>43–44. References &amp; Claims:</strong> Credible scientific references must be acknowledged; teams are held strictly accountable for claims in their pitches.</p>
                <p><strong>45. Participant Data:</strong> Data collected is used solely for legitimate event administration.</p>
                <p><strong>46. Official Decisions:</strong> Operational and evaluation decisions by the organisers and jury panel are authoritative.</p>
                <p><strong>47. No Payment or Refund Policy:</strong> As BioBridge is 100% free with no fee at any stage, no refund policy applies.</p>
              </div>
            </section>

            {/* 48–52: ACCEPTANCE, GOVERNING LAW & FINAL ACKNOWLEDGEMENT */}
            <section id="sec-48" className="scroll-mt-24 rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2A4A] border-b border-[#EAF4F7] pb-3 mb-4">
                48–52. Acceptance, Jurisdiction &amp; Acknowledgement
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#366273]">
                <p><strong>48. Acceptance of Terms:</strong> By registering, participants confirm they have read, understood, and agreed to all Terms &amp; Conditions.</p>
                <p><strong>49. Amendments:</strong> Officially published updates supersede earlier versions.</p>
                <p><strong>50. Governing Law:</strong> Governed by the laws of India, under the jurisdiction of competent courts in Tamil Nadu.</p>
                <p><strong>51. Contact &amp; Communication:</strong> For official queries, contact organizers at: <strong>+91 9751664966</strong> or <strong>+91 9489243775</strong>.</p>
                <div className="rounded-xl border border-[#BEE3EA] bg-[#F4FAFB] p-4 text-[#0B2A4A]">
                  <h3 className="font-bold text-sm">52. Final Acknowledgement</h3>
                  <p className="mt-1 text-xs text-[#366273] leading-relaxed">
                    BioBridge is designed as an innovation platform where students can explore biological challenges and develop responsible, technology-enabled solutions with scientific curiosity, ethical thinking, and entrepreneurial drive.
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#0E7E96]">
                    By registering for BioBridge – Bio Innovation Hackathon, every participant and team agrees to abide by these Terms &amp; Conditions and all official instructions issued by the organisers.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Back to top & CTA Footer */}
        <div className="mt-12 pt-6 border-t border-[#BEE3EA] flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1599B5] hover:underline"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </button>
          <div className="flex items-center gap-3">
            <Link
              to="/problems"
              className="rounded-xl border border-[#BEE3EA] bg-white px-4 py-2 text-xs font-bold text-[#0B2A4A] shadow-sm hover:border-[#1599B5]"
            >
              Explore 36 Problems
            </Link>
            <a
              href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#1599B5] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0E7E96]"
            >
              Register Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
