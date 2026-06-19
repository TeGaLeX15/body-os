import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-4
        ${className}
      `}
    >
      {children}
    </div>
  );
}