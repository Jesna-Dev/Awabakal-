"use client";

import Image from "next/image";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

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
    question:
      "Does Awabakal Ltd assist with family history research/school project?",
    answer:
      "Yes, our team can support family history and cultural heritage research — contact us for details.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      // background comes from the shared wrapper in page.tsx
      className="relative isolate overflow-hidden px-6 py-24 font-cambay lg:px-[60px] lg:py-[120px]"
    >
      {/* the blurred side glows live on the shared wrapper in page.tsx — this
          section clips its overflow, which would slice the blur flat */}

      {/* Figma "Purple Frame 2", 369x367 hanging off the right edge */}
      <Image
        src="/flower-pink.svg"
        alt=""
        aria-hidden
        width={491}
        height={487}
        className="pointer-events-none absolute -right-[60px] top-[160px] -z-10 hidden h-[367px] w-[369px] select-none object-contain lg:block"
      />

      {/* ── heading ─────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center text-center">
        <SectionLabel className="mb-[26px]">FAQ</SectionLabel>

        <h2 className="max-w-[520px] text-[36px] font-normal leading-[1.25] text-brand lg:text-[64px]">
          Frequently Asked Questions
        </h2> 
      </div>

      {/* ── accordion ───────────────────────────────────────────────── */}
      {/* Figma: 1640px card, five 139.6px rows, hairline separators */}
      <div className="mx-auto mt-[56px] max-w-[1640px] overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_-20px_rgba(86,19,88,0.18)] lg:mt-[72px]">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = open === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-trigger-${index}`;

          return (
            <div
              key={question}
              className={index > 0 ? "border-t border-[#eaeaea]" : ""}
            >
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center gap-[20px] px-[24px] py-[28px] text-left lg:min-h-[139.6px] lg:gap-[28px] lg:pl-[43px] lg:pr-[40px]"
              >
                <span className="w-[26px] shrink-0 text-[16px] text-[#1a1a1a] lg:text-[18px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-[17px] leading-[1.4] text-[#1a1a1a] lg:text-[22px]">
                  {question}
                </span>

                {/* one glyph for both states: the plus rotates into a cross */}
                <span
                  aria-hidden
                  className={`relative block size-[22px] shrink-0 text-[#1a1a1a] transition-transform duration-300 ease-in-out lg:size-[26px] ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <span className="absolute left-1/2 top-0 h-full w-[2.5px] -translate-x-1/2 rounded-full bg-current" />
                  <span className="absolute left-0 top-1/2 h-[2.5px] w-full -translate-y-1/2 rounded-full bg-current" />
                </span>
              </button>

              {/* 0fr -> 1fr animates to the content's natural height, which a
                  plain height transition cannot do */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[900px] px-[24px] pb-[28px] text-[14px] leading-[26px] text-body lg:pb-[36px] lg:pl-[91px] lg:pr-[40px] lg:text-[15px]">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
