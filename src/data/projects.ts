/**
 * Project cover images — import from `src/assets` (Vite resolves to URLs at build time).
 *
 * 1. Put images in `src/assets/` (paths must match the file on disk exactly).
 * 2. Import at the top, e.g. `import grapeCover from "@/assets/my-cover.png";`
 * 3. Set `coverImage: grapeCover` on the matching project.
 *
 * Filenames with spaces work in quotes: `import shot from "@/assets/My Screenshot.png";`
 * @see https://vitejs.dev/guide/assets.html#importing-asset-as-url
 */

import grapeCover from "@/assets/Screenshot 2026-04-11 020822.png";
import ixigoCover from "@/assets/Screenshot 2026-03-29 152701.png";
import bodyShopCover from "@/assets/Screenshot 2026-03-29 165105.png";
import inventoryCover from "@/assets/Screenshot 2026-03-29 161416.png";
import hrCover from "@/assets/Screenshot (50).png";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Resolved URL from a static import (e.g. `import x from "@/assets/...") */
  coverImage?: string;
};

export const projects: Project[] = [
  {
    id: "grape-economy",
    title: "Fixing India's Broken Grape Economy",
    tagline:
      "Fixing India's Broken Grape Economy is a data-driven, cluster-based supply chain redesign that addresses inefficiencies in production, pricing, and distribution. By integrating technology, demand forecasting, and export optimization, the model enhances farmer income stability, reduces wastage, and builds a scalable, sustainable agricultural ecosystem.",
    description: `The project highlights a key inefficiency in India's grape industry—while the sector is profitable, systemic supply chain gaps significantly reduce farmer income and stability. As seen in the problem analysis (page 2), issues such as ~20% price crashes, 25–30% wastage, fragmented landholdings, and export dependency create volatility and inefficiency. Further, page 3 identifies root causes including logistics bottlenecks, storage gaps, and lack of transparency, reframing the challenge as a system design and coordination failure rather than a production issue.

To address this, the solution proposes a cluster-based, data-driven supply chain model integrating FPO-led aggregation, demand forecasting, and storage optimization. As outlined in the solution framework (pages 4–5), the model enables better decision-making, efficient logistics, and export alignment, supported by a circular economy approach. The impact (page 6) includes increased farmer income (₹15L/ha → ₹18–20L/ha), reduced wastage (25–30% → 10–15%), and improved price stability, transforming the ecosystem into a scalable and sustainable model.`,
    tags: ["Consulting Case Competition", "IIT Roorkee"],
    liveUrl: "https://drive.google.com/file/d/1DGinC7ZWReqJWoVcXh0zr5OjoVmXEh7f/view?usp=drive_link",
    coverImage: grapeCover,
  },
  {
    id: "ixigo-makeover",
    title: "Ixigo Makeover",
    tagline:
      "ixigo makeover is a data-driven product redesign focused on enhancing user experience in the travel booking ecosystem. It introduces AI-powered features like smart budget planning, emergency travel optimization, and personalized assistance to improve retention, streamline bookings, and deliver a seamless end-to-end travel experience.",
    description: `ixigo makeover is a product teardown–driven redesign that critically analyzes the platform's existing user flows, feature gaps, and experience bottlenecks across the travel booking journey. By evaluating core issues such as weak personalization, fragmented planning, refund inefficiencies, and lack of emergency optimization, the project identifies key friction points and redefines the product with structured, user-centric improvements. It introduces solutions like TripMate for budget-first planning, RapidRoute for real-time multi-modal travel optimization, and TARA 2.0 for intelligent, context-aware assistance.

Through a lens of product thinking and data-backed insights, Ixigo Makeover focuses on improving key metrics like retention, conversion, and user trust. The redesigned experience emphasizes seamless navigation, faster decision-making, and personalized recommendations, transforming the platform from a transactional booking tool into a cohesive, intelligent travel ecosystem. This teardown not only highlights gaps but also demonstrates how strategic feature innovation can drive scalability and long-term user engagement.`,
    tags: ["Product Makeover", "IIT Guwahati"],
    liveUrl: "https://drive.google.com/file/d/1hzi1gNpuEAaMev2OcmiGspVvbZsEOwKg/view?usp=drive_link",
    coverImage: ixigoCover,
  },
  {
    id: "the-body-shop",
    title: "The Body Shop",
    tagline:
      "The Body Shop Growth Strategy is a data-driven consulting solution focused on revitalizing brand relevance, expanding into Tier 2/3 markets, and driving omnichannel transformation. By integrating sustainability, AI-led personalization, and innovative retail formats, the strategy aims to achieve scalable growth, improved profitability, and stronger customer engagement.",
    description: `The project addresses a key challenge for The Body Shop—declining relevance among Millennials and Gen Z and rising competition from digital-first brands. As highlighted in the analysis (page 5), the brand struggles with premium perception and limited digital engagement, while market trends show strong demand for clean beauty (30% YoY growth), natural products (75% preference), and influencer-led marketing with higher ROI. Additionally, page 8 identifies Tier 2/3 cities as a major growth opportunity, contributing ~50% of FMCG growth, supported by large-scale consumer insights (N=100,000).

To address this, the solution proposes a data-driven, omnichannel growth strategy combining digital marketing, localized expansion, and supply chain optimization. The model includes a hub-and-spoke retail strategy, AI-driven personalization, and influencer campaigns, supported by a ₹20 Cr investment plan. Financial projections target revenue growth from ₹50 Cr (Year 1) to ₹150 Cr (Year 3) and a 22% CAGR, alongside sustainability initiatives such as refill stations and local sourcing to improve efficiency and brand trust.`,
    tags: ["ICC Case Challenge 2025", "IIT Kharagpur"],
    liveUrl: "https://drive.google.com/file/d/1PIe79S00SB9eZyckwrxxBG0wd5Y27INr/view?usp=drive_link",
    coverImage: bodyShopCover,
  },
  {
    id: "smart-inventory-dashboard",
    title: "Smart Inventory Dashboard",
    tagline:
      "Solving Inventory Inefficiencies is a data analytics project focused on optimizing inventory performance using SQL-based data processing and Power BI visualizations. It analyzes demand patterns, forecast accuracy, and stock levels to enable efficient inventory planning, reduce stockouts, and improve overall operational performance.",
    description: `This project analyzes retail inventory data to uncover patterns in stock levels, sales, and demand forecasting. Using a structured SQL pipeline, the data is cleaned, normalized, and transformed into analytical tables, enabling calculations of key metrics such as inventory turnover, forecast error (MAE), and stockout frequency. The dashboard highlights KPIs like total inventory (16M), units sold (11M), turnover ratio, and forecast accuracy, helping identify fast-moving and slow-moving products across categories and regions.

The Power BI dashboard provides detailed visual analysis of inventory allocation vs. demand, price comparison, seasonal trends, and weather-based sales patterns. It enables users to track performance at product and category levels, evaluate pricing strategies against competitor data, and understand demand fluctuations across seasons. Overall, the project demonstrates how data analytics can be used to improve inventory optimization, enhance forecasting accuracy, and support data-driven decision-making in retail operations.`,
    tags: ["Summer Project 2025", "Advanced SQL"],
    liveUrl: "https://drive.google.com/drive/folders/1uzRzaKlhC5HQ6aTGKkswMDWqOp2wysm1?usp=drive_link",
    coverImage: inventoryCover,
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    tagline:
      "The HR Analytics Dashboard analyzes employee attrition, workforce demographics, and key HR metrics to identify patterns and trends. It enables data-driven decision-making to improve retention, optimize workforce planning, and enhance organizational performance.",
    description: `The HR Analytics Dashboard provides a comprehensive overview of workforce metrics and employee attrition patterns within the organization. It highlights key KPIs such as total employees (1470), attrition count (237), attrition rate (16.1%), average age (37), average salary (6.5K), and average tenure (7 years). The dashboard enables quick identification of workforce composition by gender and offers segmented insights into attrition across education fields, salary slabs, and age groups, helping uncover key drivers of employee turnover.

The dashboard further analyzes attrition trends through multiple dimensions, including years at the company, job roles, and salary distribution. It reveals higher attrition among specific roles like Laboratory Technicians and Sales Executives, as well as among employees in lower salary brackets and early tenure stages. Visualizations such as age-wise attrition distribution and tenure-based trends help identify critical risk segments, enabling HR teams to design targeted retention strategies, optimize compensation structures, and improve workforce stability through data-driven decision-making.`,
    tags: ["Power BI", "Data Visualization"],
    liveUrl: "https://drive.google.com/file/d/1qsV6L_uoKRuWNU2VeAPE_CUWiyi4AX9L/view?usp=drive_link",
    coverImage: hrCover,
  },
];
