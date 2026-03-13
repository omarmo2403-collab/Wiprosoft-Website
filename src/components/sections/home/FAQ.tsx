"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services."
            align="left"
          />
        </div>

        <div>
          <Accordion items={faqItems} />
        </div>
      </div>
    </SectionWrapper>
  );
}
