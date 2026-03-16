import type { ReactNode } from "react";
import { MeshGradient } from "./MeshGradient";

interface PageHeaderProps {
  label: string;
  title: ReactNode;
  description: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-6 md:pt-40 md:pb-10 overflow-hidden bg-slate-950">
      <MeshGradient />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 backdrop-blur-sm mb-3 uppercase tracking-wider">
            {label}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-0.5 leading-tight">
            {title}
          </h1>
          <p className="text-white/80 text-base md:text-lg mt-3 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-white underline decoration-accent decoration-2 underline-offset-4">{children}</span>;
}
