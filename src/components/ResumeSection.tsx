// ✏️ EDIT: Replace experience and education arrays with your own info
const experience = [
  {
    role: "Data Analyst Intern",              // ✏️ Your job title
    company: "Skoolam",               // ✏️ Your employer
    period: "Apr'25 - May'25",             // ✏️ Dates
    bullets: [
      "Built end-to-end data pipelines by integrating FLN, attendance, and survey datasets, enabling identification of at-risk students and uncovering key learning gaps across multiple cohorts and demographic segments.",
      "Performed exploratory data analysis (EDA) and developed comprehensive visualizations using Pandas, Matplotlib, and Seaborn to uncover trends in literacy, health, and engagement across regions and time periods.",
      "Generated actionable insights and structured reports that supported data-driven interventions, improving program monitoring, decision-making efficiency, and overall effectiveness of education initiatives.",
    ],
  },
  {
    role: "Community Growth and Partnership Leads",
    company: "PeerHub, IITR Chapter",
    period: "Dec'24 - May'25",
    bullets: [
      "Established and managed strategic partnerships with organizations, startups, and student communities, driving membership growth and significantly increasing engagement within the PeerHub ecosystem.",
      "Led outreach and collaboration initiatives by coordinating with multiple stakeholders, strengthening brand visibility and expanding PeerHub's presence across diverse campus networks and communities.",
      "Co-organized large-scale events, workshops, and collaborative sessions, enhancing participation, improving networking opportunities, and fostering a more inclusive and interactive student environment.",
    ],
  },
  {
    role: "Business Development Intern",
    company: "VJ Nucleus",
    period: "Dec'24 - Feb'25",
    bullets: [
      "Designed and executed targeted academic content strategies tailored to different student segments, improving reach, engagement, and overall effectiveness of educational content distribution.",
      "Collaborated with influencers, partners, and student communities to expand distribution channels, contributing to increased user acquisition, higher visibility, and stronger digital presence.",
      "Organized and managed webinars and workshops by coordinating cross-functional teams, ensuring seamless execution, stakeholder alignment, and delivery of high-impact learning experiences.",
    ],
  },
];

const education = [
  {
    degree: "Undergraduate",   // ✏️ Your degree
    institution: "Indian Institute of Technology, Roorkee",       // ✏️ Your institution
    period: "Aug'23 – Present",                    // ✏️ Years attended
    description: `Chemical Sciences
CGPA: 7.78`,
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "Aklank Public School, Kota (Raj.)",
    period: "2022 – 2023",
    description: `92.2% (PCM) 
     CBSE`,
  },
  {
    degree: "Secondary (10th)",
    institution: "Global Public School, Kota (Raj.)",
    period: "2020 – 2021",
    description: `95.5%
    CBSE`,
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="font-label text-xs tracking-[0.3em] text-muted-foreground mb-3">MY JOURNEY</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Resume</h2>
            <div className="w-12 h-0.5 bg-primary mt-6" />
          </div>
          {/* ✏️ EDIT: Replace href with a link to your actual resume PDF */}
          <a
            href="https://drive.google.com/file/d/1hqsMIYE-HEweNpWE0guGjs44Z8Z80zT3/view?usp=drive_link"
            download
            className="self-start sm:self-auto px-8 py-3 bg-primary text-primary-foreground font-label text-xs tracking-wider hover:opacity-90 transition-opacity"
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Experience Column */}
          <div>
            <h3 className="font-label text-xs tracking-[0.25em] text-primary mb-8">EXPERIENCE</h3>
            <div className="space-y-10">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-5 border-l border-border">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-primary" />
                  <p className="font-label text-[10px] tracking-wider text-muted-foreground mb-1">
                    {exp.period}
                  </p>
                  <h4 className="font-heading text-lg font-bold text-foreground">{exp.role}</h4>
                  <p className="font-label text-xs tracking-wider text-primary mb-3">{exp.company}</p>
                  <ul className="font-body text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-2 marker:text-primary">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="font-label text-xs tracking-[0.25em] text-primary mb-8">EDUCATION</h3>
            <div className="space-y-10">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-5 border-l border-border">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-primary" />
                  <p className="font-label text-[10px] tracking-wider text-muted-foreground mb-1">
                    {edu.period}
                  </p>
                  <h4 className="font-heading text-lg font-bold text-foreground">{edu.degree}</h4>
                  <p className="font-label text-xs tracking-wider text-primary mb-3">{edu.institution}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
