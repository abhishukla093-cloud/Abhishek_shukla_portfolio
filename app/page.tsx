import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const skills = [
  ["Programming", "Python • SQL • scripting • automation"],
  ["Big Data", "Apache Spark • PySpark • distributed processing"],
  ["Lakehouse", "Databricks • Delta-style architecture • Spark workflows"],
  ["Pipelines", "ETL/ELT • batch • incremental loads • CDC concepts"],
  ["Orchestration", "Airflow • DAGs • scheduling • retries • backfills"],
  ["Modeling", "dbt • dimensional modeling • facts • dimensions • testing"],
  ["Cloud", "AWS • Azure • GCP • storage • compute • IAM concepts"],
  ["Warehousing", "Snowflake • BigQuery • analytics-ready datasets"],
  ["Streaming", "Kafka • event-driven pipelines • real-time concepts"],
  ["DevOps", "Git • Docker • CI/CD • reproducible environments"],
  ["Quality", "Validation • freshness • reconciliation • anomaly detection"],
  ["Analytics", "KPIs • reporting datasets • dashboards • decision support"]
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid-bg">
        <section className="mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-24 md:grid-cols-[1.25fr_.75fr] md:items-center">
          <div>
            <div className="text-xs font-black tracking-[.28em] text-accent">DATA ENGINEER • DATA • AI</div>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-.04em] md:text-7xl">
              Building <span className="gradient-text">reliable data systems</span> and AI-ready products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I focus on Python, SQL, PySpark, Spark, Databricks, ETL/ELT, data quality, cloud data platforms, analytics and AI evaluation workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/Professional_Resume.pdf" target="_blank" className="rounded-xl bg-accent px-5 py-3 font-bold text-ink">Download Resume</a>
              <a href="#projects" className="rounded-xl border border-line px-5 py-3 font-bold">Explore Projects</a>
              <a href="https://github.com/" target="_blank" className="rounded-xl border border-line px-5 py-3 font-bold">GitHub</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Python","SQL","PySpark","Databricks","Airflow","ETL/ELT","AWS","Data Quality"].map(x => <span key={x} className="rounded-full border border-line bg-panel px-3 py-1.5 text-xs text-slate-300">{x}</span>)}
            </div>
          </div>
          <div className="glass rounded-[2rem] p-4 shadow-2xl">
            <Image src="/assets/profile.jpg" alt="Abhishek Shukla" width={520} height={650} priority className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top" />
            <div className="flex justify-between px-2 pb-1 pt-4 text-[10px] font-black tracking-[.18em] text-accent">
              <span>ABHISHEK SHUKLA</span><span>DATA ENGINEER</span>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-line py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-black">About</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-400">I approach ambiguous problems by translating business needs into structured data workflows, measurable requirements, reliable datasets and decision-support solutions. This portfolio combines data engineering, product thinking and AI evaluation work.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[["Python","Engineering & automation"],["SQL","Transformation & analytics"],["Spark","Distributed processing"],["Databricks","Lakehouse workflows"]].map(([a,b]) => <div key={a} className="glass rounded-2xl p-5"><div className="text-2xl font-black text-accent">{a}</div><div className="mt-2 text-xs text-slate-400">{b}</div></div>)}
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-line py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-black">Technical Skills</h2>
            <p className="mt-3 text-slate-400">A recruiter-friendly overview of the data engineering stack.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skills.map(([a,b]) => <div key={a} className="card-hover glass rounded-2xl p-5"><div className="text-xs font-black tracking-[.15em] text-accent">{a}</div><p className="mt-2 text-sm leading-6 text-slate-300">{b}</p></div>)}
            </div>
          </div>
        </section>

        <section id="architecture" className="border-t border-line py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-black">Data Engineering Architecture</h2>
            <p className="mt-3 max-w-3xl text-slate-400">A representative modern pipeline: reliable ingestion, scalable processing, governed storage and analytics-ready outputs.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {["Sources","Ingestion","Spark / PySpark","Databricks Lakehouse","Warehouse","BI / ML"].map((x,i) => <div key={x} className="flex items-center gap-3"><div className="glass min-w-28 rounded-2xl px-4 py-4 text-center"><div className="font-bold">{x}</div><div className="mt-1 text-[10px] text-slate-500">{["APIs • DBs • Files","Batch • CDC","Transform • Aggregate","Delta • Governance","Snowflake • BigQuery","KPIs • Models"][i]}</div></div>{i<5 && <span className="hidden text-xl text-accent md:block">→</span>}</div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-line py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-black">Featured Projects</h2>
            <p className="mt-3 text-slate-400">Detailed case studies with downloadable product documents.</p>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">{projects.slice(0,3).map(p => <ProjectCard key={p.slug} project={p} />)}</div>
          </div>
        </section>

        <section id="ai-work" className="border-t border-line py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-black">AI / Evaluation Work</h2>
            <p className="mt-3 max-w-3xl text-slate-400">AI data and quality-review work relevant to model evaluation and human-in-the-loop systems.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["AI Response Evaluation","Reviewed generated outputs for correctness, relevance, completeness and instruction following."],
                ["Structured Annotation","Worked with guideline-driven labeling/review where consistency and accuracy matter."],
                ["Error Analysis","Identified edge cases, output defects and recurring quality patterns for downstream improvement."]
              ].map(([a,b]) => <div className="glass rounded-2xl p-6" key={a}><div className="text-xs font-black tracking-[.15em] text-accent">AI WORK</div><h3 className="mt-3 text-xl font-bold">{a}</h3><p className="mt-2 text-sm leading-7 text-slate-400">{b}</p></div>)}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-black">Selected Approach</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {["Discover","Structure","Design","Validate","Improve"].map((x,i) => <div className="glass rounded-2xl p-5" key={x}><div className="text-xs font-black text-accent">0{i+1}</div><h3 className="mt-2 font-bold">{x}</h3><p className="mt-2 text-xs leading-6 text-slate-400">{["Understand users and data.","Define requirements and schemas.","Build workflows and architecture.","Test assumptions and quality.","Measure and iterate."][i]}</p></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-line py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="text-xs font-black tracking-[.2em] text-accent">LET'S CONNECT</div>
              <h2 className="mt-3 text-4xl font-black">Open to Data Engineering opportunities.</h2>
              <p className="mt-4 max-w-2xl text-slate-400">For Data Engineering, AI/data evaluation, analytics or product-data opportunities, feel free to connect.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="mailto:your.email@example.com" className="rounded-xl bg-accent px-5 py-3 font-bold text-ink">Email</a>
                <a href="https://www.linkedin.com/" target="_blank" className="rounded-xl border border-line px-5 py-3 font-bold">LinkedIn</a>
                <a href="https://github.com/" target="_blank" className="rounded-xl border border-line px-5 py-3 font-bold">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-line py-8 text-center text-xs text-slate-500">© 2026 Abhishek Shukla • Data Engineer Portfolio</footer>
    </>
  );
}
