import { WEEKEND_SESSIONS } from "@/data/home";

export function WeekendSessions() {
  return (
    <section className="bio-section !py-10 sm:!py-14 bg-white border-y border-[#BEE3EA]" id="sessions">
      <div className="bio-container">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2F1F5] pb-5">
          <div>
            <p className="bio-section-tag">CURRICULUM</p>
            <h2 className="text-[28px] font-bold text-[#0B2A4A] sm:text-[38px]">
              The Four Weekend Sessions
            </h2>
            <p className="mt-1 text-[15px] sm:text-[16.5px] text-[#366273]">
              Four online sessions run across the weekends of the 4-week build period.
            </p>
          </div>

          <div className="rounded-xl border border-[#FED7AA] bg-[#FFFBEB] px-4 py-2.5 text-right">
            <span className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#B45309]">
              Condition of Staying in Programme
            </span>
            <span className="text-[13px] font-semibold text-[#0B2A4A]">
              Mandatory for every member of every team
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WEEKEND_SESSIONS.map((sess) => (
            <div
              key={sess.num}
              className="rounded-2xl border border-[#D9F2F6] bg-[#FAFDFE] p-5 sm:p-6 transition-all hover:bg-white hover:border-[#1599B5] hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1599B5] font-display text-[13px] font-bold text-white">
                    {sess.num}
                  </span>
                  <span className="font-mono text-[10.5px] text-[#1599B5] font-bold">WEEKEND</span>
                </div>

                <h3 className="mt-3 text-[17px] sm:text-[18px] font-bold text-[#0B2A4A]">{sess.name}</h3>
                <p className="mt-1.5 text-[13.5px] text-[#366273] leading-relaxed">{sess.desc}</p>
              </div>
              <div className="mt-3.5 rounded-xl bg-[#EBF7F9] p-3 text-[12px] text-[#0B2A4A]">
                <strong>Focus:</strong> {sess.focus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
