"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Hero carousel.
 *
 * TODO(assets): slides 2-4 currently reuse the slide-1 image because the other
 * hero frames could not be exported from Figma (their artwork layers are
 * video/GIF fills, which export blank). Drop the real exports into
 * `public/figma/hero/` and update `src` + `label` below — nothing else needs to
 * change. `label` is what the bottom-right card shows as the *next* slide.
 */
const SLIDES = [
  { src: "/hero.png", label: "Health", alt: "Child playing at an Awabakal service" },
  { src: "/hero.png", label: "Preschool", alt: "Awabakal health services" },
  { src: "/hero.png", label: "Housing", alt: "Awabakal preschool" },
  { src: "/hero.png", label: "Community", alt: "Awabakal housing" },
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
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
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
        className="pointer-events-none absolute inset-y-0 left-0 w-[1046px] max-w-[70%]"
        style={{
          backgroundImage:
            "linear-gradient(90.2deg, rgb(0,0,0) 64.533%, rgba(0,0,0,0) 93.313%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-gradient-to-b from-black/60 to-transparent" />

      {/* "Next" card — mirrors the upcoming slide */}
      <div className="absolute right-[80px] top-[775px] hidden h-[130px] w-[571px] rounded-r-[6px] bg-black/37 lg:block">
        <div className="absolute inset-y-0 left-0 w-[29.07%] overflow-hidden rounded-l-[6px]">
          <Image src={next.src} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/13" />
        </div>

        <div className="absolute left-[33.98%] top-[20%] flex flex-col gap-[20px] text-[#fdfdfd]">
          <p className="text-[15px] font-bold tracking-[0.3px]">Next</p>
          <p className="text-[22px] tracking-[-0.44px]">{next.label}</p>
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
