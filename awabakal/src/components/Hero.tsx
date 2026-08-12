"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import CtaButton from "@/components/ui/CtaButton";
import Dot from "@/components/ui/Dot";

type Slide = {
  src: string;
  alt: string;
  /** Optional pill above the headline. */
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  /** Optional call to action. */
  cta?: string;
  href?: string;
  /** Shown by the bottom-right card while this slide is active. */
  label: string;
};

/**
 * Hero carousel.
 *
 * TODO(assets): slides 2-4 currently reuse the slide-1 image because the other
 * hero frames could not be exported from Figma (their artwork layers are
 * video/GIF fills, which export blank). Drop the real exports into
 * `public/figma/hero/` and update `src` + `label` below — nothing else needs to
 * change. `label` is what the bottom-right card shows as the *next* slide.
 */
const SLIDES: Slide[] = [
  {
    src: "/hero.jpg",
    alt: "Child playing at an Awabakal service",
    eyebrow: "Education",
    title: "Building Bright Futures ",
    subtitle:
      "Helping every child grow with care, creativity, and curiosity..",
    cta: "Contact Us",
    href: "#contact",
    /** Shown by the bottom-right card while this slide is active. */
    label: "Education",
  },
  {
    src: "/Health_.png",
    alt: "Awabakal community program",
    eyebrow: "Community",
    title: "Together for Community Wellbeing",
    subtitle: "Helping every child grow with care, creativity, and curiosity..",
    cta: "Contact Us",
    href: "#contact",
    label: "Community",
  },
  {
    src: "/healthcarefinal.jpg",
    alt: "Awabakal health services",
    eyebrow: "Health",
    title: "Health Care Grounded In Culture",
    subtitle: "Culturally safe health care for every stage of life.",
    cta: "Contact Us",
    href: "#contact",
    label: "Health",
  },
  {
    src: "/anniversary.png",
    alt: "Awabakal 50th Anniversary",
    title: (
      <span className="block leading-none">
        <span className="inline-flex items-start">
          <img
            src="/50title.svg"
            alt=""
            className="w-full max-w-[508.21px] h-[220px] object-contain object-left"
          />

        </span>
        <span className="mt-1 block text-[60px] leading-[1.05] text-white sm:text-[72px]">
          Anniversary
        </span>
      </span>
    ),
    subtitle:
      "Half a century of care, learning, and community. Together, we've helped generations of children discover their potential and build a strong foundation for the future",
    label: "Education",
  },
];

const SLIDE_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(index + 1), SLIDE_MS);
    return () => clearTimeout(id);
  }, [index, paused, go]);

  const next = SLIDES[(index + 1) % SLIDES.length];

  return (
    <section
      className="relative isolate h-[980px] w-full overflow-hidden bg-[#d9d9d9] font-cambay"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Awabakal services"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={i === index ? slide.alt : ""}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* left-to-right darkening so header and card stay legible */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[1046px] max-w-[75%]"
        style={{
          backgroundImage:
            "linear-gradient(90.2deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.18) 58%, rgba(0,0,0,0) 82%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-gradient-to-b from-black/45 to-transparent" />

      {/* Headline block. In Figma this is an animated frame (1184:13854) that
          exports blank, so it is rendered as real text here. */}
      <div className="absolute inset-y-0 left-0 flex w-full max-w-[741px] items-center px-6 lg:px-[90px]">
        <div key={index} className="hero-enter flex flex-col items-start">
          {SLIDES[index].eyebrow && (
            <span className="mb-[28px] inline-flex items-center gap-[10px] rounded-[100px] border border-solid border-[#561358] bg-[#918F91] px-[18px] py-[8px] text-[14px] text-[#561358]">
              <Dot size={12} />
              {SLIDES[index].eyebrow}    
            </span>
          )}

          <h1 className="max-w-[560px] text-[56px] leading-[1.12] font-normal text-white sm:text-[68px]">
            {SLIDES[index].title}
          </h1>

          <p className="mt-[26px] max-w-[400px] text-[17px] leading-[28px] text-white/85">
            {SLIDES[index].subtitle}
          </p>

          {SLIDES[index].cta && (
            <CtaButton
              variant="solid"
              href={SLIDES[index].href}
              className="mt-[36px]"
            >
              {SLIDES[index].cta}
            </CtaButton>
          )}
        </div>
      </div>

      {/* "Next" card — mirrors the upcoming slide */}
      <div className="absolute right-[80px] top-[775px] hidden h-[130px] w-[571px] rounded-r-[6px] bg-black/37 lg:block">
        <div className="absolute inset-y-0 left-0 w-[29.07%] overflow-hidden rounded-l-[6px]">
          <Image src={next.src} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/13" />
        </div>

        <div className="absolute left-[33.98%] top-[20%] flex flex-col gap-[20px] text-[#fdfdfd]">
          <p className="text-[15px] font-bold tracking-[0.3px]">Next</p>
          <p className="text-[22px] tracking-[-0.44px]">
            {SLIDES[index].label}
          </p>
        </div>

        <div className="absolute left-[193px] top-[102px] flex gap-[18px]">
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.label}`}
              aria-current={i === index}
              className="group h-[12px] w-[70px] cursor-pointer"
            >
              <span className="block h-[4.595px] w-full overflow-hidden rounded-[100px] bg-[#ababab]">
                <span
                  // remount on slide change so the fill restarts from 0
                  key={`${i}-${index}`}
                  className="block h-full rounded-[100px] bg-white"
                  style={
                    i === index
                      ? {
                        animation: `hero-progress ${SLIDE_MS}ms linear forwards`,
                        animationPlayState: paused ? "paused" : "running",
                      }
                      : { width: i < index ? "100%" : "0%" }
                  }
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
