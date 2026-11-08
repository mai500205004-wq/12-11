import { Check, Lock } from 'lucide-react'
import { STEPS } from '@/lib/creative-data'
import { cn } from '@/lib/utils'

type StepperProps = {
  current: number
  unlocked: boolean
  onSelect: (step: number) => void
}

export function Stepper({ current, unlocked, onSelect }: StepperProps) {
  const progress = ((current - 1) / (STEPS.length - 1)) * 100

  return (
    <nav aria-label="مراحل العمل" className="glass rounded-2xl border border-border p-3 md:p-4">
      <ol className="relative grid grid-cols-4 gap-2">
        <div aria-hidden className="absolute inset-x-[12.5%] top-5 h-px bg-border md:top-6">
          <div
            className="h-full origin-right bg-gradient-to-l from-primary to-primary/40 shadow-[0_0_12px_var(--glow)] transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {STEPS.map((s) => {
          const isActive = s.id === current
          const isDone = s.id < current
          const isLocked = s.id > 1 && !unlocked

          return (
            <li key={s.id} className="relative">
              <button
                type="button"
                onClick={() => onSelect(s.id)}
                disabled={isLocked}
                aria-current={isActive ? 'step' : undefined}
                className="group flex w-full flex-col items-center gap-2 rounded-xl px-1 py-1 text-center transition-colors disabled:cursor-not-allowed"
              >
                <span
                  className={cn(
                    'relative z-10 grid size-10 place-items-center rounded-full border font-mono text-sm font-semibold transition-all duration-500 md:size-12',
                    isActive && 'glow-ring scale-110 border-primary bg-primary text-primary-foreground',
                    isDone && 'border-primary/50 bg-primary/15 text-primary',
                    !isActive && !isDone && 'border-border bg-card text-muted-foreground',
                    !isActive && !isLocked && 'group-hover:border-primary/60 group-hover:text-primary',
                  )}
                >
                  {isDone ? (
                    <Check className="size-4" aria-hidden />
                  ) : isLocked ? (
                    <Lock className="size-3.5" aria-hidden />
                  ) : (
                    `0${s.id}`
                  )}
                </span>
                <span className="flex flex-col">
                  <span
                    className={cn(
                      'text-xs font-semibold transition-colors md:text-sm',
                      isActive ? 'text-foreground' : 'text-muted-foreground',
                      !isActive && 'hidden sm:block',
                    )}
                  >
                    {s.title}
                  </span>
                  <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70 md:block">
                    {s.subtitle}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
