/** One paragraph, or multiple bullet points. */
export type ProjectContent = string | string[];

export type Project = {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  timeline: string;
  role: string;
  pdf: string;
  problem: ProjectContent;
  insights: ProjectContent;
  strategy: ProjectContent;
  solution: ProjectContent;
  learnings: ProjectContent;
};

export const projects: Project[] = [
  {
    slug: "ixigo-makeover",
    title: "Ixigo Product Makeover",
    description:
      "Improving retention & differentiation for 80M+ MAU platform",
    shortDescription:
      "Improving retention & differentiation for 80M+ MAU platform",
    category: "Product Teardown",
    timeline: "IIT Guwahati",
    role: "Product Teardown",
    pdf: "https://drive.google.com/file/d/1hzi1gNpuEAaMev2OcmiGspVvbZsEOwKg/view?usp=drive_link",
    problem: [
      "Ixigo is one of India’s fastest-growing online travel platforms with strong traction in Tier 2/3 cities. Despite high monthly active users, the platform struggles with retention and lacks strong product differentiation in a highly competitive OTA market.",
      "Users face poor refund experiences, weak personalization, and no emergency travel optimization. This leads to low trust, high churn, and users frequently switching to competitors offering better experience or pricing.",
    ],
    insights: [
      "Segmented users into key personas: budget travelers, urgent travelers, and family travelers",
"Mapped user pain points to product gaps across booking, support, and planning",
"Analyzed industry gaps like lack of emergency routing and budget-first planning",
"Designed a feature-first product strategy targeting high-intent user scenarios",
    ],
    strategy: [
            "TripMate: Smart budget-based trip planner with live expense tracking and group splitting",
"RapidRoute: Emergency multi-modal routing system optimizing for real arrival time",
"TARA 2.0: AI-powered assistant for instant support, personalization, and trust building",
    ],
    solution: [
     
      "Improved user retention by addressing critical pain points like refunds and planning",
"Increased engagement through personalized and use-case driven features",
"Reduced dependency on manual customer support via AI automation",
"Created strong product differentiation in a crowded OTA market",
    ],
    learnings: [
      "Trust and reliability are core product features, not just support functions",
      "Differentiation comes from solving high-intent user problems, not adding features",
      "User experience in critical moments (refunds, urgency) drives retention",
      "Simple, focused solutions outperform feature-heavy products",
    ],
  },

  {
    slug: "grape-economy",
    title: "Fixing India's Grape Economy",
    description:
      "Data-driven model to improve farmer income & reduce wastage",
    shortDescription:
      "Data-driven model to improve farmer income & reduce wastage",
    category: "Consulting & Analytics",
    timeline: "IIT Roorkee",
    role: "Consulting & Analytics",
    pdf: "https://drive.google.com/file/d/1DGinC7ZWReqJWoVcXh0zr5OjoVmXEh7f/view?usp=drive_link",
    problem:[
      "India’s grape industry has strong revenue potential but suffers from inefficiencies in supply chain, storage, and pricing systems. Farmers face unstable income despite high production capacity.",
      "Farmers experience price crashes, high wastage (25–30%), and income instability due to fragmented supply chains, lack of storage infrastructure, and heavy dependence on export markets.",
    ],
      insights:[
      "Analyzed multi-layer supply chain inefficiencies including logistics and storage gaps",
"Identified key risks such as price volatility, climate impact, and export dependency",
"Designed a cluster-based sourcing model using data-driven scoring",
"Integrated forecasting, storage, and export allocation into a unified system",
      ],    
strategy:[
      "Cluster-based sourcing model prioritizing high-yield and export-ready regions",
"Tech-enabled supply chain with demand forecasting and storage optimization",
"Farmer dashboard for price insights, storage decisions, and quality alerts",
"Circular economy model to reduce waste via processing and alternate markets",
],
      solution:[
      "Increased farmer income from ~₹15L/ha to ₹18–20L/ha",
"Reduced wastage from 25–30% to ~10–15%",
"Decreased price volatility by ~40%",
"Improved overall efficiency and sustainability of the supply chain",
      ],
      learnings: [
        "Agricultural challenges are primarily system design problems, not production issues",
        "Data-driven decision-making can significantly improve rural income outcomes",
        "Small optimizations in logistics and storage create large economic impact",
        "End-to-end system thinking is critical for solving supply chain problems",
    ],
  },

  {
    slug: "sql-inventory",
    title: "SQL + Power BI Inventory Dashboard",
    description:
      "Optimizing inventory decisions using data-driven insights",
    shortDescription:
      "Optimizing inventory decisions using data-driven insights",
    category: "Data Analysis & Visualisation",
    timeline: "IIT Guwahati",
    role: "Analytics & Visualisation",
    pdf: "https://app.powerbi.com/groups/me/reports/61d3a757-af12-4af0-88a4-f48eb8516ea9/f3828b4808e23ec6a700?experience=power-bi",
    problem: [
      "Businesses often struggle with inefficient inventory management due to lack of real-time visibility into stock levels, demand trends, and product performance. This leads to overstocking, stockouts, and lost revenue opportunities.",
      "The system lacked centralized insights into inventory performance, making it difficult to track stock movement, identify slow-moving items, and optimize replenishment decisions. Manual analysis was time-consuming and error-prone.",
    ],
    insights: [
      "Extracted and queried inventory data using SQL for structured analysis",
"Performed data cleaning and transformation to ensure consistency",
"Designed KPIs such as stock turnover, inventory levels, and demand trends",
"Built an interactive Power BI dashboard for real-time monitoring and decision-making",
    ],
    strategy: [
      "Developed SQL queries to track inventory movement and product performance",
"Created dynamic Power BI dashboard with filters for category, time, and location",
"Visualized key metrics like stock levels, fast/slow-moving items, and trends",
"Enabled drill-down analysis for deeper insights into product-level performance",
    ],
    solution: [
     "Reduced manual reporting time by ~40%",
"Improved stock visibility across categories",
"Enabled faster identification of slow-moving inventory",
"Supported better replenishment planning decisions",
    ],
    learnings:[
      "Explore the interactive Power BI dashboard in real-time",

"Built using SQL for data extraction and Power BI for visualization",
    ],
  },

  {
    slug: "bodyshop-growth",
    title: "The Body Shop Growth Strategy",
    description:
      "Repositioning for Gen Z & Tier 2 market expansion",
    shortDescription:
      "Repositioning for Gen Z & Tier 2 market expansion",
    category: "Growth & Strategy",
    timeline: "IIT Kharagpur",
    role: "Growth Strategist",
    pdf: "https://drive.google.com/file/d/1PIe79S00SB9eZyckwrxxBG0wd5Y27INr/view?usp=drive_link",
    problem:[
      "The Body Shop, a global leader in ethical beauty, is facing declining relevance among younger audiences and increasing competition from digital-first D2C brands.",
      "The brand is perceived as expensive and outdated, leading to weak engagement with Gen Z and Millennials. It also lacks strong penetration in Tier 2/3 cities, which are driving major FMCG growth in India.",
    ],
      insights: [
      "Analyzed consumer behavior across Gen Z and Millennial segments",
"Studied market trends including clean beauty growth and digital engagement patterns",
"Identified gaps in pricing perception, marketing strategy, and accessibility",
"Designed a combined digital + offline expansion strategy",
    ],
    strategy: [
      "Influencer-led digital campaigns targeting Gen Z using short-form content",
"Gamified sustainability tools like EcoImpact Calculator to increase engagement",
"Tier 2/3 expansion using hub-and-spoke retail model",
"AI-driven personalization and AR/VR-based customer experience enhancements",
    ],
    solution: [
      "Projected revenue growth from ₹50 Cr to ₹150 Cr in 3 years",
"Expected 22% CAGR through strategic expansion",
"Increased engagement via digital-first campaigns",
"Improved brand perception among younger audiences",
    ],
    learnings: [
      "Brand perception plays a critical role in growth and user acquisition",
"Localization is essential for scaling in diverse markets like India",
"Sustainability must be positioned as accessible, not premium",
"Digital engagement is key to capturing Gen Z attention",
    ],
  },
];

export const featuredProjects = projects;
