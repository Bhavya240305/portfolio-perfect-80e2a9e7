import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "./motion-wrapper";
import { GlassCard } from "./glass-card";

const skillGroups = [
  {
    title: "Tech & Tools",
    skills: [
      "Python",
      "SQL",
      "R",
      "SaaS",
      "Power BI",
      "Advanced Excel",
      "Powerpoint",
      "Figma",
      "Canva",
      "Cursor",
      "Claude",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Effective Communication",
      "Leadership",
      "Teamwork",
      "Adaptability",
      "Time Management",
      "Problem Solving",
      "Decision Making",
      
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <MotionWrapper>
        <SectionHeading
          eyebrow="Skills"
        />
      </MotionWrapper>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-2">
        {skillGroups.map((group, i) => (
          <MotionWrapper key={group.title} delay={i * 0.06}>
            <GlassCard interactive className="h-full">
              <h3 className="font-serif text-heading-sm">{group.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2 md:mt-5">
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
