"use client";

import { cn } from "@/lib/utils";

export function MeshGradient({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2" />
        <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-t from-orange-400 to-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4" />
        <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-3" />
      </div>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
