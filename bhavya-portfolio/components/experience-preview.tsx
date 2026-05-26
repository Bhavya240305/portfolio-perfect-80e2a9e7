import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { MotionWrapper } from "./motion-wrapper";
import { GlassCard } from "./glass-card";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Skoolam",
    date: "Apr 2025 – May 2025",
    highlights: [
      "Built end-to-end data pipelines by integrating FLN, attendance, and survey datasets - enabling systematic identification of at-risk students and uncovering key learning gaps across cohorts and demographic segments.",
      "Performed in-depth exploratory data analysis (EDA) and developed 30+ visualizations using NumPy, Pandas, Matplotlib, and Seaborn - producing data-informed reports used by program leads to plan targeted student interventions.",
      "Identified writing as the weakest skill across cohorts (1–2% task completion at ages 7–10 vs. 42% at ages 11–14) - enabling precise targeting of remedial programs and smarter resource allocation.",
      "Generated actionable insights and structured reports synthesizing attendance, literacy, and demographic data - improving monitoring efficiency and helping program managers respond faster to emerging student needs.",
    ],
  },
  {
    title: "Community Growth & Partnership Leads",
    company: "PeerHub",
    date: "Dec 2024 – May 2025",
    highlights: [
      "Built structured partnership frameworks and targeted outreach initiatives across campus networks, clubs and digital ecosystems - because organic growth alone couldn't scale the community fast enough - growing PeerHub's IIT Roorkee chapter to 300+ active members with consistent month-on-month engagement.",
"Collaborated with 20+ influencers and strategic partners to design and execute coordinated outreach campaigns - to extend reach beyond direct networks and tap into wider student audiences - enabling pan-India participation of 800+ students in a flagship competition through partnership-driven promotions.",
"Managed end-to-end stakeholder relationships across campus communities and partner organizations, building systems for communication, follow-up and accountability - to reduce coordination friction and prevent initiative delays - resulting in smoother execution of all programs and improved partner and member retention.",
"Designed and led multi-channel outreach campaigns combining digital content, campus activations and partner collaborations - to strengthen brand presence across diverse student ecosystems - resulting in higher brand recognition, improved partner retention and a more engaged, active community across IIT Roorkee.",
    ],
  },
  {
    title: "Business Development Intern",
    company: "VJ Nucleus",
    date: "Dec 2024 – Feb 2025",
    highlights: [
      "Led end-to-end execution of JEE & boards bootcamps for 700+ students, coordinating live lectures, daily PYQs and doubt-clearing sessions - because seamless delivery directly impacts learning outcomes and student retention - ensuring a high-quality, consistent learning experience throughout the program duration.",
"Designed and executed targeted content and growth strategies tailored to different JEE student segments - to improve relevance and reduce drop-off across digital channels - leveraging data and user feedback to continuously refine content formats, driving measurable improvements in reach and platform engagement.",
"Collaborated with influencers, partners and student communities to expand distribution channels - to scale user acquisition beyond owned platforms - identifying key growth opportunities through market research and user insights and translating them into strategies that strengthened digital presence and enhanced outreach effectiveness.",
"Organized and managed webinars and workshops by coordinating cross-functional teams across content, technology and marketing - to ensure seamless stakeholder alignment and flawless execution - delivering high-impact learning experiences that maintained strong audience participation and positive engagement throughout every session.",
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

      <div className="relative md:space-y-6">
        <div
          className="absolute bottom-4 left-[7px] top-4 w-px bg-gradient-to-b from-primary/50 via-border/30 to-transparent md:hidden"
          aria-hidden
        />

        <div className="flex flex-col gap-5 md:gap-6">
          {experiences.map((exp, i) => (
            <MotionWrapper key={`${exp.title}-${exp.company}`} delay={i * 0.06}>
              <div className="relative pl-7 md:pl-0">
                <span
                  className="absolute left-0 top-7 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_hsl(var(--primary)/0.4)] md:hidden"
                  aria-hidden
                />

                <GlassCard interactive>
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                    <div className="shrink-0 lg:w-[min(100%,22rem)]">
                      <h3 className="font-serif text-heading-sm">{exp.title}</h3>
                      <p className="mt-2 text-sm font-medium text-primary sm:text-base">
                        {exp.company}
                      </p>
                      <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                        {exp.date}
                      </p>
                    </div>

                    <ul className="text-body list-disc space-y-3 pl-5 text-muted-foreground marker:text-primary lg:max-w-2xl lg:pt-0.5">
                      {exp.highlights.map((point) => (
                        <li key={point} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
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
