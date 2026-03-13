"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { projects } from "@/data/portfolio";

export function FeaturedWork() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="bg-surface-alt">
      <SectionWrapper>
        <SectionHeader
          label="Our Work"
          title="Featured Projects"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-xl overflow-hidden border border-border bg-surface-card">
                {/* Image placeholder */}
                <div
                  className="flex aspect-video items-center justify-center rounded-xl"
                  style={{ backgroundColor: project.color }}
                >
                  <span className="px-4 text-center text-lg font-semibold text-white">
                    {project.title}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button href="/portfolio" variant="secondary">
            View All Projects
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
