import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

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
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 font-cambay lg:px-[60px] lg:py-[110px]">
      {/* faint ring artwork bleeding off the right edge */}
      <Image
        src="/Circles Element 1.gif"
        alt=""
        aria-hidden
        unoptimized
        width={300}
        height={300}
        className="pointer-events-none absolute -right-[90px] bottom-[40px] -z-10 hidden w-[260px] select-none opacity-25 lg:block"
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-16 md:grid-cols-2 lg:gap-[90px]">
        {/* ── left: portrait with the two petals ──────────────────── */}
        <div className="relative mx-auto w-fit">
          {/* Circle */}
          <div className="relative size-[240px] overflow-hidden rounded-full sm:size-[300px] lg:size-[340px]">
            <Image
              src="/healthcarefinal.jpg"
              alt="Hands being held in care"
              fill
              sizes="340px"
              className="object-cover"
            />
          </div>

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
            <svg viewBox="0 0 90 22" aria-hidden fill="none" className="h-[22px] w-[90px]">
              <path
                d="M3 12c10-14 22 12 33 4s20-14 51-8"
                stroke="#E8232A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
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
