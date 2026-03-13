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
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Our Work
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
            Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            A showcase of our best work across web development, digital
            marketing, and branding.
          </p>
        </SectionWrapper>
      </section>
      <PortfolioContent />
      <CTABanner />
    </>
  );
}
