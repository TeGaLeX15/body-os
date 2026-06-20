import type { Insight } from "./insightEngine";

export type InsightGroupType =
  | "body"
  | "performance"
  | "consistency";

export type InsightGroup = {
  id: InsightGroupType;
  title: string;
  items: Insight[];
};

export function groupInsights(insights: Insight[]): InsightGroup[] {
  const body: Insight[] = [];
  const performance: Insight[] = [];
  const consistency: Insight[] = [];

  for (const i of insights) {
    if (
      i.id.includes("push") ||
      i.id.includes("pull") ||
      i.id.includes("balanced")
    ) {
      body.push(i);
      continue;
    }

    if (i.id.includes("volume")) {
      performance.push(i);
      continue;
    }

    if (i.id.includes("streak")) {
      consistency.push(i);
      continue;
    }

    consistency.push(i);
  }

  const result = [
    {
      id: "body",
      title: "Body balance",
      items: body,
    },
    {
      id: "performance",
      title: "Performance",
      items: performance,
    },
    {
      id: "consistency",
      title: "Consistency",
      items: consistency,
    },
  ] satisfies InsightGroup[];

  return result;
}