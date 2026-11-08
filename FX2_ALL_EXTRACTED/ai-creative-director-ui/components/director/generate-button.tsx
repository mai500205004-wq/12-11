import { Loader2, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

type GenerateButtonProps = {
  loading: boolean
  onClick: () => void
  label?: string
}

export function GenerateButton({ loading, onClick, label = 'توليد الرؤية الإبداعية' }: GenerateButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      aria-busy={loading}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl px-7 py-3.5 text-sm font-bold text-primary-foreground',
        'bg-gradient-to-l from-[oklch(0.86_0.12_85)] via-primary to-[oklch(0.74_0.16_60)]',
        'shadow-[0_0_0_1px_oklch(0.82_0.14_75/0.6),0_8px_32px_-8px_var(--glow)] transition-all duration-300',
        'hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_oklch(0.86_0.12_85),0_12px_48px_-6px_var(--glow)] active:translate-y-0',
        'disabled:cursor-wait disabled:hover:translate-y-0',
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.2s_ease-in-out]"
      />
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden />
          <span>جارٍ التوليد...</span>
        </>
      ) : (
        <>
          <Sparkles className="size-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" aria-hidden />
          <span>{label}</span>
        </>
      )}
    </button>
  )
}
