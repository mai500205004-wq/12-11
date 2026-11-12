import { DURATION_OPTIONS, TONE_OPTIONS, type Brief } from '@/lib/creative-data'
import { cn } from '@/lib/utils'

type StepBriefProps = {
  brief: Brief
  onChange: (brief: Brief) => void
  disabled: boolean
}

const fieldClass =
  'w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 hover:border-foreground/20 focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/10 disabled:opacity-60'

export function StepBrief({ brief, onChange, disabled }: StepBriefProps) {
  const update = <K extends keyof Brief>(key: K, value: Brief[K]) => onChange({ ...brief, [key]: value })

  const toggleTone = (tone: string) =>
    update('tone', brief.tone.includes(tone) ? brief.tone.filter((t) => t !== tone) : [...brief.tone, tone])

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <section className="glass rounded-2xl border border-border p-5 md:p-7 lg:col-span-2">
        <h2 className="text-lg font-bold">تفاصيل الحملة</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          كلما كان الموجز أوضح، كانت الرؤية الإبداعية أعمق وأدق.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Field label="اسم العلامة التجارية" htmlFor="brand">
            <input
              id="brand"
              className={fieldClass}
              value={brief.brand}
              disabled={disabled}
              onChange={(e) => update('brand', e.target.value)}
            />
          </Field>
          <Field label="المنتج أو الخدمة" htmlFor="product">
            <input
              id="product"
              className={fieldClass}
              value={brief.product}
              disabled={disabled}
              onChange={(e) => update('product', e.target.value)}
            />
          </Field>
          <Field label="الجمهور المستهدف" htmlFor="audience" className="md:col-span-2">
            <input
              id="audience"
              className={fieldClass}
              value={brief.audience}
              disabled={disabled}
              onChange={(e) => update('audience', e.target.value)}
            />
          </Field>
          <Field label="الهدف من الحملة" htmlFor="objective" className="md:col-span-2">
            <textarea
              id="objective"
              rows={4}
              className={cn(fieldClass, 'resize-none leading-relaxed')}
              value={brief.objective}
              disabled={disabled}
              onChange={(e) => update('objective', e.target.value)}
            />
          </Field>
        </div>
      </section>

      <section className="glass flex flex-col gap-6 rounded-2xl border border-border p-5 md:p-7">
        <fieldset disabled={disabled}>
          <legend className="text-sm font-bold">نبرة العلامة</legend>
          <p className="mt-1 text-xs text-muted-foreground">اختر نبرة أو أكثر</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TONE_OPTIONS.map((tone) => {
              const active = brief.tone.includes(tone)
              return (
                <button
                  key={tone}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleTone(tone)}
                  className={cn(
                    'rounded-full border px-4 py-1.5 text-sm transition-all duration-300',
                    active
                      ? 'border-primary/60 bg-primary/15 text-primary shadow-[0_0_16px_-4px_var(--glow)]'
                      : 'border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground',
                  )}
                >
                  {tone}
                </button>
              )
            })}
          </div>
        </fieldset>

        <fieldset disabled={disabled}>
          <legend className="text-sm font-bold">مدة الإعلان</legend>
          <div className="mt-4 grid grid-cols-3 gap-1 rounded-xl border border-border bg-background/50 p-1">
            {DURATION_OPTIONS.map((d) => {
              const active = brief.duration === d
              return (
                <button
                  key={d}
                  type="button"
                  aria-pressed={active}
                  onClick={() => update('duration', d)}
                  className={cn(
                    'rounded-lg py-2 text-xs font-semibold transition-all duration-300',
                    active
                      ? 'bg-secondary text-foreground shadow-[inset_0_0_0_1px_oklch(0.82_0.14_75/0.4)]'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {d}
                </button>
              )
            })}
          </div>
        </fieldset>

        <div className="mt-auto rounded-xl border border-dashed border-primary/25 bg-primary/5 p-4">
          <p className="text-xs font-semibold text-primary">نصيحة المخرج</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {'أضف تفصيلاً ثقافياً أو لحظة إنسانية محددة — فالإعلانات الخالدة تبدأ من حقيقة صغيرة.'}
          </p>
        </div>
      </section>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string
  htmlFor: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={htmlFor} className="text-xs font-semibold text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
