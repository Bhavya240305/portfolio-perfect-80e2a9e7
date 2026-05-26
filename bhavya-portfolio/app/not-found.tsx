import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center section-padding">
      <Container className="text-center">
        <p className="text-eyebrow mb-4">404</p>
        <h1 className="font-serif text-display text-foreground">Page not found</h1>
        <p className="text-body-lg mx-auto mt-5 max-w-md text-muted-foreground">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </Container>
    </section>
  );
}
