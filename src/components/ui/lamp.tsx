"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampEffect = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[360px] overflow-hidden z-0",
        className
      )}
      aria-hidden="true"
    >
      {/* Soft pink falloff from top → bottom (lamp spill) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-pink-main/35 via-pink-light/15 to-transparent" />

      <div className="relative flex h-full w-full scale-y-125 items-center justify-center isolate">
        {/* Left beam */}
        <motion.div
          initial={{ opacity: 0.35, width: "16rem" }}
          whileInView={{ opacity: 0.9, width: "36rem" }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto right-1/2 h-72 overflow-visible w-[36rem]",
            "mix-blend-screen",
            "bg-gradient-conic from-pink-main via-pink-main/20 to-transparent",
            "[--conic-position:from_70deg_at_center_top]",
            "[mask-image:linear-gradient(to_bottom,white,transparent_70%)]"
          )}
        />

        {/* Right beam */}
        <motion.div
          initial={{ opacity: 0.35, width: "16rem" }}
          whileInView={{ opacity: 0.9, width: "36rem" }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto left-1/2 h-72 w-[36rem]",
            "mix-blend-screen",
            "bg-gradient-conic from-transparent via-pink-main/20 to-pink-main",
            "[--conic-position:from_290deg_at_center_top]",
            "[mask-image:linear-gradient(to_bottom,white,transparent_70%)]"
          )}
        />

        {/* Glow core */}
        <div className="absolute inset-auto z-30 h-44 w-[34rem] -translate-y-1/2 rounded-full bg-pink-main/55 blur-3xl mix-blend-screen" />
        <div className="absolute inset-auto z-20 h-56 w-[44rem] -translate-y-[6.5rem] rounded-full bg-pink-light/70 blur-3xl mix-blend-screen" />
        <div className="absolute inset-auto z-25 h-24 w-[22rem] -translate-y-[8.5rem] rounded-full bg-white/20 blur-2xl mix-blend-screen" />

        {/* Bright filament line */}
        <motion.div
          initial={{ width: "14rem", opacity: 0.6 }}
          whileInView={{ width: "36rem", opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-40 h-[3px] w-[36rem] -translate-y-[7.25rem] bg-gradient-to-r from-transparent via-pink-main to-transparent mix-blend-screen"
        />

        {/* Ambient blur */}
        <div className="absolute top-1/2 z-10 h-56 w-full bg-transparent opacity-50 backdrop-blur-md" />
      </div>
    </div>
  );
};

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        [
          "relative flex w-full flex-col items-center justify-center overflow-hidden",
          // Header-sized by default (not full screen).
          "min-h-[320px] md:min-h-[420px]",
          // Keep page background; render only lighting.
          "bg-transparent",
          "z-0",
        ].join(" "),
        className
      )}
    >
      <LampEffect className="inset-0 h-full" />

      <div className="relative z-50 flex -translate-y-44 md:-translate-y-52 flex-col items-center px-5 pb-10">
        {children}
      </div>
    </div>
  );
};

