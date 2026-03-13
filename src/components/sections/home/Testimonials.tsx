"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = 350 + 24;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, testimonials.length - 1));
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 350 + 24;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <SectionWrapper>
      <SectionHeader label="Testimonials" title="What Our Clients Say" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`[data-testimonial-scroll]::-webkit-scrollbar { display: none; }`}</style>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              className="min-w-[320px] w-[350px] flex-shrink-0 snap-center"
            >
              <Card className="h-full p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-text-body italic mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div>
                  <p className="text-secondary font-semibold">{testimonial.name}</p>
                  <p className="text-text-muted text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-accent" : "bg-border"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
