import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight, FlaskConical, Leaf, Sparkles, Users } from "lucide-react";
import { categories, problemsByCategory } from "@/data/problems";
import DecryptedText from "@/components/decrypted-text";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIO BRIDGE | Hackathon 2026" },
      {
        name: "description",
        content: "BIO BRIDGE Hackathon 2026 — bridging biology, technology, and innovation.",
      },
    ],
  }),
  component: Home,
});

const SCHEDULE = [
  ["01", "Applications", "Submit your team profile and one-page proposal."],
  ["02", "Mentoring", "Develop your solution through guided review sessions."],
  ["03", "Demonstration day", "Present your prototype and impact case to the jury."],
] as const;

const TRACK_ICONS = [FlaskConical, Users, Leaf];

const REGISTER_URL =
  "https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const startVideo = async () => {
      try {
        if (video.paused) {
          await video.play();
        }
      } catch {
        // Autoplay can be blocked by some browsers.
        // The poster image will remain visible in that case.
      }
    };

    // Try immediately.
    void startVideo();

    // Try again when the video is ready.
    video.addEventListener("loadeddata", startVideo);
    video.addEventListener("canplay", startVideo);

    return () => {
      video.removeEventListener("loadeddata", startVideo);
      video.removeEventListener("canplay", startVideo);
    };
  }, []);

  return (
    <div className="bio-home overflow-x-hidden">
      <section className="bio-hero" id="home">
        {/* Background video */}
        <video
          ref={videoRef}
          className="bio-hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/V-poster.jpg"
          aria-hidden="true"
        >
          <source src="/V.mp4" type="video/mp4" />
        </video>

        {/* Video overlay */}
        <div className="bio-hero-video-overlay" aria-hidden="true" />

        {/* All foreground content */}
        <div className="bio-container bio-hero-grid">
          <div className="bio-hero-copy">
            <p className="bio-eyebrow">
              <DecryptedText
                text="BIOLOGICAL INNOVATION • AI • LIFE SCIENCES"
                speed={35}
                maxIterations={15}
                characters="ATGC01Δμλ"
                revealDirection="start"
                className="bio-revealed"
                encryptedClassName="bio-encrypted"
                animateOn="view"
              />
            </p>

            {/* BioBridge PNG Wordmark */}
            <h1 className="bio-wordmark-title">
              <img
                src="/biobridge-wordmark.png"
                alt="BioBridge — Ideas for a healthier tomorrow"
                className="bio-wordmark"
                draggable={false}
              />
            </h1>

            <p className="bio-hero-description">
              A student-led innovation programme bringing together biology, technology, and
              interdisciplinary problem-solving to shape practical solutions for a healthier future.
            </p>

            <div className="bio-actions">
              <a
                href={REGISTER_URL}
                className="bio-button bio-button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register now <ArrowRight size={17} />
              </a>

              <a href="#tracks" className="bio-button bio-button-ghost">
                Explore tracks
              </a>
            </div>

            <div className="bio-highlights">
              <div>
                <Users />
                <span>
                  <strong>Students</strong>
                  <small>Innovators</small>
                </span>
              </div>

              <div>
                <Sparkles />
                <span>
                  <strong>Ideas</strong>
                  <small>Solutions</small>
                </span>
              </div>

              <div>
                <Leaf />
                <span>
                  <strong>Impact</strong>
                  <small>Tomorrow</small>
                </span>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="bio-scroll">
          Scroll to explore <span />
        </a>
      </section>

      {/* ABOUT */}
      <section className="bio-section bio-about" id="about">
        <div className="bio-container bio-narrow">
          <p className="bio-section-tag">ABOUT BIO BRIDGE</p>

          <h2>Shaping the Future of Health and Innovation</h2>
          <p>
            BioBridge is a student-led innovation programme that brings together biology,
            technology, and interdisciplinary problem-solving to create practical solutions for a
            healthier future.
          </p>
        </div>
      </section>

      <section className="bio-section bio-tracks" id="tracks">
        <div className="bio-container">
          <p className="bio-section-tag">HACKATHON TRACKS</p>
          <div className="bio-section-heading">
            <h2>
              Choose your <span>challenge.</span>
            </h2>
            <Link to="/problems" className="bio-text-link">
              View all challenges <ArrowRight size={15} />
            </Link>
          </div>
          <div className="bio-track-grid">
            {categories.slice(0, 3).map((category, index) => {
              const Icon = TRACK_ICONS[index] ?? FlaskConical;
              return (
                <Link
                  key={category.id}
                  to="/problems"
                  search={{ track: category.id }}
                  className="bio-track-card"
                >
                  <span className="bio-track-number">0{index + 1}</span>
                  <Icon />
                  <h3>{category.name}</h3>
                  <p>{category.blurb}</p>
                  <small>
                    {problemsByCategory(category.id).length} problem statements{" "}
                    <ArrowRight size={13} />
                  </small>
                </Link>
              );
            })}
          </div>
          <div className="bio-more-tracks">
            {categories.slice(3).map((category) => (
              <span key={category.id}>{category.name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bio-section bio-schedule" id="schedule">
        <div className="bio-container">
          <p className="bio-section-tag">PROGRAMME SCHEDULE</p>
          <h2>
            From first concept to <span>final presentation.</span>
          </h2>
          <div className="bio-schedule-grid">
            {SCHEDULE.map(([number, title, copy]) => (
              <div className="bio-schedule-item" key={number}>
                <b>{number}</b>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bio-section bio-faq" id="faq">
        <div className="bio-container bio-narrow">
          <p className="bio-section-tag">FREQUENTLY ASKED QUESTIONS</p>
          <h2>
            Everything you need to <span>get started.</span>
          </h2>
          {[
            [
              "Who can participate?",
              "BIO BRIDGE is open to eligible students across India. Teams may include two to four members.",
            ],
            [
              "What should the application include?",
              "Choose one challenge and submit your team details together with a one-page proposal.",
            ],
            [
              "Can we submit an original idea?",
              "Yes. Original concepts may be submitted through the Open Bio track.",
            ],
          ].map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bio-register" id="register">
        <div className="bio-container bio-register-card">
          <div>
            <p className="bio-section-tag">READY TO BUILD?</p>
            <h2>
              Your idea can
              <br />
              <span>shape tomorrow.</span>
            </h2>
          </div>
          <a href={REGISTER_URL} className="bio-button bio-button-primary">
            Register for BIO BRIDGE <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}
