import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import VectorPortrait from "@/components/ui/VectorPortrait";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white px-6 py-24 font-cambay lg:min-h-[760px] lg:px-[60px] lg:py-[120px]"
    >
      {/* ── decorative layer ───────────────────────────────────────── */}

      {/* flower + stem, bottom-left */}
      <Image
        src="/Flower and Steam_1 (1).gif"
        alt=""
        aria-hidden
        unoptimized
        width={520}
        height={520}
        className="pointer-events-none absolute -bottom-[60px] -left-[90px] -z-10 hidden w-[420px] select-none lg:block xl:w-[520px]"
      />


      {/* pink line trailing down from the purple circle, right side */}
      <Image
        src="/Line 03.gif"
        alt=""
        aria-hidden
        unoptimized
        width={420}
        height={480}
        className="pointer-events-none absolute -right-[40px] top-[120px] -z-10 hidden w-[360px] select-none lg:block"
      />

      {/* filled purple circle, top-right — vector */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute right-[110px] top-[40px] -z-10 hidden size-[130px] lg:block xl:size-[160px]"
      >

      </svg>

      {/* small red dot — vector */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute bottom-[120px] left-[46%] -z-10 hidden size-[34px] lg:block"
      >
        <circle cx="50" cy="50" r="50" fill="#E8232A" />
      </svg>

      {/* ── content ────────────────────────────────────────────────── */}
      <div className="mx-auto grid max-w-[1464px] items-center gap-12 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-20">
        {/* baby portrait inside the vector ring element */}
        <VectorPortrait
          id="about-portrait-child"
          src="/images (10).jpg"
          alt="Aboriginal child in traditional dress"
          size={340}
          className="mx-auto w-[240px] sm:w-[300px] lg:w-[340px]"
        />

        <div className="flex flex-col items-start gap-8 lg:gap-[44px]">
          <h2 className="flex max-w-[420px] flex-wrap items-start gap-x-6 text-[64px] font-bold leading-[1.05] text-brand lg:text-[86px]">
            <span>About</span>
            <Image
              src="/figma/about/squiggle.svg"
              alt=""
              aria-hidden
              width={158}
              height={26}
              className="mt-[26px] h-[26px] w-[130px] lg:mt-[36px] lg:w-[158px]"
            />
            <span className="w-full">Us</span>
          </h2>

          <p className="max-w-[560px] text-[18px] leading-[34px] tracking-[0.3px] text-body lg:pl-[80px] lg:text-[20px]">
            Awabakal delivers culturally safe health and community services that
            support Aboriginal people and families. Guided by culture, respect,
            and community, we work to build healthier lives and stronger
            futures.
          </p>

          <div className="lg:pl-[80px]">
            <CtaButton>Know More</CtaButton>
          </div>
        </div>
      </div>

      {/* dancers portrait, bottom-right */}
      <VectorPortrait
        id="about-portrait-dancers"
        src="/1123.png"
        alt="Aboriginal woman and child dancing"
        size={190}
        className="mx-auto mt-12 w-[160px] md:absolute md:bottom-[70px] md:right-[110px] md:mt-0 lg:w-[190px]"
      />
    </section>
  );
}
