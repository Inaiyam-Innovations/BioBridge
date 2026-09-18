import {
  Dna,
  GraduationCap,
  Users,
  ShieldCheck,
  FlaskConical,
  Trophy,
} from "lucide-react";

export const REGISTER_URL =
  "https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

export const QUICK_SPECS = [
  {
    step: "01",
    tag: "GENOME 01",
    codon: "ATG // INITIATE",
    label: "FORMAT",
    val: "Four-week build, then finals",
    sub: "Venture sprint + 1-day Oct 30 pitch",
    bioConcept: "Bio-Incubation Sprint",
    bioMeta: "28-Day Protocol",
    icon: Dna,
    color: "#1599B5",
    pillBg: "bg-[#D9F2F6] text-[#0E7E96]",
    glowBorder: "group-hover:border-[#1599B5]",
    iconGlow: "bg-[#1599B5]/10 text-[#1599B5] border-[#1599B5]/25",
  },
  {
    step: "02",
    tag: "CELL-LINE 02",
    codon: "PAN // SCHOLARS",
    label: "OPEN TO",
    val: "Any student in India",
    sub: "UG, PG, & research scholars",
    bioConcept: "All Academic Disciplines",
    bioMeta: "Universal Cohort",
    icon: GraduationCap,
    color: "#0E7E96",
    pillBg: "bg-[#EBF7F9] text-[#0E7E96]",
    glowBorder: "group-hover:border-[#0E7E96]",
    iconGlow: "bg-[#0E7E96]/10 text-[#0E7E96] border-[#0E7E96]/25",
  },
  {
    step: "03",
    tag: "CO-FACTOR 03",
    codon: "SYN // 2-4 NUCLEI",
    label: "TEAM SIZE",
    val: "2 to 4 members",
    sub: "Cross-disciplinary encouraged",
    bioConcept: "Molecular Synergy",
    bioMeta: "Multi-domain Bonding",
    icon: Users,
    color: "#0B2A4A",
    pillBg: "bg-[#E2F1F5] text-[#0B2A4A]",
    glowBorder: "group-hover:border-[#0B2A4A]",
    iconGlow: "bg-[#0B2A4A]/10 text-[#0B2A4A] border-[#0B2A4A]/20",
  },
  {
    step: "04",
    tag: "ENZYME 04",
    codon: "CAT // ZERO BARRIER",
    label: "ENTRY FEE",
    val: "None (100% Free)",
    sub: "No fee at any stage",
    bioConcept: "Zero Activation Energy",
    bioMeta: "100% Subsidized",
    icon: ShieldCheck,
    color: "#059669",
    pillBg: "bg-emerald-100/80 text-emerald-800",
    glowBorder: "group-hover:border-emerald-500",
    iconGlow: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25",
  },
  {
    step: "05",
    tag: "ASSAY 05",
    codon: "CUT // TOP 50",
    label: "SHORTLIST",
    val: "Top 50 teams build",
    sub: "Intimated within 2 days of close",
    bioConcept: "Rolling Genetic Screening",
    bioMeta: "48-Hour Turnaround",
    icon: FlaskConical,
    color: "#2563EB",
    pillBg: "bg-blue-100/80 text-blue-800",
    glowBorder: "group-hover:border-blue-500",
    iconGlow: "bg-blue-500/10 text-blue-700 border-blue-500/25",
  },
  {
    step: "06",
    tag: "SUMMIT 06",
    codon: "APEX // KSRCT",
    label: "EVENT DATE",
    val: "Oct 30 · 1-Day Event",
    sub: "Top 25 in person at KSRCT",
    bioConcept: "Grand Finale Pitch",
    bioMeta: "Oct 30 · 1-Day Demo",
    icon: Trophy,
    color: "#D97706",
    pillBg: "bg-amber-100/80 text-amber-800",
    glowBorder: "group-hover:border-amber-500",
    iconGlow: "bg-amber-500/10 text-amber-700 border-amber-500/25",
  },
];

export const STAGES = [
  {
    num: "01",
    phase: "Launch & Track Selection",
    timing: "Day zero",
    summary:
      "Launched by Singai G. Ramachandran, Chairperson, StartupTN. Explore the full set of 36 problem statements across the six biotech categories and the open bio track on this website. Review all challenges and select your problem statement with your team before you apply rather than after.",
    badge: "36 Problem Statements Live",
  },
  {
    num: "02",
    phase: "Application Window",
    timing: "2 weeks",
    summary:
      "Form your team of two to four students and apply through the official online form. Submit a one-pager outlining your biotech idea using our supplied template so your application can be evaluated quickly and fairly. There is no registration fee at any stage.",
    badge: "Submit One-Pager",
  },
  {
    num: "03",
    phase: "Rolling Selection",
    timing: "Within 2 days of close",
    summary:
      "Submit early — applications are reviewed as they arrive on a rolling basis. Look out for your selection intimation; the top 50 shortlisted teams will be officially notified within two days of the application window closing.",
    badge: "Top 50 Shortlisted",
  },
  {
    num: "04",
    phase: "Build Phase",
    timing: "4 weeks",
    summary:
      "If shortlisted among the top 50, build and validate your working biotech product over 4 focused sprint weeks. Attend the four online weekend masterclass sessions — attendance is strictly mandatory for every member of your team, not just the team lead.",
    badge: "4 Mandatory Weekends",
  },
  {
    num: "05",
    phase: "Submission and Second Cut",
    timing: "End of build phase",
    summary:
      "Submit your final pitch deck built using our supplied template, accompanied by your working product demo or video. From these submissions, the top 25 teams will be shortlisted and invited to the in-person Grand Finale.",
    badge: "Top 25 Finalists",
  },
  {
    num: "06",
    phase: "Finals Day (Oct 30)",
    timing: "Oct 30 · 1-day in-person event",
    summary:
      "Present your solution in person before the Grand Jury during the one-day Grand Finale on October 30 at KSRCT. Compete for top prizes and secure an exclusive six-month venture-building incubation engagement with MARABANU.",
    badge: "Oct 30 · 1-Day Finals & Venture Sprint",
  },
];

export const WEEKEND_SESSIONS = [
  {
    num: "01",
    name: "IPR",
    title: "Intellectual Property Rights",
    desc: "What is protectable in a biotech idea and what is not, and when to act on it.",
    focus: "Patentability scoping, prior art landscape, and IP protection timing.",
  },
  {
    num: "02",
    name: "Building a pitch deck",
    title: "Pitch Deck Architecture",
    desc: "Run against the deck template teams are required to submit.",
    focus: "Translating scientific validation into a commercial narrative that resonates.",
  },
  {
    num: "03",
    name: "Financial modelling",
    title: "Unit Economics & Costing",
    desc: "Costing a bio product and building numbers a panel will accept.",
    focus: "Lab-to-market costing, CAPEX/OPEX modelling, and pricing frameworks.",
  },
  {
    num: "04",
    name: "Research and development",
    title: "Lab to Demonstrable Product",
    desc: "Taking a lab-stage idea to something demonstrable.",
    focus: "Validation protocols, prototype staging, and evidence synthesis.",
  },
];

export const MENTORS = [
  { num: "01", name: "Mentor 01", image: null },
  { num: "02", name: "Mentor 02", image: null },
  { num: "03", name: "Mentor 03", image: null },
  { num: "04", name: "Mentor 04", image: null },
];

export const JURY_MEMBERS = [
  { num: "01", name: "Jury Member 01", image: null },
  { num: "02", name: "Jury Member 02", image: null },
  { num: "03", name: "Jury Member 03", image: null },
  { num: "04", name: "Jury Member 04", image: null },
  { num: "05", name: "Jury Member 05", image: null },
  { num: "06", name: "Jury Member 06", image: null },
];

export const PARTNERS = [
  {
    name: "Department of Biotechnology",
    accent: "#0B2A4A",
    logo: "/ksrct-logo.png",
    logoAlt: "Department of Biotechnology, K.S. Rangasamy College of Technology",
    logoClass: "h-14 sm:h-16 max-w-[240px]",
    role: "K.S. Rangasamy College of Technology",
  },
  {
    name: "MARABANU",
    accent: "#1599B5",
    logo: "/marabanu-logo.png",
    logoAlt: "MARABANU",
    logoClass: "h-10 sm:h-12 max-w-[220px]",
    role: "Biotech Venture Builder & Mentorship",
  },
  {
    name: "StartupTN Government of Tamil Nadu",
    accent: "#20AFC5",
    logo: "/startuptn-logo.png",
    logoAlt: "StartupTN Government of Tamil Nadu",
    logoClass: "h-14 sm:h-16 max-w-[240px]",
    role: "State Startup Ecosystem Partner",
  },
];

export const SUPPORTED_BY = [
  {
    name: "ACIC KSRCTIF",
    logo: "/acic-logo.png",
    logoClass: "max-h-16 sm:max-h-20",
  },
  {
    name: "KSRCT MSME Business Incubator",
    logo: "/msme-logo.png",
    logoClass: "max-h-14 sm:max-h-16",
  },
  {
    name: "IEEE EMBS",
    logo: "/ieee-embs-logo.jpg",
    logoClass: "max-h-16 sm:max-h-20",
  },
  {
    name: "Neomutants Department of Biotechnology",
    logo: "/neomutants-logo.jpg",
    logoClass: "max-h-16 sm:max-h-20",
  },
];
