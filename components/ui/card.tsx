"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ---------------- TYPES ---------------- */

type CardVariant =
  | "default"
  | "soft"
  | "glow"
  | "flat"
  | "stat"
  | "success"
  | "info"
  | "warning";

/* ---------------- CONTEXT ---------------- */

const CardVariantContext = React.createContext<CardVariant>("default");

/* ---------------- VARIANTS ---------------- */

const cardVariants = cva(
  "group/card flex flex-col rounded-xl overflow-hidden border text-card-foreground transition-all",
  {
    variants: {
      variant: {
        default: "bg-card border-border",

        soft: "bg-white/5 border-white/10 backdrop-blur-xl",

        glow:
          "bg-white/5 border-white/10 shadow-[0_0_35px_rgba(139,92,246,0.10)]",

        flat: "bg-transparent border-transparent",

        stat: "bg-white/5 border-white/10 backdrop-blur-sm",

        success:
          "bg-emerald-500/10 border-emerald-500/20 text-emerald-200",

        info:
          "bg-violet-500/10 border-violet-500/20 text-violet-200",

        warning:
          "bg-yellow-500/10 border-yellow-500/20 text-yellow-200",
      },

      size: {
        default: "p-4",
        sm: "p-3",
        lg: "p-6",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/* ---------------- CARD ---------------- */

function Card({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <CardVariantContext.Provider value={variant as CardVariant}>
      <div
        data-slot="card"
        data-variant={variant}
        data-size={size}
        className={cn(cardVariants({ variant, size }), className)}
        {...props}
      />
    </CardVariantContext.Provider>
  );
}

/* ---------------- FOOTER ---------------- */

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  const variant = React.useContext(CardVariantContext);

  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center border-t px-4 py-3",

        variant === "default" && "bg-muted/40 border-border",
        variant === "soft" && "bg-white/5 border-white/10",
        variant === "glow" && "bg-white/5 border-white/10",
        variant === "stat" && "bg-white/5 border-white/10",

        variant === "success" && "bg-emerald-500/5 border-emerald-500/10",
        variant === "info" && "bg-violet-500/5 border-violet-500/10",
        variant === "warning" && "bg-yellow-500/5 border-yellow-500/10",

        className
      )}
      {...props}
    />
  );
}

/* ---------------- EXPORT ---------------- */

export { Card, CardFooter };