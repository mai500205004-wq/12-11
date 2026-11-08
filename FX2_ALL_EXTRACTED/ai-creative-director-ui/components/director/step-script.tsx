'use client'

import { useState } from 'react'
import { Braces, Check, Copy, Eye, Film, Volume2, Zap } from 'lucide-react'
import { SCRIPT } from '@/lib/creative-data'
import { cn } from '@/lib/utils'

type View = 'board' | 'json'

export function StepScript() {
  const [view, setView] = useState<View>('board')
  const [copied, setCopied] = useState(false)
  const json = JSON.stringify(SCRIPT, null, 2)

  const copy = async () => {
    await navigator.clipboard.writeText(json)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 rounded-xl border border-border bg-card/60 p-1" role="tablist">
          {(
            [
              { id: 'board', label: 'لوحة المشاهد', icon: Film },
              { id: 'json', label: 'JSON', icon: Braces },
            ] as const
          ).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={view === id}
              onClick={() => setView(id)}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300',
                view === id
                  ? 'bg-secondary text-foreground shadow-[inset_0_0_0_1px_oklch(0.82_0.14_75/0.4)]'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon className="size-3.5" aria-hidden />
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{`${SCRIPT.length} مشاهد`}</span>
          <span aria-hidden className="size-1 rounded-full bg-muted-foreground/40" />
          <span className="font-mono" dir="ltr">
            00:30
          </span>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 font-semibold transition-all duration-300 hover:border-primary/40 hover:text-primary"
          >
            {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
            {copied ? 'تم النسخ' : 'نسخ JSON'}
          </button>
        </div>
      </div>

      {view === 'board' ? <ScriptBoard /> : <JsonView json={json} />}
    </div>
  )
}

function ScriptBoard() {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card/60 lg:block">
        <table className="w-full text-right text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/40 text-xs text-muted-foreground">
              <th scope="col" className="w-32 px-5 py-3.5 font-semibold">الوقت</th>
              <th scope="col" className="w-48 px-5 py-3.5 font-semibold">المشهد</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">الحدث</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">المرئيات</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">الصوت</th>
            </tr>
          </thead>
          <tbody>
            {SCRIPT.map((row, i) => (
              <tr
                key={row.time}
                className="group border-b border-border align-top transition-colors duration-300 last:border-0 hover:bg-primary/[0.04]"
              >
                <td className="relative px-5 py-5">
                  <span
                    aria-hidden
                    className="absolute inset-y-3 start-0 w-0.5 rounded-full bg-primary opacity-0 shadow-[0_0_12px_var(--glow)] transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="whitespace-nowrap font-mono text-xs text-primary" dir="ltr">
                    {row.time}
                  </span>
                </td>
                <td className="px-5 py-5">
                  <p className="font-mono text-[10px] text-muted-foreground/60">{`SC ${String(i + 1).padStart(2, '0')}`}</p>
                  <p className="mt-0.5 font-semibold leading-relaxed">{row.scene}</p>
                </td>
                <td className="px-5 py-5 leading-relaxed text-foreground/85">{row.action}</td>
                <td className="px-5 py-5 leading-relaxed text-muted-foreground">{row.visuals}</td>
                <td className="px-5 py-5 leading-relaxed text-muted-foreground">{row.audio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ol className="flex flex-col gap-3 lg:hidden">
        {SCRIPT.map((row, i) => (
          <li
            key={row.time}
            className="glass group overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-primary/30"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary/40 px-4 py-3">
              <div className="min-w-0">
                <p className="font-mono text-[10px] text-muted-foreground/70">{`SC ${String(i + 1).padStart(2, '0')}`}</p>
                <p className="truncate text-sm font-bold">{row.scene}</p>
              </div>
              <span className="shrink-0 rounded-md border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary" dir="ltr">
                {row.time}
              </span>
            </div>
            <dl className="grid gap-3 p-4 text-sm">
              <CardRow icon={Zap} label="الحدث" text={row.action} />
              <CardRow icon={Eye} label="المرئيات" text={row.visuals} />
              <CardRow icon={Volume2} label="الصوت" text={row.audio} />
            </dl>
          </li>
        ))}
      </ol>
    </>
  )
}

function CardRow({ icon: Icon, label, text }: { icon: typeof Zap; label: string; text: string }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 size-3.5 shrink-0 text-primary/80" aria-hidden />
      <div>
        <dt className="text-xs font-semibold text-muted-foreground">{label}</dt>
        <dd className="mt-0.5 leading-relaxed text-foreground/85">{text}</dd>
      </div>
    </div>
  )
}

function JsonView({ json }: { json: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-[oklch(0.1_0.006_265)]">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3" dir="ltr">
        <span className="size-2.5 rounded-full bg-white/10" />
        <span className="size-2.5 rounded-full bg-white/10" />
        <span className="size-2.5 rounded-full bg-white/10" />
        <span className="ms-3 font-mono text-xs text-muted-foreground">script.json</span>
      </div>
      <pre dir="ltr" className="max-h-[480px] overflow-auto p-5 text-left font-mono text-xs leading-relaxed text-foreground/80">
        <code>{json}</code>
      </pre>
    </div>
  )
}
