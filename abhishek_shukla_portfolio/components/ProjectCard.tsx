import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-hover glass rounded-3xl p-6">
      <div className="text-xs font-bold tracking-[.16em] text-accent">{project.category}</div>
      <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map(tag => <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-slate-300">{tag}</span>)}
      </div>
      <div className="mt-6 flex gap-3">
        <Link href={`/projects/${project.slug}`} className="rounded-xl bg-accent px-4 py-2 text-sm font-bold text-ink">Case Study</Link>
        {project.pdf && <a href={project.pdf} target="_blank" className="rounded-xl border border-line px-4 py-2 text-sm font-bold">PRD PDF</a>}
      </div>
    </article>
  );
}
