import { Clapperboard, Sparkles } from 'lucide-react'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="relative grid size-10 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_24px_-8px_var(--glow)]">
          <Clapperboard className="size-5" aria-hidden />
        </div>
        <div className="leading-tight">
          <p className="text-base font-bold">المخرج الإبداعي</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">AI Creative Director</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground sm:inline-flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          النموذج متصل
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
          <Sparkles className="size-3.5" aria-hidden />
          Pro
        </span>
      </div>
    </header>
  )
}
