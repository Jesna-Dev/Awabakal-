import Image from "next/image";

type Service = {
  title: string;
  image: string;
  icon: string;
  /** Bottom gradient wash sampled from the Figma card. */
  gradient: string;
  /** object-position so the crop matches the Figma frame. */
  position?: string;
};

const services: Service[] = [
  {
    title: "GP & Medical",
    image: "/figma/services/medical.jpg",
    icon: "/figma/services/medical-icon.svg",
    gradient:
      "linear-gradient(178.43deg, rgba(100,43,98,0.12) 17.542%, rgb(104,47,98) 106.36%)",
  },
  {
    title: "Dental",
    image: "/figma/services/dental.jpg",
    icon: "/figma/services/dental-icon.svg",
    gradient:
      "linear-gradient(to bottom, rgba(86,19,88,0) 42.957%, #7d466a 100%)",
  },
  {
    title: "Preschool",
    image: "/figma/services/preschool.jpg",
    icon: "/figma/services/preschool-icon.svg",
    gradient:
      "linear-gradient(to bottom, rgba(255,255,255,0.01) 42.957%, #561358 100%)",
    position: "center 30%",
  },
  {
    title: "Housing",
    image: "/figma/services/housing.jpg",
    icon: "/figma/services/housing-icon.svg",
    gradient:
      "linear-gradient(to bottom, rgba(255,255,255,0.01) 42.957%, #561358 100%)",
  },
];

function ServiceCard({ title, image, icon, gradient, position }: Service) {
  return (
    <article className="relative aspect-[480/646] w-full overflow-hidden rounded-[33px]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 480px"
        className="object-cover"
        style={{ objectPosition: position ?? "center" }}
      />
      <div
        className="absolute inset-0 rounded-[33px]"
        style={{ backgroundImage: gradient }}
      />

      <div className="absolute bottom-[10.8%] left-[9.38%] flex flex-col items-start gap-[45px]">
        <Image
          src={icon}
          alt=""
          width={116}
          height={116}
          className="h-[116px] w-[116px]"
        />
        <p className="whitespace-nowrap text-[48px] leading-[42px] font-bold text-[#fdfdfd] uppercase">
          {title}
        </p>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24 font-cambay lg:px-[60px]"
    >
      <div className="mx-auto max-w-[1840px]">
        {/* NOTE: in Figma this heading is a video/GIF fill (node 1618:11171) and
            cannot be exported; rendered as text until the asset is supplied. */}
        <h2 className="mb-[48px] flex items-center gap-3 text-[48px] leading-[52px] font-bold text-brand">
          Our Services
          <Image
            src="/figma/about/squiggle.svg"
            alt=""
            width={158}
            height={26}
            className="h-[26px] w-[158px]"
          />
        </h2>

        <div className="grid grid-cols-1 gap-[36px] sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
