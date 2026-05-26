import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  align = "left",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "mb-5 md:mb-6 lg:mb-7",
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-eyebrow mb-3 sm:mb-4">{eyebrow}</p>
      ) : null}
      {title ? (
        <h2
          className={cn(
            "font-serif text-foreground",
            titleClassName ?? "text-heading",
            centered && "mx-auto"
          )}
        >
          {title}
        </h2>
      ) : null}
      {description && (
        <p
          className={cn(
            "text-body-lg mt-4 text-muted-foreground md:mt-5",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
