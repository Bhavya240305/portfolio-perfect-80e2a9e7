// ✏️ EDIT: Replace or add skill categories and skills below
const skillCategories = [
  {
    category: "Tech Stack",
    skills: ["Python", "Pytorch", "Tensorflow", "SQL","R", "C", "C++"
    ],
  },
  {
    category: "Tools",
    skills: [ "Power BI", "Excel", "PowerPoint", "Figma","Canva"
    ],
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Communication", "Team-Coordination", "Time Management", "Critical Thinking", "Adaptability", "Decision Making"],
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.3em] text-muted-foreground mb-3">WHAT I KNOW</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
          <div className="w-12 h-0.5 bg-primary mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-label text-xs tracking-[0.25em] text-primary mb-5">
                {cat.category.toUpperCase()}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
