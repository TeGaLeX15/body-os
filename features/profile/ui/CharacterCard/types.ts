// features/profile/ui/CharacterCard/types.ts
import type { Profile } from "@/features/profile/model/profile.types";
import type { ProfileMetrics } from "@/features/profile/domain/profile.metrics";
import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

export interface CharacterCardProps {
  profile: Profile;
  metrics: ProfileMetrics;
  analytics: WorkoutAnalytics;
}
