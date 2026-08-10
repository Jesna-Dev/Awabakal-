import Image from "next/image";
import { BookOpen, Sprout } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Squiggle from "@/components/ui/Squiggle";

export default function Moments() {
  return (
    <section id="events" className="bg-brand px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge tone="dark">Gallery</Badge>
            <h2 className="flex items-center gap-2 font-serif text-3xl font-semibold text-white sm:text-4xl">
              Moments <Squiggle />
            </h2>
          </div>
          <a
            href="#"
            className="rounded-full border border-gold px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Image
            src="https://picsum.photos/seed/awabakal-moment1/320/320"
            alt="Community moment"
            width={320}
            height={320}
            className="h-40 w-full rounded-2xl object-cover sm:h-56"
          />
          <div className="flex h-40 w-full items-center justify-center rounded-2xl bg-cream sm:h-56">
            <BookOpen className="h-10 w-10 text-brand" strokeWidth={1.5} />
          </div>
          <Image
            src="https://picsum.photos/seed/awabakal-moment2/320/320"
            alt="Community moment"
            width={320}
            height={320}
            className="h-40 w-full rounded-2xl object-cover sm:h-56"
          />
          <div className="flex h-40 w-full items-center justify-center rounded-2xl border border-white/30 sm:h-56">
            <Sprout className="h-10 w-10 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
