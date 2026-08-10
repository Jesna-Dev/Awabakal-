export default function DotDivider() {
  const spiral =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='11' fill='none' stroke='%23ffffff' stroke-opacity='0.25' stroke-width='1.5'/%3E%3Ccircle cx='20' cy='20' r='6' fill='none' stroke='%23ffffff' stroke-opacity='0.25' stroke-width='1.5'/%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23ffffff' fill-opacity='0.3'/%3E%3C/svg%3E";

  return (
    <div
      className="h-14 bg-brand"
      style={{
        backgroundImage: `url("${spiral}")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "40px 40px",
      }}
      aria-hidden="true"
    />
  );
}
