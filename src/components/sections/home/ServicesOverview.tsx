"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { services } from "@/data/services";

export function ServicesOverview() {
  const displayedServices = services.slice(0, 3);

  return (
    <SectionWrapper>
      <SectionHeader
        label="What We Do"
        title="Services That Drive Results"
      />

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {displayedServices.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.title} variants={fadeUp}>
              <Card className="p-8 h-full flex flex-col">
                <Icon className="h-10 w-10 text-accent mb-5" />
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-body mb-5 flex-1">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="text-accent text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
