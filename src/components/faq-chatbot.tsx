import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Trophy,
  Users,
  ShieldCheck,
  Calendar,
  Layers,
  FileText,
  BookOpen,
  Search,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  links?: { label: string; url: string; isExternal?: boolean }[];
  suggestions?: string[];
}

const REGISTER_URL =
  "https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

export interface FaqEntry {
  category: "Eligibility & Teams" | "Prizes & Grants" | "Selection & Format" | "Sessions & Finals" | "Tracks & Submissions";
  keywords: string[];
  question: string;
  answer: string;
  links?: { label: string; url: string; isExternal?: boolean }[];
  followUps?: string[];
}

export const ALL_FAQS: FaqEntry[] = [
  {
    category: "Eligibility & Teams",
    keywords: ["fee", "cost", "free", "pay", "money", "price", "entry fee", "registration fee"],
    question: "Is there any registration or entry fee?",
    answer:
      "No! BioBridge has **Zero Entry Fee (100% Free)** at all stages. There is no charge to apply, no charge during the 4-week build phase, and no charge for the in-person finals at KSRCT. We keep it free so all serious student teams across India can participate without barrier.",
    links: [{ label: "Register on Unstop (Free)", url: REGISTER_URL, isExternal: true }],
    followUps: ["Who can participate?", "What are the prizes?", "What is the team size?"],
  },
  {
    category: "Eligibility & Teams",
    keywords: ["eligibility", "who", "student", "college", "participate", "apply", "degree", "branch", "ug", "pg", "phd"],
    question: "Who can participate in BioBridge?",
    answer:
      "BioBridge is open to **any student currently enrolled in any recognised Indian college or university**. This includes Undergraduate (UG), Postgraduate (PG), and Ph.D./Research scholars across any discipline (biotech, life sciences, engineering, CS, medicine, and more). Cross-disciplinary teams are strongly encouraged!",
    followUps: ["What is the team size?", "Is there an entry fee?", "How does selection work?"],
  },
  {
    category: "Eligibility & Teams",
    keywords: ["team", "size", "members", "solo", "individual", "alone"],
    question: "What is the team size requirement?",
    answer:
      "Teams must consist of **2 to 4 members**. Solo participation is not permitted because biotech venture building requires complementary skills (e.g. biology + tech/business). Note that a student may belong to only one team.",
    followUps: ["Can different colleges team up?", "How to register?", "What are the problem statements?"],
  },
  {
    category: "Eligibility & Teams",
    keywords: ["cross college", "different colleges", "cross institute", "multidisciplinary", "different branches"],
    question: "Can students from different colleges or departments form a team?",
    answer:
      "**Yes, absolutely!** Cross-college, cross-university, and cross-departmental collaborations (e.g. Biotechnology + Computer Science + Electronics/Business) are permitted and highly encouraged. Diverse teams build the most viable ventures.",
    followUps: ["What is the team size?", "Who can participate?", "How does selection work?"],
  },
  {
    category: "Eligibility & Teams",
    keywords: ["priority", "ideal applicant", "profile", "existing project", "lab"],
    question: "Who is the ideal or priority applicant?",
    answer:
      "The priority applicant is a student team **already working on a problem in this space** — a project that has been running in a lab, a final-year project, or an idea a team has been researching for months. Four weeks is ideal to sharpen, package, and build a commercial narrative around existing work.",
    followUps: ["What is the build phase?", "One-pager template?", "What are the prizes?"],
  },
  {
    category: "Prizes & Grants",
    keywords: ["prize", "award", "cash", "money", "win", "reward", "10000", "5000", "3000", "venture", "marabanu"],
    question: "What do the winning teams get?",
    answer:
      "Three cash prizes are awarded on finals day:\n• **1st Prize (Grand Champion)**: ₹10,000 cash\n• **2nd Prize (Runner Up)**: ₹5,000 cash\n• **3rd Prize (Third Place)**: ₹3,000 cash\n\n**The Big Prize:** Beyond the cash, the winning teams enter a **6-Month Venture-Building Engagement** with the MARABANU team to launch winning projects as real-world ventures, with direct pathways toward Tamil Nadu state startup grants via StartupTN.",
    followUps: ["Where are the finals?", "How does selection work?", "What are the 4 weekend sessions?"],
  },
  {
    category: "Selection & Format",
    keywords: ["selection", "shortlist", "top 50", "rolling", "review", "result", "intimation"],
    question: "How does the selection process work?",
    answer:
      "Applications are reviewed on a **rolling basis** as they arrive rather than in one batch at the end, which is what makes our rapid turnaround possible. The **Top 50 teams** are shortlisted and notified within **two days (48 hours)** of the window closing to enter the 4-week build phase.",
    followUps: ["What is the build phase?", "What are the 4 weekend sessions?", "One-pager template?"],
  },
  {
    category: "Selection & Format",
    keywords: ["build phase", "4 weeks", "duration", "timeline", "sprint"],
    question: "What happens during the 4-week build phase?",
    answer:
      "The 50 selected teams build their product, refine unit economics, and test technical feasibility. Across the 4 weekends, teams participate in mandatory online masterclasses with industry mentors covering IPR, pitch deck architecture, financial modelling, and regulatory pathways.",
    followUps: ["What are the 4 weekend sessions?", "What is required at submission?", "Where are the finals?"],
  },
  {
    category: "Sessions & Finals",
    keywords: ["weekend", "session", "mandatory", "attendance", "ipr", "pitch deck", "financial", "modelling", "roadmap"],
    question: "Are the four weekend sessions mandatory?",
    answer:
      "**Yes. Attendance is a strict condition** of staying in the programme. A formal register is taken per session, and attendance is compulsory for every member of every team — not just the team lead.\n\n**The 4 Sessions:**\n1. **IPR**: What is protectable in biotech and when to act.\n2. **Building a Pitch Deck**: Aligning science into commercial narrative.\n3. **Financial Modelling**: Unit economics, CAPEX/OPEX, and lab-to-market costing.\n4. **R&D Roadmap & Regulatory**: Navigating clinical and regulatory gates.",
    followUps: ["What happens if a member misses a session?", "What is required at submission?", "Where are the finals?"],
  },
  {
    category: "Sessions & Finals",
    keywords: ["miss", "absence", "leave", "attendance enforcement"],
    question: "What happens if a team member misses a mandatory session?",
    answer:
      "Because BioBridge is a dedicated venture sprint, team-wide participation is required. Missing sessions without prior formal clearance from the organizing committee risks forfeiture of your team's build slot and disqualification from the Top 25 finals cut.",
    followUps: ["Are the four weekend sessions mandatory?", "Where are the finals?", "What do the winning teams get?"],
  },
  {
    category: "Sessions & Finals",
    keywords: ["submission", "second cut", "top 25", "demo", "video", "end of build"],
    question: "What is required at the end of the build phase for the second cut?",
    answer:
      "At the end of the 4 weeks, teams submit:\n1. A **Pitch Deck** prepared to our supplied template.\n2. A **Product Demo or Video** showcasing feasibility and working progress.\n\nFrom these submissions, the jury selects the **Top 25 teams** who advance to the in-person Grand Finals.",
    followUps: ["Where are the finals?", "What do the winning teams get?", "One-pager template?"],
  },
  {
    category: "Sessions & Finals",
    keywords: ["final", "finals", "ksrct", "venue", "location", "in person", "offline", "namakkal"],
    question: "Where does the grand finals take place?",
    answer:
      "The grand finals are a **one-day in-person event on October 30** held on campus at **Department of Biotechnology, K.S.Rangasamy College of Technology (KSRCT)** in Tiruchengode / Namakkal, Tamil Nadu. The 25 finalist teams present live before a distinguished jury of investors, MARABANU partners, and StartupTN officials, with access to KSRCT biotechnology labs.",
    followUps: ["What do the winning teams get?", "Who are the organizers?", "What are the 4 weekend sessions?"],
  },
  {
    category: "Tracks & Submissions",
    keywords: ["problem", "problems", "statement", "statements", "tracks", "categories", "domain", "wildcard", "open bio"],
    question: "How do we choose our problem statement?",
    answer:
      "BioBridge features **36 curated problem statements across 7 innovation tracks**:\n1. Precision Biotherapeutics\n2. Diagnostics & Devices\n3. Bioinformatics & Bio-AI\n4. Agri-Biotech\n5. Functional Foods & Nutraceuticals\n6. Environmental & Industrial Biotech\n7. Open Bio Track (propose your own wildcard idea)\n\nTeams choose their challenge before applying so work starts immediately.",
    links: [{ label: "Browse All 36 Statements", url: "/problems" }],
    followUps: ["One-pager template?", "Is there an entry fee?", "How to register?"],
  },
  {
    category: "Tracks & Submissions",
    keywords: ["template", "one pager", "one-pager", "format", "submit", "application form", "document"],
    question: "What is the One-Pager template and how to submit?",
    answer:
      "Teams submit a standardized **One-Pager on their idea** along with the application form, written to the official BioBridge template. This ensures every application arrives in a comparable shape and can be evaluated quickly by the jury.",
    links: [
      { label: "Download One-Pager Template (PDF)", url: "/BioBridge-One-Pager-Template.pdf", isExternal: true },
      { label: "Register on Unstop", url: REGISTER_URL, isExternal: true },
    ],
    followUps: ["Is there an entry fee?", "Who can participate?", "How does selection work?"],
  },
  {
    category: "Tracks & Submissions",
    keywords: ["partners", "organizers", "marabanu", "startuptn", "ksrct", "who organized"],
    question: "Who is organizing BioBridge 2026?",
    answer:
      "BioBridge is an initiative organized by a state-level consortium:\n• **MARABANU**: Biotech venture builder providing curriculum, mentorship, jury, and 6-month venture incubation.\n• **StartupTN**: Government of Tamil Nadu startup agency providing jury access, state funding routes, and grant pathways.\n• **K.S.Rangasamy College of Technology (KSRCT)**: Host institution providing finals venue, lab access, and biotechnology department infrastructure.",
    followUps: ["What do the winning teams get?", "Where are the finals?", "Who can participate?"],
  },
];

const INITIAL_SUGGESTIONS = [
  "Zero Entry Fee?",
  "Who can apply?",
  "What are the prizes?",
  "What is the team size?",
  "How does selection work?",
  "4 Weekend sessions?",
  "Where are the finals?",
  "36 Problem statements?",
];

export function FaqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "all-faqs">("chat");
  const [faqSearch, setFaqSearch] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Hello! 👋 I'm **BioBot**, your 3D biotech guide for **BioBridge 2026**!\n\nAsk me anything about registrations, problem tracks, prizes, or the Oct 30 Grand Finale at KSRCT!",
      time: "Just now",
      suggestions: [
        "Zero Entry Fee?",
        "What are the prizes?",
        "Who can apply?",
        "Team size?",
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom in chat mode
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && activeTab === "chat") {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isTyping, activeTab]);

  // Global event listener to open chatbot from any link or button
  useEffect(() => {
    const handleOpenChat = (e: Event) => {
      const customEvent = e as CustomEvent<{ question?: string; tab?: "chat" | "all-faqs" }>;
      setIsOpen(true);
      if (customEvent.detail?.tab) {
        setActiveTab(customEvent.detail.tab);
      } else {
        setActiveTab("chat");
      }
      if (customEvent.detail?.question) {
        handleUserSend(customEvent.detail.question);
      }
    };

    window.addEventListener("open-biobridge-faq", handleOpenChat);

    // Also listen for hash change to #faq
    const checkHash = () => {
      if (window.location.hash === "#faq") {
        setIsOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("open-biobridge-faq", handleOpenChat);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const findBestAnswer = (query: string): FaqEntry | null => {
    const qLower = query.toLowerCase().trim();

    let bestMatch: FaqEntry | null = null;
    let highestScore = 0;

    for (const item of ALL_FAQS) {
      let score = 0;
      const questionLower = item.question.toLowerCase();

      if (qLower.includes(questionLower) || questionLower.includes(qLower)) {
        score += 8;
      }

      for (const kw of item.keywords) {
        if (qLower.includes(kw)) {
          score += 3;
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (highestScore >= 3) {
      return bestMatch;
    }

    return null;
  };

  const handleUserSend = (textToSend?: string) => {
    const query = (textToSend ?? input).trim();
    if (!query) return;

    // Switch to chat tab if sent from FAQ list
    setActiveTab("chat");

    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      time: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const match = findBestAnswer(query);

      let botMsg: ChatMessage;
      if (match) {
        botMsg = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: match.answer,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          links: match.links,
          suggestions: match.followUps,
        };
      } else {
        botMsg = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: `I don't have a direct answer for "${query}", but here are the key facts:\n\n• **Format:** 4-week build sprint ending in a 1-day in-person Grand Finale on Oct 30 at KSRCT.\n• **Entry Fee:** 100% Free at all stages.\n• **Teams:** 2 to 4 students from any college in India.\n• **Prizes:** ₹18,000 cash pool + 6-month MARABANU venture building.\n\nFeel free to explore our full FAQ catalog via the **'Browse All FAQs'** tab above!`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          suggestions: [
            "Is there an entry fee?",
            "What problem statements are there?",
            "How does selection work?",
            "What do the winning teams get?",
          ],
          links: [
            { label: "Browse 36 Problem Statements", url: "/problems" },
            { label: "Register on Unstop", url: REGISTER_URL, isExternal: true },
          ],
        };
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Conversation reset! What would you like to know about **BioBridge 2026**?",
        time: "Just now",
        suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
      },
    ]);
  };

  // Filtered FAQs in Browse mode
  const filteredFaqs = ALL_FAQS.filter((faq) => {
    if (!faqSearch.trim()) return true;
    const q = faqSearch.toLowerCase();
    return (
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      faq.category.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* ── 1. FLOATING 3D MASCOT ACTION BUTTON (DOWNSIDE OF ENTIRE SITE) ── */}
      <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-6 z-50 flex items-end gap-3 select-none">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden items-center gap-2.5 rounded-2xl border border-[#BEE3EA] bg-white/[0.97] px-4 py-2.5 text-xs font-bold text-[#0B2A4A] shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#1599B5] hover:bg-white hover:scale-105 active:scale-95 sm:flex cursor-pointer mb-5 animate-mascot-bob"
            aria-label="Chat with 3D BioBot Assistant"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>Need help? Chat with BioBot! 🧬</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group relative cursor-pointer focus:outline-none transition-transform duration-300 active:scale-95"
          aria-label={isOpen ? "Close FAQ Assistant" : "Open BioBridge 3D Assistant"}
          title="BioBridge 3D Mascot Assistant"
        >
          {isOpen ? (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B2A4A] text-white shadow-xl hover:bg-[#1599B5] transition-colors border-2 border-white">
              <X className="h-6 w-6 text-white transition-transform" />
            </div>
          ) : (
            <div className="relative flex flex-col items-center">
              {/* Biological energy glow under feet */}
              <div className="absolute -bottom-1 h-3.5 w-20 rounded-full bg-[#1599B5]/30 blur-sm group-hover:bg-emerald-400/40 group-hover:scale-110 transition-all duration-300" />

              {/* 3D Character Only (Transparent background) with floating & glowing action */}
              <div className="relative animate-mascot-float transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                <img
                  src="/biotech-mascot.png"
                  alt="BioBridge 3D Biotech Assistant"
                  className="h-24 sm:h-32 w-auto object-contain select-none pointer-events-none drop-shadow-xl"
                />

                {/* Online pulse dot near flask */}
                <span className="absolute top-1 right-1 sm:top-2 sm:right-2 flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-85" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-xs" />
                </span>
              </div>
            </div>
          )}
        </button>
      </div>

      {/* ── 2. EXPANDABLE CHATBOT WINDOW ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="BioBridge FAQ Assistant"
          className="fixed bottom-24 right-4 z-50 flex h-[620px] max-h-[calc(100svh-120px)] w-[420px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-3xl border border-[#BEE3EA] bg-white shadow-[0_20px_60px_-15px_rgba(11,42,74,0.3)] backdrop-blur-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 md:right-6"
        >
          {/* Header */}
          <div className="border-b border-[#BEE3EA] bg-gradient-to-r from-[#0B2A4A] via-[#0E446B] to-[#1599B5] px-4 pt-3.5 pb-2.5 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 p-0.5 backdrop-blur-sm border border-white/30 overflow-hidden shadow-inner">
                  <img
                    src="/biotech-mascot-head.png"
                    alt="BioBot 3D Guide"
                    className="h-full w-full rounded-full object-cover object-top scale-110"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0B2A4A] bg-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-[15px] font-bold tracking-tight text-white">
                      BioBot 3D Guide
                    </span>
                    <span className="rounded-full bg-emerald-400/20 px-2 py-0.2 text-[9px] font-semibold uppercase tracking-wider text-emerald-300">
                      Online
                    </span>
                  </div>
                  <span className="text-[11px] text-[#D9F2F6]/80">
                    Official BioBridge Assistant
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {activeTab === "chat" && (
                  <button
                    type="button"
                    onClick={resetChat}
                    title="Restart conversation"
                    className="rounded-xl p-1.5 text-[#D9F2F6]/70 hover:bg-white/10 hover:text-white transition-colors"
                    aria-label="Restart chat"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="rounded-xl p-1.5 text-[#D9F2F6]/70 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="mt-3 flex rounded-xl bg-black/20 p-1 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("chat")}
                className={cn(
                  "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 font-semibold transition-all",
                  activeTab === "chat"
                    ? "bg-white text-[#0B2A4A] shadow-sm"
                    : "text-[#D9F2F6]/80 hover:text-white",
                )}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Interactive Chat</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("all-faqs")}
                className={cn(
                  "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 font-semibold transition-all",
                  activeTab === "all-faqs"
                    ? "bg-white text-[#0B2A4A] shadow-sm"
                    : "text-[#D9F2F6]/80 hover:text-white",
                )}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Browse All FAQs ({ALL_FAQS.length})</span>
              </button>
            </div>
          </div>

          {/* TAB 1: INTERACTIVE CHAT */}
          {activeTab === "chat" && (
            <>
              {/* Quick FAQ Chips Strip */}
              <div className="flex items-center gap-1.5 overflow-x-auto border-b border-[#BEE3EA] bg-[#F4FAFB] px-3 py-2 text-xs scrollbar-none">
                <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#366273]">
                  Quick:
                </span>
                <button
                  onClick={() => handleUserSend("Is there an entry fee?")}
                  className="shrink-0 rounded-full border border-[#BEE3EA] bg-white px-2.5 py-1 text-[11px] font-medium text-[#0B2A4A] transition-colors hover:border-[#1599B5] hover:bg-[#D9F2F6] hover:text-[#1599B5]"
                >
                  Zero Fee?
                </button>
                <button
                  onClick={() => handleUserSend("What do the winning teams get?")}
                  className="shrink-0 rounded-full border border-[#BEE3EA] bg-white px-2.5 py-1 text-[11px] font-medium text-[#0B2A4A] transition-colors hover:border-[#1599B5] hover:bg-[#D9F2F6] hover:text-[#1599B5]"
                >
                  ₹18k Prizes
                </button>
                <button
                  onClick={() => handleUserSend("What is the team size requirement?")}
                  className="shrink-0 rounded-full border border-[#BEE3EA] bg-white px-2.5 py-1 text-[11px] font-medium text-[#0B2A4A] transition-colors hover:border-[#1599B5] hover:bg-[#D9F2F6] hover:text-[#1599B5]"
                >
                  2-4 Members
                </button>
                <button
                  onClick={() => handleUserSend("How do we choose our problem statement?")}
                  className="shrink-0 rounded-full border border-[#BEE3EA] bg-white px-2.5 py-1 text-[11px] font-medium text-[#0B2A4A] transition-colors hover:border-[#1599B5] hover:bg-[#D9F2F6] hover:text-[#1599B5]"
                >
                  36 Problems
                </button>
                <button
                  onClick={() => handleUserSend("Where does the grand finals take place?")}
                  className="shrink-0 rounded-full border border-[#BEE3EA] bg-white px-2.5 py-1 text-[11px] font-medium text-[#0B2A4A] transition-colors hover:border-[#1599B5] hover:bg-[#D9F2F6] hover:text-[#1599B5]"
                >
                  KSRCT Finals
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#FAFDFE] to-[#F4FAFB]">
                {messages.map((m) => {
                  const isBot = m.sender === "bot";
                  return (
                    <div
                      key={m.id}
                      className={cn(
                        "flex flex-col gap-1.5",
                        isBot ? "items-start" : "items-end",
                      )}
                    >
                      <div
                        className={cn(
                          "flex max-w-[88%] items-start gap-2.5",
                          isBot ? "flex-row" : "flex-row-reverse",
                        )}
                      >
                        {isBot && (
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#1599B5] to-[#20AFC5] p-0.5 shadow-xs overflow-hidden border border-white">
                            <img
                              src="/biotech-mascot-head.png"
                              alt="BioBot"
                              className="h-full w-full rounded-full object-cover object-top scale-115"
                            />
                          </div>
                        )}

                        <div
                          className={cn(
                            "rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-sm",
                            isBot
                              ? "border border-[#BEE3EA] bg-white text-[#0B2A4A]"
                              : "bg-[#1599B5] text-white font-medium shadow-[0_4px_12px_-2px_rgba(21,153,181,0.3)]",
                          )}
                        >
                          <div className="space-y-1.5 whitespace-pre-line">
                            {m.text.split("\n").map((line, i) => {
                              const parts = line.split(/(\*\*.*?\*\*)/g);
                              return (
                                <p key={i}>
                                  {parts.map((p, idx) => {
                                    if (p.startsWith("**") && p.endsWith("**")) {
                                      return (
                                        <strong
                                          key={idx}
                                          className={isBot ? "text-[#0B2A4A]" : "text-white font-bold"}
                                        >
                                          {p.slice(2, -2)}
                                        </strong>
                                      );
                                    }
                                    return p;
                                  })}
                                </p>
                              );
                            })}
                          </div>

                          {m.links && m.links.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-[#E8F5F8]">
                              {m.links.map((link, idx) =>
                                link.isExternal ? (
                                  <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 rounded-lg bg-[#D9F2F6] px-3 py-1.5 text-[11.5px] font-semibold text-[#1599B5] transition-colors hover:bg-[#1599B5] hover:text-white"
                                  >
                                    {link.label}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : (
                                  <Link
                                    key={idx}
                                    to={link.url}
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center gap-1 rounded-lg bg-[#D9F2F6] px-3 py-1.5 text-[11.5px] font-semibold text-[#1599B5] transition-colors hover:bg-[#1599B5] hover:text-white"
                                  >
                                    {link.label}
                                    <ChevronRight className="h-3 w-3" />
                                  </Link>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {isBot && m.suggestions && m.suggestions.length > 0 && (
                        <div className="ml-9 mt-1 flex flex-wrap gap-1.5">
                          {m.suggestions.map((s, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleUserSend(s)}
                              className="rounded-full border border-[#BEE3EA] bg-white px-2.5 py-1 text-[11px] font-medium text-[#366273] shadow-xs transition-all hover:border-[#1599B5] hover:bg-[#D9F2F6] hover:text-[#1599B5]"
                            >
                              {s} →
                            </button>
                          ))}
                        </div>
                      )}

                      <span className="px-2 font-mono text-[10px] text-[#366273]/60">
                        {m.time}
                      </span>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex items-center gap-2.5 ml-1">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#1599B5] to-[#20AFC5] p-0.5 shadow-xs overflow-hidden border border-white">
                      <img
                        src="/biotech-mascot-head.png"
                        alt="BioBot"
                        className="h-full w-full rounded-full object-cover object-top scale-115"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-2xl border border-[#BEE3EA] bg-white px-4 py-3 shadow-xs">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#1599B5]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#1599B5] [animation-delay:0.2s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#1599B5] [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserSend();
                }}
                className="border-t border-[#BEE3EA] bg-white p-3"
              >
                <div className="flex items-center gap-2 rounded-2xl border border-[#BEE3EA] bg-[#F4FAFB] px-3 py-1.5 focus-within:border-[#1599B5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1599B5]/20 transition-all">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about rules, fees, dates, prizes..."
                    className="flex-1 bg-transparent py-1.5 text-[13px] text-[#0B2A4A] placeholder:text-[#366273]/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all",
                      input.trim() && !isTyping
                        ? "bg-[#1599B5] text-white shadow-sm hover:bg-[#0E7E96] active:scale-95"
                        : "bg-[#BEE3EA]/50 text-[#366273]/40 cursor-not-allowed",
                    )}
                    aria-label="Send question"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-1.5 flex items-center justify-between px-1 text-[10px] text-[#366273]/70 font-mono">
                  <span>BioBridge 2026 Assistant</span>
                  <span>100% Free Hackathon</span>
                </div>
              </form>
            </>
          )}

          {/* TAB 2: BROWSE ALL 15 FAQS */}
          {activeTab === "all-faqs" && (
            <div className="flex flex-1 flex-col overflow-hidden bg-[#F4FAFB]">
              {/* Search Bar */}
              <div className="border-b border-[#BEE3EA] bg-white p-3">
                <div className="flex items-center gap-2 rounded-xl border border-[#BEE3EA] bg-[#F8FCFD] px-3 py-1.5 text-xs">
                  <Search className="h-3.5 w-3.5 text-[#1599B5] shrink-0" />
                  <input
                    type="text"
                    value={faqSearch}
                    onChange={(e) => setFaqSearch(e.target.value)}
                    placeholder="Filter all 15 FAQs..."
                    className="flex-1 bg-transparent text-[#0B2A4A] focus:outline-none placeholder:text-[#366273]/60"
                  />
                  {faqSearch && (
                    <button
                      onClick={() => setFaqSearch("")}
                      className="text-[#366273] hover:text-[#1599B5]"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Scrollable FAQ List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
                {filteredFaqs.map((faq, index) => {
                  const isExpanded = expandedFaq === index;
                  return (
                    <div
                      key={faq.question}
                      className="rounded-2xl border border-[#BEE3EA] bg-white shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedFaq(isExpanded ? null : index)}
                        className="flex w-full items-start justify-between gap-3 p-3.5 text-left hover:bg-[#F8FCFD] transition-colors"
                      >
                        <div className="flex-1">
                          <span className="inline-block rounded-full bg-[#D9F2F6] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#1599B5] mb-1">
                            {faq.category}
                          </span>
                          <h4 className="text-[13px] font-bold text-[#0B2A4A] leading-snug">
                            {faq.question}
                          </h4>
                        </div>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-[#1599B5] transition-transform duration-200 mt-1",
                            isExpanded ? "rotate-180" : "",
                          )}
                        />
                      </button>

                      {isExpanded && (
                        <div className="border-t border-[#E8F5F8] bg-[#FAFDFE] p-3.5 text-[12.5px] leading-relaxed text-[#366273]">
                          <div className="space-y-1.5 whitespace-pre-line">
                            {faq.answer.split("\n").map((line, i) => {
                              const parts = line.split(/(\*\*.*?\*\*)/g);
                              return (
                                <p key={i}>
                                  {parts.map((p, idx) => {
                                    if (p.startsWith("**") && p.endsWith("**")) {
                                      return (
                                        <strong key={idx} className="text-[#0B2A4A] font-bold">
                                          {p.slice(2, -2)}
                                        </strong>
                                      );
                                    }
                                    return p;
                                  })}
                                </p>
                              );
                            })}
                          </div>

                          {faq.links && faq.links.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-[#E8F5F8]">
                              {faq.links.map((link, idx) =>
                                link.isExternal ? (
                                  <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 rounded-lg bg-[#D9F2F6] px-2.5 py-1 text-[11px] font-semibold text-[#1599B5] hover:bg-[#1599B5] hover:text-white transition-colors"
                                  >
                                    {link.label}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : (
                                  <Link
                                    key={idx}
                                    to={link.url}
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center gap-1 rounded-lg bg-[#D9F2F6] px-2.5 py-1 text-[11px] font-semibold text-[#1599B5] hover:bg-[#1599B5] hover:text-white transition-colors"
                                  >
                                    {link.label}
                                    <ChevronRight className="h-3 w-3" />
                                  </Link>
                                ),
                              )}
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={() => handleUserSend(faq.question)}
                            className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#1599B5] hover:underline"
                          >
                            <MessageSquare className="h-3.5 w-3.5" />
                            <span>Ask in chat with follow-ups →</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}

                {filteredFaqs.length === 0 && (
                  <div className="p-8 text-center text-xs text-[#366273]">
                    No FAQs match "{faqSearch}". Try another keyword or switch to chat.
                  </div>
                )}
              </div>

              <div className="border-t border-[#BEE3EA] bg-white p-3 text-center">
                <button
                  type="button"
                  onClick={() => setActiveTab("chat")}
                  className="w-full rounded-xl bg-[#1599B5] py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0E7E96]"
                >
                  Have another question? Switch to Live Chat
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
