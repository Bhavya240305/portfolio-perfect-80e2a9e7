"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, getMotionProps } from "@/lib/motion";
import { useIsMobile } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export function MotionWrapper({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const motionProps = getMotionProps(!!reducedMotion, isMobile);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      {...motionProps}
      transition={{
        ...motionProps.transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
