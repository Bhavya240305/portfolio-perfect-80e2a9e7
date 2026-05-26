import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { MotionWrapper } from "@/components/motion-wrapper";
import { GlassCard } from "@/components/glass-card";

const values = [
  {
    title: "User-first",
    description: "Start with needs, behaviors, and friction—not features.",
  },
  {
    title: "Strategic clarity",
    description: "Turn ambiguity into priorities, experiments, and bets.",
  },
  {
    title: "Evidence-led",
    description: "Use data to validate assumptions and sharpen direction.",
  },
];

export default function AboutPage() {
  return (
    <Section first divider={false} className="pt-2 sm:pt-4">
      <MotionWrapper>
        <SectionHeading
          eyebrow="About"
          title="Product thinking rooted in strategy and execution"
          description="IIT Roorkee · Chemical Sciences · aspiring product manager focused on meaningful user problems."
        />
      </MotionWrapper>

      <MotionWrapper delay={0.05}>
        <p className="text-body-lg prose-width text-muted-foreground">
          I work at the intersection of user behavior, business strategy, and
          shipping decisions—through product case studies, growth initiatives, and
          analytics projects. I enjoy breaking down messy problems into clear
          narratives, trade-offs, and measurable outcomes.
        </p>
      </MotionWrapper>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:mt-10">
        {values.map((value, i) => (
          <MotionWrapper key={value.title} delay={0.08 + i * 0.05}>
            <GlassCard interactive className="h-full !p-5 sm:!p-6">
              <h3 className="font-serif text-base font-medium text-foreground sm:text-lg">
                {value.title}
              </h3>
              <p className="text-body mt-2 text-muted-foreground">
                {value.description}
              </p>
            </GlassCard>
          </MotionWrapper>
        ))}
      </div>
    </Section>
  );
}
