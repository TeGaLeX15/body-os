// features/profile-onboarding/ui/steps/FinishStep.tsx
import type { OnboardingState } from "../../model/onboarding.types";

type Props = {
  data: OnboardingState;
  onFinish: () => void;
  onBack: () => void;
};

export function FinishStep({ data, onFinish, onBack }: Props) {
  return (
    <div className="w-full space-y-6 text-center pb-6">
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Profile forged
        </h1>
        <p className="text-sm text-white/40">
          Your build is ready for the journey
        </p>
      </div>

      {/* RPG CARD */}
      <div
        className="
          relative rounded-2xl p-[1px]
          bg-gradient-to-br from-purple-500/30 via-cyan-500/10 to-emerald-500/20
          shadow-[0_0_40px_rgba(120,80,255,0.15)]
        "
      >
        {/* inner panel */}
        <div
          className="
            rounded-2xl p-5 text-left space-y-5
            bg-[#0b0f1a]/90 backdrop-blur-xl
            border border-white/10
          "
        >
          {/* decorative glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-30 blur-2xl bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent" />

          {/* SECTION: CORE STATS */}
          <Section title="Core stats" icon="⚔️">
            <Row label="Goal" value={data.goal ?? "Unknown path"} />
            <Row label="Activity" value={activityLabel(data.activity)} />
          </Section>

          <Divider />

          {/* SECTION: BODY */}
          <Section title="Body stats" icon="🧬">
            <Row label="Height" value={`${data.body.height} cm`} />
            <Row label="Weight" value={`${data.body.weight} kg`} />
            <Row label="Age" value={`${data.body.age} y`} />
          </Section>

          <Divider />

          {/* SECTION: TARGETS */}
          <Section title="Targets" icon="🎯">
            <Row label="Goal weight" value={`${data.target.goalWeight} kg`} />
            <Row label="Water" value={`${data.target.waterGoalMl} ml/day`} />
          </Section>
        </div>
      </div>

      {/* PRIMARY ACTION */}
      <button
        onClick={onFinish}
        className="
          w-full rounded-xl py-3.5 text-sm font-semibold
          text-black
          bg-gradient-to-r from-white via-white to-white/90
          shadow-[0_10px_30px_rgba(255,255,255,0.08)]
          active:scale-[0.98]
          transition
        "
      >
        Begin journey
      </button>

      {/* SECONDARY */}
      <button
        onClick={onBack}
        className="
          w-full rounded-xl py-3 text-sm text-white/70
          border border-white/10 bg-white/5
          hover:bg-white/10
          transition
          active:scale-[0.98]
        "
      >
        Reforge build
      </button>

      <p className="text-[11px] text-white/30 pt-1">
        You can change your build anytime
      </p>
    </div>
  );
}

/* ---------------- UI ---------------- */

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 relative">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/50">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm py-1">
      <span className="text-white/40">{label}</span>
      <span className="text-white font-medium tracking-tight">{value}</span>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

function activityLabel(activity: string | null) {
  switch (activity) {
    case "low":
      return "Low activity";
    case "medium":
      return "Moderate activity";
    case "high":
      return "High activity";
    default:
      return "Unassigned";
  }
}
