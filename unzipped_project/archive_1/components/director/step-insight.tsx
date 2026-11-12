import { Compass, Flame, Landmark, Quote } from 'lucide-react'
import { INSIGHT } from '@/lib/creative-data'

const blocks = [
  { icon: Flame, label: 'التوتر الإنساني', text: INSIGHT.tension },
  { icon: Landmark, label: 'الحقيقة الثقافية', text: INSIGHT.truth },
  { icon: Compass, label: 'الفرصة الاستراتيجية', text: INSIGHT.opportunity },
]

export function StepInsight() {
  return (
    <div className="flex flex-col gap-4">
      <section className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-bl from-primary/10 via-card to-card p-6 md:p-10">
        <Quote aria-hidden className="absolute bottom-4 end-6 size-24 rotate-180 text-primary/[0.08] md:size-32" />
        <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-primary">Core Insight</p>
        <blockquote className="relative mt-4 max-w-3xl text-pretty text-xl font-bold leading-relaxed md:text-3xl md:leading-relaxed">
          {INSIGHT.core}
        </blockquote>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        {blocks.map(({ icon: Icon, label, text }) => (
          <article
            key={label}
            className="glass group rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_40px_-20px_var(--glow)]"
          >
            <div className="grid size-10 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary/15">
              <Icon className="size-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-sm font-bold">{label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>

      <dl className="grid grid-cols-1 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-x-reverse">
        {INSIGHT.metrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-1 p-5">
            <dt className="text-xs text-muted-foreground">{m.label}</dt>
            <dd className="font-mono text-3xl font-semibold text-gradient-gold" dir="ltr" style={{ textAlign: 'right' }}>
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
