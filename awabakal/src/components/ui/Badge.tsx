import Dot from "@/components/ui/Dot";

export default function Badge({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`mb-4 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${
        tone === "light"
          ? "bg-blush text-brand"
          : "bg-white/10 text-white"
      }`}
    >
      <Dot size={6} />
      {children}
    </span>
  );
}
