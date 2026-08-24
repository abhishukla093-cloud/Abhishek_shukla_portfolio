import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-ink px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-accent">← Back to portfolio</Link>
        <div className="mt-12 text-xs font-black tracking-[.2em] text-accent">{project.category}</div>
        <h1 className="mt-4 text-5xl font-black tracking-tight">{project.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">{project.description}</p>
        <div className="mt-7 flex flex-wrap gap-2">{project.tags.map(t => <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-slate-300">{t}</span>)}</div>
        <section className="mt-12 grid gap-4">
          <div className="glass rounded-3xl p-7"><h2 className="text-2xl font-bold">What I worked on</h2><ul className="mt-4 space-y-3 text-slate-400">{project.highlights.map(x => <li key={x}>• {x}</li>)}</ul></div>
          <div className="glass rounded-3xl p-7"><h2 className="text-2xl font-bold">Skills demonstrated</h2><p className="mt-3 text-slate-400">{project.tags.join(" • ")}</p></div>
          {project.pdf && <div className="glass rounded-3xl p-7"><h2 className="text-2xl font-bold">Project Document</h2><p className="mt-3 text-slate-400">Open the detailed product requirements document.</p><a href={project.pdf} target="_blank" className="mt-5 inline-block rounded-xl bg-accent px-5 py-3 font-bold text-ink">Open PRD PDF</a></div>}
        </section>
      </div>
    </main>
  );
}
