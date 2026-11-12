'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { DEFAULT_BRIEF, STEPS, type Brief } from '@/lib/creative-data'
import { cn } from '@/lib/utils'
import { AppHeader } from './app-header'
import { Stepper } from './stepper'
import { StepBrief } from './step-brief'
import { StepInsight } from './step-insight'
import { StepConcept } from './step-concept'
import { StepScript } from './step-script'
import { TokenTracker } from './token-tracker'
import { GenerateButton } from './generate-button'

const GENERATION_DELAY_MS = 2200

export function CreativeDirector() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState<'forward' | 'back'>('forward')
  const [brief, setBrief] = useState<Brief>(DEFAULT_BRIEF)
  const [isGenerating, setIsGenerating] = useState(false)
  const [hasGenerated, setHasGenerated] = useState(false)

  const goTo = (target: number) => {
    if (target === step || target < 1 || target > STEPS.length) return
    if (target > 1 && !hasGenerated) return
    setDirection(target > step ? 'forward' : 'back')
    setStep(target)
  }

  const handleGenerate = () => {
    const landingStep = step === 1 ? 2 : step
    setIsGenerating(true)
    window.setTimeout(() => {
      setIsGenerating(false)
      setHasGenerated(true)
      setDirection('forward')
      setStep(landingStep)
    }, GENERATION_DELAY_MS)
  }

  const current = STEPS[step - 1]

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <div aria-hidden className="cinematic-grain pointer-events-none fixed inset-0" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent"
      />

      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col px-4 pb-64 pt-6 md:px-8 md:pb-60">
        <AppHeader />

        <div className="mt-8 md:mt-10">
          <Stepper current={step} unlocked={hasGenerated} onSelect={goTo} />
        </div>

        <main className="mt-8 flex-1 md:mt-10">
          <div className="mb-6 flex flex-col gap-1">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary/80">
              {`Step 0${step} / ${current.subtitle}`}
            </p>
            <h1 className="text-balance text-3xl font-bold leading-tight md:text-4xl">{current.title}</h1>
          </div>

          <div
            key={step}
            className={cn(
              'animate-in fade-in duration-500 ease-out',
              direction === 'forward' ? 'slide-in-from-left-8' : 'slide-in-from-right-8',
            )}
          >
            {step === 1 && <StepBrief brief={brief} onChange={setBrief} disabled={isGenerating} />}
            {step === 2 && <StepInsight />}
            {step === 3 && <StepConcept />}
            {step === 4 && <StepScript />}
          </div>

          <nav
            aria-label="التنقل بين الخطوات"
            className="mt-10 flex flex-col-reverse items-stretch justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={() => goTo(step - 1)}
              disabled={step === 1 || isGenerating}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-secondary hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              السابق
            </button>

            {step === 1 && !hasGenerated ? (
              <GenerateButton loading={isGenerating} onClick={handleGenerate} />
            ) : step < STEPS.length ? (
              <button
                type="button"
                onClick={() => goTo(step + 1)}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-bold text-background transition-all duration-300 hover:shadow-[0_0_32px_-6px_var(--glow)] hover:bg-primary hover:text-primary-foreground"
              >
                {`التالي: ${STEPS[step].title}`}
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden />
              </button>
            ) : (
              <GenerateButton loading={isGenerating} onClick={handleGenerate} label="إعادة توليد السيناريو" />
            )}
          </nav>
        </main>
      </div>

      <TokenTracker active={hasGenerated} />
    </div>
  )
}
