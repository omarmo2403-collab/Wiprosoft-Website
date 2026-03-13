import { Hero } from "@/components/sections/home/Hero";
import { Metrics } from "@/components/sections/home/Metrics";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FAQ } from "@/components/sections/home/FAQ";
import { LatestBlog } from "@/components/sections/home/LatestBlog";
import { CTABanner } from "@/components/sections/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServicesOverview />
      <FeaturedWork />
      <Testimonials />
      <FAQ />
      <LatestBlog />
      <CTABanner />
    </>
  );
}
