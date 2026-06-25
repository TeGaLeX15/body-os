// features/profile-onboarding/ui/steps/GoalStep.tsx
type Goal = "lose" | "gain" | "maintain";

type Props = {
  value?: Goal | null;
  onSelect: (v: Goal) => void;
};

const goals: Array<{
  id: Goal;
  title: string;
  desc: string;
  icon: string;
}> = [
  {
    id: "lose",
    title: "Lose weight",
    desc: "Burn fat and get lean",
    icon: "🔥",
  },
  {
    id: "gain",
    title: "Build muscle",
    desc: "Increase strength & mass",
    icon: "💪",
  },
  {
    id: "maintain",
    title: "Stay fit",
    desc: "Maintain your current shape",
    icon: "⚖️",
  },
];

export function GoalStep({ value, onSelect }: Props) {
  const selected = value;

  return (
    <div className="w-full flex flex-col space-y-6">

      {/* HEADER */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-semibold text-white">
          What’s your goal?
        </h1>

        <p className="text-sm text-white/40">
          Choose your focus for personalized plan
        </p>
      </div>

      {/* OPTIONS */}
      <div className="space-y-3">
        {goals.map((g) => {
          const isActive = selected === g.id;

          return (
            <button
              key={g.id}
              onClick={() => onSelect(g.id)}
              className={`
                w-full flex items-center gap-3
                rounded-xl px-4 py-4
                border transition
                active:scale-[0.99]

                ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                }
              `}
            >

              {/* ICON */}
              <div
                className={`
                  w-10 h-10 flex items-center justify-center
                  rounded-lg text-lg
                  ${
                    isActive
                      ? "bg-black/10"
                      : "bg-white/5"
                  }
                `}
              >
                {g.icon}
              </div>

              {/* TEXT */}
              <div className="flex-1 text-left">
                <div className="text-sm font-medium">
                  {g.title}
                </div>

                <div
                  className={`
                    text-xs mt-0.5
                    ${isActive ? "text-black/60" : "text-white/40"}
                  `}
                >
                  {g.desc}
                </div>
              </div>

              {/* CHECK */}
              <div className="text-xs opacity-60">
                {isActive ? "✓" : ""}
              </div>

              {/* ARROW */}
              <div
                className={`
                    transition
                    ${isActive ? "text-black/40" : "text-white/20"}
                  `}
              >
                →
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}