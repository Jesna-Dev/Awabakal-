import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

export default function WeEmpower() {
  return (
    <section className="relative isolate overflow-hidden bg-blush px-6 py-24 font-cambay lg:min-h-[712px] lg:px-[60px] lg:py-[100px]">
      {/* concentric arcs bleeding off the bottom-left corner */}
      <Image
        src="/Circles Element 1.gif"
        alt=""
        aria-hidden
        unoptimized
        width={300}
        height={300}
        className="pointer-events-none absolute -bottom-[40px] -left-[120px] -z-10 hidden w-[240px] select-none opacity-70 lg:block"
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_330px_minmax(0,1fr)] lg:gap-[70px]">
        {/* ── left: badge + title ─────────────────────────────────── */}
        <div>
          <span className="mb-[70px] inline-flex items-center gap-[10px] rounded-full border border-brand-light px-[22px] py-[10px] text-[16px] text-brand">
            <span className="size-[10px] rounded-full bg-brand" aria-hidden />
            Awabakal Enterprise
          </span>

          <h2 className="flex max-w-[360px] flex-wrap items-start gap-x-5 text-[56px] font-bold leading-[1.15] text-brand lg:text-[80px]">
            <span>We</span>
            <svg
              viewBox="-6 -6 52 24"
              aria-hidden
              className="mt-[24px] h-[12px] w-[34px] lg:mt-[34px]"
              fill="none"
            >
              <path
                d="M2 9C10 2 30 2 38 5"
                stroke="#3ae67cff"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span className="w-full">Empower</span>
          </h2>
        </div>

        {/* ── centre: photo in an organic ellipse ─────────────────── */}
        <div className="relative mx-auto w-full max-w-[330px]">
          <div className="relative aspect-[330/483] w-full overflow-hidden rounded-[50%]">
            <Image
              src="/figma/services/housing.jpg"
              alt="Awabakal community housing"
              fill
              sizes="330px"
              className="object-cover"
            />
          </div>

          {/* logo medallion overlapping the bottom-right of the photo */}
          <div className="absolute -bottom-[10px] -right-[40px] grid size-[160px] place-items-center rounded-full bg-[#fdf6f4]">
            <Image
              src="/figma/logo.png"
              alt="Awabakal Our Property"
              width={80}
              height={80}
              className="size-[80px] object-contain"
            />
          </div>
        </div>

        {/* ── right: copy + cta ───────────────────────────────────── */}
        <div className="flex flex-col items-start gap-[36px]">
          <p className="max-w-[340px] text-[18px] leading-[34px] text-body">
            We are a community-owned property development and management
            company. We work in property to benefit our people .
          </p>

          <CtaButton>Know More</CtaButton>
        </div>
      </div>
    </section>
  );
}
