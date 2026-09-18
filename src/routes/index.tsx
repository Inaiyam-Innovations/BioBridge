import { createFileRoute } from "@tanstack/react-router";
import {
  HeroSection,
  StagesPipeline,
  WeekendSessions,
  MentorsSection,
  PrizesSection,
  ApplicantProfile,
  TracksPreview,
  PartnersSection,
  CtaBanner,
} from "@/components/home";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="bio-landing">
      {/* Hero with Video, Quick Specs, and Countdown */}
      <HeroSection />

      {/* Stage-by-Stage Timeline with Running DNA Helix */}
      <StagesPipeline />

      {/* Weekend Sessions Curriculum */}
      <WeekendSessions />

      {/* Keynote Mentors & Grand Jury 3D Pentagon Showcase */}
      <MentorsSection />

      {/* Prizes, Grants & MARABANU Venture Acceleration */}
      <PrizesSection />

      {/* Applicant Ethos & Zero-Fee Philosophy */}
      <ApplicantProfile />

      {/* Challenges & Tracks Preview */}
      <TracksPreview />

      {/* Organized By & Supported By Ecosystem Partners */}
      <PartnersSection />

      {/* Bottom Registration CTA Banner */}
      <CtaBanner />
    </div>
  );
}
