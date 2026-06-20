"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ---------------- CONTEXT ---------------- */

type CardVariant = "default" | "soft" | "glow" | "flat" | "stat";

const CardVariantContext = React.createContext<CardVariant>("default");

/* ---------------- VARIANTS ---------------- */

const cardVariants = cva(
  "group/card flex flex-col rounded-xl border text-card-foreground transition-colors",
  {
    variants: {
      variant: {
        default: "bg-card border-border",
        soft: "bg-white/5 border-white/10 backdrop-blur-xl",
        glow: "bg-card border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.08)]",
        flat: "bg-transparent border-transparent",
        stat: "bg-white/5 border-white/10 backdrop-blur-sm",
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
  },
);

/* ---------------- CARD ROOT ---------------- */

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

/* ---------------- HEADER ---------------- */

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid gap-1 px-(--card-spacing) pt-(--card-spacing)",
        className,
      )}
      {...props}
    />
  );
}

/* ---------------- TITLE ---------------- */

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-[18px] font-medium leading-tight", className)}
      {...props}
    />
  );
}

/* ---------------- DESCRIPTION ---------------- */

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

/* ---------------- CONTENT ---------------- */

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing) py-2", className)}
      {...props}
    />
  );
}

/* ---------------- FOOTER (theme-aware) ---------------- */

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  const variant = React.useContext(CardVariantContext);

  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t px-(--card-spacing) py-3",

        variant === "default" && "bg-muted/40 border-border",
        variant === "soft" && "bg-white/5 border-white/10",
        variant === "glow" && "bg-white/5 border-white/10",
        variant === "flat" && "bg-transparent border-transparent",

        className,
      )}
      {...props}
    />
  );
}

/* ---------------- EXPORT ---------------- */

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
