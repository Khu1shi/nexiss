export const topNavLinks = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#demo", label: "Demo" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#faq", label: "FAQ" },
  { href: "/login", label: "Login" }
] as const;

export const footerLinks = [
  { href: "/dashboard", label: "Product" },
  { href: "/docs", label: "Docs" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" }
] as const;

export const toolLinks = [
  {
    href: "/global-monitoring",
    title: "Global GEO Monitoring",
    description: "Track how your cafe appears across AI engines, geographies, and query clusters."
  },
  {
    href: "/geo-ranking-check",
    title: "GEO Ranking Checker",
    description: "Benchmark where your cafe shows up in AI answers, citations, and recommendation order."
  },
  {
    href: "/geo-boost",
    title: "GEO Boost",
    description: "Prioritize visibility actions that improve inclusion inside generated AI responses."
  },
  {
    href: "/competitor-analysis",
    title: "Competitor Intelligence",
    description: "Compare why rivals appear more often and which prompt surfaces they dominate."
  }
] as const;
