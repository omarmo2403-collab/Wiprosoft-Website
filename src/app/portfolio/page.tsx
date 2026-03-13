import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { PortfolioContent } from "@/components/sections/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of web development, digital marketing, and branding projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <SectionWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mt-4">
              Portfolio
            </h1>
            <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
              A showcase of our best work across web development, digital
              marketing, and branding.
            </p>
          </div>
        </SectionWrapper>
      </section>
      <PortfolioContent />
      <CTABanner />
    </>
  );
}
