"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "./section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassCard } from "./glass-card";

const metrics = [
  { value: "4+", label: "Flagship Case Studies" },
  { value: "5+", label: "Leadership Initiatives" },
  { value: "IIT", label: "Roorkee" },
  { value: "PM", label: "Product × Strategy × Analytics" },
];

export function Metrics() {
  const reducedMotion = useReducedMotion();

  return (
    <Section>
      <motion.div
        className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        variants={reducedMotion ? undefined : staggerContainer}
        initial={reducedMotion ? false : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-60px" }}
      >
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            variants={reducedMotion ? undefined : fadeUp}
            className="h-full"
          >
            <GlassCard className="flex h-full min-h-[140px] flex-col items-center justify-center py-7 text-center sm:min-h-[160px] sm:py-9">
              <h3 className="font-serif text-4xl text-primary sm:text-5xl">
                {metric.value}
              </h3>
              <p className="mt-2 max-w-[12rem] text-[0.625rem] font-medium uppercase leading-snug tracking-[0.14em] text-muted-foreground sm:mt-3 sm:text-xs sm:tracking-[0.18em]">
                {metric.label}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
