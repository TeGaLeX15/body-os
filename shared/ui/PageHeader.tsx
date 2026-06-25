// shared/ui/PageHeader.tsx
"use client";

import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string;
  description?: string;
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="space-y-1 text-center"
    >
      <h1 className="text-2xl font-bold tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}