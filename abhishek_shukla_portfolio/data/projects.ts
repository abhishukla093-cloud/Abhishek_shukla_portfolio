export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  pdf?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "stocksense-ai",
    title: "StockSense AI",
    category: "AI • DATA ENGINEERING • PRODUCT",
    description:
      "AI-powered inventory forecasting and replenishment platform covering data ingestion, forecasting, inventory modeling, supplier constraints, recommendations and governance.",
    tags: ["Python", "SQL", "Spark", "Databricks", "Forecasting", "ETL/ELT"],
    pdf: "/projects/StockSense_AI_PRD.pdf",
    highlights: [
      "Designed requirements for source ingestion, data quality, inventory snapshots and product-location master data.",
      "Defined forecasting, replenishment, safety-stock and supplier-constraint workflows.",
      "Specified auditability, model versioning, exception management, approval flows and operational KPIs."
    ]
  },
  {
    slug: "supportpilot-ai",
    title: "SupportPilot AI",
    category: "AI • WORKFLOW • PRODUCT",
    description:
      "AI-assisted customer support platform for ticket intake, classification, routing, summaries, knowledge retrieval, SLA tracking and human-reviewed responses.",
    tags: ["AI", "Python", "Data Quality", "Workflow", "SLA"],
    pdf: "/projects/SupportPilot_AI_PRD.pdf",
    highlights: [
      "Defined ticket ingestion, classification, routing, search, SLA and audit requirements.",
      "Designed human-in-the-loop AI summaries, knowledge retrieval and suggested-response workflows.",
      "Specified role-based access, privacy, observability and model governance."
    ]
  },
  {
    slug: "data-quality",
    title: "Data Quality Workflow",
    category: "DATA ENGINEERING",
    description:
      "A reusable framework for validating source data, monitoring freshness, detecting anomalies and managing failed pipeline records.",
    tags: ["SQL", "Python", "ETL/ELT", "Data Quality", "Observability"],
    highlights: [
      "Schema, completeness, uniqueness, validity and freshness checks.",
      "Operational exception queues with ownership and remediation tracking.",
      "Lineage and audit-oriented requirements for reliable downstream datasets."
    ]
  },
  {
    slug: "ai-evaluation",
    title: "AI Evaluation & Quality Review",
    category: "AI • OUTLIER-RELEVANT",
    description:
      "Structured AI output evaluation and quality-review workflows focused on correctness, relevance, instruction following and consistency.",
    tags: ["AI Evaluation", "Annotation", "Quality Review", "Error Analysis"],
    highlights: [
      "Reviewed generated outputs against task-specific criteria and instructions.",
      "Performed structured labeling/review and identified edge cases and recurring error patterns.",
      "Applied human-in-the-loop quality checks before accepting model-generated outputs."
    ]
  }
];
