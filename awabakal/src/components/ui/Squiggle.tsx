export default function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 20"
      className={`inline-block h-4 w-14 align-middle ${className}`}
      fill="none"
    >
      <path
        d="M2 14c6-10 12-10 18 0s12 10 18 0 12-10 18 0"
        stroke="#e6543a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
