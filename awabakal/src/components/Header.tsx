import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Career", href: "#career" },
  { label: "Events & Activities", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-[30px] z-50 font-cambay">
      <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between gap-8 px-6 xl:px-0">
        <Image
          src="/figma/logo.png"
          alt="Awabakal"
          width={234}
          height={41}
          priority
          className="h-[41.361px] w-[234px] shrink-0 object-contain"
        />

        <nav className="hidden items-center gap-[63px] whitespace-nowrap text-[20px] tracking-[0.4px] text-[#c2cad1] xl:flex">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="flex w-[159px] shrink-0 items-center justify-center rounded-[100px] border-[0.2px] border-solid border-[#e9a031] bg-white/19 px-[34px] py-[12px] text-[18px] whitespace-nowrap text-white transition-colors hover:bg-white/30"
        >
          Enquire Now
        </a>
      </div>

      <div className="mt-[30px] h-px w-full bg-white/20" />
    </header>
  );
}
