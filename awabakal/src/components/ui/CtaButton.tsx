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
    "inline-flex items-center justify-center gap-[10px] rounded-[100px] px-[25px] py-[16px] font-dm text-[18px] font-medium transition-colors";

  const styles =
    variant === "solid"
      ? "bg-brand text-white hover:bg-brand-light"
      : "border border-solid border-brand-light text-brand hover:bg-brand hover:text-white";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span className="whitespace-nowrap">{children}</span>
      <Image
        src="/figma/about/arrow.svg"
        alt=""
        width={19}
        height={12}
        className="h-[12.114px] w-[19.14px]"
      />
    </a>
  );
}
