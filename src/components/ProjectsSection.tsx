import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.3em] text-muted-foreground mb-3">PORTFOLIO</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">My Projects</h2>
          <div className="w-12 h-0.5 bg-primary mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-border p-8 hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              {/* Cover image (optional) */}
              {project.coverImage && (
                <div className="w-full h-40 mb-6 overflow-hidden bg-secondary">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Meta description — short tagline shown on landing */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                {project.tagline}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.id}-${tag}`}
                    className="font-label text-[10px] tracking-wider text-foreground bg-secondary px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer row: external links + View Details */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex gap-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                    >
                      VISIT FILE
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                    >
                      GitHub
                    </a>
                  )}
                </div>

                {/* View Details → navigates to /projects/:id */}
                <Link
                  to={`/projects/${project.id}`}
                  className="flex items-center gap-2 font-label text-xs tracking-wider text-foreground hover:text-primary transition-colors group/link"
                >
                  DETAILS
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
