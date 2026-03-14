"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl px-8 py-14 sm:px-14 sm:py-16 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #03A3B2 0%, #172F56 100%)",
          }}
        >
          {/* Animated blobs with explicit positioning */}
          <motion.div
            animate={{
              x: ["-40%", "40%", "-30%", "35%", "-40%"],
              y: ["-40%", "40%", "-30%", "35%", "-40%"],
              scale: [1, 1.5, 0.8, 1.25, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(16, 185, 129, 1) 0%, transparent 75%)",
              filter: "blur(50px)",
            }}
          />
          <motion.div
            animate={{
              x: ["40%", "-40%", "30%", "-35%", "40%"],
              y: ["40%", "-40%", "30%", "-35%", "40%"],
              scale: [1, 0.8, 1.45, 0.85, 1],
            }}
            transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 1) 0%, transparent 75%)",
              filter: "blur(50px)",
            }}
          />
          <motion.div
            animate={{
              x: ["-35%", "50%", "-40%", "45%", "-35%"],
              y: ["50%", "-35%", "45%", "-40%", "50%"],
              scale: [1, 1.3, 0.8, 1.3, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/3 right-0 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(236, 72, 153, 0.95) 0%, transparent 75%)",
              filter: "blur(50px)",
            }}
          />
          <motion.div
            animate={{
              x: ["50%", "-35%", "45%", "-40%", "50%"],
              y: ["-35%", "50%", "-40%", "45%", "-35%"],
              scale: [1, 1.25, 0.85, 1.35, 1],
            }}
            transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
            className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, transparent 75%)",
              filter: "blur(50px)",
            }}
          />

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/25" />

          <div className="relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            >
              Ready to Grow Your Business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/80 text-lg mt-4 max-w-2xl mx-auto"
            >
              Let&apos;s discuss how we can help you achieve your digital goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-4 mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href="/contact" className="bg-white !text-slate-900 hover:bg-white/90 shadow-lg">
                  Start a Project
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href="/portfolio" className="border border-white/30 text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
