import Image from "next/image";

type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  /**
   * outline = bordered purple on light bg; solid = filled purple;
   * white = filled white, for use on the dark purple panels.
   */
  variant?: "outline" | "solid" | "white";
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

  // Every variant drops its fill on hover and swaps the label + arrow to the
  // fill colour. `outline` shares the Donation button's exact treatment: it
  // used to sit transparent at rest, so hovering barely changed anything.
  const purple =
    "border-transparent bg-brand text-white hover:border-brand hover:bg-transparent hover:text-brand";

  const styles = {
    solid: purple,
    outline: purple,
    white:
      "border-transparent bg-white text-brand hover:border-white hover:bg-transparent hover:text-white",
  }[variant];

  // the arrow artwork is brand purple, so it is knocked out to white whenever
  // the label is white and released back when the label returns to purple
  const whiteArrow =
    "brightness-0 invert transition-[filter] duration-300 ease-in-out group-hover:brightness-100 group-hover:invert-0";

  const arrow = {
    solid: whiteArrow,
    outline: whiteArrow,
    white:
      "transition-[filter] duration-300 ease-in-out group-hover:brightness-0 group-hover:invert",
  }[variant];

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
