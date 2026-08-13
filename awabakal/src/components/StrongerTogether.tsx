import SectionLabel from "@/components/ui/SectionLabel";

const partners =["Deloitte.", "Partner 2", "Partner 3", "Partner 4"];

export default function StrongerTogether() {
  return (
    <section className="relative isolate overflow-hidden bg-[#4B0F45] px-6 py-24 font-cambay lg:px-[60px] lg:py-[110px]">
      {/* lighter core falling off to dark at the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(120%_100%_at_35%_45%,#6B1A62_0%,#4B0F45_45%,#2E0A2B_100%)]"
      />

      {/* panel artwork washed back to 7% over the purple gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 select-none opacity-[0.07]"
        style={{
          backgroundImage: 'url("/Purple Panel Element.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-2 lg:gap-[80px]">
        {/* ── left: badge, title, copy ────────────────────────────── */}
        <div>
          <SectionLabel tone="dark" className="mb-[40px]">
            Partnership With
          </SectionLabel>

          <h2 className="text-[48px] font-normal leading-[1.15] text-white lg:text-[64px]">
            Stronger Together
          </h2>

          <p className="mt-[36px] max-w-[665px] text-[18px] leading-[42px] text-white/80 lg:text-[20px]">
            We work alongside organisations, communities and partners to create
            meaningful change and better outcomes for our people.
          </p>
        </div>

        {/* ── right: partner grid, one framed box split into quarters ── */}
        <div className="grid grid-cols-2 overflow-hidden rounded-[20px] border border-white/25">
          {partners.map((name, i) => (
            <div
              key={name}
              className={`flex h-[160px] items-center justify-center px-4 text-[28px] font-bold text-white lg:h-[220px] lg:text-[38px] ${
                i % 2 === 0 ? "border-r border-white/25" : ""
              } ${i < 2 ? "border-b border-white/25" : ""}`}
            >
              {name === "Deloitte." ? name : name.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
