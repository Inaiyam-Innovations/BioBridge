import { useEffect, useMemo, useRef, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  FileText,
  Printer,
  Upload,
  UserRound,
  X,
  ArrowRight,
} from "lucide-react";
import {
  categories,
  categoryById,
  problemByCode,
  problemsByCategory,
} from "@/data/problems";
import {
  branches,
  degrees,
  indianColleges,
  indianStates,
  yearsOfStudy,
} from "@/data/india";
import {
  emptyDraft,
  emptyMember,
  loadDraft,
  saveDraft,
  submitApplication,
  type ApplicationDraft,
  type SubmittedApplication,
  type TeamMember,
} from "@/lib/applications";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────
   Constants
──────────────────────────────────────────────── */
const STEPS = [
  "Contact",
  "College",
  "Team",
  "Challenge",
  "Review",
];

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v.trim());
const phoneOk = (v: string) => /^[6-9]\d{9}$/.test(v.replace(/\D/g, ""));

type Errors = Record<string, string>;

/* ──────────────────────────────────────────────
   Shared field primitives
──────────────────────────────────────────────── */
const fieldBase =
  "w-full rounded-xl border border-[#CDEDD8] bg-white px-4 py-3 text-sm text-[#0E2F25] outline-none placeholder:text-[#4A7A60]/60 transition-all focus:border-[#18A957] focus:shadow-[0_0_0_3px_rgba(24,169,87,0.15)]";

function FieldLabel({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-[13px] font-semibold text-[#0E2F25]"
    >
      {children}
      {required && <span className="ml-1 text-[#18A957]">*</span>}
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
      {msg}
    </p>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6">
      <h3 className="font-display text-[22px] font-bold text-[#0E2F25]">{title}</h3>
      <p className="mt-1 text-sm text-[#4A7A60]">{subtitle}</p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Stepper / progress bar
──────────────────────────────────────────────── */
function Stepper({ step }: { step: number }) {
  const pct = Math.round(((step + 1) / STEPS.length) * 100);
  return (
    <div className="mb-8">
      {/* Progress bar */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#EAF7EF]">
        <div
          className="h-full rounded-full bg-[#18A957] transition-all duration-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Step indicators */}
      <ol className="mt-5 flex items-start gap-1 overflow-x-auto sm:grid sm:grid-cols-5 sm:overflow-visible">
        {STEPS.map((label, i) => {
          const isDone = i < step;
          const isActive = i === step;
          return (
            <li
              key={label}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-xs transition-colors sm:shrink",
                isActive
                  ? "bg-[#EAF7EF] text-[#18A957]"
                  : isDone
                    ? "text-[#18A957]"
                    : "text-[#4A7A60]",
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                  isDone
                    ? "bg-[#18A957] text-white"
                    : isActive
                      ? "bg-[#18A957]/20 text-[#18A957]"
                      : "bg-[#EAF7EF] text-[#4A7A60]",
                )}
              >
                {isDone ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              <span className="hidden truncate sm:block font-medium">{label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ──────────────────────────────────────────────
   College autocomplete
──────────────────────────────────────────────── */
function CollegeAutocomplete({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const matches = useMemo(() => {
    const q = value.trim().toLowerCase();
    if (!q) return indianColleges.slice(0, 8);
    return indianColleges.filter((c) => c.toLowerCase().includes(q)).slice(0, 8);
  }, [value]);

  return (
    <div className="relative">
      <FieldLabel required>College / Institution Name</FieldLabel>
      <input
        className={fieldBase}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 130)}
        placeholder="Start typing your college name…"
        autoComplete="off"
        aria-label="College name"
        aria-autocomplete="list"
      />
      <p className="mt-1.5 text-[12px] text-[#4A7A60]">
        Not listed? Just type your institution's full name.
      </p>
      <FieldError msg={error} />
      {open && matches.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-20 mt-1 max-h-52 overflow-auto rounded-xl border border-[#CDEDD8] bg-white p-1 shadow-[0_8px_32px_-8px_rgba(24,169,87,0.22)]">
          {matches.map((c) => (
            <li key={c}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                }}
                className="w-full rounded-lg px-3.5 py-2.5 text-left text-sm text-[#0E2F25] hover:bg-[#EAF7EF]"
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Upload zone
──────────────────────────────────────────────── */
function UploadZone({
  fileName,
  fileSize,
  suggestedName,
  error,
  onPick,
  onError,
  onClear,
}: {
  fileName: string;
  fileSize: number;
  suggestedName: string;
  error?: string;
  onPick: (name: string, size: number) => void;
  onError: (msg: string) => void;
  onClear: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const accept = (file?: File | null) => {
    if (!file) return;
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      onError("Only PDF files are accepted.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      onError("File exceeds the 5 MB limit.");
      return;
    }
    onPick(file.name, file.size);
  };

  return (
    <div>
      <FieldLabel required>One-Pager PDF</FieldLabel>

      <div
        role="button"
        tabIndex={0}
        aria-label="Upload PDF drop zone"
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          accept(e.dataTransfer.files?.[0]);
        }}
        onClick={() => !fileName && inputRef.current?.click()}
        className={cn(
          "rounded-2xl border-2 border-dashed p-8 text-center transition-all cursor-pointer",
          dragging
            ? "border-[#18A957] bg-[#EAF7EF]"
            : fileName
              ? "border-[#18A957]/40 bg-[#F0F8F3] cursor-default"
              : "border-[#CDEDD8] bg-white hover:border-[#18A957]/50",
        )}
      >
        {fileName ? (
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF7EF]">
              <FileText className="h-6 w-6 text-[#18A957]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#0E2F25]">{fileName}</p>
              <p className="text-xs text-[#4A7A60]">
                {(fileSize / 1024 / 1024).toFixed(2)} MB · PDF
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClear();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#CDEDD8] bg-white px-3 py-1.5 text-xs font-medium text-[#0E2F25] hover:border-red-300 hover:text-red-600"
            >
              <X className="h-3 w-3" /> Remove
            </button>
          </div>
        ) : (
          <>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#CDEDD8] bg-[#EAF7EF]">
              <Upload className="h-5 w-5 text-[#18A957]" />
            </div>
            <p className="mt-3 text-sm font-semibold text-[#0E2F25]">
              Drag &amp; drop your PDF here
            </p>
            <p className="mt-1 text-xs text-[#4A7A60]">PDF only · Maximum 5 MB</p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl border border-[#CDEDD8] bg-white px-5 py-2.5 text-sm font-medium text-[#0E2F25] hover:border-[#18A957] hover:text-[#18A957]"
            >
              Browse files
            </button>
          </>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => accept(e.target.files?.[0])}
        />
      </div>

      <FieldError msg={error} />

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#CDEDD8] bg-[#F8FCF8] px-4 py-3">
        <p className="text-xs text-[#4A7A60]">
          Suggested name:{" "}
          <code className="font-mono text-[#0E2F25]">{suggestedName}</code>
        </p>
        <a
          href="/BioBridge-One-Pager-Template.pdf"
          download
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#CDEDD8] bg-white px-3 py-1.5 text-xs font-semibold text-[#18A957] hover:border-[#18A957]"
        >
          <Download className="h-3.5 w-3.5" /> Download template
        </a>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Review card (also exported for status page)
──────────────────────────────────────────────── */
export function ReviewCard({ data }: { data: ApplicationDraft }) {
  const cat = categoryById(data.categoryId);
  const ps = problemByCode(data.statementCode);

  function Row({ label, value }: { label: string; value: string }) {
    return (
      <div>
        <dt className="text-[11px] font-medium uppercase tracking-wider text-[#4A7A60]">
          {label}
        </dt>
        <dd className="mt-0.5 break-words text-sm font-semibold text-[#0E2F25]">
          {value || "—"}
        </dd>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#CDEDD8] bg-[#F8FCF8] p-6">
      <p className="mb-5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#18A957]">
        Application Review
      </p>

      <dl className="grid gap-5 sm:grid-cols-2">
        <Row label="Team Name" value={data.teamName} />
        <Row label="Team Size" value={`${data.teamSize} members`} />
        <Row label="Team Lead" value={data.fullName} />
        <Row label="Email" value={data.email} />
        <Row label="Phone" value={data.phone ? `+91 ${data.phone}` : ""} />
        <Row label="College" value={data.college} />
        <Row label="City / District" value={data.city} />
        <Row label="State / UT" value={data.state} />
        <Row label="Category" value={cat?.name ?? ""} />
        <Row
          label="Problem Statement"
          value={ps ? `${ps.code} — ${ps.title}` : ""}
        />
        {data.selfProposedTitle && (
          <Row label="Self-Proposed Title" value={data.selfProposedTitle} />
        )}
        <Row label="One-Pager" value={data.fileName} />
      </dl>

      <div className="mt-6 border-t border-[#CDEDD8] pt-5">
        <p className="mb-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#18A957]">
          Team Members
        </p>
        <ul className="space-y-2.5">
          {data.members.slice(0, data.teamSize).map((m, i) => (
            <li
              key={i}
              className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-[#CDEDD8] bg-white px-4 py-3 text-sm"
            >
              <UserRound className="h-4 w-4 shrink-0 text-[#18A957]" />
              <span className="font-semibold text-[#0E2F25]">{m.fullName || "—"}</span>
              {i === 0 && (
                <span className="rounded-full bg-[#EAF7EF] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#18A957]">
                  Team Lead
                </span>
              )}
              <span className="text-[#4A7A60]">{m.email}</span>
              {m.phone && (
                <span className="text-[#4A7A60]">+91 {m.phone}</span>
              )}
              <span className="text-[#4A7A60]">
                {[m.degree, m.branch, m.year].filter(Boolean).join(" · ")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Confirmation / Submission slip
──────────────────────────────────────────────── */
export function Confirmation({
  application,
}: {
  application: SubmittedApplication;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Success card */}
      <div className="rounded-2xl border border-[#CDEDD8] bg-white p-8 text-center shadow-[0_4px_24px_-8px_rgba(24,169,87,0.15)] print:border-0 print:shadow-none">
        {/* Check icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7EF]">
          <Check className="h-8 w-8 text-[#18A957]" />
        </div>

        <h2 className="mt-5 font-display text-[26px] font-bold text-[#0E2F25]">
          Application Submitted
        </h2>
        <p className="mt-2 text-[15px] text-[#4A7A60]">
          Your BioBridge application has been successfully submitted. Keep your Application ID
          safe — you'll need it to check your status.
        </p>

        {/* Application ID */}
        <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-2xl border border-[#18A957]/30 bg-[#EAF7EF] px-6 py-4">
          <div className="text-left">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#4A7A60]">
              Application ID
            </p>
            <p className="mt-1 font-mono text-2xl font-bold tracking-widest text-[#18A957]">
              {application.applicationId}
            </p>
          </div>
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(application.applicationId);
                setCopied(true);
                setTimeout(() => setCopied(false), 1800);
              } catch {
                /* unavailable */
              }
            }}
            className="flex items-center gap-1.5 rounded-xl bg-[#18A957] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#087A43] print:hidden"
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? "Copied!" : "Copy ID"}
          </button>
        </div>

        {/* Action buttons */}
        <div className="mt-5 flex flex-wrap justify-center gap-2.5 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl border border-[#CDEDD8] bg-white px-5 py-2.5 text-sm font-semibold text-[#0E2F25] hover:border-[#18A957] hover:text-[#18A957]"
          >
            <Printer className="h-4 w-4" /> Print / Download Slip
          </button>
        </div>
      </div>

      {/* Submission slip */}
      <div className="mt-5 rounded-2xl border border-[#CDEDD8] bg-white p-7">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#18A957]">
              Submission Slip
            </p>
            <p className="mt-0.5 text-xs text-[#4A7A60]">
              Submitted on{" "}
              {new Date(application.submittedAt).toLocaleString("en-IN", {
                dateStyle: "long",
                timeStyle: "short",
              })}
            </p>
          </div>
          <div className="font-mono text-xs text-[#4A7A60] text-right hidden sm:block">
            <p>Keep this ID for reference</p>
            <p className="font-bold text-[#18A957]">{application.applicationId}</p>
          </div>
        </div>
        <ReviewCard data={application} />
      </div>

      {/* Next steps */}
      <div className="mt-5 rounded-2xl border border-[#CDEDD8] bg-white p-7">
        <h3 className="font-display text-[18px] font-bold text-[#0E2F25]">Next Steps</h3>
        <p className="mt-1 text-sm text-[#4A7A60]">
          If shortlisted, attendance at all four weekends is mandatory for your entire team.
        </p>
        <ol className="mt-5 space-y-3">
          {[
            "Weekend 1 — Problem deep dive and mentor allocation. All members must attend.",
            "Weekend 2 — Prototype and experiment design review with domain mentors.",
            "Weekend 3 — Build sprint checkpoint, feasibility and biosafety review.",
            "Weekend 4 — Final pitch rehearsal, then grand finale demo day.",
          ].map((text, i) => (
            <li
              key={i}
              className="flex gap-3.5 rounded-xl border border-[#CDEDD8] bg-[#F8FCF8] p-4"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF7EF] font-display text-[12px] font-bold text-[#18A957]">
                {i + 1}
              </span>
              <span className="text-sm text-[#0E2F25]">{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main ApplyForm component
──────────────────────────────────────────────── */
export function ApplyForm({
  initialStatement,
}: {
  initialStatement?: string;
}) {
  const [data, setData] = useState<ApplicationDraft>(() => emptyDraft());
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<SubmittedApplication | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Restore draft + apply preselected statement
  useEffect(() => {
    const draft = loadDraft();
    setData((prev) => {
      let next = draft ? { ...draft } : { ...prev };
      if (initialStatement) {
        const ps = problemByCode(initialStatement);
        if (ps) next = { ...next, categoryId: ps.categoryId, statementCode: ps.code };
      }
      return next;
    });
    setHydrated(true);
  }, [initialStatement]);

  // Auto-save draft
  useEffect(() => {
    if (hydrated && !submitted) saveDraft(data);
  }, [data, hydrated, submitted]);

  // Mirror lead info into member[0]
  useEffect(() => {
    setData((d) => {
      const lead: TeamMember = {
        ...(d.members[0] ?? emptyMember()),
        fullName: d.fullName,
        email: d.email,
        phone: d.phone,
      };
      return { ...d, members: [lead, ...d.members.slice(1)] };
    });
  }, [data.fullName, data.email, data.phone]);

  const set = <K extends keyof ApplicationDraft>(key: K, value: ApplicationDraft[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const setMember = (index: number, key: keyof TeamMember, value: string) =>
    setData((d) => {
      const members = d.members.map((m, i) => (i === index ? { ...m, [key]: value } : m));
      return { ...d, members };
    });

  const statements = useMemo(
    () => (data.categoryId ? problemsByCategory(data.categoryId) : []),
    [data.categoryId],
  );
  const selectedStatement = problemByCode(data.statementCode);
  const wildcardSelected = !!selectedStatement?.wildcard;

  /* ── Validation ── */
  function validate(s: number): Errors {
    const e: Errors = {};
    if (s === 0) {
      if (!data.fullName.trim()) e["fullName"] = "Full name is required.";
      if (!data.email.trim()) e["email"] = "Email address is required.";
      else if (!emailOk(data.email)) e["email"] = "Enter a valid email address.";
      if (!data.phone.trim()) e["phone"] = "Phone number is required.";
      else if (!phoneOk(data.phone)) e["phone"] = "Enter a valid 10-digit Indian mobile number.";
    }
    if (s === 1) {
      if (!data.college.trim()) e["college"] = "College / institution name is required.";
      if (!data.city.trim()) e["city"] = "City / district is required.";
      if (!data.state) e["state"] = "Select your state or union territory.";
    }
    if (s === 2) {
      if (!data.teamName.trim()) e["teamName"] = "Team name is required.";
      for (let i = 0; i < data.teamSize; i++) {
        const m = data.members[i] ?? emptyMember();
        if (i > 0) {
          if (!m.fullName.trim()) e[`m${i}.fullName`] = "Full name is required.";
          if (!m.email.trim()) e[`m${i}.email`] = "Email address is required.";
          else if (!emailOk(m.email)) e[`m${i}.email`] = "Enter a valid email address.";
          if (!m.phone.trim()) e[`m${i}.phone`] = "Phone number is required.";
          else if (!phoneOk(m.phone)) e[`m${i}.phone`] = "Enter a valid 10-digit mobile number.";
        }
        if (!m.degree) e[`m${i}.degree`] = "Select a degree.";
        if (!m.branch) e[`m${i}.branch`] = "Select a course / branch.";
        if (!m.year) e[`m${i}.year`] = "Select the year of study.";
      }
    }
    if (s === 3) {
      if (!data.categoryId) e["categoryId"] = "Select a category.";
      if (!data.statementCode) e["statementCode"] = "Select a problem statement.";
      if (wildcardSelected && !data.selfProposedTitle.trim())
        e["selfProposedTitle"] = "A self-proposed title is required for the wildcard statement.";
    }
    if (s === 4) {
      if (!data.fileName) e["file"] = "Please upload your one-pager PDF (max 5 MB).";
    }
    return e;
  }

  function next() {
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function back() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finalSubmit() {
    const allErrors = [0, 1, 2, 3, 4].reduce<Errors>(
      (acc, i) => ({ ...acc, ...validate(i) }),
      {},
    );
    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) {
      setStep(0);
      return;
    }
    const record = submitApplication(data);
    setSubmitted(record);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) return <Confirmation application={submitted} />;

  return (
    <div>
      <Stepper step={step} />

      {/* Card */}
      <div className="rounded-2xl border border-[#CDEDD8] bg-white p-6 shadow-[0_2px_16px_-4px_rgba(24,169,87,0.10)] sm:p-8">

        {/* ── Step 0: Contact ── */}
        {step === 0 && (
          <section className="space-y-5">
            <SectionTitle
              title="Contact Details"
              subtitle="Team lead information. All official communication goes to these details."
            />
            <div>
              <FieldLabel required>Full Name</FieldLabel>
              <input
                className={fieldBase}
                value={data.fullName}
                onChange={(e) => set("fullName", e.target.value)}
                placeholder="e.g. Aarthi Ramesh"
              />
              <FieldError msg={errors["fullName"]} />
            </div>
            <div>
              <FieldLabel required>Email Address</FieldLabel>
              <input
                className={fieldBase}
                type="email"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="you@college.edu"
              />
              <p className="mt-1.5 text-xs text-[#4A7A60]">
                Shortlist notifications and session invites will be sent to this address.
              </p>
              <FieldError msg={errors["email"]} />
            </div>
            <div>
              <FieldLabel required>Phone Number</FieldLabel>
              <div className="flex overflow-hidden rounded-xl border border-[#CDEDD8] bg-white focus-within:border-[#18A957] focus-within:shadow-[0_0_0_3px_rgba(24,169,87,0.15)] transition-all">
                <span className="flex items-center border-r border-[#CDEDD8] bg-[#F8FCF8] px-3.5 font-mono text-sm text-[#4A7A60]">
                  +91
                </span>
                <input
                  className="w-full bg-transparent px-4 py-3 text-sm text-[#0E2F25] outline-none"
                  inputMode="numeric"
                  maxLength={10}
                  value={data.phone}
                  onChange={(e) => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit mobile number"
                />
              </div>
              <FieldError msg={errors["phone"]} />
            </div>
          </section>
        )}

        {/* ── Step 1: College ── */}
        {step === 1 && (
          <section className="space-y-5">
            <SectionTitle
              title="College Details"
              subtitle="Where is your team registered as students?"
            />
            <CollegeAutocomplete
              value={data.college}
              onChange={(v) => set("college", v)}
              error={errors["college"]}
            />
            <div>
              <FieldLabel required>City / District</FieldLabel>
              <input
                className={fieldBase}
                value={data.city}
                onChange={(e) => set("city", e.target.value)}
                placeholder="e.g. Namakkal"
              />
              <FieldError msg={errors["city"]} />
            </div>
            <div>
              <FieldLabel required>State / Union Territory</FieldLabel>
              <select
                className={fieldBase}
                value={data.state}
                onChange={(e) => set("state", e.target.value)}
              >
                <option value="">Select state or union territory</option>
                {indianStates.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <FieldError msg={errors["state"]} />
            </div>
          </section>
        )}

        {/* ── Step 2: Team ── */}
        {step === 2 && (
          <section className="space-y-6">
            <SectionTitle
              title="Build Your Team"
              subtitle="Teams must have 2 to 4 members including the team lead."
            />

            <div>
              <FieldLabel required>Team Name</FieldLabel>
              <input
                className={fieldBase}
                value={data.teamName}
                onChange={(e) => set("teamName", e.target.value)}
                placeholder="e.g. BioSprint"
              />
              <FieldError msg={errors["teamName"]} />
            </div>

            <div>
              <FieldLabel required>Team Size</FieldLabel>
              <div className="grid grid-cols-3 gap-3">
                {([2, 3, 4] as const).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => set("teamSize", n)}
                    className={cn(
                      "rounded-xl border py-3.5 text-sm font-semibold transition-all",
                      data.teamSize === n
                        ? "border-[#18A957] bg-[#EAF7EF] text-[#18A957] shadow-[0_0_0_2px_rgba(24,169,87,0.15)]"
                        : "border-[#CDEDD8] bg-white text-[#4A7A60] hover:border-[#18A957] hover:text-[#18A957]",
                    )}
                  >
                    {n} Members
                  </button>
                ))}
              </div>
            </div>

            {Array.from({ length: data.teamSize }).map((_, i) => {
              const m = data.members[i] ?? emptyMember();
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[#CDEDD8] bg-[#F8FCF8] p-5"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EAF7EF] font-display text-sm font-bold text-[#18A957]">
                      {i + 1}
                    </span>
                    <h4 className="text-[15px] font-bold text-[#0E2F25]">
                      {i === 0 ? "Member 1 — Team Lead" : `Member ${i + 1}`}
                    </h4>
                  </div>

                  {i === 0 ? (
                    <dl className="mb-5 grid gap-4 rounded-xl border border-[#CDEDD8] bg-white p-4 sm:grid-cols-3">
                      {[
                        { label: "Name", value: data.fullName },
                        { label: "Email", value: data.email },
                        { label: "Phone", value: data.phone ? `+91 ${data.phone}` : "" },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <dt className="text-[11px] font-medium uppercase tracking-wider text-[#4A7A60]">
                            {label}
                          </dt>
                          <dd className="mt-0.5 break-all text-sm font-semibold text-[#0E2F25]">
                            {value || "—"}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <div className="mb-5 grid gap-4 sm:grid-cols-3">
                      <div>
                        <FieldLabel required>Full Name</FieldLabel>
                        <input
                          className={fieldBase}
                          value={m.fullName}
                          onChange={(e) => setMember(i, "fullName", e.target.value)}
                          placeholder="Full name"
                        />
                        <FieldError msg={errors[`m${i}.fullName`]} />
                      </div>
                      <div>
                        <FieldLabel required>Email Address</FieldLabel>
                        <input
                          className={fieldBase}
                          type="email"
                          value={m.email}
                          onChange={(e) => setMember(i, "email", e.target.value)}
                          placeholder="email@college.edu"
                        />
                        <FieldError msg={errors[`m${i}.email`]} />
                      </div>
                      <div>
                        <FieldLabel required>Phone (10 digits)</FieldLabel>
                        <input
                          className={fieldBase}
                          inputMode="numeric"
                          maxLength={10}
                          value={m.phone}
                          onChange={(e) =>
                            setMember(i, "phone", e.target.value.replace(/\D/g, "").slice(0, 10))
                          }
                          placeholder="10-digit number"
                        />
                        <FieldError msg={errors[`m${i}.phone`]} />
                      </div>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <FieldLabel required>Degree</FieldLabel>
                      <select
                        className={fieldBase}
                        value={m.degree}
                        onChange={(e) => setMember(i, "degree", e.target.value)}
                      >
                        <option value="">Select degree</option>
                        {degrees.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <FieldError msg={errors[`m${i}.degree`]} />
                    </div>
                    <div>
                      <FieldLabel required>Course / Branch</FieldLabel>
                      <select
                        className={fieldBase}
                        value={m.branch}
                        onChange={(e) => setMember(i, "branch", e.target.value)}
                      >
                        <option value="">Select branch</option>
                        {branches.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                      <FieldError msg={errors[`m${i}.branch`]} />
                    </div>
                    <div>
                      <FieldLabel required>Year of Study</FieldLabel>
                      <select
                        className={fieldBase}
                        value={m.year}
                        onChange={(e) => setMember(i, "year", e.target.value)}
                      >
                        <option value="">Select year</option>
                        {yearsOfStudy.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                      <FieldError msg={errors[`m${i}.year`]} />
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* ── Step 3: Challenge ── */}
        {step === 3 && (
          <section className="space-y-5">
            <SectionTitle
              title="Choose Your Challenge"
              subtitle="Pick one of the 7 tracks, then select the problem statement your team will solve."
            />

            <div>
              <FieldLabel required>Category</FieldLabel>
              <select
                className={fieldBase}
                value={data.categoryId}
                onChange={(e) => {
                  set("categoryId", e.target.value);
                  set("statementCode", "");
                  set("selfProposedTitle", "");
                }}
              >
                <option value="">Select a category</option>
                {categories.map((c, i) => (
                  <option key={c.id} value={c.id}>
                    {i + 1}. {c.name}
                  </option>
                ))}
              </select>
              <FieldError msg={errors["categoryId"]} />
            </div>

            <div>
              <FieldLabel required>Problem Statement</FieldLabel>
              <select
                className={fieldBase}
                value={data.statementCode}
                disabled={!data.categoryId}
                onChange={(e) => set("statementCode", e.target.value)}
              >
                <option value="">
                  {data.categoryId
                    ? "Select a problem statement"
                    : "Choose a category first"}
                </option>
                {statements.map((p) => (
                  <option key={p.code} value={p.code}>
                    {p.code} — {p.title}
                  </option>
                ))}
              </select>
              <FieldError msg={errors["statementCode"]} />
            </div>

            {/* Statement preview card */}
            {selectedStatement && (
              <div className="rounded-xl border border-[#18A957]/25 bg-[#EAF7EF] p-5">
                <span className="font-mono text-[11px] font-bold text-[#18A957]">
                  {selectedStatement.code}
                </span>
                <h4 className="mt-1.5 text-[15px] font-bold text-[#0E2F25]">
                  {selectedStatement.title}
                </h4>
                <p className="mt-2 text-sm text-[#4A7A60]">
                  {selectedStatement.description}
                </p>
                {selectedStatement.wildcard && (
                  <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-[#CDEDD8] bg-white px-2.5 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-[#18A957]">
                    ✨ Wildcard · Propose your own problem
                  </span>
                )}
              </div>
            )}

            {/* Self-proposed title — wildcard only */}
            {wildcardSelected && (
              <div>
                <FieldLabel required>Your Self-Proposed Problem Title</FieldLabel>
                <input
                  className={fieldBase}
                  value={data.selfProposedTitle}
                  onChange={(e) => set("selfProposedTitle", e.target.value)}
                  placeholder="Title of the bio-related problem you are proposing"
                />
                <FieldError msg={errors["selfProposedTitle"]} />
              </div>
            )}
          </section>
        )}

        {/* ── Step 4: Upload & Review ── */}
        {step === 4 && (
          <section className="space-y-6">
            <SectionTitle
              title="Upload & Review"
              subtitle="Attach your one-pager PDF, then verify every detail before submitting."
            />
            <UploadZone
              fileName={data.fileName}
              fileSize={data.fileSize}
              suggestedName={`${(data.teamName || "TeamName").replace(/\s+/g, "")}_${
                data.statementCode || "StatementCode"
              }.pdf`}
              error={errors["file"]}
              onPick={(name, size) => {
                set("fileName", name);
                set("fileSize", size);
                setErrors((e) => ({ ...e, file: "" }));
              }}
              onError={(msg) => setErrors((e) => ({ ...e, file: msg }))}
              onClear={() => {
                set("fileName", "");
                set("fileSize", 0);
              }}
            />
            <ReviewCard data={data} />
          </section>
        )}

        {/* ── Navigation buttons ── */}
        <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#CDEDD8] pt-6">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#CDEDD8] px-5 py-3 text-sm font-semibold text-[#0E2F25] transition-all hover:border-[#18A957] hover:text-[#18A957] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#18A957] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_-4px_rgba(24,169,87,0.45)] transition-all hover:bg-[#087A43] hover:shadow-[0_6px_20px_-4px_rgba(24,169,87,0.5)]"
            >
              Continue
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={finalSubmit}
              className="inline-flex items-center gap-2 rounded-xl bg-[#18A957] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_-4px_rgba(24,169,87,0.45)] transition-all hover:bg-[#087A43]"
            >
              <Check className="h-4 w-4" />
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
