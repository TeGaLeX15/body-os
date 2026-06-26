export const API_VERSION = "/api/v1";

export const API = {
  profile: `${API_VERSION}/profile`,
  workouts: `${API_VERSION}/workouts`,
  hydration: `${API_VERSION}/hydration`,
  exercises: `${API_VERSION}/exercises`,
} as const;