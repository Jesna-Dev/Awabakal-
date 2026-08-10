import Image from "next/image";

export default function ConnectTeam() {
  return (
    <section id="contact" className="px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand">
        <div className="grid items-center gap-8 px-8 py-14 sm:px-14 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
              Connect With Our Team
            </h2>
            <p className="mt-4 max-w-sm text-white/70">
              We&apos;re here to help. Reach out to learn more about our
              services and support programs.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Get In Touch
            </a>
          </div>
          <div className="relative mx-auto w-fit">
            <Image
              src="https://picsum.photos/seed/awabakal-team/320/320"
              alt="Team member"
              width={320}
              height={320}
              className="h-56 w-56 rounded-full object-cover shadow-xl sm:h-64 sm:w-64"
            />
            <Image
              src="https://picsum.photos/seed/awabakal-team2/120/120"
              alt="Team member"
              width={120}
              height={120}
              className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full border-4 border-brand object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
