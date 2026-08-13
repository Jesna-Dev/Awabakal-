import Image from "next/image";

type Value = {
  title: string;
  description: string;
  /** Artwork box inside the 458.916px ring, straight from Figma. */
  art: { src: string; width: number; height: number; left: number; top: number };
};

const values: Value[] = [
  {
    title: "Communication",
    description:
      "This design represents communication and the underlying values of respect and integrity.",
    art: {
      src: "/figma/values/communication.png",
      width: 218.227,
      height: 201.643,
      left: 120.34,
      top: 128.18,
    },
  },
  {
    title: "Consultation",
    description:
      "This design represents consultation. People coming together to yarn, share opinions, knowledge and experiences.",
    art: {
      src: "/figma/values/consultation.png",
      width: 239.528,
      height: 237.268,
      left: 104.08,
      top: 98.73,
    },
  },
  {
    title: "Collaboration",
    description:
      "This design represents consultation. People coming together to yarn, share opinions, knowledge and experiences.",
    art: {
      src: "/figma/values/collaboration.png",
      width: 251.467,
      height: 210.603,
      left: 106.17,
      top: 113.4,
    },
  },
];

const RING = 458.916;

export default function OurValues() {
  return (
    <section className="relative isolate overflow-hidden bg-brand px-6 py-24 font-cambay lg:px-[60px]">
      {/* wave footage washed back to 9% over the solid brand purple */}
      <video
        src="/Wave.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none object-cover opacity-[0.10]"
      />

      <h2 className="mb-[72px] text-center text-[48px] leading-[1.1] text-[#fdfdfd] lg:mb-[96px] lg:text-[64px]">
        Our Values
      </h2>

      <div className="mx-auto flex max-w-[1465px] flex-col gap-[48px] md:flex-row md:items-start">
        {values.map(({ title, description, art }) => (
          <div
            key={title}
            className="flex flex-1 flex-col items-center gap-[62.442px]"
          >
            {/* ring + artwork, scaled together so proportions hold */}
            <div className="relative aspect-square w-full max-w-[458.916px]">
              <Image src="/figma/values/ring.svg" alt="" fill className="object-contain" />
              <Image
                src={art.src}
                alt=""
                width={Math.round(art.width)}
                height={Math.round(art.height)}
                className="absolute"
                style={{
                  width: `${(art.width / RING) * 100}%`,
                  height: `${(art.height / RING) * 100}%`,
                  left: `${(art.left / RING) * 100}%`,
                  top: `${(art.top / RING) * 100}%`,
                }}
              />
            </div>

            <div className="flex w-full max-w-[373px] flex-col items-start gap-[33.302px]">
              <p className="text-[40px] leading-[42px] font-bold whitespace-nowrap text-[#fdfdfd] uppercase">
                {title}
              </p>
              <p className="text-[18px] leading-[28px] tracking-[0.54px] text-[#d8d5d5]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
