import Image from "next/image";

type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  /** outline = bordered purple on light bg; solid = filled purple. */
  variant?: "outline" | "solid";
  className?: string;
};

export default function CtaButton({
  children,
  href = "#",
  variant = "outline",
  className = "",
}: CtaButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-[10px] rounded-[100px] border border-solid px-[25px] py-[16px] font-dm text-[18px] font-medium transition-[color,background-color,border-color,font-weight] duration-300 ease-in-out hover:font-bold";

  // both variants land on the same hover state: no fill, brand border, brand
  // label and arrow
  const styles =
    variant === "solid"
      ? "border-transparent bg-brand text-white hover:border-brand hover:bg-transparent hover:text-brand"
      : "border-brand-light text-brand hover:border-brand hover:bg-transparent";

  // the arrow is a purple SVG: the solid variant knocks it out to white while
  // filled, then lets it return to brand purple on hover with the label
  const arrow =
    variant === "solid"
      ? "brightness-0 invert transition-[filter] duration-300 ease-in-out group-hover:brightness-100 group-hover:invert-0"
      : "";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span className="whitespace-nowrap">{children}</span>
      <Image
        src="/figma/about/arrow.svg"
        alt=""
        width={19}
        height={12}
        className={`h-[12.114px] w-[19.14px] ${arrow}`}
      />
    </a>
  );
}
