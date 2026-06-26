// features/exercise/ui/ExercisePlan.tsx
import type { WeekPlan } from "../model/exercise.types";
import Link from "next/link";
import type { ExerciseType } from "../model/exercise.routes";

type Props = {
  plan: WeekPlan;
  type: ExerciseType;
};

function getTotals(plan: WeekPlan) {
  let totalSets = 0;
  let totalReps = 0;
  let trainingDays = 0;

  plan.days.forEach((day) => {
    if (day.type === "training") {
      totalSets += day.sets.length;
      totalReps += day.sets.reduce((a, b) => a + b, 0);
      trainingDays += 1;
    }
  });

  return { totalSets, totalReps, trainingDays };
}

export function ExercisePlan({ plan, type }: Props) {
  const { totalSets, totalReps, trainingDays } = getTotals(plan);

  // 👉 временно (потом заменишь на real logic: today / completed / last active)
  const todayIndex = 1;

  return (
    <div className="p-4 space-y-6">

      {/* ================= TOP HUD (GLASS SYSTEM) ================= */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur">
          <div className="text-[10px] text-white/40 tracking-widest">SETS</div>
          <div className="text-sm font-semibold mt-1">{totalSets}</div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur">
          <div className="text-[10px] text-white/40 tracking-widest">REPS</div>
          <div className="text-sm font-semibold mt-1">{totalReps}</div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur">
          <div className="text-[10px] text-white/40 tracking-widest">DAYS</div>
          <div className="text-sm font-semibold mt-1">
            {trainingDays}/{plan.days.length}
          </div>
        </div>
      </div>

      {/* ================= FLOW LIST ================= */}
      <div className="space-y-3">

        {plan.days.map((day) => {
          const isToday = day.dayIndex === todayIndex;
          const isTraining = day.type === "training";

          const total = isTraining
            ? day.sets.reduce((a, b) => a + b, 0)
            : 0;

          const max = isTraining ? Math.max(...day.sets) : 0;

          /* ================= TRAINING DAY ================= */
          if (isTraining) {
            return (
              <Link
                key={day.dayIndex}
                href={`/workout/exercises/${type}/session/${day.dayIndex}`}
                className="block"
              >
                <div
                  className={`
                    flex items-center gap-4
                    rounded-2xl p-4
                    border transition
                    ${isToday
                      ? "bg-violet-500/10 border-violet-400/30"
                      : "bg-white/5 border-white/10"
                    }
                  `}
                >

                  {/* LEFT INDICATOR */}
                  <div className="flex flex-col items-center w-8">
                    <div
                      className={`
                        w-2.5 h-2.5 rounded-full
                        ${isToday ? "bg-violet-400 animate-pulse" : "bg-white/30"}
                      `}
                    />
                    <div className="text-[10px] text-white/30 mt-1">
                      {day.dayIndex}
                    </div>
                  </div>

                  {/* MAIN */}
                  <div className="flex-1 min-w-0">

                    {/* HEADER */}
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-medium">
                          Day {day.dayIndex}
                        </div>
                        <div className="text-[11px] text-violet-300">
                          training session
                        </div>
                      </div>

                      <div className="text-xs text-white/40">
                        {total} reps
                      </div>
                    </div>

                    {/* 🔥 SET CIRCLES (WITH REPS INSIDE) */}
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {day.sets.map((set, i) => (
                        <div
                          key={i}
                          className="
                            w-8 h-8 rounded-full
                            flex items-center justify-center
                            text-[10px] font-semibold
                            border border-violet-400/20
                            bg-violet-500/10
                            backdrop-blur
                          "
                          style={{
                            opacity: 0.35 + set / max,
                          }}
                        >
                          {set}
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* RIGHT ACTION */}
                  <div className="flex flex-col items-end justify-between h-full">
                    <div className="text-xs text-white/30">
                      {total}
                    </div>
                    <div className="text-white/20 text-lg leading-none">
                      →
                    </div>
                  </div>

                </div>
              </Link>
            );
          }

          /* ================= REST DAY ================= */
          return (
            <div
              key={day.dayIndex}
              className="
                flex items-center gap-4
                rounded-2xl p-4
                bg-white/5 border border-white/10
                opacity-60
              "
            >

              {/* LEFT */}
              <div className="flex flex-col items-center w-8">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="text-[10px] text-white/30 mt-1">
                  {day.dayIndex}
                </div>
              </div>

              {/* MAIN */}
              <div className="flex-1 flex items-center gap-3">
                <div className="text-lg">☕</div>

                <div>
                  <div className="text-sm text-white/70">
                    Recovery Day
                  </div>
                  <div className="text-[11px] text-white/30">
                    rest • adapt • rebuild
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-[11px] text-white/20">
                off
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}