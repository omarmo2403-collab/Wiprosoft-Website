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
              x: ["-20%", "20%", "-15%", "15%", "-20%"],
              y: ["-20%", "20%", "-15%", "15%", "-20%"],
              scale: [1, 1.2, 0.9, 1.1, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 75%)",
              filter: "blur(50px)",
            }}
          />
          <motion.div
            animate={{
              x: ["20%", "-20%", "15%", "-15%", "20%"],
              y: ["20%", "-20%", "15%", "-15%", "20%"],
              scale: [1, 0.9, 1.2, 0.9, 1],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 75%)",
              filter: "blur(50px)",
            }}
          />
          <motion.div
            animate={{
              x: ["-15%", "25%", "-20%", "20%", "-15%"],
              y: ["25%", "-15%", "20%", "-20%", "25%"],
              scale: [1, 1.15, 0.95, 1.15, 1],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/3 right-0 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(236, 72, 153, 0.7) 0%, transparent 75%)",
              filter: "blur(50px)",
            }}
          />
          <motion.div
            animate={{
              x: ["25%", "-15%", "20%", "-20%", "25%"],
              y: ["-15%", "25%", "-20%", "20%", "-15%"],
              scale: [1, 1.1, 0.9, 1.2, 1],
            }}
            transition={{ duration: 45, repeat: Infinity, ease: "easeInOut", delay: 6 }}
            className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, transparent 75%)",
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
