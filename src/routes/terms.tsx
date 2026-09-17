import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  ShieldCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  Printer,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — BioBridge 2026" },
      {
        name: "description",
        content:
          "Official Terms & Conditions for BioBridge – Bio Innovation Hackathon 2026. Organised collaboratively by K.S. Rangasamy College of Technology, Marabanu, and StartupTN.",
      },
    ],
    links: [{ rel: "canonical", href: "https://biobridge.pages.dev/terms" }],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    id: "1",
    num: "01",
    title: "About BioBridge",
    content: (
      <>
        <p>
          BioBridge – Bio Innovation Hackathon is an innovation-focused hackathon designed to encourage students to identify, understand, and develop practical solutions to real-world challenges in biotechnology and allied sectors.
        </p>
        <p className="mt-3">
          The event brings together <strong>biology, biotechnology, healthcare, agriculture, environmental science, food technology, bioinformatics, artificial intelligence, engineering, design, entrepreneurship, and other interdisciplinary domains</strong> to encourage the development of technology-enabled biological solutions.
        </p>
        <p className="mt-3">
          BioBridge is structured around multiple challenge areas covering healthcare, diagnostics, genomics, agriculture, food, environmental biotechnology, industrial biotechnology, and emerging biological applications.
        </p>
        <p className="mt-3">
          The objective of BioBridge is not limited to software development or conventional laboratory research. Participants are encouraged to think across disciplines and develop solutions that demonstrate:
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-[#366273]">
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
        <p className="mt-3">
          The hackathon provides participants with an opportunity to transform an identified biological or biotechnology-related challenge into a structured solution concept, prototype, technology demonstration, research pathway, or deployable innovation.
        </p>
        <p className="mt-3">
          Participation in BioBridge is subject to the eligibility criteria, submission requirements, timelines, safety requirements, evaluation procedures, and other conditions specified in these Terms &amp; Conditions.
        </p>
      </>
    ),
  },
  {
    id: "2",
    num: "02",
    title: "Organisers",
    content: (
      <>
        <p>BioBridge is organised collaboratively by:</p>
        <ol className="mt-2 list-decimal pl-5 space-y-1 font-semibold text-[#0B2A4A]">
          <li>K.S. Rangasamy College of Technology (KSRCT) — Department of Biotechnology</li>
          <li>Marabanu</li>
          <li>StartupTN</li>
        </ol>
        <p className="mt-3">
          The organisers may appoint coordinators, mentors, technical experts, scientific experts, jury members, volunteers, partner organisations, and other authorised personnel for conducting various stages of the event.
        </p>
        <p className="mt-3">
          The organisers reserve the right to issue additional instructions, guidelines, templates, schedules, submission formats, or operational instructions during the event where necessary.
        </p>
        <p className="mt-3">
          Such instructions, when officially communicated through the designated communication channels, shall be treated as supplementary to these Terms &amp; Conditions.
        </p>
      </>
    ),
  },
  {
    id: "3",
    num: "03",
    title: "Nature of the Event",
    content: (
      <>
        <p>
          BioBridge is an innovation and problem-solving hackathon. Depending on the selected challenge and the participant's proposed approach, a solution may involve one or more of the following:
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#366273]">
          Software · Artificial intelligence or machine learning · Bioinformatics · Computational biology · Data science · Digital health · Diagnostics · Hardware · Sensors · IoT · Embedded systems · Biotechnology workflows · Laboratory concepts · Simulation · Digital twins · Mobile or web applications · Research methodologies · Agricultural biotechnology · Food biotechnology · Environmental biotechnology · Industrial biotechnology · Sustainable biological processes · Product concepts · Business models · Hybrid technology solutions.
        </p>
        <p className="mt-3">
          Participants are not required to use a particular programming language, framework, platform, laboratory technique, or technology stack unless specifically required by the selected problem statement.
        </p>
      </>
    ),
  },
  {
    id: "4",
    num: "04",
    title: "Eligibility",
    content: (
      <>
        <p>
          BioBridge is intended primarily for student innovators and interdisciplinary teams interested in biotechnology and allied fields. Participants should provide accurate academic and institutional information during registration.
        </p>
        <p className="mt-3">
          Students from different academic disciplines may participate, provided that their proposed solution is relevant to the selected BioBridge challenge. Relevant disciplines include Biotechnology, Bioinformatics, Microbiology, Biochemistry, Biomedical Engineering, Medicine and allied health sciences, Agriculture, Food Technology, Chemical Engineering, Environmental Science, Life Sciences, Computer Science, AI/ML, IT, Electronics, Mechanical, Design, Management, Entrepreneurship, and Data Science. Interdisciplinary participation is strongly encouraged.
        </p>
        <p className="mt-3">
          The organisers reserve the right to verify participant eligibility at any stage of the event. Submission of false, misleading, incomplete, or unverifiable information may result in disqualification.
        </p>
      </>
    ),
  },
  {
    id: "5",
    num: "05",
    title: "Team Participation",
    content: (
      <>
        <p>
          BioBridge shall be conducted through team-based participation. The official application specification provides for a <strong>team size of 2 to 4 members</strong>.
        </p>
        <div className="mt-4 space-y-3 pl-4 border-l-2 border-[#1599B5]">
          <div>
            <h4 className="font-bold text-[#0B2A4A]">5.1 Team Size</h4>
            <p className="text-sm text-[#366273]">Minimum: 2 members · Maximum: 4 members. A team may not exceed 4 members.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#0B2A4A]">5.2 Single Institution Requirement</h4>
            <p className="text-sm text-[#366273]">All members of a team must belong to the <strong>same college or institution</strong>. A participant may not simultaneously represent multiple teams for the same problem statement or hackathon submission.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#0B2A4A]">5.3 Team Lead</h4>
            <p className="text-sm text-[#366273]">Each team must nominate one member as Team Lead, acting as primary contact for registrations, updates, shortlisting, presentations, and queries.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#0B2A4A]">5.4 Team Member Information</h4>
            <p className="text-sm text-[#366273]">Each team member must provide accurate full name, email, mobile number, college/institution, course, and year of study.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#0B2A4A]">5.5 Changes to Team Composition</h4>
            <p className="text-sm text-[#366273]">Once the registration or submission deadline has passed, changes to team composition are restricted and remain at the sole discretion of the organisers.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "6",
    num: "06",
    title: "Registration & Zero Fee Policy",
    content: (
      <>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
          <p className="font-bold">6.1 100% Free Participation</p>
          <p className="mt-1 text-sm">
            There is <strong>No registration fee</strong>, <strong>No application fee</strong>, <strong>No participation fee</strong>, and <strong>No payment required</strong> to submit an entry at any stage.
          </p>
        </div>
        <p className="mt-3">
          Participants must complete the official registration form within the announced period with complete, verifiable data.
        </p>
      </>
    ),
  },
  {
    id: "7",
    num: "07",
    title: "Problem Statement Structure",
    content: (
      <>
        <p>
          BioBridge includes <strong>36 problem statements</strong> across six core categories and an Open Bio Track:
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm font-medium text-[#0B2A4A]">
          <li className="rounded-lg border border-[#BEE3EA] bg-white p-2.5">
            <strong>7.1 BB-PB:</strong> Precision Biotherapeutics &amp; Drug Discovery
          </li>
          <li className="rounded-lg border border-[#BEE3EA] bg-white p-2.5">
            <strong>7.2 BB-DM:</strong> Diagnostics &amp; Medical Devices
          </li>
          <li className="rounded-lg border border-[#BEE3EA] bg-white p-2.5">
            <strong>7.3 BB-BG:</strong> Bioinformatics, Genomics &amp; Bio-AI
          </li>
          <li className="rounded-lg border border-[#BEE3EA] bg-white p-2.5">
            <strong>7.4 BB-CA:</strong> Climate-Resilient Agriculture &amp; Agri-Biotech
          </li>
          <li className="rounded-lg border border-[#BEE3EA] bg-white p-2.5">
            <strong>7.5 BB-FN:</strong> Functional Foods, Nutrition &amp; Smart Proteins
          </li>
          <li className="rounded-lg border border-[#BEE3EA] bg-white p-2.5">
            <strong>7.6 BB-EW:</strong> Environmental, Industrial &amp; Waste-to-Value Biotech
          </li>
          <li className="rounded-lg border border-[#BEE3EA] bg-white p-2.5 sm:col-span-2">
            <strong>7.7 BB-OB:</strong> Open Bio Track (Space life support, Biosafety, Regulatory pathways, Herbal authentication, Virtual labs, &amp; Wildcard)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "8-10",
    num: "08–10",
    title: "Selection, Codes & Wildcard Rules",
    content: (
      <>
        <p>
          <strong>8. Selection:</strong> Each team selects one problem statement. Once shortlisted, the statement is locked unless changed with organiser permission.
        </p>
        <p className="mt-3">
          <strong>9. Identification Codes:</strong> Teams must quote the official format <code className="rounded bg-[#D9F2F6] px-1.5 py-0.5 text-[#0E7E96] font-mono font-bold">BB-[TRACK]-[NUMBER]</code> (e.g., BB-PB-01) on all deliverables.
        </p>
        <p className="mt-3">
          <strong>10. Open Bio Wildcard:</strong> Self-proposed problems must be genuinely biological/biotech-focused, safe, lawful, and subject to organiser review and explicit approval.
        </p>
      </>
    ),
  },
  {
    id: "11-12",
    num: "11–12",
    title: "Round 1 — Idea Submission & Deadlines",
    content: (
      <>
        <p>
          <strong>11. One-Pager Submission:</strong> Teams must submit a structured one-pager in <strong>PDF format</strong> (recommended max 5 MB) following the official BioBridge template, addressing problem understanding, target beneficiary, proposed solution, biology/tech approach, and feasibility. Recommended file name: <code className="rounded bg-[#D9F2F6] px-1.5 py-0.5 font-mono text-xs">TeamName_StatementCode.pdf</code>.
        </p>
        <p className="mt-3">
          <strong>12. Deadlines:</strong> Submissions must be uploaded before the close of the announced window. Late, corrupted, or incomplete files will not be evaluated.
        </p>
      </>
    ),
  },
  {
    id: "13-15",
    num: "13–15",
    title: "Evaluation, Build Phase & AI Tool Usage",
    content: (
      <>
        <p>
          <strong>13. Evaluation Panel:</strong> Composed of faculty, biotechnology experts, researchers, industry professionals, and entrepreneurs. Decisions are final.
        </p>
        <p className="mt-3">
          <strong>14. Build Phase:</strong> Shortlisted teams participate in a 4-week venture sprint with weekend sessions, developing technical, prototype, design, or commercial pathways.
        </p>
        <p className="mt-3">
          <strong>15. AI &amp; Digital Tools:</strong> AI-assisted tools may be used responsibly, but participants remain fully accountable for scientific accuracy, originality, and data integrity. Fabricated citations or claims lead to immediate disqualification.
        </p>
      </>
    ),
  },
  {
    id: "16-18",
    num: "16–18",
    title: "Biological Safety, Health Solutions & Data Privacy",
    content: (
      <>
        <p>
          <strong>16. Biosafety &amp; Ethics:</strong> Biosafety and responsible innovation are fundamental. No unauthorised laboratory experiments, handling of hazardous biological agents, or unapproved human/animal testing. BioBridge does not grant external laboratory permissions.
        </p>
        <p className="mt-3">
          <strong>17. Healthcare &amp; Medical Claims:</strong> Healthcare concepts and screening prototypes must be clearly identified as research/demonstration and never represented as clinically certified products without validated trials.
        </p>
        <p className="mt-3">
          <strong>18. Data &amp; Confidentiality:</strong> Teams must use open, synthetic, or properly licensed datasets. Do not submit private patient records, confidential genetic data, or proprietary third-party datasets without authorization.
        </p>
      </>
    ),
  },
  {
    id: "19-22",
    num: "19–22",
    title: "Originality, IP Rights & Third-Party Tech",
    content: (
      <>
        <p>
          <strong>19. Originality:</strong> Plagiarism, result fabrication, and copying submissions are strictly prohibited.
        </p>
        <p className="mt-3">
          <strong>20. IP Ownership:</strong> Participants retain ownership of intellectual property they independently create during the hackathon, subject to prior institutional or third-party rights.
        </p>
        <p className="mt-3">
          <strong>21. Third-Party Technology:</strong> Use of open-source frameworks, APIs, and libraries must comply with their respective licences.
        </p>
        <p className="mt-3">
          <strong>22. Team Responsibility:</strong> Internal agreements regarding IP, authorship, or prize division are solely the team's internal responsibility.
        </p>
      </>
    ),
  },
  {
    id: "23-26",
    num: "23–26",
    title: "Conduct, Fair Participation & Event Platforms",
    content: (
      <>
        <p>
          <strong>23. Participant Conduct:</strong> Mutual respect, professionalism, and integrity are mandatory. Harassment, disruption, or system tampering will trigger immediate removal.
        </p>
        <p className="mt-3">
          <strong>24. Fair Competition:</strong> No bribery, collusion, impersonation, or unfair attempts to influence evaluations.
        </p>
        <p className="mt-3">
          <strong>25. Official Channels:</strong> Official updates are released via the website, Unstop, and designated organizers. The Team Lead is responsible for informing all members.
        </p>
        <p className="mt-3">
          <strong>26. Platform &amp; Hardware:</strong> Teams are responsible for their own devices, internet connectivity, and computing environments.
        </p>
      </>
    ),
  },
  {
    id: "27-30",
    num: "27–30",
    title: "Presentations, Jury, Mentoring & Certificates",
    content: (
      <>
        <p>
          <strong>27. Final Presentations:</strong> Finalist teams pitch before the grand jury covering problem, scientific basis, tech prototype, market impact, and implementation roadmap.
        </p>
        <p className="mt-3">
          <strong>28. Jury Decision:</strong> Evaluated on problem understanding, scientific relevance, innovation, feasibility, impact, scalability, and responsible innovation.
        </p>
        <p className="mt-3">
          <strong>29. Mentoring Disclaimer:</strong> Mentorship provides guidance but does not constitute commercial, investment, or regulatory guarantees.
        </p>
        <p className="mt-3">
          <strong>30. Certificates:</strong> Participation certificates are awarded to eligible teams who fulfill all submission and event requirements.
        </p>
      </>
    ),
  },
  {
    id: "31-33",
    num: "31–33",
    title: "Prizes, Distribution & Disqualification",
    content: (
      <>
        <p>
          <strong>31. Announced Prizes:</strong>
        </p>
        <div className="mt-2 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3">
            <span className="font-mono text-xs font-bold text-amber-700">1st Prize</span>
            <p className="font-display text-lg font-bold text-[#0B2A4A]">₹10,000</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <span className="font-mono text-xs font-bold text-slate-600">2nd Prize</span>
            <p className="font-display text-lg font-bold text-[#0B2A4A]">₹5,000</p>
          </div>
          <div className="rounded-xl border border-amber-300 bg-amber-100/40 p-3">
            <span className="font-mono text-xs font-bold text-amber-800">3rd Prize</span>
            <p className="font-display text-lg font-bold text-[#0B2A4A]">₹3,000</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-[#366273]">
          <strong>Total announced cash prize pool: ₹18,000</strong> plus six-month incubation support with MARABANU.
        </p>
        <p className="mt-3">
          <strong>32. Prize Distribution:</strong> Released to the registered team upon verification of student identity, college affiliation, and payment details.
        </p>
        <p className="mt-3">
          <strong>33. Disqualification:</strong> Breaches of eligibility, biosafety, originality, or team guidelines result in forfeiture of prizes and certificates.
        </p>
      </>
    ),
  },
  {
    id: "34-40",
    num: "34–40",
    title: "Event Operations, Media & Liability",
    content: (
      <>
        <p>
          <strong>34. Right to Verify:</strong> Organisers may request institutional verification, source code, lab notebooks, or dataset proofs at any stage.
        </p>
        <p className="mt-3">
          <strong>35. Format Modification:</strong> Organisers reserve the right to adjust timelines or formats when administratively required.
        </p>
        <p className="mt-3">
          <strong>36. Force Majeure:</strong> Delays caused by natural emergencies, power disruptions, or institutional closures will be rescheduled where feasible.
        </p>
        <p className="mt-3">
          <strong>37–39. Media, Publicity &amp; Confidentiality:</strong> Event sessions and demos may be photographed/recorded for institutional and promotional purposes. Presentations are public; teams with patentable IP must take precautions prior to demo day.
        </p>
        <p className="mt-3">
          <strong>40. Limitation of Liability:</strong> Organisers and partner institutions are not liable for participants' personal equipment, data loss, or indirect damages.
        </p>
      </>
    ),
  },
  {
    id: "41-47",
    num: "41–47",
    title: "Regulatory Compliance, References & Policies",
    content: (
      <>
        <p>
          <strong>41. Outcomes:</strong> Hackathon participation does not automatically guarantee venture capital, clinical trials, or employment.
        </p>
        <p className="mt-3">
          <strong>42. Regulatory Responsibility:</strong> Teams are responsible for identifying relevant regulatory frameworks (CDSCO, FSSAI, GEAC, BIS, etc.).
        </p>
        <p className="mt-3">
          <strong>43–44. Scientific Integrity:</strong> Proper citation of research literature is mandatory. Teams are held accountable for claims in pitch decks.
        </p>
        <p className="mt-3">
          <strong>45–47. Data &amp; No Refund Policy:</strong> Data is handled strictly for event management. As BioBridge is 100% free with no fee, no refund claims apply.
        </p>
      </>
    ),
  },
  {
    id: "48-52",
    num: "48–52",
    title: "Acceptance, Jurisdiction & Final Acknowledgement",
    content: (
      <>
        <p>
          <strong>48. Acceptance:</strong> By registering, participants confirm they have read, understood, and agreed to all Terms &amp; Conditions and rules.
        </p>
        <p className="mt-3">
          <strong>49. Amendments:</strong> Any operational updates published on official channels supersede previous versions.
        </p>
        <p className="mt-3">
          <strong>50. Governing Law:</strong> Governed by the laws of India, under the jurisdiction of competent courts in Tamil Nadu.
        </p>
        <p className="mt-3">
          <strong>51. Contact:</strong> For queries, reach out via the official channels: <strong>+91 9751664966</strong> or <strong>+91 9489243775</strong>.
        </p>
        <div className="mt-4 rounded-xl border border-[#BEE3EA] bg-[#F4FAFB] p-4 text-[#0B2A4A]">
          <p className="font-bold text-sm">52. Final Acknowledgement</p>
          <p className="mt-1 text-xs text-[#366273] leading-relaxed">
            BioBridge is built on scientific curiosity, ethical biotechnology, responsible experimentation, and student entrepreneurship. By registering, every participant commits to these values.
          </p>
        </div>
      </>
    ),
  },
];

function TermsPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F4FAFB] py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-[#366273]">
          <Link to="/" className="transition-colors hover:text-[#1599B5]">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#BEE3EA]" />
          <span className="text-[#0B2A4A] font-semibold">Terms &amp; Conditions</span>
        </nav>

        {/* Hero Header Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#BEE3EA] bg-white p-7 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-[#D9F2F6] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0E7E96] border border-[#BEE3EA]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Official Event Guidelines
              </div>
              <h1 className="mt-3 font-display text-[30px] sm:text-[40px] font-bold text-[#0B2A4A] leading-tight">
                Terms &amp; Conditions
              </h1>
              <p className="mt-1 font-mono text-xs text-[#1599B5] font-semibold tracking-wide">
                BIOBRIDGE – BIO INNOVATION HACKATHON 2026
              </p>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl border border-[#BEE3EA] bg-white px-4 py-2.5 text-xs font-bold text-[#0B2A4A] shadow-sm transition-all hover:border-[#1599B5] hover:text-[#1599B5]"
            >
              <Printer className="h-4 w-4" />
              Print / Save as PDF
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-[#EAF4F7] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#366273]">Organised By</span>
              <p className="font-bold text-[#0B2A4A] mt-0.5">KSRCT · Marabanu · StartupTN</p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#366273]">Theme</span>
              <p className="font-bold text-[#0B2A4A] mt-0.5">Bio-based Solutions</p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#366273]">Registration Fee</span>
              <p className="font-bold text-emerald-700 mt-0.5">₹0 · 100% Free</p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#366273]">Team Size</span>
              <p className="font-bold text-[#0E7E96] mt-0.5">2 to 4 Members</p>
            </div>
          </div>
        </div>

        {/* Quick Summary Strip */}
        <div className="mt-6 rounded-2xl border border-[#BEE3EA] bg-gradient-to-r from-[#D9F2F6]/50 via-white to-[#D9F2F6]/50 p-4 text-xs text-[#366273] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#1599B5] shrink-0" />
            <span>
              Consistent official rule: <strong>Team size is 2 to 4 members</strong> from the same institution.
            </span>
          </div>
          <a
            href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#1599B5] hover:underline shrink-0"
          >
            Register on Unstop <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Sections Stream */}
        <div className="mt-8 space-y-6">
          {SECTIONS.map((sec) => (
            <div
              key={sec.id}
              id={`sec-${sec.id}`}
              className="rounded-2xl border border-[#BEE3EA] bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-[#1599B5]/70"
            >
              <div className="flex items-center gap-3 border-b border-[#EAF4F7] pb-4 mb-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D9F2F6] font-mono text-xs font-bold text-[#0E7E96]">
                  {sec.num}
                </span>
                <h2 className="font-display text-[19px] sm:text-[21px] font-bold text-[#0B2A4A]">
                  {sec.title}
                </h2>
              </div>
              <div className="text-[14.5px] leading-relaxed text-[#366273]">
                {sec.content}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-10 rounded-3xl border border-[#BEE3EA] bg-gradient-to-br from-[#0B2A4A] to-[#1599B5] p-8 text-white shadow-lg text-center">
          <h3 className="font-display text-2xl font-bold">Ready to build your biotech solution?</h3>
          <p className="mt-2 text-sm text-white/80 max-w-xl mx-auto">
            Review the 36 problem statements, download the one-pager template, form your team of 2–4, and apply free today.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/problems"
              className="rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-[#0B2A4A] shadow-sm transition-transform hover:scale-105"
            >
              Browse 36 Challenges
            </Link>
            <a
              href="https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#20AFC5] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-transform hover:scale-105"
            >
              Register on Unstop →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
