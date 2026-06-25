// features/progress/ui/InsightCards/getInsightIcon.ts
import { Icon } from "@/shared/ui/Icon";

export function getInsightIcon(id: string) {
  if (id.includes("push")) return <Icon name="pushUp" size={14} />;
  if (id.includes("pull")) return <Icon name="pullUp" size={14} />;
  if (id.includes("squat")) return <Icon name="squat" size={14} />;
  return <Icon name="dips" size={14} />;
}
