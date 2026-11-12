# FX — Stage 03: Creative Concept Workspace
## Component Specification & Complete Source Code (React + TypeScript + Tailwind CSS)

### 1. Types Extension (`src/types/concept.ts`)

```typescript
export interface CreativeConcept {
  id: string;
  number: string;
  vectorBadge: string;
  aspectRatioTag: string;
  cameraSpec: string;
  titleEn: string;
  titleAr: string;
  soundTag: string;
  narrativeHook: string;
  visualDirection: {
    light: string;
    audio: string;
  };
  killerLineEn: string;
  killerLineAr: string;
  dnaTag: string;
  impactScore: number;
  isRecommended?: boolean;
  selected?: boolean;
  imageUrl?: string;
}

export interface EvaluationMetric {
  vectorNameEn: string;
  vectorNameAr: string;
  concept1Score: string | number;
  concept2Score: string | number;
  concept3Score: string | number;
  highlight?: boolean;
}

export interface DirectorRevisionParams {
  acousticVacuumDrop: number; // e.g. -64 dB
  bilingualMetaphorDensity: number; // e.g. 8.4 / 10
  rhythmicDeceleration: number; // e.g. 4.2 sec
}
```

---

### 2. Full Component (`src/components/stages/Stage03Concept.tsx`)

```tsx
import React, { useState } from 'react';
import { CreativeConcept, EvaluationMetric, DirectorRevisionParams } from '../../types/concept';

const CONCEPTS_DATA: CreativeConcept[] = [
  {
    id: 'c-01',
    number: '01 / 03',
    vectorBadge: 'RECOMMENDED VECTOR // الرؤية الموصى بها',
    aspectRatioTag: 'ANAMORPHIC 2.39:1',
    cameraSpec: 'ARRI ALEXA 65',
    titleEn: 'THE SOUND OF ABSENCE',
    titleAr: 'صوت الغياب',
    soundTag: 'SOUND: VACUUM DROP',
    narrativeHook:
      'A multi-layered roar of Tokyo and Dubai trading floors and roaring helipads steps inside the vehicle, and the entire acoustic universe instantly collapses into a dead, pressurized vacuum.',
    visualDirection: {
      light: 'Chiaroscuro obsidian reflections, harsh midday sun slicing into sterile tinted solitude.',
      audio: 'Turbines & screaming market tickers cut instantly to pure zero decibels. Only the visceral rhythmic thump of human pulse.',
    },
    killerLineEn: 'Let the world scream. You have already won.',
    killerLineAr: 'دع العالم يصرخ.. أنت بالفعل قد انتصرت.',
    dnaTag: 'DNA: PROVOCATION + ZERO-SCORE',
    impactScore: 96,
    isRecommended: true,
    selected: true,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'c-02',
    number: '02 / 03',
    vectorBadge: 'CONTEMPLATIVE VECTOR // المسار التأملي',
    aspectRatioTag: 'IMAX 65MM',
    cameraSpec: '1.43:1 RATIO',
    titleEn: 'THE LAST INVISIBLE KINGDOM',
    titleAr: 'المملكة الخفية الأخيرة',
    soundTag: 'SCALE: MONUMENTAL',
    narrativeHook:
      'Where sound physically cannot propagate. Shot with the cold, imposing grandeur of a minimalist space odyssey, treating the sands as an interstellar void.',
    visualDirection: {
      light: 'Pure lunar backlight carving the vehicle\'s titanium silhouette against obsidian desert horizon.',
      audio: 'Hypnotic infrasound frequencies; individual microscopic quartz crystals sliding against the windshield.',
    },
    killerLineEn: 'Empires end where silence begins.',
    killerLineAr: 'تنتهي الإمبراطوريات حيث يبدأ الصمت.',
    dnaTag: 'DNA: SPACE-AGE MYTHOLOGY',
    impactScore: 89,
    selected: false,
    imageUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'c-03',
    number: '03 / 03',
    vectorBadge: 'EXPERIMENTAL VECTOR // المسار التجريبي',
    aspectRatioTag: 'INFRARED SENSOR',
    cameraSpec: '120 FPS',
    titleEn: 'DECIBEL NEGATIVE',
    titleAr: 'ديسيبل سالب',
    soundTag: 'AUDIO: BLACK HOLE',
    narrativeHook:
      'A visceral, sound-design-first film where the highway engine roars from the outside world as it passes, abruptly ingested and extinguished.',
    visualDirection: {
      light: 'Rapid shutter, brutalist concrete shadows, jarring flashes of sodium-vapor motorway lighting.',
      audio: 'Hyper-compressed sound collage that stutters, reverses, and is devoured into the vehicle\'s wake.',
    },
    killerLineEn: 'Sound is matter. Silence is power.',
    killerLineAr: 'الصوت مجرد مادة.. والصمت هو النفوذ.',
    dnaTag: 'DNA: CYBERNETIC BRUTALISM',
    impactScore: 84,
    selected: false,
    imageUrl: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
  },
];

const EVALUATION_METRICS: EvaluationMetric[] = [
  {
    vectorNameEn: 'DISRUPTION INDEX',
    vectorNameAr: 'مؤشر الجرأة والكسر',
    concept1Score: '9.6 / 10',
    concept2Score: '8.2 / 10',
    concept3Score: '8.8 / 10',
    highlight: true,
  },
  {
    vectorNameEn: 'PRODUCTION FEASIBILITY',
    vectorNameAr: 'الجدوى الإنتاجية',
    concept1Score: 'HIGH // 4 Principal Shoot Days (Dubai / Tokyo)',
    concept2Score: 'MODERATE // Extreme Desert Logistics',
    concept3Score: 'COMPLEX // VFX & Multi-Pass Compositing',
  },
  {
    vectorNameEn: 'CANNES LIONS POTENTIAL',
    vectorNameAr: 'فرص جوائز كان',
    concept1Score: '85% [CINEMATOGRAPHY GOLD] | 98% [GRAND PRIX PROBABILITY]',
    concept2Score: '79% [SOUND DESIGN SILVER]',
    concept3Score: '74% [FILM CRAFT BRONZE]',
    highlight: true,
  },
  {
    vectorNameEn: 'CULTURAL & REGIONAL RESONANCE',
    vectorNameAr: 'العمق المعنى الإقليمي',
    concept1Score: 'UNANIMOUS // Recontextualizes Silence as Sovereign Mastery',
    concept2Score: 'HIGH // Deep Arabian Landscape Heritage',
    concept3Score: 'GLOBAL // Non-territorial Techno-Aesthetic',
  },
];

interface Stage03ConceptProps {
  onProceedToScript?: () => void;
}

export const Stage03Concept: React.FC<Stage03ConceptProps> = ({ onProceedToScript }) => {
  const [concepts, setConcepts] = useState<CreativeConcept[]>(CONCEPTS_DATA);
  const [revisionPrompt, setRevisionPrompt] = useState(
    'Make Concept 01 darker, elevate the pacing of the sound transition, and add bilingual poetic voiceover.'
  );
  const [params, setParams] = useState<DirectorRevisionParams>({
    acousticVacuumDrop: -64,
    bilingualMetaphorDensity: 8.4,
    rhythmicDeceleration: 4.2,
  });

  const activeConcept = concepts.find((c) => c.selected) || concepts[0];

  const handleSelectConcept = (id: string) => {
    setConcepts((prev) =>
      prev.map((c) => ({
        ...c,
        selected: c.id === id,
      }))
    );
  };

  return (
    <div className="space-y-8 font-sans text-neutral-100">
      {/* 1. Header Telemetry & Strategic Anchor */}
      <div className="border border-noir-border bg-obsidian-900 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono text-signal-vermilion mb-2 tracking-wider">
            <span>[ STAGE 03 :: CREATIVE CONCEPTS & CAMPAIGN NARRATIVES ]</span>
            <span className="text-neutral-500">|</span>
            <span className="text-signal-emerald">STG-03 VERIFIED</span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-400">LATERAL DEVIATION 88.4%</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white flex flex-col md:flex-row md:items-baseline gap-2">
            <span>CREATIVE CONCEPT WORKSPACE</span>
            <span className="text-lg md:text-xl font-medium text-neutral-400 font-sans">
              // مساحة المفهوم الإبداعي وصياغة السرديات السينمائية
            </span>
          </h1>
        </div>

        {/* Strategic Foundation Pill */}
        <div className="border border-noir-border/80 bg-obsidian-950 p-4 max-w-md text-xs font-mono">
          <div className="flex justify-between items-center text-neutral-400 mb-1">
            <span className="text-neutral-500 uppercase">STRATEGIC FOUNDATION</span>
            <span className="text-signal-emerald text-[10px] tracking-widest">[LOCKED]</span>
          </div>
          <div className="font-bold text-white tracking-wide">
            TERRITORY A — THE SANCTUARY OF SILENCE
          </div>
          <p className="text-neutral-400 text-[11px] mt-1 leading-snug">
            ملاذ الصمت المطلق. Transforming physical cabin acoustics into a ruthless existential sanctuary.
          </p>
        </div>
      </div>

      {/* 2. Parallel Narrative Hypotheses (3 Column Cards) */}
      <section className="space-y-3">
        <div className="flex justify-between items-center text-xs font-mono tracking-wider text-neutral-400 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-signal-vermilion inline-block" />
            <span className="text-white font-bold uppercase">PARALLEL NARRATIVE HYPOTHESES</span>
            <span>(توازي الفرضيات السردية)</span>
          </div>
          <div>LATERAL DISPERSION: 3 NODES ACTIVE // SELECTION REQUIRED FOR STAGE 04</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              onClick={() => handleSelectConcept(concept.id)}
              className={`border transition-all flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
                concept.selected
                  ? 'border-signal-vermilion bg-obsidian-850 shadow-brutal-vermilion'
                  : 'border-noir-border bg-obsidian-900/90 hover:border-neutral-500'
              }`}
            >
              {/* Concept Hero Header Image / Visual */}
              <div className="relative h-56 bg-obsidian-950 border-b border-noir-border overflow-hidden">
                {concept.imageUrl && (
                  <img
                    src={concept.imageUrl}
                    alt={concept.titleEn}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 contrast-125 filter grayscale"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

                {/* Top Vector Tag */}
                <div className="absolute top-3 inset-x-3 flex justify-between items-center text-[11px] font-mono">
                  <span
                    className={`px-2 py-0.5 font-bold tracking-wider ${
                      concept.selected
                        ? 'bg-signal-vermilion text-black'
                        : 'bg-black/80 text-neutral-300 border border-noir-border'
                    }`}
                  >
                    {concept.vectorBadge}
                  </span>
                  <span className="text-neutral-400 bg-black/80 px-1.5 py-0.5 border border-noir-border">
                    {concept.number}
                  </span>
                </div>

                {/* Bottom Sound & Optics Specs */}
                <div className="absolute bottom-3 inset-x-3 flex justify-between items-end text-xs font-mono">
                  <span className="text-neutral-300">
                    {concept.aspectRatioTag} // {concept.cameraSpec}
                  </span>
                  <span className="bg-signal-vermilion/20 text-signal-vermilion border border-signal-vermilion/40 px-2 py-0.5 font-bold">
                    {concept.soundTag}
                  </span>
                </div>
              </div>

              {/* Concept Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-neutral-500 font-mono text-xs tracking-wider">
                    [ CONCEPT {concept.number.split(' ')[0]} ]
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mt-1">
                    {concept.titleEn}
                  </h3>
                  <div className="text-neutral-400 font-bold text-sm mb-3">
                    {concept.titleAr}
                  </div>

                  <p className="text-xs font-sans text-neutral-300 leading-relaxed border-l-2 border-noir-border pl-3">
                    {concept.narrativeHook}
                  </p>
                </div>

                {/* Lighting & Audio Aesthetics */}
                <div className="space-y-2 border-t border-noir-border/80 pt-3 text-[11px] font-mono text-neutral-400">
                  <div>
                    <span className="text-white font-bold">LIGHT: </span>
                    {concept.visualDirection.light}
                  </div>
                  <div>
                    <span className="text-signal-vermilion font-bold">AUDIO: </span>
                    {concept.visualDirection.audio}
                  </div>
                </div>

                {/* The Killer Line Box */}
                <div className="p-3 bg-obsidian-950 border border-noir-border space-y-1">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">
                    THE KILLER LINE // السطر الحاسم
                  </div>
                  <div className="text-sm font-serif italic text-white">
                    "{concept.killerLineEn}"
                  </div>
                  <div className="text-xs font-sans text-neutral-300">
                    «{concept.killerLineAr}»
                  </div>
                </div>

                {/* Footer Tag & CTA */}
                <div className="pt-2 flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-400 text-[11px]">{concept.dnaTag}</span>
                  <span className="text-signal-emerald font-bold">
                    {concept.impactScore}% IMPACT
                  </span>
                </div>

                <button
                  type="button"
                  className={`w-full py-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-colors ${
                    concept.selected
                      ? 'bg-signal-vermilion text-black'
                      : 'border border-noir-border text-neutral-300 hover:text-white hover:border-neutral-400'
                  }`}
                >
                  {concept.selected ? '✓ ACTIVE CANDIDATE // تم الاختيار' : 'INSPECT DECK // فحص المسار'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Director Evaluation Matrix (Cannes Lions Predictive Model) */}
      <section className="border border-noir-border bg-obsidian-900 p-6 space-y-4 font-mono">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-noir-border pb-3">
          <div>
            <span className="text-xs text-signal-vermilion">
              // ARBITRATION BENCHMARK (مصفوفة تقييم المفاهيم)
            </span>
            <h2 className="text-lg font-black tracking-tight text-white">
              DIRECTOR EVALUATION MATRIX
            </h2>
          </div>
          <span className="text-xs text-neutral-400 bg-obsidian-950 px-2 py-1 border border-noir-border">
            ALGORITHM: CANNES LIONS PREDICTIVE MODEL V2.8
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-noir-border text-neutral-500 tracking-wider">
                <th className="py-2.5 pr-4 uppercase">EVALUATION VECTOR</th>
                <th className="py-2.5 px-4 uppercase text-signal-vermilion">
                  C01: SOUND OF ABSENCE ★
                </th>
                <th className="py-2.5 px-4 uppercase text-neutral-300">
                  C02: INVISIBLE KINGDOM
                </th>
                <th className="py-2.5 pl-4 uppercase text-neutral-300">
                  C03: DECIBEL NEGATIVE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-noir-border/50 text-neutral-300">
              {EVALUATION_METRICS.map((row, idx) => (
                <tr key={idx} className="hover:bg-noir-surface/40">
                  <td className="py-3 pr-4 font-bold text-white">
                    <div>{row.vectorNameEn}</div>
                    <div className="text-[10px] text-neutral-500 font-sans">
                      {row.vectorNameAr}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-bold text-signal-emerald">
                    {row.concept1Score}
                  </td>
                  <td className="py-3 px-4 text-neutral-400">{row.concept2Score}</td>
                  <td className="py-3 pl-4 text-neutral-400">{row.concept3Score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Creative Director Revision Terminal */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 border border-noir-border bg-obsidian-900 p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-noir-border pb-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-signal-vermilion inline-block" />
              <span className="text-white font-bold uppercase tracking-wider">
                CREATIVE DIRECTOR REVISION TERMINAL
              </span>
            </div>
            <span className="text-signal-vermilion">
              TARGET: {activeConcept.titleEn}
            </span>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-400">
              PROMPT INJECTION CONSOLE // توجيه المحرك السردي
            </label>
            <div className="flex items-center bg-obsidian-950 border border-noir-border px-3 py-2.5 text-xs font-mono">
              <span className="text-signal-vermilion mr-2">▶</span>
              <input
                type="text"
                value={revisionPrompt}
                onChange={(e) => setRevisionPrompt(e.target.value)}
                className="bg-transparent text-white w-full outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono">
            <button className="border border-noir-border hover:border-neutral-400 px-3 py-1.5 text-neutral-300">
              ⚡ SPAWN 3 MORE RIFFS
            </button>
            <button className="border border-noir-border hover:border-neutral-400 px-3 py-1.5 text-neutral-300">
              ⇄ MELT WITH CONCEPT 02
            </button>
            <button className="border border-noir-border hover:border-neutral-400 px-3 py-1.5 text-neutral-300">
              ↺ INVERT NARRATIVE ARC
            </button>
          </div>
        </div>

        {/* Tactical Parameters Dial */}
        <div className="lg:col-span-4 border border-noir-border bg-obsidian-900 p-6 space-y-4 font-mono text-xs">
          <div className="flex justify-between items-center border-b border-noir-border pb-2">
            <span className="text-white font-bold">CREATIVE VECTOR PARAMS</span>
            <span className="text-signal-emerald">TUNED</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-neutral-400 mb-1">
                <span>ACOUSTIC VACUUM DROP</span>
                <span className="text-signal-vermilion font-bold">
                  {params.acousticVacuumDrop} dB INSTANT
                </span>
              </div>
              <input
                type="range"
                min="-80"
                max="-20"
                value={params.acousticVacuumDrop}
                onChange={(e) =>
                  setParams({ ...params, acousticVacuumDrop: parseInt(e.target.value) })
                }
                className="w-full accent-signal-vermilion"
              />
            </div>

            <div>
              <div className="flex justify-between text-neutral-400 mb-1">
                <span>BILINGUAL METAPHOR DENSITY</span>
                <span className="text-signal-vermilion font-bold">
                  HIGH ({params.bilingualMetaphorDensity}/10)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.1"
                value={params.bilingualMetaphorDensity}
                onChange={(e) =>
                  setParams({
                    ...params,
                    bilingualMetaphorDensity: parseFloat(e.target.value),
                  })
                }
                className="w-full accent-signal-vermilion"
              />
            </div>

            <div>
              <div className="flex justify-between text-neutral-400 mb-1">
                <span>RHYTHMIC DECELERATION</span>
                <span className="text-signal-vermilion font-bold">
                  {params.rhythmicDeceleration}s DURATION
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.2"
                value={params.rhythmicDeceleration}
                onChange={(e) =>
                  setParams({
                    ...params,
                    rhythmicDeceleration: parseFloat(e.target.value),
                  })
                }
                className="w-full accent-signal-vermilion"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Navigation Action Banner */}
      <div className="border border-noir-border bg-obsidian-900 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="text-[11px] font-mono text-signal-vermilion uppercase tracking-widest">
            NEXT OPERATIONAL PHASE
          </div>
          <h4 className="text-lg md:text-xl font-black uppercase text-white mt-0.5">
            CINEMATIC SCRIPT & AUDIO ARCHITECTURE // السيناريو السينمائي
          </h4>
          <p className="text-xs font-mono text-neutral-400 mt-1">
            Locking Concept 01 will synthesize scene-by-scene sluglines, bilingual voiceover tracks, and pacing ruler.
          </p>
        </div>

        <button
          onClick={onProceedToScript}
          className="bg-signal-vermilion hover:bg-orange-600 text-black font-black px-6 py-3 text-xs font-mono tracking-widest uppercase transition-all flex items-center gap-2 shadow-brutal-vermilion"
        >
          <span>LOCK CONCEPT 01 & GENERATE CINEMATIC SCRIPT →</span>
        </button>
      </div>
    </div>
  );
};

export default Stage03Concept;
```
