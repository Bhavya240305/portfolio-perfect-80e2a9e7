import { notFound } from "next/navigation";
import { projects, type ProjectContent } from "@/lib/projects";
import { CaseStudyHero } from "@/components/case-study-hero";
import { CaseStudySection } from "@/components/case-study-section";
import { PDFPreviewCard } from "@/components/pdf-preview-card";
import { Container } from "@/components/container";
import { MotionWrapper } from "@/components/motion-wrapper";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const sections: { title: string; content: ProjectContent }[] = [
    { title: "Problem Context", content: project.problem },
    { title: "Approach", content: project.insights },
    { title: "Solution", content: project.strategy },
    { title: "Impact", content: project.solution },
    {
      title:
        project.slug === "sql-inventory" ? "Live Dashboard" : "Key Learnings",
      content: project.learnings,
    },
  ];

  return (
    <>
      <CaseStudyHero
        title={project.title}
        description={project.description}
        role={project.role}
        timeline={project.timeline}
        category={project.category}
      />

      <section className="section-padding pt-8 md:pt-10 lg:pt-12">
        <Container>
          <div className="content-column min-w-0">
            {sections.map((section) => (
              <CaseStudySection
                key={section.title}
                title={section.title}
                content={section.content}
              />
            ))}

            <MotionWrapper>
              <div className="mt-8 w-full min-w-0 border-t border-border/[0.07] pt-8 md:mt-10 md:pt-10">
                <PDFPreviewCard
                  title={project.title}
                  coverImage={project.coverImage}
                  pdf={project.pdf}
                  ctaLabel={
                    project.slug === "sql-inventory"
                      ? "View Live Dashboard ↗"
                      : "View Full PDF ↗"
                  }
                />
              </div>
            </MotionWrapper>
          </div>
        </Container>
      </section>
    </>
  );
}
