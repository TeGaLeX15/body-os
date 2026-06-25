"use client";

import { useProfile } from "@/features/profile/model/useProfile";
import { ProfileSummary } from "@/features/profile/ui/ProfileSummary";
import { GoalCard } from "@/features/profile/ui/GoalCard";
import { ProfileForm } from "@/features/profile/ui/ProfileForm";

export default function ProfilePage() {
  const { profile, updateProfile } = useProfile();

  if (!profile) {
    return (
      <div className="p-4 text-sm text-white/60">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md space-y-4 p-4">
      
      {/* 📊 SUMMARY */}
      <ProfileSummary profile={profile} />

      {/* 🎯 GOAL */}
      <GoalCard
        label="Weight goal"
        value={profile.currentWeight}
        max={profile.goalWeight}
      />

      {/* ✏️ EDIT FORM */}
      <ProfileForm
        profile={profile}
        onSave={updateProfile}
      />
    </div>
  );
}