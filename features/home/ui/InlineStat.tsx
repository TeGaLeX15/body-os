// features/home/lib/InlineStat.ts
import { Card } from "@/components/ui/card";
import React from "react";

type Props = {
  label: string;
  value: number;
  icon?: React.ReactNode;
};

export function InlineStat({ label, value, icon }: Props) {
  return (
    <Card variant="soft" className="p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          {icon}
          <p className="text-xs text-foreground/70 truncate">
            {label}
          </p>
        </div>

        <p className="text-base font-bold tabular-nums">
          {value}
        </p>
      </div>
    </Card>
  );
}