// features/home/components/stat-card/StatCard.tsx
"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function StatCard({ children, className }: Props) {
  return (
    <Card
      variant="soft"
      className={cn("relative overflow-hidden p-4", className)}
    >
      {/* glow layer */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-white/5 blur-2xl" />

      <div className="relative flex flex-col gap-2">
        {children}
      </div>
    </Card>
  );
}