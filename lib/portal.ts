export type PortalRole = "user" | "admin";

export const portalNavigation = {
  user: [
    { href: "/dashboard", label: "Overview", tag: "Home" },
    { href: "/global-monitoring", label: "Global Monitoring", tag: "Core" },
    { href: "/geo-ranking-check", label: "Ranking Check", tag: "Core" },
    { href: "/geo-boost", label: "GEO Boost", tag: "Action" },
    { href: "/competitor-analysis", label: "Competitor Intel", tag: "Compare" },
    { href: "/reports", label: "Reports", tag: "Export" }
  ],
  admin: [
    { href: "/dashboard", label: "Ops Overview", tag: "Internal" },
    { href: "/onboarding", label: "Workspace Queue", tag: "Ops" },
    { href: "/reports", label: "Investor Reporting", tag: "Review" },
    { href: "/contact", label: "Inbound Requests", tag: "Ops" }
  ]
} as const;

export const portalRoleCopy = {
  user: {
    label: "Cafe Workspace",
    detail: "For cafes, operators, and partner teams"
  },
  admin: {
    label: "Internal Admin",
    detail: "For NexisGEO ops, review, and launch control"
  }
} as const;
