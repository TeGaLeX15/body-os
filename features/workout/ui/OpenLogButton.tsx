// features/workout/ui/OpenLogButton.tsx
type OpenLogButtonProps = {
  count: number;
  onClick: () => void;
};

export function OpenLogButton({
  count,
  onClick,
}: OpenLogButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-xl
        border border-border
        bg-card
        py-3
        text-sm
        text-muted-foreground
        transition-colors
        hover:text-foreground
      "
    >
      Open full workout log ({count})
    </button>
  );
}