"use client";

import Image from "next/image";

type Service = {
  title: string;
  image: string;
  icon: string;
  /** Bottom gradient wash sampled from the Figma card. */
  gradient: string;
  /** object-position so the crop matches the Figma frame. */
  position?: string;
  /** Copy revealed by the hover state. */
  description: string;
  href?: string;
  /**
   * The medical/dental/preschool exports already contain the translucent
   * circle; housing is a bare glyph, so it gets the circle drawn for it.
   */
  iconHasCircle?: boolean;
};

const services: Service[] = [
  {
    title: "GP & Medical",
    image: "/figma/services/medical.jpg",
    icon: "/figma/services/medical-icon.svg",
    gradient:
      "linear-gradient(178.43deg, rgba(100,43,98,0.12) 17.542%, rgb(104,47,98) 106.36%)",
    description:
      "Supporting Aboriginal health and wellbeing through trusted, culturally safe care.",
    iconHasCircle: true,
  },
  {
    title: "Dental",
    image: "/figma/services/dental.jpg",
    icon: "/figma/services/dental-icon.svg",
    gradient:
      "linear-gradient(to bottom, rgba(86,19,88,0) 42.957%, #7d466a 100%)",
    description:
      "Gentle, affordable dental care for every member of our community.",
    iconHasCircle: true,
  },
  {
    title: "Preschool",
    image: "/figma/services/preschool.jpg",
    icon: "/figma/services/preschool-icon.svg",
    gradient:
      "linear-gradient(to bottom, rgba(255,255,255,0.01) 42.957%, #561358 100%)",
    position: "center 30%",
    description:
      "Early learning grounded in culture, creativity and curiosity.",
    iconHasCircle: true,
  },
  {
    title: "Housing",
    image: "/figma/services/housing.jpg",
    icon: "/figma/services/housing-icon.svg",
    gradient:
      "linear-gradient(to bottom, rgba(255,255,255,0.01) 42.957%, #561358 100%)",
    description:
      "Safe, secure and culturally appropriate homes for our families.",
  },
];

/** Ribbon lines that sweep across the bottom of the hover state. */
function Waves() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 480 180"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] w-full"
    >
      <g fill="none" stroke="#e8a9bd" strokeOpacity="0.55" strokeWidth="4">
        <path d="M-10 132C90 96 190 150 300 118 380 95 440 104 490 96" />
        <path d="M-10 158C90 122 190 176 300 144 380 121 440 130 490 122" />
        <path d="M-10 184C90 148 190 202 300 170 380 147 440 156 490 148" />
      </g>
    </svg>
  );
}

function ServiceCard({
  title,
  image,
  icon,
  gradient,
  position,
  description,
  href,
  iconHasCircle,
}: Service) {
  return (
    <article className="group relative aspect-[480/646] w-[280px] shrink-0 overflow-hidden rounded-[24px] lg:w-[380px]">
      <Image
        src={image}
        alt={title}
        sizes="(max-width: 1024px) 280px, 380px"
        fill
        className="object-cover"
        style={{ objectPosition: position ?? "center" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: gradient }}
      />

      {/* Resting state */}
      <div className="absolute bottom-[8%] left-[9%] flex flex-col items-start gap-4 transition-opacity duration-300 group-hover:opacity-0">
        {iconHasCircle ? (
          <Image
            src={icon}
            alt=""
            width={116}
            height={116}
            className="h-[54px] w-[54px] object-contain"
          />
        ) : (
          <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white/[0.11] backdrop-blur-sm">
            <Image
              src={icon}
              alt=""
              width={60}
              height={58}
              className="h-[24px] w-[25px] object-contain"
            />
          </span>
        )}
        <p className="whitespace-nowrap text-[22px] leading-[26px] font-bold text-[#fdfdfd] uppercase">
          {title}
        </p>
      </div>

      {/* Hover state */}
      <div className="pointer-events-none absolute inset-0 bg-[#561358]/78 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
        <Waves />
        {/* Kept out of <Waves/> so the non-uniform scale can't turn it into an ellipse. */}
        <span
          aria-hidden="true"
          className="absolute bottom-[14.5%] left-[41%] h-[13px] w-[13px] rounded-full bg-[#c6cede]/90"
        />

        <div className="relative flex h-full flex-col items-start px-[11%] pt-[14%]">
          <h3 className="text-[26px] leading-[30px] font-bold text-white uppercase lg:text-[30px] lg:leading-[34px]">
            {title}
          </h3>
          <p className="mt-[18px] max-w-[85%] text-[15px] leading-[28px] text-white/90 lg:text-[16px]">
            {description}
          </p>

          <a
            href={href ?? "#services"}
            aria-label={`Learn more about ${title}`}
            className="mt-[34px] flex h-[74px] w-[74px] items-center justify-center rounded-full border border-white/85 transition-colors hover:bg-white/15"
          >
            <Image
              src="/figma/services/arrow.svg"
              alt=""
              width={34}
              height={29}
              className="h-[25px] w-[29px]"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden font-cambay"
      style={{
        backgroundImage:
          "linear-gradient(155deg, #fdf7fd 0%, #f6e9f7 22%, #e3bde5 48%, #b675b8 72%, #7d2f7c 100%)",
      }}
    >
      <style>{`
        @keyframes services-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .services-track {
          animation: services-marquee 32s linear infinite;
        }
        .services-marquee:hover .services-track,
        .services-marquee:focus-within .services-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .services-track { animation: none; }
        }
      `}</style>

      {/* Animated concentric rings sitting behind the top-right of the grid. */}
      <Image
        src="/Circles Element 1.gif"
        alt=""
        aria-hidden="true"
        width={480}
        height={480}
        unoptimized
        priority={false}
        className="pointer-events-none absolute top-[4%] right-[4%] h-[300px] w-[300px] select-none opacity-50 mix-blend-multiply lg:h-[440px] lg:w-[440px]"
      />

      <div className="relative pt-20 pb-16">
        <div className="mx-auto max-w-[1840px] px-6 lg:px-[60px]">
          <span className="mb-[28px] inline-flex items-center gap-[10px] rounded-[100px] border border-solid border-[#561358] bg-transparent px-[18px] py-[8px] text-[14px] text-[#561358]">
            <Image
              src="/Vector 2534.png"
              alt=""
              width={12}
              height={12}
              className="h-[12px] w-[12px] object-contain"
            />
            Service
          </span>

          <h2 className="mb-[36px] max-w-[560px] text-[56px] leading-[1.12] font-normal text-brand sm:text-[68px]">
            Our Services
          </h2>
        </div>

        {/* Cards drift to the left and pause while hovered or keyboard-focused. */}
        <div className="services-marquee overflow-hidden">
          <div className="services-track flex w-max gap-[24px] pl-6 lg:pl-[60px]">
            {[...services, ...services].map((service, i) => (
              <ServiceCard key={`${service.title}-${i}`} {...service} />
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative h-[72px] w-full lg:h-[143px]"
        style={{
          backgroundImage: 'url("/figma/services/round-element.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "100% 100%",
        }}
      />
    </section>
  );
}
