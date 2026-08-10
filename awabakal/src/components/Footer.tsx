const companyLinks = ["About Us", "Our Services", "Events", "Careers", "Contact Us"];
const helpLinks = ["FAQs", "Donate", "Volunteer", "Complaints", "Privacy Policy"];

const socialPaths = [
  "M13 22v-9h3l1-4h-4V6.5C13 5.4 13.7 5 14.8 5H17V1.4C16.6 1.3 15.3 1 13.9 1 10.8 1 9 2.8 9 6.1V9H6v4h3v9h4z",
  "M12 2c-2.7 0-3.1 0-4.1.1-1 .1-1.7.2-2.3.5-.6.2-1.2.6-1.7 1.1-.5.5-.9 1.1-1.1 1.7-.2.6-.4 1.3-.5 2.3C2.1 8.9 2.1 9.3 2.1 12s0 3.1.1 4.1c.1 1 .2 1.7.5 2.3.2.6.6 1.2 1.1 1.7.5.5 1.1.9 1.7 1.1.6.2 1.3.4 2.3.5 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1-.1 1.7-.2 2.3-.5.6-.2 1.2-.6 1.7-1.1.5-.5.9-1.1 1.1-1.7.2-.6.4-1.3.5-2.3.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-1-.2-1.7-.5-2.3-.2-.6-.6-1.2-1.1-1.7-.5-.5-1.1-.9-1.7-1.1-.6-.2-1.3-.4-2.3-.5C15.1 2.1 14.7 2.1 12 2.1zm0 3.4a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm6.7-.6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  "M18.9 2H22l-7 8 8.3 12h-6.5l-5.1-6.7L5.6 22H2.5l7.5-8.6L2 2h6.6l4.6 6.1L18.9 2zm-1.1 18h1.8L7.3 4h-2l12.5 16z",
  "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z",
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark px-6 pt-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <span className="font-serif text-2xl font-semibold text-white">
              awabakal
            </span>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              We are a leading medical service provider for our people.
            </p>
            <form className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex gap-4">
              {socialPaths.map((d, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </p>
            <ul className="space-y-3 text-sm text-white/60">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Help
            </p>
            <ul className="space-y-3 text-sm text-white/60">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Awabakal Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
