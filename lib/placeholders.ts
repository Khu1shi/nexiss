export type Metric = {
  label: string;
  value: string;
};

export const heroMetrics: Metric[] = [
  { label: "Models", value: "04" },
  { label: "Prompts Tracked", value: "128" },
  { label: "Cafe Visibility", value: "+18%" }
];

export const investorMetrics: Metric[] = [
  { label: "Models", value: "04" },
  { label: "Prompts Tracked", value: "128" },
  { label: "Brand Visibility", value: "+18%" }
];

export const queryMetrics: Metric[] = [
  { label: "Top 3 Rank", value: "#02" },
  { label: "Citation Share", value: "31%" },
  { label: "Trend", value: "+7.8" }
];

export const workflowMetrics: Metric[] = [
  { label: "Brand Entities", value: "126" },
  { label: "Model Outputs", value: "24k" },
  { label: "Rank States", value: "Live" }
];

export const productMetrics: Metric[] = [
  { label: "GEO Score", value: "78.4" },
  { label: "Global Regions", value: "12" },
  { label: "Tracked Brands", value: "48" }
];
