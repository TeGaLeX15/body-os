// shared/ui/EmptyState.tsx
import { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-xl
        border border-border
        bg-card
        px-6 py-10
        text-center
      "
    >
      <div className="space-y-3">
        <p className="text-lg font-semibold">
          {title}
        </p>

        <p className="text-sm text-muted-foreground">
          {description}
        </p>

        {action}
      </div>
    </div>
  );
}