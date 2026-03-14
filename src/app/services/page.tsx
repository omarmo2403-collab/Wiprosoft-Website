import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Wiprosoft's full range of digital services including web development, design, marketing, and more. Solutions that drive growth.",
};

const processSteps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and goals to understand exactly what you need.",
  },
  {
    number: 2,
    title: "Strategy",
    description:
      "We craft a tailored roadmap with clear milestones and measurable objectives.",
  },
  {
    number: 3,
    title: "Execution",
    description:
      "Our team brings the strategy to life with precision, keeping you informed every step of the way.",
  },
  {
    number: 4,
    title: "Optimization",
    description:
      "We analyze performance data and continuously refine to maximize your results.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title="Solutions That Drive Growth"
        description="From strategy to execution, we offer end-to-end digital services designed to elevate your brand and accelerate your business."
      />

      {/* Services Blocks */}
      <section>
        <SectionWrapper>
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;

            return (
              <div key={service.id}>
                <div
                  id={service.id}
                  className={cn(
                    "grid lg:grid-cols-2 gap-12 items-start",
                    isEven && "lg:direction-rtl"
                  )}
                >
                  <div className={cn(isEven && "lg:order-2")}>
                    <Icon className="h-12 w-12 text-accent" />
                    <h2 className="text-3xl font-bold text-secondary mt-4">
                      {service.title}
                    </h2>
                    <p className="text-text-body mt-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {service.subServices.map((sub) => (
                        <Badge key={sub.name}>{sub.name}</Badge>
                      ))}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex aspect-video items-center justify-center rounded-2xl",
                      isEven && "lg:order-1"
                    )}
                    style={{ backgroundColor: service.color }}
                  >
                    <span className="px-4 text-center text-lg font-semibold text-white">
                      {service.title}
                    </span>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-b border-border my-14" />
                )}
              </div>
            );
          })}
        </SectionWrapper>
      </section>

      {/* Process */}
      <div className="bg-surface-alt">
        <SectionWrapper>
          <SectionHeader label="Our Process" title="How We Work" />
          <div className="mt-10">
            {/* Desktop: horizontal timeline */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative flex flex-col items-center text-center px-6">
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] border-t-2 border-dashed border-border" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold relative z-10">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-secondary mt-4">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm mt-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile: vertical timeline */}
            <div className="lg:hidden space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold shrink-0">
                      {step.number}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px flex-1 border-l-2 border-dashed border-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-semibold text-secondary">{step.title}</h3>
                    <p className="text-text-muted text-sm mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
