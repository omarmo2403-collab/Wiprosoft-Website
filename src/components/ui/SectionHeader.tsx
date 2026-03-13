import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ label, title, description, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 lg:mb-14", align === "center" && "text-center", className)}>
      {label && (
        <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-text-muted mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
