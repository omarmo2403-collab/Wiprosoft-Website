"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MeshGradient } from "@/components/ui/MeshGradient";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MeshGradient />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 backdrop-blur-sm mb-6">
            IT &amp; Web Marketing Agency
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          We Build Digital Experiences That Drive Growth
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          From stunning websites to data-driven marketing strategies, we help
          businesses scale their digital presence and convert visitors into
          loyal customers.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button href="/contact" className="bg-white !text-slate-900 hover:bg-white/90 shadow-lg shadow-black/10">
            Start a Project
          </Button>
          <Button href="/portfolio" className="border-white/30 text-white hover:bg-white/10 border">
            View Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
