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
    <section className="section-padding border-b border-border/[0.07]">
      <Container>
        <div className="content-column min-w-0">
          <BackLink />
          <p className="text-eyebrow mb-4 sm:mb-5">{category}</p>

          <h1 className="w-full min-w-0 break-words font-serif text-heading leading-tight text-foreground sm:text-display xl:text-display-lg xl:leading-[1.05]">
            {title}
          </h1>

          <p className="text-body-lg mt-5 w-full text-muted-foreground md:mt-6">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
            <Badge variant="outline">{role}</Badge>
            <Badge variant="outline">{timeline}</Badge>
          </div>
        </div>
      </Container>
    </section>
  );
}
