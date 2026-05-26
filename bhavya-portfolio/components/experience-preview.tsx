import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { MotionWrapper } from "./motion-wrapper";
import { GlassCard } from "./glass-card";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Skoolam",
    date: "Apr 2025 – May 2025",
    impact:
      "Built pipelines and 30+ visualizations that surfaced at-risk students and learning gaps for program leads.",
    highlights: [
      "Integrated FLN, attendance, and survey data into end-to-end pipelines for cohort-level risk identification.",
      "Found writing as the weakest skill (1–2% completion at ages 7–10 vs. 42% at 11–14), guiding remedial targeting.",
      "Delivered structured reports that improved monitoring speed and intervention planning.",
    ],
  },
  {
    title: "Community Growth & Partnership Leads",
    company: "PeerHub",
    date: "Dec 2024 – May 2025",
    impact:
      "Scaled IIT Roorkee chapter to 300+ members and drove 800+ pan-India competition sign-ups via partnerships.",
    highlights: [
      "Built partnership frameworks across campus networks, clubs, and digital channels for consistent MoM engagement.",
      "Coordinated 20+ influencers and partners for flagship campaigns beyond direct campus reach.",
      "Designed multi-channel outreach (digital + on-ground) that improved brand recognition and partner retention.",
    ],
  },
  {
    title: "Business Development Intern",
    company: "VJ Nucleus",
    date: "Dec 2024 – Feb 2025",
    impact:
      "Executed JEE & boards bootcamps for 700+ students while improving content relevance and channel growth.",
    highlights: [
      "Led live lectures, PYQs, and doubt sessions end-to-end to protect retention and learning outcomes.",
      "Segmented JEE audiences and refined content formats using feedback and engagement data.",
      "Ran webinars and cross-functional workshops with content, tech, and marketing alignment.",
    ],
  },
];

export function ExperiencePreview() {
  return (
    <Section>
      <MotionWrapper>
        <SectionHeading
          eyebrow="Experience"
        />
      </MotionWrapper>

      <div className="relative">
        <div
          className="absolute bottom-4 left-[7px] top-4 w-px bg-gradient-to-b from-primary/50 via-border/30 to-transparent md:hidden"
          aria-hidden
        />

        <div className="flex flex-col gap-5 md:gap-6">
          {experiences.map((exp, i) => (
            <MotionWrapper key={`${exp.title}-${exp.company}`} delay={i * 0.06}>
              <div className="relative pl-7 md:pl-0">
                <span
                  className="absolute left-0 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_hsl(var(--primary)/0.4)] md:hidden"
                  aria-hidden
                />

                <GlassCard interactive>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                    <div className="shrink-0 lg:w-[min(100%,20rem)]">
                      <h3 className="font-serif text-heading-sm">{exp.title}</h3>
                      <p className="mt-1.5 text-sm font-medium text-primary sm:text-base">
                        {exp.company}
                      </p>
                      <p className="text-label mt-2">{exp.date}</p>
                    </div>

                    <div className="lg:max-w-2xl lg:flex-1">
                      <p className="text-sm font-medium leading-snug text-foreground sm:text-[0.9375rem]">
                        <span className="text-primary">Impact · </span>
                        {exp.impact}
                      </p>

                      <ul className="text-body mt-4 space-y-2.5 text-muted-foreground">
                        {exp.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2.5 leading-relaxed"
                          >
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                              aria-hidden
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </Section>
  );
}
