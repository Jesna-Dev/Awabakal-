import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import VectorPortrait from "@/components/ui/VectorPortrait";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white px-6 py-24 font-cambay lg:min-h-[900px] lg:px-[60px] lg:py-[239px]"
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
        src="/Steam and Bud (1).gif"
        alt=""
        aria-hidden
        unoptimized
        width={410}
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

      {/* small red mark — sits just to the right of the flower + stem gif */}
      <Image
        src="/Vector 2534.svg"
        alt=""
        aria-hidden
        width={15}
        height={15}
        className="float-drift float-delay-1 pointer-events-none absolute bottom-[190px] left-[330px] -z-10 hidden size-[34px] select-none object-contain lg:block xl:left-[430px]"
      />

      {/* ── content ────────────────────────────────────────────────── */}
      <div className="mx-auto grid max-w-[1464px] items-center gap-12 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-20">
        {/* baby portrait inside the vector ring element */}
        <VectorPortrait
          id="about-portrait-child"
          src="/images (10).jpg"
          alt="Aboriginal child in traditional dress"
          size={340}
          overlay="rgba(238, 65, 54, 0.21)"
          className="float-drift float-slow float-delay-3 mx-auto w-[240px] sm:w-[300px] lg:w-[340px]"
        />

        <div className="flex flex-col items-start gap-8 lg:gap-[44px]">
          <h2 className="flex max-w-[420px] flex-wrap items-start gap-x-6 text-[64px] font-normal leading-[1.05] text-brand lg:text-[85px]">
            <span>About</span>
            {/* animated squiggle, pulled in tight against "About" */}
            <Image
              src="/Line 03.gif"
              alt=""
              aria-hidden
              unoptimized
              width={783}
              height={129}
              className="-ml-[12px] mt-[24px] h-[25.84px] w-[183px] select-none object-contain lg:mt-[34px]"
            />
            <span className="w-full">Us</span>
          </h2>

          {/* on lg the copy rides up beside the "Us" line: -126px cancels the
              44px column gap plus one 89px heading line */}
          <p className="max-w-[560px] text-[18px] leading-[34px] tracking-[0.3px] text-body lg:-mt-[126px] lg:pl-[112px] lg:text-[20px]">
            Awabakal delivers culturally safe health and community services that
            support Aboriginal people and families. Guided by culture, respect,
            and community, we work to build healthier lives and stronger
            futures.
          </p>

          <div className="lg:pl-[112px]">
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
        overlay="rgba(86, 19, 88, 0.16)"
        className="float-drift float-delay-1 mx-auto mt-12 w-[160px] md:absolute md:bottom-[140px] md:right-[110px] md:mt-0 lg:w-[190px]"
      />
    </section>
  );
}
