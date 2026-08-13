import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import SectionLabel from "@/components/ui/SectionLabel";

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

      {/* seated-figures outline hugging the right edge — 236x837 native, drawn
          at half scale on its own ratio so the whole element shows uncropped */}
      <Image
        src="/People Sitting Outline Element .png"  
        alt=""
        aria-hidden
        width={236}
        height={837}
        className="pointer-events-none absolute right-0 top-1/2 -z-10 hidden h-[420px] w-[118px] -translate-y-1/2 select-none object-contain lg:block"
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_438px_minmax(0,1fr)] lg:gap-[70px]">
        {/* ── left: badge + title ─────────────────────────────────── */}
        <div>
          <SectionLabel className="mb-[70px]">Awabakal Enterprise</SectionLabel>

          <h2 className="flex max-w-[360px] flex-wrap items-start gap-x-5 text-[56px] font-bold leading-[1.15] text-brand lg:text-[80px]">
            <span>We</span>
            {/* animated squiggle sitting to the right of "We" */}
            <Image
              src="/Line 03.gif"
              alt=""
              aria-hidden
              unoptimized
              width={783}
              height={129}
              className="-ml-[10px] mt-[22px] h-[25.84px] w-[183px] select-none object-contain lg:mt-[32px]"
            />
            <span className="w-full font-normal ">Empower</span>
          </h2>
        </div>

        {/* ── centre: photo in an organic ellipse ─────────────────── */}
        <div className="relative mx-auto w-full max-w-[438px]">
          {/* 438 x 624 with a 219px radius — half the width, so the top and
              bottom close into full semicircles */}
          <div className="relative aspect-[438/624] w-full overflow-hidden rounded-[219px]">
            <Image
              src="/beautiful-suburban-house-with-green-lawn-sunny-day.jpg"
              alt="Awabakal community housing"
              fill
              sizes="438px"
              className="object-cover"
            />
          </div>

          {/* logo medallion overlapping the bottom-right of the photo — the
              Vector 2542 blob stands in for the old circle, 221x215 native */}
          <div className="float-drift absolute -bottom-[10px] -right-[40px] grid h-[175px] w-[180px] place-items-center">
            <Image
              src="/Vector 2542.svg"
              alt=""
              aria-hidden
              fill
              sizes="180px"
              className="select-none object-contain"
            />
            <Image
              src="/logo-dark 2.png"
              alt="Awabakal Our Property"
              width={102}
              height={109}
              className="relative h-[84px] w-[79px] object-contain"
            />
          </div>
        </div>

        {/* ── right: copy + cta ───────────────────────────────────── */}
        <div className="flex flex-col items-start gap-[36px]">
          <p className="max-w-[340px] text-[18px] leading-[34px] text-body">
            We are a community-owned property development and management
            company. We work in property to benefit our people.
          </p>

          <CtaButton>Know More</CtaButton>
        </div>
      </div>
    </section>
  );
}
