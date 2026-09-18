export function ApplicantProfile() {
  return (
    <section className="bio-section bg-white border-b border-[#BEE3EA]" id="ethos">
      <div className="bio-container bio-narrow">
        <p className="bio-section-tag">APPLICANT PROFILE</p>
        <h2 className="text-[32px] font-bold text-[#0B2A4A] sm:text-[44px]">
          Built for Builders, <span>Not Just Pitchers.</span>
        </h2>
        <div className="mt-5 space-y-4 text-[16px] sm:text-[17px] text-[#366273] leading-relaxed">
          <p>
            <strong>The priority applicant:</strong> The student team already working on a
            problem in this space — a project that has been running in a lab, a final-year
            build, or an idea a team has been circling for months.
          </p>
          <p>
            Four weeks is enough time to sharpen and package existing work; it is short for
            starting from zero. The problem statements give those teams a frame to apply through,
            and give genuinely new teams somewhere to start.
          </p>
          <div className="rounded-2xl border border-[#D9F2F6] bg-[#F4FAFB] p-6 text-[15px] text-[#0B2A4A]">
            <strong className="text-[#1599B5]">Why zero entry fee is deliberate:</strong>
            <p className="mt-1.5">
              Dropping the registration fee is deliberate. It removes the main reason a serious team
              from a smaller college self-selects out, and it widens the funnel at the top — which
              matters when only 50 of the applications carry through to the build phase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
