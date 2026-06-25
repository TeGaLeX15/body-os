// features/progress/domain/progressSummary.ts
export function getProgressSummaryText(total: number) {
  if (total === 0) return "No training data yet";
  return `${total} training sessions tracked`;
}
