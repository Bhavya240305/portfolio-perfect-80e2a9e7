"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { MotionWrapper } from "./motion-wrapper";
import { GlassCard } from "./glass-card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useIsMobile } from "@/hooks/use-media-query";

const steps = [
  {
    title: "Discover",
    description:
      "Understanding users, pain points, opportunities, and ecosystem dynamics.",
  },
  {
    title: "Define",
    description:
      "Structuring ambiguous problems into clear product opportunities.",
  },
  {
    title: "Design",
    description:
      "Crafting strategic solutions balancing user needs and business goals.",
  },
  {
    title: "Deliver",
    description:
      "Driving execution through prioritization, experimentation, and iteration.",
  },
];

export function HowIThink() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <Section>
      <MotionWrapper>
        <SectionHeading
          eyebrow="Framework"
          title="How I Think & Build"
          description="A structured approach to turning insights into impactful product decisions."
        />
      </MotionWrapper>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        variants={reducedMotion ? undefined : staggerContainer}
        initial={reducedMotion ? false : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-60px" }}
      >
        {steps.map((step) => (
          <motion.div
            key={step.title}
            variants={reducedMotion ? undefined : fadeUp}
            transition={{ duration: isMobile ? 0.4 : 0.55 }}
            className="h-full"
          >
            <GlassCard interactive className="flex h-full flex-col">
              <h3 className="font-serif text-heading-sm">{step.title}</h3>
              <p className="text-body mt-3 flex-1 text-muted-foreground sm:mt-4">
                {step.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
