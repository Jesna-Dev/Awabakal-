import Image from "next/image";

type Tile =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "icon"; src: string; alt: string; gif: string };

/**
 * Alternating photo / icon tiles, matching the Figma `scroll` row: a rounded
 * square photo, then a circle holding a purple-washed photo behind an animated
 * line-art mark.
 */
const tiles: Tile[] = [
  { kind: "photo", src: "/hero.jpg", alt: "Community gathering" },
  { kind: "icon", src: "/healthcarefinal.jpg", alt: "", gif: "/care.gif" },
  { kind: "photo", src: "/images (10).jpg", alt: "Child at a community event" },
  { kind: "icon", src: "/1123.png", alt: "", gif: "/book.gif" },
  { kind: "photo", src: "/Health_.png", alt: "Awabakal health service" },
  { kind: "icon", src: "/anniversary.png", alt: "", gif: "/House.gif" },
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
      <div className="px-6 lg:px-[79px]">
        <span className="mb-[28px] inline-flex items-center gap-[10px] rounded-[100px] border border-solid border-white/70 px-[18px] py-[8px] text-[15px] text-white">
          <span className="size-[10px] rounded-full bg-white" aria-hidden />
          Gallery
        </span>

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
                {/* animated line-art mark; `unoptimized` keeps the frames */}
                <Image
                  src={tile.gif}
                  alt=""
                  aria-hidden
                  unoptimized
                  width={589}
                  height={526}
                  className="relative h-[120px] w-[140px] select-none object-contain lg:h-[170px] lg:w-[200px]"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
