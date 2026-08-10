import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 font-cambay lg:px-[60px]"
    >
      {/* decorative outline circle bleeding off the left edge */}
      <Image
        src="/figma/about/ellipse-left.svg"
        alt=""
        width={670}
        height={670}
        aria-hidden
        className="pointer-events-none absolute -left-[312px] top-[394px] hidden size-[670px] lg:block"
      />

      <div className="mx-auto grid max-w-[1464px] items-center gap-16 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[519px]">
          {/* filled purple circle from the design */}
          <Image
            src="/figma/about/ellipse-purple.svg"
            alt=""
            width={519}
            height={519}
            aria-hidden
            className="w-full"
          />
          <Image
            src="/figma/about/about-art.png"
            alt=""
            width={336}
            height={326}
            aria-hidden
            className="absolute left-1/2 top-1/2 w-[65%] -translate-x-1/2 -translate-y-[60%]"
          />
        </div>

        <div className="flex flex-col items-start gap-[48px]">
          <h2 className="flex items-center gap-3 text-[48px] leading-[52px] font-bold text-brand">
            About Us
            <Image
              src="/figma/about/squiggle.svg"
              alt=""
              width={158}
              height={26}
              className="h-[26px] w-[158px]"
            />
          </h2>

          <p className="max-w-[691px] text-[22px] leading-[38px] tracking-[0.44px] text-body">
            Awabakal delivers culturally safe health and community services that
            support Aboriginal people and families. Guided by culture, respect,
            and community, we work to build healthier lives and stronger
            futures.
          </p>

          <CtaButton>Know More</CtaButton>
        </div>
      </div>
    </section>
  );
}
