"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Mesh blob background */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2" />
        <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-t from-orange-400 to-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4" />
        <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-3" />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

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
