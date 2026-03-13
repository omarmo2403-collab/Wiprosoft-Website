"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

const metrics = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Team Members" },
];

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [inView, target]);

  return <>{count}</>;
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="bg-surface-alt">
      <SectionWrapper>
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="text-center"
              variants={fadeUp}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">
                <Counter target={metric.value} inView={inView} />
                <span className="text-accent">{metric.suffix}</span>
              </div>
              <p className="text-text-muted text-sm">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
