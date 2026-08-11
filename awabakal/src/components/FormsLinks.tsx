import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

type FormLink = {
  title: string;
  subtitle: string;
  href?: string;
  /** download = arrow into a tray; enquiry = diagonal "go to" arrow */
  icon: "download" | "enquiry";
};

const forms: FormLink[] = [
  { title: "Membership Application", subtitle: "Download Form", icon: "download" },
  { title: "Confirmation Aboriginality", subtitle: "Download Form", icon: "download" },
  { title: "Constitution", subtitle: "Download PDF", icon: "download" },
  { title: "Housing Application", subtitle: "Download Form", icon: "download" },
  { title: "Preschool", subtitle: "Make Enquiry", icon: "enquiry" },
];

export default function FormsLinks() {
  return (
    <section
      id="resources"
      className="relative isolate overflow-hidden bg-cream px-6 py-24 font-cambay lg:px-[77px] lg:py-[100px]"
    >
      {/* Figma places the flower union at 414.6x411, x=-224, flush with the
          section's bottom edge. Same artwork as the Moments bloom, recoloured
          from 5% white to a pink tint so it reads on cream. */}
      <Image
        src="/flower-pink.svg"
        alt=""
        aria-hidden
        width={491}
        height={487}
        className="pointer-events-none absolute bottom-0 -left-[224px] -z-10 hidden h-[411px] w-[414.6px] select-none object-contain lg:block"
      />

      {/* ── heading row ─────────────────────────────────────────────── */}
      <div className="mb-[60px] flex flex-wrap items-center justify-between gap-6 lg:mb-[100px]">
        <h2 className="text-[40px] font-normal leading-[1.1] text-brand-dark lg:text-[56px]">
          Forms &amp; Links
        </h2>

        <CtaButton variant="solid" href="#contact">
          Submit Your Form
        </CtaButton>
      </div>

      {/* ── cards ───────────────────────────────────────────────────── */}
      {/* Figma: 561x202 cards on a 40px gutter, three to a row (1763 total) */}
      <div className="grid max-w-[1763px] gap-[40px] md:grid-cols-2 lg:grid-cols-3">
        {forms.map(({ title, subtitle, href, icon }) => (
          <a
            key={title}
            href={href ?? "#"}
            className="flex items-center gap-[26px] rounded-[12px] bg-white px-[28px] py-[38px] transition-shadow hover:shadow-md lg:h-[202px] lg:px-[43px] lg:py-[59px]"
          >
            <span className="grid size-[64px] shrink-0 place-items-center rounded-full bg-accent lg:size-[84px]">
              {icon === "download" ? (
                <Image
                  src="/Download.svg"
                  alt=""
                  aria-hidden
                  width={30}
                  height={31}
                  className="h-[24px] w-[23px] lg:h-[31px] lg:w-[30px]"
                />
              ) : (
                <Image
                  src="/Arrow White.svg"
                  alt=""
                  aria-hidden
                  width={19}
                  height={12}
                  // the asset points right; the design shows it heading up-right
                  className="h-[12px] w-[19px] -rotate-45 lg:h-[15px] lg:w-[24px]"
                />
              )}
            </span>

            <span className="flex flex-col gap-[25px]">
              <span className="text-[18px] font-bold leading-[20px] text-brand-dark lg:text-[20px]">
                {title}
              </span>
              <span className="text-[14px] leading-[15px] text-body lg:text-[15px]">
                {subtitle}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
