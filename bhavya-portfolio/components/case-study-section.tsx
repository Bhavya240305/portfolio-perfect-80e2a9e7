import { Container } from "./container";

export function CaseStudySection({
  title,
  content,
}: {
  title: string;
  content: string | string[];
}) {
  return (
    <section className="py-8 sm:py-10 md:py-12">
      <Container>
        <article className="prose-width max-w-3xl border-l-2 border-primary/30 pl-5 sm:pl-6 md:max-w-4xl">
          <h2 className="font-serif text-heading-sm text-foreground sm:text-heading">
            {title}
          </h2>
          {Array.isArray(content) ? (
            <ul className="text-body mt-3 list-disc space-y-2 pl-5 text-muted-foreground marker:text-primary sm:mt-5">
              {content.map((item, index) => (
                <li key={`${title}-${index}`} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-body mt-3 text-muted-foreground sm:mt-5">
              {content}
            </p>
          )}
        </article>
      </Container>
    </section>
  );
}
