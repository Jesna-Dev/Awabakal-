import { FileText } from "lucide-react";

const forms = [
  { title: "Membership Application", subtitle: "Download Form" },
  { title: "Confirmation Aboriginality", subtitle: "Download Form" },
  { title: "Constitution", subtitle: "Download PDF" },
  { title: "Housing Application", subtitle: "Download Form" },
  { title: "Preschool", subtitle: "Make Enquiry" },
];

export default function FormsLinks() {
  return (
    <section id="resources" className="bg-blush px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold text-brand sm:text-4xl">
            Forms &amp; Links
          </h2>
          <a
            href="#"
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            View All Forms
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forms.map(({ title, subtitle }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-brand">{title}</p>
                <p className="text-sm text-zinc-500">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
