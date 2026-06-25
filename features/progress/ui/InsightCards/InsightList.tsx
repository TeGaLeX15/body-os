// features/progress/ui/InsightCards/InsightList.tsx
import type { Insight } from "@/features/progress/lib/buildInsights";
import InsightItem from "./InsightItem";

type Props = {
  insights: Insight[];
};

export default function InsightList({ insights }: Props) {
  return (
    <div className="space-y-2">
      {insights.map((i) => (
        <InsightItem key={i.id} insight={i} />
      ))}
    </div>
  );
}
