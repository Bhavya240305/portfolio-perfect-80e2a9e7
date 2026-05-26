import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { GlassCard } from "./glass-card";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "./motion-wrapper";

const educationData = [
  {
    institution: "Indian Institute of Technology, Roorkee",
    degree: "Graduation | Chemical Sciences",
    year: "2023 – Present",
    score: "CGPA: 7.78",
  },
  {
    institution: "Aklank Public School, Kota",
    degree: "Senior Secondary | PCM (CBSE)",
    year: "2022 – 2023",
    score: "92.2%",
  },
  {
    institution: "Global Public School, Kota",
    degree: "Secondary | CBSE",
    year: "2020 – 2021",
    score: "95.5%",
  },
];

export function Education() {
  return (
    <Section>
      <MotionWrapper>
        <SectionHeading eyebrow="Education" />
      </MotionWrapper>

      <div className="flex flex-col gap-5 md:gap-6">
        {educationData.map((edu, i) => (
          <MotionWrapper key={edu.institution} delay={i * 0.06}>
            <GlassCard interactive>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                <div className="shrink-0 lg:w-[min(100%,28rem)]">
                  <h3 className="font-serif text-heading-sm text-foreground">
                    {edu.institution}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary sm:text-base">
                    {edu.degree}
                  </p>
                  <Badge variant="chip" className="mt-4 sm:mt-5">
                    {edu.score}
                  </Badge>
                </div>

                <p className="text-body shrink-0 text-muted-foreground lg:pt-1 lg:text-right">
                  {edu.year}
                </p>
              </div>
            </GlassCard>
          </MotionWrapper>
        ))}
      </div>
    </Section>
  );
}
