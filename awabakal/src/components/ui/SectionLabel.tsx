import Image from "next/image";

/**
 * The pill eyebrow that sits above a section title — dot + label inside a
 * rounded outline. Geometry is taken from the "Service" pill on the Services
 * page, so every section reads the same.
 *
 * `tone="dark"` is the version for dark/photographic backgrounds: same shape,
 * white outline, text and dot.
 */
export default function SectionLabel({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const outline =
    tone === "dark"
      ? "border-white/70 text-white"
      : "border-[#561358] text-[#561358]";

  return (
    <span
      className={`inline-flex items-center gap-[10px] rounded-[100px] border border-solid bg-transparent px-[18px] py-[8px] text-[14px] ${outline} ${className}`}
    >
      {tone === "dark" ? (
        <span
          className="size-[10px] shrink-0 rounded-full bg-white"
          aria-hidden
        />
      ) : (
        <Image
          src="/Vector 2534.png"
          alt=""
          aria-hidden
          width={12}
          height={12}
          className="h-[12px] w-[12px] shrink-0 object-contain"
        />
      )}
      {children}
    </span>
  );
}
