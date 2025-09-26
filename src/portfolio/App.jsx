import { useMemo } from 'react'
import { Code2, Cpu, Hammer, Mail, Award, Github, Linkedin, Star, DollarSign, Briefcase, CheckCircle2, Gamepad2, Sparkles } from "lucide-react";
import Button from './components/Button'
import { Card, CardContent, CardHeader, CardTitle } from './components/Card'

const PROFILE = {
  name: "Skysur",
  title: "Minecraft Plugin & SMP Systems Developer",
  tagline: "I build high-performance Paper/Spigot plugins, MythicMobs bosses, Model Engine integrations, and custom HUD overlays.",
  location: "USA (PST)",
  email: "you@example.com",
  phone: "+1 (555) 123-4567",
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
  },
  blurb: "From custom classes, blessings, and ability systems to fully integrated SMP economies and events, I ship server-ready features with clean code and clear docs."
};

const SKILLS = [
  { name: "Java / Kotlin", desc: "Paper 1.21.x, Gradle, IntelliJ, robust OOP" },
  { name: "MythicMobs + Model Engine", desc: "Bosses, skills, animations, emitters" },
  { name: "Skript & Datapacks", desc: "Rapid prototyping, custom recipes, HUDs" },
  { name: "Perf & Debugging", desc: "Timings, async tasks, caching, profiling" },
  { name: "DB & Caching", desc: "SQLite/MySQL, HikariCP, Redis patterns" },
  { name: "Design & UX", desc: "Action bars, nameplates, clean config UX" },
];

const PROJECTS = [
  { title: "Blessed SMP — Blessings & Abilities", summary: "Modular ability system with unlockable blessings, action-bar HUD, titles, and event hooks.", highlights: ["Event-driven API for abilities", "Custom advancements tab + titles", "Config-first, reload-safe"] },
  { title: "Mega Warden — MythicMobs Boss Suite", summary: "Cinematic emergence/submerge phases, heartbeat FX, targeted blasts, and rockfall arenas.", highlights: ["Model Engine integration", "Segmented boss bar & threat table", "Performance-friendly skill timings"] },
  { title: "Portfolio Plugin Pack — Essentials+", summary: "QoL utilities: nameplate formatting, trust system, class slots, cooldowns, and glow pickups.", highlights: ["Lightweight modules", "Permission-gated features", "YAML config & messages"] },
];

const PRICING = [
  { tier: "Starter", price: 25, pitch: "Small utility or tweak — great for quick wins.", bullets: ["1 small feature or bugfix", "Delivery with setup notes", "Email support"], cta: "Request a quote" },
  { tier: "Pro", price: 120, pitch: "Feature pack: 2–4 features or a mini system.", bullets: ["Scoped feature set", "Basic tests + docs", "One revision cycle"], cta: "Start a build", featured: true },
  { tier: "Custom", price: 0, pitch: "Full systems, bosses, or integrations. Billed per scope.", bullets: ["Roadmap + milestones", "Perf targets & load checks", "Maintenance options"], cta: "Book a consult" },
];

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="py-20" aria-label={title}>
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-10 flex items-center gap-3">
        <Icon className="h-6 w-6" />
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Nav = () => (
  <div className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <a href="#home" className="flex items-center gap-2 font-semibold">
        <Gamepad2 className="h-5 w-5" /> {PROFILE.name}.dev
      </a>
      <nav className="hidden gap-6 md:flex">
        {[["About","about"],["Skills","skills"],["Projects","projects"],["Pricing","pricing"],["Contact","contact"]].map(([label,href])=> (
          <a key={href} href={`#${href}`} className="text-sm hover:opacity-80">{label}</a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild className="btn-outline" href="#contact">
          <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Contact</span>
        </Button>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden border-b">
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
          <Sparkles className="h-3.5 w-3.5" /> Available for freelance
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          {PROFILE.title}
        </h1>
        <p className="mb-6 text-base muted">{PROFILE.tagline}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild href="#projects"><span className="inline-flex items-center gap-2"><Briefcase className="h-4 w-4" /> See projects</span></Button>
          <Button asChild className="btn-outline" href="#pricing"><span className="inline-flex items-center gap-2"><DollarSign className="h-4 w-4" /> Pricing</span></Button>
        </div>
      </div>
      <div>
        <div className="relative mx-auto aspect-square w-full max-w-sm rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 p-1 shadow-sm">
          <div className="flex h-full w-full items-center justify-center rounded-2xl border bg-white">
            <Code2 className="h-24 w-24" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs muted">
          <div className="rounded-xl border p-3">
            <div className="text-lg font-semibold">25+</div>
            Projects
          </div>
          <div className="rounded-xl border p-3">
            <div className="flex items-center justify-center gap-1 text-lg font-semibold"><Star className="h-4 w-4" /> 4.8</div>
            Avg rating
          </div>
          <div className="rounded-xl border p-3">
            <div className="text-lg font-semibold">1.21.x</div>
            Target MC
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" title="About" icon={Cpu}>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardContent className="space-y-4">
          <p>{PROFILE.blurb}</p>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Clean, well-documented code</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Clear configs & messages</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Perf-conscious design</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Fast iterations</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-base">Quick facts</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm"><b>Location</b>: {PROFILE.location}</div>
          <div className="text-sm"><b>Email</b>: <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
          <div className="text-sm"><b>Phone</b>: {PROFILE.phone}</div>
          <div className="flex gap-3 pt-2">
            <a className="btn btn-outline" href={PROFILE.links.github} aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a className="btn btn-outline" href={PROFILE.links.linkedin} aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" title="Skills" icon={Hammer}>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {SKILLS.map((s) => (
        <Card key={s.name}>
          <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base"><Award className="h-4 w-4" /> {s.name}</CardTitle></CardHeader>
          <CardContent className="pt-0 text-sm muted">{s.desc}</CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Projects" icon={Briefcase}>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {PROJECTS.map((p) => (
        <Card key={p.title} className="group">
          <CardHeader><CardTitle className="text-base">{p.title}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="aspect-video w-full rounded-xl border bg-gradient-to-br from-zinc-100 to-zinc-50" />
            <p className="text-sm muted">{p.summary}</p>
            <ul className="space-y-1 text-sm">
              {p.highlights.map((h) => (<li key={h} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4" /> {h}</li>))}
            </ul>
            <Button className="w-full btn-outline">View details</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const Pricing = () => (
  <Section id="pricing" title="Pricing" icon={DollarSign}>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {PRICING.map((p) => (
        <Card key={p.tier} className={p.featured ? "border-2 border-zinc-900 shadow" : ""}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-base">
              <span>{p.tier}</span>
              {p.price > 0 ? <span className="text-lg font-semibold">${p.price}</span> : <span className="text-sm">Scope-based</span>}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm muted">{p.pitch}</p>
            <ul className="space-y-1 text-sm">
              {p.bullets.map((b) => (<li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4" /> {b}</li>))}
            </ul>
            <Button className="w-full">{p.cta}</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact" icon={Mail}>
    <Card>
      <CardContent className="space-y-4">
        <p className="muted">Email me with your project scope, timeline, and budget. I’ll reply within 24–48 hours.</p>
        <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>Email {PROFILE.name}</a>
      </CardContent>
    </Card>
  </Section>
);

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Pricing />
      <Contact />
      <footer className="border-t py-8 text-center text-xs muted">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</footer>
    </div>
  )
}
