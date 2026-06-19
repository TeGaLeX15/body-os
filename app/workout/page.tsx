import WorkoutForm from "@/features/workout/ui/WorkoutForm";
import WorkoutList from "@/features/workout/ui/WorkoutList";

export default function WorkoutPage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Workout Log</h1>

      <div className="mt-6">
        <WorkoutForm />
        <WorkoutList />
      </div>
    </div>
  );
}
