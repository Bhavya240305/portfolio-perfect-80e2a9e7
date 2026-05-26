export type Project = {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  timeline: string;
  role: string;
  pdf: string;
  problem: string;
  insights: string;
  strategy: string;
  solution: string;
  learnings: string;
};

export const projects: Project[] = [
  {
    slug: "ixigo-makeover",
    title: "Ixigo Product Makeover",
    description:
      "Reimagining travel discovery and booking confidence through strategic UX and product thinking.",
    shortDescription:
      "A product redesign focused on user trust and booking friction.",
    category: "Product",
    timeline: "2025",
    role: "Product Strategist",
    pdf: "/pdfs/ixigo-case-study.pdf",
    problem:
      "Travel planning often suffers from fragmented information, trust gaps, and decision fatigue.",
    insights:
      "Users need clearer comparison, trust-building UX, and reduced booking uncertainty.",
    strategy:
      "Focused on simplifying decision paths, improving confidence signals, and reducing friction.",
    solution:
      "Redesigned product journey emphasizing trust, transparency, and user-first interaction flows.",
    learnings:
      "Strong product decisions emerge when user friction and business outcomes align.",
  },

  {
    slug: "grape-economy",
    title: "Grape Economy",
    description:
      "Business strategy and market exploration through a product-first lens.",
    shortDescription:
      "Strategic exploration of industry and opportunity spaces.",
    category: "Strategy",
    timeline: "2025",
    role: "Strategy Analyst",
    pdf: "/pdfs/grape-economy.pdf",
    problem:
      "Understanding market complexity and emerging business opportunities.",
    insights:
      "Consumer shifts and ecosystem fragmentation created strategic whitespace.",
    strategy:
      "Mapped ecosystem, user behaviors, and economic opportunity zones.",
    solution:
      "Developed structured market opportunity frameworks and growth hypotheses.",
    learnings:
      "Strategy is strongest when grounded in consumer and ecosystem reality.",
  },

  {
    slug: "sql-inventory",
    title: "SQL Inventory Analytics",
    description:
      "Operational analytics solving inventory inefficiencies.",
    shortDescription:
      "Analytics-driven supply chain optimization.",
    category: "Analytics",
    timeline: "2025",
    role: "Data Analyst",
    pdf: "/pdfs/sql-inventory.pdf",
    problem:
      "Inventory inefficiencies reduced operational performance and decision quality.",
    insights:
      "Data fragmentation prevented proactive optimization.",
    strategy:
      "Used SQL analytics to uncover inefficiencies and support operational decision-making.",
    solution:
      "Built structured analytical insights and optimization pathways.",
    learnings:
      "Operational clarity often comes from asking the right analytical questions.",
  },

  {
    slug: "bodyshop-growth",
    title: "Body Shop Growth Strategy",
    description:
      "Growth experimentation and business expansion strategy.",
    shortDescription:
      "Growth opportunities through market strategy.",
    category: "Growth",
    timeline: "2025",
    role: "Growth Strategist",
    pdf: "/pdfs/bodyshop-growth.pdf",
    problem:
      "Growth opportunities needed prioritization in a competitive market.",
    insights:
      "Brand positioning and user segments revealed scalable opportunities.",
    strategy:
      "Evaluated GTM opportunities, retention levers, and growth hypotheses.",
    solution:
      "Structured strategic growth roadmap and experimentation directions.",
    learnings:
      "Growth strategy requires disciplined prioritization, not random expansion.",
  },
];

export const featuredProjects = projects;
