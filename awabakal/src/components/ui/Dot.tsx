import Image from "next/image";

/**
 * The round marker used in badges/eyebrows across the site.
 *
 * Renders the vector at `public/figma/dot.svg` — replace that single file to
 * restyle every dot on the site (no code changes needed).
 */
export default function Dot({
  size = 7,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/figma/dot.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
