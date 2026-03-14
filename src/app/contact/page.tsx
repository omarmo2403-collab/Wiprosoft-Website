import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
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
      <PageHeader
        label="Contact"
        title="Get in Touch"
        description="Ready to start your next project? We'd love to hear from you."
      />
      <SectionWrapper className="pt-0">
        <ContactContent />
      </SectionWrapper>
    </>
  );
}
