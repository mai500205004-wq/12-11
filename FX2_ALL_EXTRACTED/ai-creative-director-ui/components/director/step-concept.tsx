import { Aperture } from 'lucide-react'
import { CONCEPT } from '@/lib/creative-data'

export function StepConcept() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <section className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-[oklch(0.1_0.006_265)] lg:col-span-3">
        <div aria-hidden className="h-6 bg-black md:h-8" />
        <div className="relative flex flex-1 flex-col justify-center px-6 py-10 md:px-10 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,oklch(0.82_0.14_75/0.18),transparent_70%)]"
          />
          <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-primary">The Big Idea</p>
          <h2 className="relative mt-3 text-balance text-4xl font-black leading-tight md:text-6xl">
            <span className="text-gradient-gold">{CONCEPT.title}</span>
          </h2>
          <p className="relative mt-3 text-lg font-semibold text-foreground/80">{CONCEPT.tagline}</p>
          <p className="relative mt-6 max-w-xl text-pretty text-sm leading-loose text-muted-foreground md:text-base">
            {CONCEPT.bigIdea}
          </p>
        </div>
        <div aria-hidden className="h-6 bg-black md:h-8" />
      </section>

      <div className="flex flex-col gap-4 lg:col-span-2">
        <section className="glass rounded-2xl border border-border p-5">
          <h3 className="text-sm font-bold">ركائز الفكرة</h3>
          <ol className="mt-4 flex flex-col gap-3">
            {CONCEPT.pillars.map((p, i) => (
              <li
                key={p.title}
                className="group flex gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-border hover:bg-secondary/60"
              >
                <span className="font-mono text-xs text-primary/70 pt-0.5">{`0${i + 1}`}</span>
                <div>
                  <p className="text-sm font-semibold transition-colors group-hover:text-primary">{p.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="glass rounded-2xl border border-border p-5">
          <h3 className="text-sm font-bold">لوحة الألوان</h3>
          <ul className="mt-4 grid grid-cols-4 gap-2">
            {CONCEPT.palette.map((c) => (
              <li key={c.hex} className="group flex flex-col gap-2">
                <span
                  className="aspect-square rounded-xl border border-white/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="text-[11px] leading-tight text-muted-foreground">{c.name}</span>
                <span className="font-mono text-[10px] text-muted-foreground/60" dir="ltr">
                  {c.hex}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="glass rounded-2xl border border-border p-5">
          <h3 className="flex items-center gap-2 text-sm font-bold">
            <Aperture className="size-4 text-primary" aria-hidden />
            المراجع البصرية
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {CONCEPT.references.map((r) => (
              <li key={r} className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                {r}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
