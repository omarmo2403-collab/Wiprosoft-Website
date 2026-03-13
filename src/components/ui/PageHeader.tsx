import type { ReactNode } from "react";

interface PageHeaderProps {
  label: string;
  title: ReactNode;
  description: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            {label}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mt-4 leading-tight">
            {title}
          </h1>
          <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="accent-underline">{children}</span>;
}
