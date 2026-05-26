import Image from "next/image";

export function CaseStudyCoverPreview({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-border/10 bg-gradient-to-b from-primary/[0.06] to-muted/10 sm:rounded-3xl">
      <div className="flex w-full items-center justify-center p-4 sm:p-6 md:p-8">
        <Image
          src={src}
          alt={`${title} cover page`}
          width={1200}
          height={900}
          className="h-auto max-h-[min(56vw,14rem)] w-full max-w-full object-contain sm:max-h-[min(44vw,16rem)] md:max-h-[18rem] lg:max-h-[20rem]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
        />
      </div>
    </div>
  );
}
