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
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Contact
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Ready to start your next project? We&apos;d love to hear from you.
          </p>
        </SectionWrapper>
      </section>
      <SectionWrapper className="pt-0">
        <ContactContent />
      </SectionWrapper>
    </>
  );
}
