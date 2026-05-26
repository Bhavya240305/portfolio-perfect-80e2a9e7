import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { MotionWrapper } from "@/components/motion-wrapper";
import { GlassCard } from "@/components/glass-card";

const values = [
  {
    title: "User-Centric Thinking",
    description:
      "I believe strong products begin with deeply understanding user needs, behaviors, and friction points.",
  },
  {
    title: "Strategic Execution",
    description:
      "I enjoy translating ambiguity into structured decisions, experiments, and measurable execution.",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Analytics helps validate assumptions, uncover patterns, and sharpen product direction.",
  },
];

export default function AboutPage() {
  return (
    <Section first divider={false} className="pt-4 sm:pt-6">
      <MotionWrapper>
        <SectionHeading
          eyebrow="About"
          title="Building Products at the Intersection of Strategy, Users, and Data"
          description="An IIT Roorkee undergraduate passionate about product management, growth strategy, and solving meaningful user problems."
        />
      </MotionWrapper>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <MotionWrapper>
          <div className="space-y-6 sm:space-y-7">
            <p className="text-body-lg text-muted-foreground">
              My journey has been shaped by leadership, strategic initiatives,
              and a deep interest in understanding how products create value.
              Through student leadership, case studies, analytics projects, and
              growth explorations, I’ve developed a product mindset grounded in
              curiosity, execution, and structured problem solving.
            </p>

            <p className="text-body-lg text-muted-foreground">
              From product redesigns to growth strategy and analytics-led
              optimization, I enjoy navigating ambiguity and transforming ideas
              into actionable outcomes.
            </p>
          </div>
        </MotionWrapper>

        <div className="flex flex-col gap-4 sm:gap-5">
          {values.map((value, i) => (
            <MotionWrapper key={value.title} delay={i * 0.06}>
              <GlassCard interactive>
                <h3 className="font-serif text-heading-sm">{value.title}</h3>
                <p className="text-body mt-3 text-muted-foreground">
                  {value.description}
                </p>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </Section>
  );
}
