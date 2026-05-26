import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "./motion-wrapper";
import { GlassCard } from "./glass-card";

const skillGroups = [
  {
    title: "Product",
    skills: [
      "Product Strategy",
      "User Research",
      "Prioritization",
      "Roadmapping",
      "Experimentation",
      "Problem Framing",
    ],
  },
  {
    title: "Analytics",
    skills: [
      "SQL",
      "Python",
      "Power BI",
      "Excel",
      "Data Analysis",
      "Dashboarding",
    ],
  },
  {
    title: "Execution",
    skills: [
      "Stakeholder Management",
      "Leadership",
      "Communication",
      "Cross-functional Collaboration",
      "Growth Thinking",
      "Strategic Decision Making",
    ],
  },
];

export function Skills() {
  return (
    <Section>
      <MotionWrapper>
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Toolkit"
          description="A blend of product thinking, analytics, and execution capabilities."
        />
      </MotionWrapper>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <MotionWrapper key={group.title} delay={i * 0.06}>
            <GlassCard interactive className="h-full">
              <h3 className="font-serif text-heading-sm">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="chip">
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </MotionWrapper>
        ))}
      </div>
    </Section>
  );
}
