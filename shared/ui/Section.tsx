// shared/ui/Section.tsx
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`mb-6 last:mb-0 ${className}`}>
      {children}
    </section>
  );
}