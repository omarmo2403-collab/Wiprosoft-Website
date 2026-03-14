import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
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
      <PageHeader
        label="Our Work"
        title="Portfolio"
        description="A showcase of our best work across web development, digital marketing, and branding."
      />
      <PortfolioContent />
      <CTABanner />
    </>
  );
}
