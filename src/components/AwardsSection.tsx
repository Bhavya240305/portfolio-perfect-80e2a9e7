import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-label text-xs tracking-[0.3em] text-muted-foreground mb-3">ACHIEVEMENTS</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Awards and Certifications
          </h2>
          <div className="w-12 h-0.5 bg-primary mt-6" />
        </div>

        <ul className="divide-y divide-border border-t border-border">
          {certifications.map((item) => (
            <li
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5"
            >
              <span className="font-heading text-base font-semibold text-foreground">
                {item.title}
              </span>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label text-xs tracking-wider text-foreground hover:text-primary transition-colors sm:flex-shrink-0"
                >
                  View
                  <ExternalLink size={14} strokeWidth={1.5} />
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AwardsSection;
