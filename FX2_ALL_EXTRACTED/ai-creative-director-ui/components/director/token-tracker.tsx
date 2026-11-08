'use client'

import { useState } from 'react'
import { ChevronDown, Cpu } from 'lucide-react'
import { TOKEN_USAGE } from '@/lib/creative-data'
import { cn } from '@/lib/utils'

const fmt = new Intl.NumberFormat('en-US')

export function TokenTracker({ active }: { active: boolean }) {
  const [open, setOpen] = useState(true)
  const { prompt, output, total, limit } = TOKEN_USAGE
  const promptPct = active ? (prompt / limit) * 100 : 0
  const outputPct = active ? (output / limit) * 100 : 0
  const totalPct = Math.round((total / limit) * 100)

  return (
    <aside
      aria-label="استهلاك التوكنز"
      className="fixed inset-x-4 bg-popover/90 backdrop-blur-xl bottom-4 z-40 rounded-2xl border border-border shadow-[0_24px_64px_-24px_rgba(0,0,0,0.9)] sm:inset-x-auto sm:end-6 sm:bottom-6 sm:w-80"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3"
      >
        <span className="flex items-center gap-2.5">
          <span
            className={cn(
              'grid size-7 place-items-center rounded-lg border transition-all duration-500',
              active ? 'border-primary/40 bg-primary/15 text-primary shadow-[0_0_16px_-4px_var(--glow)]' : 'border-border text-muted-foreground',
            )}
          >
            <Cpu className="size-3.5" aria-hidden />
          </span>
          <span className="text-sm font-bold">استهلاك التوكنز</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Token Usage</span>
        </span>
        <ChevronDown
          className={cn('size-4 text-muted-foreground transition-transform duration-300', !open && 'rotate-180')}
          aria-hidden
        />
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-500 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-4 pb-4 pt-3">
            <dl className="grid grid-cols-3 gap-2">
              <Metric label="المُدخل" sub="Prompt" value={active ? prompt : 0} dot="bg-accent" />
              <Metric label="المُخرج" sub="Output" value={active ? output : 0} dot="bg-primary" />
              <Metric label="الإجمالي" sub="Total" value={active ? total : 0} highlight />
            </dl>

            <div className="mt-4">
              <div
                className="flex h-1.5 w-full overflow-hidden rounded-full bg-secondary"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={limit}
                aria-valuenow={active ? total : 0}
                aria-label="نسبة الاستهلاك من الحد"
              >
                <span
                  className="h-full bg-accent transition-all duration-1000 ease-out"
                  style={{ width: `${promptPct}%` }}
                />
                <span
                  className="h-full bg-primary shadow-[0_0_10px_var(--glow)] transition-all delay-200 duration-1000 ease-out"
                  style={{ width: `${outputPct}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>{active ? `${totalPct}% من الحد الشهري` : 'بانتظار التوليد'}</span>
                <span className="font-mono" dir="ltr">
                  {`${fmt.format(active ? total : 0)} / ${fmt.format(limit)}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

function Metric({
  label,
  sub,
  value,
  dot,
  highlight,
}: {
  label: string
  sub: string
  value: number
  dot?: string
  highlight?: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-xl border px-2.5 py-2',
        highlight ? 'border-primary/30 bg-primary/[0.07]' : 'border-border bg-background/40',
      )}
    >
      <dt className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        {dot && <span aria-hidden className={cn('size-1.5 rounded-full', dot)} />}
        {label}
      </dt>
      <dd
        className={cn('mt-0.5 font-mono text-base font-semibold tabular-nums', highlight && 'text-gradient-gold')}
        dir="ltr"
        style={{ textAlign: 'right' }}
      >
        {fmt.format(value)}
      </dd>
      <span className="sr-only">{sub}</span>
    </div>
  )
}
