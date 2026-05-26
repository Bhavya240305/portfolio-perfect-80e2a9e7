import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow: string;
  title?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "mb-8 sm:mb-10 md:mb-14",
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      <p className="text-eyebrow mb-3 sm:mb-4">{eyebrow}</p>
      {title ? (
        <h2
          className={cn(
            "font-serif text-heading text-foreground",
            centered && "mx-auto"
          )}
        >
          {title}
        </h2>
      ) : null}
      {description && (
        <p
          className={cn(
            "text-body-lg mt-4 text-muted-foreground sm:mt-5",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
