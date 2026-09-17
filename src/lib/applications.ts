export type TeamMember = {
  fullName: string;
  email: string;
  phone: string;
  degree: string;
  branch: string;
  year: string;
};

export type ApplicationDraft = {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  city: string;
  state: string;
  teamSize: 2 | 3 | 4;
  teamName: string;
  members: TeamMember[];
  categoryId: string;
  statementCode: string;
  selfProposedTitle: string;
  fileName: string;
  fileSize: number;
};

export type SubmittedApplication = ApplicationDraft & {
  applicationId: string;
  submittedAt: string;
};

const DRAFT_KEY = "biobridge:draft";
const LIST_KEY = "biobridge:applications";

export const emptyMember = (): TeamMember => ({
  fullName: "",
  email: "",
  phone: "",
  degree: "",
  branch: "",
  year: "",
});

export const emptyDraft = (): ApplicationDraft => ({
  fullName: "",
  email: "",
  phone: "",
  college: "",
  city: "",
  state: "",
  teamSize: 2,
  teamName: "",
  members: [emptyMember(), emptyMember(), emptyMember(), emptyMember()],
  categoryId: "",
  statementCode: "",
  selfProposedTitle: "",
  fileName: "",
  fileSize: 0,
});

const canUseStorage = () => typeof window !== "undefined" && !!window.localStorage;

export function loadDraft(): ApplicationDraft | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ApplicationDraft;
    return { ...emptyDraft(), ...parsed };
  } catch {
    return null;
  }
}

export function saveDraft(draft: ApplicationDraft) {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } catch {
    /* storage full or unavailable */
  }
}

export function clearDraft() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(DRAFT_KEY);
}

export function listApplications(): SubmittedApplication[] {
  if (!canUseStorage()) return [];
  try {
    const raw = window.localStorage.getItem(LIST_KEY);
    return raw ? (JSON.parse(raw) as SubmittedApplication[]) : [];
  } catch {
    return [];
  }
}

export function generateApplicationId(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let i = 0; i < 5; i += 1) {
    suffix += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `BB-2026-${suffix}`;
}

export function submitApplication(draft: ApplicationDraft): SubmittedApplication {
  const existing = listApplications();
  let applicationId = generateApplicationId();
  while (existing.some((a) => a.applicationId === applicationId)) {
    applicationId = generateApplicationId();
  }
  const record: SubmittedApplication = {
    ...draft,
    members: draft.members.slice(0, draft.teamSize),
    applicationId,
    submittedAt: new Date().toISOString(),
  };
  if (canUseStorage()) {
    try {
      window.localStorage.setItem(LIST_KEY, JSON.stringify([record, ...existing]));
    } catch {
      /* ignore */
    }
  }
  clearDraft();
  return record;
}

export function findApplication(id: string): SubmittedApplication | undefined {
  const needle = id.trim().toUpperCase();
  return listApplications().find((a) => a.applicationId.toUpperCase() === needle);
}

export const SUBMISSION_DEADLINE = "2026-09-30T23:59:59+05:30";
