import Badge from "@/components/ui/Badge";

const partners = ["Partner One", "Partner Two", "Partner Three", "Partner Four"];

export default function StrongerTogether() {
  return (
    <section className="bg-brand-dark px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <Badge tone="dark">Proudly With</Badge>
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Stronger Together
          </h2>
          <p className="mt-6 max-w-md text-white/70">
            We work alongside organisations, communities and partners to
            create meaningful change and better outcomes for our people.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-20 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white/80"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
