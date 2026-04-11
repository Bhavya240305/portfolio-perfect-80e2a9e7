import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <p className="font-heading text-2xl text-foreground">Project not found.</p>
        <Link
          to="/#projects"
          className="font-label text-xs tracking-wider text-primary underline underline-offset-4"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-background">

      {/* ── Top Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border h-16 flex items-center px-6 md:px-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-label text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          BACK
        </button>

        <span className="mx-4 text-border">|</span>

        <nav className="flex items-center gap-2 font-label text-xs tracking-wider text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">HOME</Link>
          <span>/</span>
          <Link to="/#projects" className="hover:text-foreground transition-colors">PROJECTS</Link>
          <span>/</span>
          <span className="text-foreground">{project.title.toUpperCase()}</span>
        </nav>
      </header>

      {/* ── Hero Banner ── */}
      <div className="pt-16">
        {project.coverImage ? (
          <div className="w-full h-64 md:h-80 overflow-hidden bg-secondary">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-48 md:h-64 bg-secondary flex flex-col items-center justify-center gap-3 px-6">
            <div className="text-center">
              <div className="w-3 h-3 bg-primary mx-auto mb-4" />
              <p className="font-label text-xs tracking-[0.3em] text-muted-foreground">PROJECT</p>
            </div>
            <p className="font-body text-xs text-muted-foreground text-center max-w-md">
              Add a hero image: import a file from{" "}
              <code className="text-foreground bg-background/80 px-1 py-0.5 text-[11px]">src/assets</code>, then set{" "}
              <code className="text-foreground bg-background/80 px-1 py-0.5 text-[11px]">coverImage</code> in{" "}
              <code className="text-foreground bg-background/80 px-1 py-0.5 text-[11px]">src/data/projects.ts</code>{" "}
              (see file header).{" "}
              <a
                href="https://vitejs.dev/guide/assets.html#importing-asset-as-url"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-90"
              >
                Vite: import asset as URL
              </a>
            </p>
          </div>
        )}
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={`${project.id}-${tag}`}
                  className="font-label text-[10px] tracking-wider text-foreground bg-secondary px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-label text-xs tracking-wider hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={13} />
                VISIT FILE
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-foreground text-foreground font-label text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                <Github size={13} />
                GITHUB
              </a>
            )}
          </div>
        </div>

        <div className="w-full h-px bg-border mb-10" />

        <section className="mb-12">
          <h2 className="font-label text-xs tracking-[0.25em] text-primary mb-4">OVERVIEW</h2>
          <p className="font-body text-base text-foreground leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </section>

        <div className="w-full h-px bg-border mb-10" />

        <div className="flex justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="group flex flex-col gap-1 max-w-[45%]"
            >
              <span className="font-label text-[10px] tracking-wider text-muted-foreground flex items-center gap-1">
                <ArrowLeft size={11} /> PREVIOUS
              </span>
              <span className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="group flex flex-col gap-1 items-end max-w-[45%] text-right"
            >
              <span className="font-label text-[10px] tracking-wider text-muted-foreground flex items-center gap-1">
                NEXT <ArrowLeft size={11} className="rotate-180" />
              </span>
              <span className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {nextProject.title}
              </span>
            </Link>
          ) : <div />}
        </div>

      </main>

      <footer className="border-t border-border py-6 px-6 md:px-12 mt-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bhavya Dixit
          </p>
          <Link
            to="/#projects"
            className="font-label text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            ← ALL PROJECTS
          </Link>
        </div>
      </footer>

    </div>
  );
};

export default ProjectDetail;
