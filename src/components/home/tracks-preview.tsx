import { Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, Users, Leaf } from "lucide-react";
import { categories, problemsByCategory } from "@/data/problems";

const TRACK_ICONS = [FlaskConical, Users, Leaf];

export function TracksPreview() {
  return (
    <section className="bio-section bio-tracks" id="tracks">
      <div className="bio-container">
        <p className="bio-section-tag">HACKATHON TRACKS</p>
        <div className="bio-section-heading">
          <div>
            <h2 className="text-[32px] sm:text-[46px]">
              Choose your <span>challenge.</span>
            </h2>
            <p className="mt-2 text-[15.5px] sm:text-[17px] text-[#366273]">
              36 curated problem statements across 7 domain tracks. Pick before you apply.
            </p>
          </div>
          <Link to="/problems" className="bio-text-link font-bold text-[#1599B5]">
            View All 36 Challenges <ArrowRight size={16} />
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

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#BEE3EA] bg-white p-6 shadow-sm">
          <div>
            <strong className="block text-[15px] text-[#0B2A4A]">
              Explore All 7 Innovation Tracks
            </strong>
            <p className="text-[13px] text-[#366273]">
              Precision Biotherapeutics, Diagnostics, Bioinformatics &amp; Bio-AI, Agri-Biotech,
              Functional Foods, Environmental Biotech, and Open Bio.
            </p>
          </div>
          <Link
            to="/problems"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1599B5] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0E7E96]"
          >
            Open Challenges Directory <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
