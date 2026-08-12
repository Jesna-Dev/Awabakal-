import Image from "next/image";
import VectorPortrait from "@/components/ui/VectorPortrait";

/** The photo used by both the large and the small blob. */
const PORTRAIT = "/1123.png";

export default function ConnectTeam() {
  return (
    <section
      id="contact"
      // background comes from the shared wrapper in page.tsx
      className="px-6 pb-24 font-cambay lg:px-[90px] lg:pb-[120px]"
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

          <a
            href="#contact"
            className="group mt-[28px] inline-flex items-center gap-[10px] rounded-[100px] bg-white px-[24px] py-[15px] font-dm text-[15px] font-medium text-brand transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-white lg:mt-[40px]"
          >
            Get In Touch
            <Image
              src="/figma/about/arrow.svg"
              alt=""
              aria-hidden
              width={19}
              height={12}
              className="h-[12px] w-[19px] transition-[filter] duration-300 ease-in-out group-hover:brightness-0 group-hover:invert"
            />
          </a>
        </div>

        {/* ── portraits, both masked with the Vector 2542 blob ──────── */}

      </div>
    </section>
  );
}
