import { Section } from "@/components/section";
import { ProjectsGrid } from "@/components/projects-grid";
import { SectionHeading } from "@/components/section-heading";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function ProjectsPage() {
  return (
    <Section first divider={false} className="pt-4 sm:pt-6">
      <MotionWrapper>
        <SectionHeading title="PROJECTS" />
      </MotionWrapper>

      <ProjectsGrid />
    </Section>
  );
}
