import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { REGISTER_URL } from "@/data/home";

export function CtaBanner() {
  return (
    <section className="bio-register" id="register">
      <div className="bio-container bio-register-card">
        <div>
          <p className="bio-section-tag">READY TO BUILD?</p>
          <h2>
            Your idea can
            <br />
            <span>shape tomorrow.</span>
          </h2>
          <p className="mt-2 max-w-md text-[14px] text-white/70">
            Applications are free and reviewed on rolling submission. Form your team of 2–4 and
            submit your one-pager today.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={REGISTER_URL}
            className="bio-button bio-button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register for BioBridge <ArrowRight size={17} />
          </a>
          <Link to="/problems" className="bio-button bio-button-ghost text-white border-white/20">
            Browse 36 Challenges
          </Link>
        </div>
      </div>
    </section>
  );
}
