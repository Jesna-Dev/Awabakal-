import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Squiggle from "@/components/ui/Squiggle";

export default function WeEmpower() {
  return (
    <section className="bg-blush px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <Badge>Awabakal Property</Badge>
          <h2 className="flex items-center gap-2 font-serif text-3xl font-semibold text-brand sm:text-4xl">
            We Empower <Squiggle />
          </h2>
          <p className="mt-6 max-w-md text-zinc-600">
            We are a community-owned property development and management
            company. We work to bring property to benefit our people.
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            Read More
          </a>
        </div>

        <div className="relative mx-auto w-fit">
          <Image
            src="https://picsum.photos/seed/awabakal-house/480/340"
            alt="Housing"
            width={480}
            height={340}
            className="h-64 w-80 rounded-2xl object-cover shadow-xl sm:h-72 sm:w-[420px]"
          />
          <Image
            src="https://picsum.photos/seed/awabakal-house2/140/140"
            alt="Community member"
            width={140}
            height={140}
            className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
