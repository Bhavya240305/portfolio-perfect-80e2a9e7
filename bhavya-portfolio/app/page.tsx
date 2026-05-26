import { Education } from "@/components/education";
import { ExperiencePreview } from "@/components/experience-preview";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ExperiencePreview />
      <Skills />
      <Education />
    </>
  );
}
