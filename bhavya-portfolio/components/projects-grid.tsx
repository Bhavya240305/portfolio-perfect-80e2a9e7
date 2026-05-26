import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          description={project.shortDescription}
          category={project.category}
          href={`/case-study/${project.slug}`}
        />
      ))}
    </div>
  );
}
