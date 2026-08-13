import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import SectionLabel from "@/components/ui/SectionLabel";

type Tile =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "icon"; src: string; alt: string; gif: string };

/**
 * Alternating photo / icon tiles, matching the Figma `scroll` row: a rounded
 * square photo, then a circle holding a purple-washed photo behind an animated
 * line-art mark.
 */
const tiles: Tile[] = [
  { kind: "photo", src: "/image_1.jpg", alt: "Awabakal community gathering" },
  { kind: "icon", src: "/image_2.jpg", alt: "", gif: "/care.gif" },
  { kind: "photo", src: "/image_3.jpg", alt: "Children at an Awabakal event" },
  { kind: "icon", src: "/image_4.jpg", alt: "", gif: "/book.gif" },
  { kind: "photo", src: "/image_2.jpg", alt: "Awabakal community program" },
  { kind: "icon", src: "/image_1.jpg", alt: "", gif: "/House.gif" },
];

export default function Moments() {
  return (
    <section
      id="events"
      className="relative isolate overflow-hidden bg-brand py-24 font-cambay lg:py-[140px]"
    >
      <style>{`
        @keyframes moments-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .moments-track {
          animation: moments-marquee 70s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .moments-track { animation: none; }
        }
      `}</style>

      {/* Figma "Union" bloom, exported at 491x486.73 and placed at x=891,
          269px down from the section top. The asset carries its own 5% white
          fill, so no extra opacity is applied here. */}
      <Image
        src="/flower.svg"
        alt=""
        aria-hidden
        width={491}
        height={487}
        className="pointer-events-none absolute left-[46.4%] top-[269px] -z-10 hidden h-[486.73px] w-[491px] select-none object-contain lg:block"
      />

      {/* ── heading ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-end justify-between gap-8 px-6 lg:px-[79px]">
        <div>
          <SectionLabel tone="dark" className="mb-[28px]">
            Gallery
          </SectionLabel>

          <h2 className="flex flex-wrap items-center gap-x-6 text-[52px] font-normal leading-[1.1] text-white lg:text-[72px]">
            Moments
            {/* the squiggle artwork is red, so it is knocked out to white */}
            <Image
              src="/Line 03.gif"
              alt=""
              aria-hidden
              unoptimized
              width={783}
              height={129}
              className="h-[26px] w-[158px] select-none object-contain brightness-0 invert"
            />
          </h2>
        </div>

        <CtaButton variant="white" href="#events">
          View All
        </CtaButton>
      </div>

      {/* ── scrolling row ───────────────────────────────────────────── */}
      <div className="mt-[80px] overflow-hidden lg:mt-[110px]">
        <div className="moments-track flex w-max">
          {[...tiles, ...tiles].map((tile, i) =>
            tile.kind === "photo" ? (
              <div
                key={`${tile.src}-${i}`}
                className="relative mr-[56px] size-[300px] shrink-0 overflow-hidden rounded-[32px] lg:size-[440px]"
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 1024px) 300px, 440px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                key={`${tile.src}-${i}`}
                className="relative mr-[56px] grid size-[300px] shrink-0 place-items-center overflow-hidden rounded-full lg:size-[440px]"
              >
                <Image
                  src={tile.src}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 1024px) 300px, 440px"
                  className="object-cover"
                />
                {/* purple wash so the white mark reads over any photo */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-brand/70"
                />
                {/* Animated line-art mark. The three gifs have different
                    aspect ratios (462x521, 589x419, 524x526), so a square box
                    plus object-contain gives them all the same footprint
                    instead of each filling a different amount of it. Drawn at
                    or below native size so the linework stays sharp. */}
                <Image
                  src={tile.gif}
                  alt=""
                  aria-hidden
                  unoptimized
                  width={589}
                  height={526}
                  className="relative size-[150px] select-none object-contain lg:size-[220px]"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
