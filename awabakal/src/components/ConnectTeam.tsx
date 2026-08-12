import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import VectorPortrait from "@/components/ui/VectorPortrait";

/** The photo used by both the large and the small blob. */
const PORTRAIT = "/1123.png";

export default function ConnectTeam() {
  return (
    <section
      id="contact"
      className="px-6 pb-24 font-cambay lg:px-[90px] lg:pb-[120px]"
      style={{
        // continues the FAQ section's wash so the two read as one surface
        backgroundImage:
          "linear-gradient(180deg, #fdf3ee 0%, #ffffff 22%, #ffffff 62%, #f6ecf6 100%)",
      }}
    >
      {/* Figma: 1740x610 banner. `cta image.png` is exported at exactly that
          size, so the card keeps the same ratio and the artwork lines up at
          every width instead of being cropped by a fixed height. */}
      <div className="relative isolate mx-auto max-w-[1740px] overflow-hidden rounded-[24px] bg-brand lg:aspect-[1740/610]">
        <Image
          src="/cta image.png"
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 1024px) 100vw, 1740px"
          className="-z-10 object-cover"
        />

        {/* ── copy ─────────────────────────────────────────────────── */}
        {/* percentages are the Figma pixel offsets over 1740 x 610 */}
        <div className="flex flex-col items-start px-8 py-14 lg:absolute lg:left-[5.8%] lg:top-[24.26%] lg:w-[46.03%] lg:p-0">
          <h2 className="max-w-[640px] text-[34px] font-normal leading-[1.15] text-white lg:text-[52px]">
            Connect With Our Team
          </h2>

          <p className="mt-[18px] max-w-[420px] text-[15px] leading-[26px] text-white/85 lg:mt-[22px] lg:text-[16px]">
            We&apos;re Always Here To Listen And Support Our Community.
          </p>

          <CtaButton
            variant="white"
            href="#contact"
            className="mt-[28px] lg:mt-[40px]"
          >
            Get In Touch
          </CtaButton>
        </div>

        {/* ── portraits, both masked with the Vector 2542 blob ──────── */}

      </div>
    </section>
  );
}
