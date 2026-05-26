"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { ProjectsFilter } from "./projects-filter";

export function ProjectsGrid() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <>
      <ProjectsFilter active={active} setActive={setActive} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            category={project.category}
            href={`/case-study/${project.slug}`}
          />
        ))}
      </div>
    </>
  );
}
