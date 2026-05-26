import { Container } from "./container";
import { Badge } from "@/components/ui/badge";
import { BackLink } from "./back-link";

export function CaseStudyHero({
  title,
  description,
  role,
  timeline,
  category,
}: {
  title: string;
  description: string;
  role: string;
  timeline: string;
  category: string;
}) {
  return (
    <section className="section-padding">
      <Container>
        <BackLink />
        <p className="text-eyebrow mb-4 sm:mb-5">{category}</p>

        <h1 className="max-w-4xl font-serif text-display-lg text-foreground">
          {title}
        </h1>

        <p className="text-body-lg prose-width mt-6 text-muted-foreground md:mt-8">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
          <Badge variant="outline">{role}</Badge>
          <Badge variant="outline">{timeline}</Badge>
        </div>
      </Container>
    </section>
  );
}
