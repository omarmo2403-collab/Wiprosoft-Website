"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const blobs = [
  {
    className: "absolute -top-1/2 -left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-screen filter blur-[80px] sm:blur-3xl opacity-70",
    animate: {
      x: [0, 200, -120, 160, 0],
      y: [0, -150, 200, -80, 0],
      scale: [1, 1.3, 0.8, 1.2, 1],
    },
    duration: 6,
  },
  {
    className: "absolute top-1/3 right-0 w-44 h-44 sm:w-80 sm:h-80 bg-gradient-to-l from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-[80px] sm:blur-3xl opacity-60",
    animate: {
      x: [0, -180, 100, -130, 0],
      y: [0, 130, -180, 80, 0],
      scale: [1, 0.75, 1.3, 0.9, 1],
    },
    duration: 7,
  },
  {
    className: "absolute -bottom-1/4 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-t from-orange-400 to-red-500 rounded-full mix-blend-screen filter blur-[80px] sm:blur-3xl opacity-60",
    animate: {
      x: [0, 150, -130, 100, 0],
      y: [0, -130, 150, -100, 0],
      scale: [1, 1.25, 0.85, 1.15, 1],
    },
    duration: 8,
  },
  {
    className: "absolute top-1/4 left-1/2 w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mix-blend-screen filter blur-[80px] sm:blur-3xl opacity-50",
    animate: {
      x: [0, -130, 170, -80, 0],
      y: [0, 160, -110, 130, 0],
      scale: [1, 1.35, 0.75, 1.2, 1],
    },
    duration: 5,
  },
];

export function MeshGradient({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className={blob.className}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
