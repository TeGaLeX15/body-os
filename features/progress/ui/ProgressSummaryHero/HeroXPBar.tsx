// features/progress/ui/ProgressSummaryHero/HeroXPBar.tsx
type Props = {
  currentXP: number;
  xpToNextLevel: number;
  totalXP: number;
  progress: number;
};

export default function HeroXPBar({
  currentXP,
  xpToNextLevel,
  totalXP,
  progress,
}: Props) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">XP Progress</span>

        <span className="font-medium">
          {currentXP} / {xpToNextLevel}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="text-[11px] text-muted-foreground">Total XP: {totalXP}</p>
    </div>
  );
}
