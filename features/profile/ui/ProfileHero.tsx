// features/profile/ui/ProfileHero.tsx
"use client";

import { User, Flame, Droplets, TrendingUp, Trophy } from "lucide-react";

type Props = {
  level: number;
  xp: number;
  nextLevelXp: number;

  bodyScore: number;

  bmr: number;
  bmi: number;

  water: number;

  goalProgress: number;
};

export function ProfileHero({
  level,
  xp,
  nextLevelXp,
  bodyScore,
  bmr,
  bmi,
  water,
  goalProgress,
}: Props) {
  const xpPercent = Math.min(100, (xp / nextLevelXp) * 100);

  const bodyColor =
    bodyScore >= 80
      ? "from-emerald-500 to-green-400"
      : bodyScore >= 60
        ? "from-violet-500 to-fuchsia-500"
        : bodyScore >= 40
          ? "from-orange-500 to-amber-400"
          : "from-red-500 to-rose-500";

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5">
      {/* HEADER */}

      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
          <User size={32} />
        </div>

        <div className="flex-1">
          <h1 className="text-xl font-bold">Body Athlete</h1>

          <p className="text-sm text-white/50">Adaptive Training System</p>

          <div className="mt-3">
            <div className="flex justify-between text-xs text-white/50">
              <span>Level {level}</span>

              <span>
                {xp}/{nextLevelXp} XP
              </span>
            </div>

            <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-violet-500 transition-all"
                style={{
                  width: `${xpPercent}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* BODY SCORE */}

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40">
              Body Score
            </div>

            <div className="mt-1 text-4xl font-bold">{bodyScore}</div>
          </div>

          <div className="rounded-2xl bg-white/5 p-3">
            <Trophy size={28} />
          </div>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${bodyColor}`}
            style={{
              width: `${bodyScore}%`,
            }}
          />
        </div>
      </div>

      {/* QUICK STATS */}

      <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
        <Stat icon={<Flame size={16} />} label="BMR" value={`${bmr} kcal`} />

        <Stat
          icon={<TrendingUp size={16} />}
          label="Goal"
          value={`${goalProgress}%`}
        />

        <Stat
          icon={<Droplets size={16} />}
          label="Water"
          value={`${water} L`}
        />

        <Stat icon={"⚖️"} label="BMI" value={bmi.toFixed(1)} />
      </div>
    </section>
  );
}

type StatProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function Stat({ icon, label, value }: StatProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
      <div className="flex items-center gap-2 text-sm text-white/60">
        {icon}
        {label}
      </div>

      <div className="font-semibold">{value}</div>
    </div>
  );
}
