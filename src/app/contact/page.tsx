import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactContent } from "@/components/sections/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Wiprosoft. Let's discuss your next web development, digital marketing, or branding project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <SectionWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mt-4">
              Get in Touch
            </h1>
            <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
              Ready to start your next project? We&apos;d love to hear from you.
            </p>
          </div>
        </SectionWrapper>
      </section>
      <SectionWrapper className="pt-0">
        <ContactContent />
      </SectionWrapper>
    </>
  );
}
