import ProgressChart from "@/features/progress/ui/ProgressChart";
import StatsOverview from "@/features/progress/ui/StatsOverview";

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Progress</h1>

      <StatsOverview />

      <ProgressChart />
    </div>
  );
}