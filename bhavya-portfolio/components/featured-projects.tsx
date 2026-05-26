import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";
import { Section } from "./section";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";
import { MotionWrapper } from "./motion-wrapper";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  return (
    <Section>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:gap-6">
        <MotionWrapper className="min-w-0 flex-1">
          <SectionHeading
            eyebrow="Projects"
            className="mb-0"
          />
        </MotionWrapper>

        <MotionWrapper delay={0.05} className="shrink-0">
          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
            <Link href="/projects">
              All projects
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </MotionWrapper>
      </div>

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
