import Image from "next/image";
import Squiggle from "@/components/ui/Squiggle";

export default function Donation() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="relative mx-auto w-fit pb-10">
          {/* petal-shaped base decoration */}
          <svg
            viewBox="0 0 200 120"
            className="absolute -bottom-2 left-1/2 h-28 w-52 -translate-x-1/2"
            fill="none"
          >
            <path
              d="M100 20c-40 0-90 20-90 55 0 20 20 30 45 30 25 0 35-25 45-25s20 25 45 25c25 0 45-10 45-30 0-35-50-55-90-55z"
              fill="#e6543a"
            />
          </svg>
          <Image
            src="https://picsum.photos/seed/awabakal-donation/360/360"
            alt="Helping hands"
            width={360}
            height={360}
            className="relative h-64 w-64 rounded-full object-cover shadow-xl sm:h-80 sm:w-80"
          />
        </div>

        <div>
          <h2 className="flex items-center gap-2 font-serif text-3xl font-semibold text-brand sm:text-4xl">
            Donation <Squiggle />
          </h2>
          <p className="mt-6 max-w-md text-zinc-600">
            Your generous support strengthens Aboriginal health, education
            and community wellbeing. Every donation helps us provide culturally
            safe programs and essential services for families.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}
