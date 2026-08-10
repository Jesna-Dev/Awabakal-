"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import Badge from "@/components/ui/Badge";

const faqs = [
  {
    question: "How do I access childcare services?",
    answer:
      "Awabakal provides Playgroup and Preschool services for our community. For more information on these services, please visit our Preschool page.",
  },
  {
    question: "What services does Awabakal offer to community?",
    answer:
      "We offer medical, dental, preschool, housing and a range of family and wellbeing support services.",
  },
  {
    question: "Can I book an appointment online?",
    answer:
      "Yes, appointments for our GP and Medical services can be requested through our contact page or by phone.",
  },
  {
    question: "What assistance is available for aged care clients?",
    answer:
      "We provide culturally safe aged care support programs — reach out to our team to discuss eligibility.",
  },
  {
    question: "Does Awabakal Ltd assist with family history research/eviction project?",
    answer:
      "Yes, our team can support family history and cultural heritage research — contact us for details.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Badge>FAQ</Badge>
        </div>
        <h2 className="font-serif text-3xl font-semibold text-brand sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-zinc-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center gap-4 px-6 py-4 text-left font-semibold text-brand"
                >
                  <span className="text-xs font-bold text-accent">
                    Q{index + 1}
                  </span>
                  <span className="flex-1">{faq.question}</span>
                  {isOpen ? (
                    <X className="h-4 w-4 shrink-0" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 pl-16 text-sm text-zinc-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
