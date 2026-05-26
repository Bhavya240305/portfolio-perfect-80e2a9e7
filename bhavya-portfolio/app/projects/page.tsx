import { Section } from "@/components/section";
import { ProjectsGrid } from "@/components/projects-grid";
import { SectionHeading } from "@/components/section-heading";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function ProjectsPage() {
  return (
    <Section first divider={false} className="pt-4 sm:pt-6">
      <MotionWrapper>
        <SectionHeading
          eyebrow="Projects"
          title="Case studies built for product interviews"
          description="Problem framing, approach, solution, and impact—documented the way PM teams evaluate thinking."
        />
      </MotionWrapper>

      <ProjectsGrid />
    </Section>
  );
}
