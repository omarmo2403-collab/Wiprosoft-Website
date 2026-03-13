import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-light bg-surface-card p-6 shadow-sm",
        hover && "transition-all duration-300 hover:shadow-md hover:border-border",
        className
      )}
    >
      {children}
    </div>
  );
}
