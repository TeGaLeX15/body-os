import { Button } from "@/components/ui/button";
import { Check, Loader2, Dumbbell } from "lucide-react";

type Props = {
  onClick: () => void;
  loading?: boolean;
  saved?: boolean;
  disabled?: boolean;
};

export function SaveWorkoutButton({
  onClick,
  loading,
  saved,
  disabled,
}: Props) {
  return (
    <Button
      variant="gradient"
      onClick={onClick}
      disabled={disabled || loading}
      className="
        relative overflow-hidden
        h-14 w-full
        rounded-2xl
        text-base font-semibold
        !bg-transparent
        !border-0
        active:scale-[0.98]
      "
    >
      {/* glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity hover:opacity-100" />

      <div className="relative flex items-center justify-center gap-2">
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Saving...
          </>
        ) : saved ? (
          <>
            <Check className="h-5 w-5" />
            Saved
          </>
        ) : (
          <>
            <Dumbbell className="h-5 w-5" />
            Save Workout
          </>
        )}
      </div>
    </Button>
  );
}
