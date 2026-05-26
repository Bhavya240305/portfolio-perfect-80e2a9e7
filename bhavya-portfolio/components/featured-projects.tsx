import { featuredProjects } from "@/lib/projects";
import { Section } from "./section";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";
import { MotionWrapper } from "./motion-wrapper";

export function FeaturedProjects() {
  return (
    <Section id="projects">
      <MotionWrapper>
        <SectionHeading eyebrow="Projects" />
      </MotionWrapper>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-7 md:gap-6">
        {featuredProjects.map((project, i) => (
          <MotionWrapper key={project.slug} delay={i * 0.05}>
            <ProjectCard
              title={project.title}
              description={project.shortDescription}
              category={project.category}
              href={`/case-study/${project.slug}`}
            />
          </MotionWrapper>
        ))}
      </div>
    </Section>
  );
}
