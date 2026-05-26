export function CaseStudySection({
  title,
  content,
}: {
  title: string;
  content: string | string[];
}) {
  return (
    <article className="w-full min-w-0 border-t border-border/[0.07] py-8 first:border-t-0 first:pt-0 md:py-10">
      <h2 className="font-serif text-heading-sm text-foreground sm:text-heading">
        {title}
      </h2>
      {Array.isArray(content) ? (
        <ul className="text-body mt-5 list-disc space-y-2.5 pl-5 text-muted-foreground marker:text-primary md:mt-6">
          {content.map((item, index) => (
            <li
              key={`${title}-${index}`}
              className="break-words leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-body mt-5 break-words text-muted-foreground md:mt-6">
          {content}
        </p>
      )}
    </article>
  );
}
