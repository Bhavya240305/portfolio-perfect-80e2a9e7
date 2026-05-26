import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { CaseStudyHero } from "@/components/case-study-hero";
import { CaseStudySection } from "@/components/case-study-section";
import { PDFPreviewCard } from "@/components/pdf-preview-card";
import { Section } from "@/components/section";
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

  const sections = [
    { title: "Problem Context", content: project.problem },
    { title: "User & Market Insights", content: project.insights },
    { title: "Strategic Thinking", content: project.strategy },
    { title: "Solution Approach", content: project.solution },
    { title: "Key Learnings", content: project.learnings },
  ] as const;

  return (
    <>
      <CaseStudyHero
        title={project.title}
        description={project.description}
        role={project.role}
        timeline={project.timeline}
        category={project.category}
      />

      {sections.map((section) => (
        <CaseStudySection
          key={section.title}
          title={section.title}
          content={section.content}
        />
      ))}

      <Section divider className="pt-0">
        <MotionWrapper>
          <PDFPreviewCard title={project.title} pdf={project.pdf} />
        </MotionWrapper>
      </Section>
    </>
  );
}
