// features/profile-onboarding/ui/OnboardingFlow.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useOnboarding } from "../model/useOnboarding";

import { steps } from "../lib/steps";

import { GoalStep } from "./steps/GoalStep";
import { BodyStep } from "./steps/BodyStep";
import { ActivityStep } from "./steps/ActivityStep";
import { TargetStep } from "./steps/TargetStep";
import { FinishStep } from "./steps/FinishStep";

import { ProgressIndicator } from "@/shared/ui/ProgressIndicator";

export function OnboardingFlow() {
    const {
        step,
        data,
        updateGoal,
        updateBody,
        updateActivity,
        updateTarget,
        next,
        back,
        finish,
    } = useOnboarding();

    const currentStep = steps[step];
    const progress = ((step + 1) / steps.length) * 100;

    function renderStep() {
        switch (currentStep) {
            case "goal":
                return (
                    <GoalStep
                        onSelect={(goal) => {
                            updateGoal(goal);
                            next();
                        }}
                    />
                );

            case "body":
                return (
                    <BodyStep
                        data={data.body}
                        onNext={(body) => {
                            updateBody(body);
                            next();
                        }}
                        onBack={back}
                    />
                );

            case "activity":
                return (
                    <ActivityStep
                        value={data.activity}
                        onSelect={(activity) => {
                            updateActivity(activity);
                            next();
                        }}
                        onBack={back}
                    />
                );

            case "target":
                return (
                    <TargetStep
                        data={{
                            ...data.target,
                            activity: data.activity,
                        }}
                        onNext={(target) => {
                            updateTarget(target);
                            next();
                        }}
                        onBack={back}
                    />
                );

            case "finish":
                return (
                    <FinishStep
                        data={data}
                        onFinish={() => {
                            finish();
                            window.location.href = "/";
                        }}
                        onBack={back}
                    />
                );
        }
    }

    return (
        <div className="h-dvh w-full flex justify-center">
            <div className="w-full max-w-sm px-5 flex flex-col">
                <ProgressIndicator
                    value={progress}
                    step={step}
                    totalSteps={steps.length}
                />

                <div className="flex-1 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="w-full"
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}