import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line/80 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-black tracking-[.18em]">ABHISHEK SHUKLA</Link>
        <div className="hidden gap-6 text-sm text-slate-400 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#architecture" className="hover:text-white">Architecture</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#ai-work" className="hover:text-white">AI Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}
