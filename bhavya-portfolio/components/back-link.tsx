import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackLink({
  href = "/projects",
  label = "All case studies",
  className,
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "link-underline mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium sm:mb-10",
        className
      )}
    >
      <ArrowLeft className="h-4 w-4 shrink-0 text-primary" aria-hidden />
      {label}
    </Link>
  );
}
