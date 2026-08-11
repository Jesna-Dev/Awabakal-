import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import InView from "@/components/ui/InView";

/** Leaf/petal shape sitting under the portrait — mirrored for the pair. */
function Petal({ className, flip = false }: { className: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 140 140"
      aria-hidden
      fill="none"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <path
        d="M138 2A136 136 0 0 1 2 138 136 136 0 0 1 138 2Z"
        fill="#E8232A"
        transform={flip ? "scale(-1,1) translate(-140,0)" : undefined}
      />
    </svg>
  );
}

export default function Donation() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 font-cambay lg:px-[60px] lg:py-[300px]">
      {/* Figma: "Red Circle Element 2", 442x419 hanging off the right edge.
          Only the "1" variant of the asset is in public/, so it stands in. */}
      <Image
        src="/Red Circle Element 1.svg"
        alt=""
        aria-hidden
        width={442}
        height={419}
        className="pointer-events-none absolute -right-[262px] top-[476px] -z-10 hidden h-[419px] w-[442px] select-none object-contain lg:block"
      />

      {/* seated-figures outline in the bottom-left. Figma draws it 250x486 at
          x=-58, running 26px past the section's bottom edge; mirrored so the
          cut edge faces right */}
      <Image
        src="/People Sitting Outline Element .png"
        alt=""
        aria-hidden
        width={236}
        height={837}
        className="pointer-events-none absolute -bottom-[26px] -left-[58px] -z-10 hidden h-[486px] w-[250px] -scale-x-100 select-none object-cover lg:block"
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-16 md:grid-cols-2 lg:gap-[90px]">
        {/* ── left: portrait with the two petals ──────────────────── */}
        <div className="relative mx-auto w-fit">
          {/* Circle — sits small behind the petal, then rises once the section
              scrolls into view */}
          <InView className="sun-rise-init" activeClassName="sun-rise">
            <div className="relative size-[240px] overflow-hidden rounded-full sm:size-[300px] lg:size-[340px]">
              <Image
                src="/healthcarefinal.jpg"
                alt="Hands being held in care"
                fill
                sizes="340px"
                className="object-cover"
              />
            </div>
          </InView>

          {/* Leaf / Petal */}
          <Image
            src="/petal.svg"
            alt=""
            width={521.54}
            height={247.92}
            className="absolute -bottom-[100px] left-1/2 z-10 w-[521.54px] h-[247.92px] -translate-x-1/2"
          />
        </div>
        {/* ── right: title, copy, cta ─────────────────────────────── */}
        <div className="flex flex-col items-start">
          <h2 className="flex items-center gap-5 text-[44px] font-normal leading-[1.1] text-brand lg:text-[56px]">
            Donation
            {/* Figma: "Line 03 1", 129 x 21.25 beside the title */}
            <Image
              src="/Line 03.gif"
              alt=""
              aria-hidden
              unoptimized
              width={783}
              height={129}
              className="h-[21.25px] w-[129px] select-none object-contain"
            />
          </h2>

          <p className="mt-[34px] max-w-[560px] text-[16px] leading-[32px] text-body lg:text-[17px]">
            Your generosity helps strengthen Aboriginal health, education, and
            community wellbeing.Every donation supports culturally safe programs
            and essential services for families.
          </p>

          <CtaButton variant="solid" className="mt-[40px]">
            Donate Now
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
