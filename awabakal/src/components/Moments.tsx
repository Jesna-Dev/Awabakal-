import Image from "next/image";

/** The two petal strokes from `public/petal.svg`, drawn as outline. */
const PETAL_PATHS = [
  "M241.12 239.779C223.235 50.9681 78.6699 4.11837 4.17017 4.00022C1.87596 3.99659 0.15301 6.05418 0.354834 8.33949C18.7945 217.137 196.554 243.272 237.358 244.058C239.648 244.102 241.336 242.058 241.12 239.779Z",
  "M279.305 241.15C468.532 228.394 519.286 85.1533 521.426 10.6843C521.492 8.39099 519.481 6.61285 517.192 6.75259C307.971 19.5205 277.022 196.505 275.129 237.274C275.023 239.561 277.02 241.304 279.305 241.15Z",
];

type Tile =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "icon"; src: string; alt: string };

/**
 * Alternating photo / icon tiles, matching the Figma `scroll` row: a rounded
 * square photo, then a circle holding a purple-washed photo behind the petal
 * mark.
 */
const tiles: Tile[] = [
  { kind: "photo", src: "/hero.jpg", alt: "Community gathering" },
  { kind: "icon", src: "/healthcarefinal.jpg", alt: "" },
  { kind: "photo", src: "/images (10).jpg", alt: "Child at a community event" },
  { kind: "icon", src: "/1123.png", alt: "" },
  { kind: "photo", src: "/Health_.png", alt: "Awabakal health service" },
  { kind: "icon", src: "/anniversary.png", alt: "" },
];

/** White petal mark sitting inside the circular tiles. */
function PetalMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 522 248"
      aria-hidden
      fill="none"
      className={`pointer-events-none select-none ${className}`}
    >
      {PETAL_PATHS.map((d) => (
        <path
          key={d}
          d={d}
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

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
                <PetalMark className="relative h-[80px] w-[168px] lg:h-[112px] lg:w-[236px]" />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
