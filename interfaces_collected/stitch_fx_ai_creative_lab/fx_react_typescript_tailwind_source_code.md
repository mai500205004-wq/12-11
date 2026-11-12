# FX — AI Creative Lab
## Production Architecture & Component Specifications (React + TypeScript + Tailwind CSS)

This document provides clean, modular, production-grade React + TypeScript + Tailwind CSS code structured for immediate export to VS Code.

---

### 1. Tailwind & Design Token Configuration (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060608',
          900: '#0c0d10',
          850: '#111216',
          800: '#16171d',
          700: '#22232b',
        },
        noir: {
          surface: '#131316',
          dim: '#0e0e10',
          bright: '#39393b',
          border: '#24252c',
        },
        signal: {
          vermilion: '#ff4800',
          emerald: '#00ff88',
          amber: '#ffb700',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Space Mono', 'ui-monospace', 'monospace'],
        sans: ['Space Grotesk', 'IBM Plex Sans Arabic', 'sans-serif'],
      },
      boxShadow: {
        'brutal-vermilion': '3px 3px 0px 0px #ff4800',
        'brutal-white': '3px 3px 0px 0px #ffffff',
      },
    },
  },
  plugins: [],
};
```

---

### 2. Core Types (`src/types/fx.ts`)

```typescript
export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface Stage {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  status: 'locked' | 'synthesizing' | 'ready' | 'active';
  badge?: string;
}

export interface LateralEngine {
  id: string;
  code: string;
  nameEn: string;
  nameAr: string;
  divergence: number;
  active: boolean;
  promptExcerpt: string;
}

export interface StrategicTerritory {
  id: string;
  letter: string;
  titleEn: string;
  titleAr: string;
  braveryScore: number;
  orthodoxyTrap: string;
  breakthrough: string;
  culturalProof: string;
  selected: boolean;
}

export interface ScriptBeat {
  id: string;
  sceneSlug: string;
  timecode: string;
  cameraRig: string;
  visualDirection: string;
  soundArchitecture: {
    layer: string;
    intensity: number; // dB
  };
  dialogue?: {
    speaker: string;
    enText: string;
    arText: string;
  };
}
```

---

### 3. Global Master Shell (`src/components/layout/FXMasterShell.tsx`)

```tsx
import React, { useState } from 'react';
import { Language } from '../../types/fx';

interface FXMasterShellProps {
  children: React.ReactNode;
  activeStage?: string;
  onStageSelect?: (stageId: string) => void;
}

export const FXMasterShell: React.FC<FXMasterShellProps> = ({
  children,
  activeStage = 'stage-01',
  onStageSelect,
}) => {
  const [lang, setLang] = useState<Language>('ar');
  const isRTL = lang === 'ar';

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-obsidian-950 text-neutral-100 font-sans selection:bg-signal-vermilion selection:text-black antialiased flex flex-col"
    >
      {/* Top Telemetry & Global Navigation */}
      <header className="border-b border-noir-border bg-obsidian-900/95 sticky top-0 z-50 px-6 py-2.5 flex items-center justify-between text-xs font-mono tracking-wider backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-signal-vermilion inline-block" />
            <span className="font-bold tracking-widest text-sm text-white">FX // AI:LAB</span>
          </div>
          <span className="text-neutral-500 hidden md:inline">|</span>
          <span className="text-neutral-400 hidden md:inline">
            PRJ-8042 // SYNTHETIC DAWN
          </span>
          <span className="px-2 py-0.5 border border-signal-vermilion/40 text-signal-vermilion bg-signal-vermilion/5 font-mono">
            CLASSIFIED // DIRECTOR TIER
          </span>
        </div>

        {/* Stage Timeline Matrix Selector */}
        <nav className="hidden lg:flex items-center gap-1 border border-noir-border p-1 bg-obsidian-950">
          {[
            { id: 'hub', code: '00', en: 'HUB', ar: 'المركز' },
            { id: 'stage-01', code: '01', en: 'BRIEF', ar: 'الملخص' },
            { id: 'stage-02', code: '02', en: 'INSIGHT', ar: 'الرؤية' },
            { id: 'stage-03', code: '03', en: 'CONCEPT', ar: 'المفهوم' },
            { id: 'stage-04', code: '04', en: 'SCRIPT', ar: 'السيناريو' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onStageSelect?.(item.id)}
              className={`px-3 py-1 flex items-center gap-1.5 transition-all text-xs ${
                activeStage === item.id
                  ? 'bg-signal-vermilion text-black font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-noir-surface'
              }`}
            >
              <span className="opacity-70">[{item.code}]</span>
              <span>{isRTL ? item.ar : item.en}</span>
            </button>
          ))}
        </nav>

        {/* Global Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 border border-noir-border px-2.5 py-1 text-neutral-400">
            <span>CHAOS DIAL</span>
            <span className="text-signal-vermilion font-bold">0.82</span>
          </div>

          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="border border-noir-border hover:border-neutral-400 px-2 py-1 text-xs text-neutral-300 font-mono transition-colors"
          >
            {lang === 'en' ? 'عربي [RTL]' : 'ENG [LTR]'}
          </button>

          <button className="bg-signal-vermilion hover:bg-orange-600 text-black font-bold px-3 py-1 text-xs transition-colors tracking-widest flex items-center gap-1">
            <span>EXPORT REEL</span>
          </button>
        </div>
      </header>

      {/* Main Dynamic Workspace Area */}
      <main className="flex-1 w-full max-w-[1720px] mx-auto p-4 md:p-6 lg:p-8">
        {children}
      </main>

      {/* Global Status Footer */}
      <footer className="border-t border-noir-border bg-obsidian-950 px-6 py-2.5 text-[11px] font-mono text-neutral-500 flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-signal-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald animate-pulse" />
            SYS_CORE: ONLINE
          </span>
          <span>LATENCY: 8.4ms</span>
          <span>FPS SYNC: 24.000 (CINEMATIC)</span>
        </div>
        <div className="text-neutral-400">
          FX LAB © 2025 // PIPELINE_ENGINE: STABLE V4.2
        </div>
      </footer>
    </div>
  );
};
```

---

### 4. Stage 01: Brief Workspace (`src/components/stages/Stage01Brief.tsx`)

```tsx
import React, { useState } from 'react';
import { LateralEngine } from '../../types/fx';

const INITIAL_ENGINES: LateralEngine[] = [
  { id: '1', code: '01', nameEn: 'PROVOCATION', nameAr: 'الاستفزاز الفكري', divergence: 8.8, active: true, promptExcerpt: 'الصمت كوسيلة هيمنة وتأثير حاسم في وجه الصخب.' },
  { id: '2', code: '02', nameEn: 'ANALOGIES', nameAr: 'التناظر المعرفي', divergence: 7.2, active: true, promptExcerpt: 'الهندسة المعمارية التفكيكية مقابل خزانات الصوت المعزولة.' },
  { id: '3', code: '03', nameEn: 'RANDOM STIMULUS', nameAr: 'المحفز العشوائي', divergence: 9.4, active: true, promptExcerpt: 'مرآة سبج أسود وسط عاصفة رملية؛ انعدام تام للانعكاس.' },
  { id: '4', code: '04', nameEn: 'OPPOSITE THINKING', nameAr: 'التفكير المعاكس', divergence: 8.1, active: true, promptExcerpt: 'السرعة القصوى يعبّر عنها بالثبات المطلق داخل المقصورة.' },
  { id: '5', code: '05', nameEn: 'CONSTRAINT REVERSAL', nameAr: 'عكس القيود', divergence: 9.6, active: true, promptExcerpt: 'إلغاء الحوار كلياً وجعل أصوات الرياح والمحرك بطلاً صوتياً.' },
];

export const Stage01Brief: React.FC = () => {
  const [engines, setEngines] = useState(INITIAL_ENGINES);
  const [chaosLevel, setChaosLevel] = useState(8.4);

  const toggleEngine = (id: string) => {
    setEngines(prev => prev.map(e => e.id === id ? { ...e, active: !e.active } : e));
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="border border-noir-border bg-obsidian-900 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="text-signal-vermilion font-mono text-xs mb-1">
            STAGE 01 // CREATIVE DECONSTRUCTION & BRIEF
          </div>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            المرحلة 01 // تفكيك الملخص الإبداعي وإعادة البناء
          </h1>
          <p className="text-neutral-400 text-xs font-mono mt-1">
            CAMPAIGN: AUDI Q-SERIES // SILENT HORIZON (MENA)
          </p>
        </div>
        <div className="flex gap-3">
          <button className="border border-noir-border hover:border-neutral-400 px-4 py-2 text-xs font-mono text-neutral-300">
            تصدير الملخص [JSON]
          </button>
          <button className="bg-signal-vermilion hover:bg-orange-600 text-black font-bold px-4 py-2 text-xs font-mono tracking-wider">
            توليد الرؤى الاستراتيجية ←
          </button>
        </div>
      </div>

      {/* Main Grid: Raw Deconstruction vs 5 Lateral Engines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Semantic Raw Feed & Matrix */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border border-noir-border bg-obsidian-900 p-5">
            <div className="flex justify-between items-center pb-3 border-b border-noir-border text-xs font-mono">
              <span className="text-neutral-400">RAW CLIENT TRANSMISSION // SHA-256</span>
              <span className="text-signal-vermilion">نقاط الجرأة الإبداعية: 94/100</span>
            </div>

            <div className="mt-4 p-4 border border-noir-border/60 bg-obsidian-950 font-sans text-sm md:text-base leading-relaxed text-neutral-200">
              "سوق سيارات الدفع الرباعي الفاخرة مشبع{' '}
              <mark className="bg-neutral-800 text-white px-1.5 py-0.5 border-b border-neutral-500">
                بالضجيج الاصطناعي
              </mark>{' '}
              والاستعراض الرقمي الزائف. نبحث عن سردية مضادة غير مهادنة ترتكز على{' '}
              <mark className="bg-signal-vermilion/20 text-signal-vermilion font-bold px-1.5 py-0.5 border border-signal-vermilion/40">
                الصمت الجوي المطلق
              </mark>
              . لا تقتحم أودي كيو تضاريس الطبيعة بل تشكل مرصداً معمارياً صلباً في قلب السكون."
            </div>

            <div className="mt-4 pt-3 border-t border-noir-border flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>ENG VERIFICATION: 100% COHESION</span>
              <span>SYNTACTIC WEIGHT: HEAVY</span>
            </div>
          </div>

          {/* 4 Core Parameter Matrix */}
          <div className="border border-noir-border bg-obsidian-900 p-5">
            <h3 className="text-xs font-mono text-neutral-400 mb-3 uppercase tracking-wider">
              مصفوفة المعايير المفككة (4 محاور أساسية)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'التوتر الجوهري', val: 'فرط الاتصال الرقمي يولد شعوراً بالاختناق؛ النخبة تبحث عن العزلة كسيادة.' },
                { label: 'محظورات العلامة', val: 'حظر كلي لمشاهد سباق الصحراء المبتذلة والكلمات التسويقية المستهلكة.' },
                { label: 'الميزة الاستثنائية', val: 'كبسولة الزجاج الصامت بمحرك الدفع الكهربائي كعازل معماري ضد الطبيعة.' },
                { label: 'الوجهة الشعورية', val: 'سكينة معمارية صلبة؛ السائق مراقب كوني فوق التضاريس.' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 border border-noir-border bg-obsidian-950 text-xs">
                  <div className="text-neutral-400 font-mono mb-1">{item.label}</div>
                  <div className="text-neutral-200">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 5 Lateral Thinking Engines Console */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-noir-border bg-obsidian-900 p-5">
            <div className="flex justify-between items-center mb-4 text-xs font-mono">
              <span className="text-white font-bold">محركات التفكير الجانبي الخمسة</span>
              <span className="text-signal-vermilion">
                {engines.filter(e => e.active).length}/5 نشطة
              </span>
            </div>

            {/* Divergence Slider */}
            <div className="mb-6 p-3 bg-obsidian-950 border border-noir-border text-xs font-mono">
              <div className="flex justify-between mb-1.5">
                <span className="text-neutral-400">مقياس التباعد والفرادة (DIVERGENCE)</span>
                <span className="text-signal-vermilion font-bold">{chaosLevel} / 10.0</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.1"
                value={chaosLevel}
                onChange={(e) => setChaosLevel(parseFloat(e.target.value))}
                className="w-full accent-signal-vermilion cursor-pointer"
              />
            </div>

            {/* Lateral Engine Toggles */}
            <div className="space-y-3">
              {engines.map((eng) => (
                <div
                  key={eng.id}
                  onClick={() => toggleEngine(eng.id)}
                  className={`p-3 border cursor-pointer transition-all ${
                    eng.active
                      ? 'border-neutral-500 bg-obsidian-850'
                      : 'border-noir-border opacity-50 bg-obsidian-950'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-mono mb-1">
                    <span className="text-white font-bold">
                      [{eng.code}] {eng.nameAr}
                    </span>
                    <span className={eng.active ? 'text-signal-emerald' : 'text-neutral-500'}>
                      {eng.active ? '[مفعّل]' : '[معطل]'}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">{eng.promptExcerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

### 5. Stage 02: Strategic Insight Workspace (`src/components/stages/Stage02Insight.tsx`)

```tsx
import React, { useState } from 'react';
import { StrategicTerritory } from '../../types/fx';

const TERRITORIES: StrategicTerritory[] = [
  {
    id: 't-a',
    letter: 'A',
    titleEn: 'THE TYRANNY OF NOISE & THE SANCTUARY OF SILENCE',
    titleAr: 'طغيان الضجيج وملاذ الصمت الحصري',
    braveryScore: 96,
    orthodoxyTrap: 'Luxury SUV ads rely on roaring horsepower, neon city skylines, and deafening electronic basslines. Every brand screams at identical volume.',
    breakthrough: 'Silence is not the passive absence of sound. It is an aggressive, calculated act of absolute dominance. The louder the world becomes, the more intimidating real quiet is.',
    culturalProof: 'في عصر القصف الخوارزمي المستمر والتلوث السمعي المطلق، يصبح السكون التام أعلى وأندر درجات الهيبة والسيادة.',
    selected: true,
  },
  {
    id: 't-b',
    letter: 'B',
    titleEn: 'THE OBSIDIAN MONOLITH IN THE EMPTY QUARTER',
    titleAr: 'النصب البركاني في الربع الخالي',
    braveryScore: 84,
    orthodoxyTrap: 'Regional SUV ads predictably rely on dust-kicking dune bashing, roaring rally drifts, and artificial adrenaline spectacles.',
    breakthrough: 'The vehicle is not conquering nature; it is a permanent architectural artifact that bends the desert around itself without churning a single grain of sand.',
    culturalProof: 'تحويل الهيبة من غزو التضاريس إلى التجذر المعماري المهيب.',
    selected: false,
  },
];

export const Stage02Insight: React.FC = () => {
  const [territories, setTerritories] = useState(TERRITORIES);

  const selectTerritory = (id: string) => {
    setTerritories(prev => prev.map(t => ({ ...t, selected: t.id === id })));
  };

  const current = territories.find(t => t.selected) || territories[0];

  return (
    <div className="space-y-6">
      {/* Stage Banner */}
      <div className="border border-noir-border bg-obsidian-900 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="text-signal-vermilion font-mono text-xs mb-1">
            STAGE 02 // STRATEGIC COLLISION & ORTHODOXY SHATTER
          </div>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            الرؤيات الاستراتيجية الصادمة // تحطيم النماذج السائدة
          </h1>
          <p className="text-neutral-400 text-xs font-mono mt-1">
            ORTHODOXY SHATTER RATIO: 9.2 / 10 | LATERAL SYNTHESIS: 5/5
          </p>
        </div>
        <button className="bg-signal-vermilion hover:bg-orange-600 text-black font-bold px-4 py-2 text-xs font-mono tracking-wider">
          تثبيت الرؤية والانتقال للمفاهيم ←
        </button>
      </div>

      {/* Main Insight Splitter */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Territory Cards */}
        <div className="lg:col-span-8 space-y-4">
          {territories.map((t) => (
            <div
              key={t.id}
              onClick={() => selectTerritory(t.id)}
              className={`p-6 border cursor-pointer transition-all ${
                t.selected
                  ? 'border-signal-vermilion bg-obsidian-850 shadow-brutal-vermilion'
                  : 'border-noir-border bg-obsidian-900 hover:border-neutral-500'
              }`}
            >
              <div className="flex justify-between items-center pb-3 border-b border-noir-border font-mono text-xs">
                <span className="font-bold text-white">
                  TERRITORY {t.letter} // {t.titleEn}
                </span>
                <span className="text-signal-vermilion font-bold">
                  جرأة الطرح: {t.braveryScore}%
                </span>
              </div>

              <h2 className="text-lg font-bold text-neutral-100 mt-3">{t.titleAr}</h2>

              {/* Clash Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 font-mono text-xs">
                <div className="p-3 bg-obsidian-950 border border-noir-border text-neutral-400">
                  <div className="text-neutral-500 mb-1">× النمط السائد (TRADITIONAL TRAP)</div>
                  <p>{t.orthodoxyTrap}</p>
                </div>
                <div className="p-3 bg-obsidian-950 border border-signal-vermilion/40 text-neutral-200">
                  <div className="text-signal-vermilion mb-1">✓ الاختراق الاستراتيجي (BREAKTHROUGH)</div>
                  <p>{t.breakthrough}</p>
                </div>
              </div>

              <div className="mt-3 p-3 bg-noir-surface/60 border border-noir-border text-xs text-neutral-300">
                <span className="text-signal-vermilion font-mono">الدليل الثقافي: </span>
                {t.culturalProof}
              </div>
            </div>
          ))}
        </div>

        {/* AI Creative Director Telemetry */}
        <div className="lg:col-span-4 border border-noir-border bg-obsidian-900 p-5 font-mono text-xs space-y-4">
          <div className="flex justify-between border-b border-noir-border pb-3">
            <span className="text-white font-bold">AI REASONING CONSOLE</span>
            <span className="text-signal-emerald">LIVE TELEMETRY</span>
          </div>

          <div className="space-y-3 text-neutral-400 leading-relaxed">
            <div>
              <span className="text-signal-vermilion">[CRITIQUE LOG]:</span> تم فحص 14 قالباً مكرراً في إعلانات السيارات الخليجية، واستبعاد كليشيهات سباقات الكثبان الرملية.
            </div>
            <div>
              <span className="text-neutral-200">[SYNTHETIC VERDICT]:</span> تم اعتماد الرؤية A لأن تباعدها الإبداعي يقلب نموذج الصوت رأساً على عقب (80% صمت سينمائي متوتر).
            </div>
          </div>

          <div className="p-3 bg-obsidian-950 border border-noir-border space-y-2">
            <div className="text-neutral-400">TACTILE PARAMETERS</div>
            <div className="flex justify-between text-neutral-300">
              <span>CHAOS / ORTHODOXY</span>
              <span className="text-signal-vermilion">0.82 [EXTREME]</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>CULTURAL DUALITY</span>
              <span className="text-signal-emerald">AR/EN LOCKED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

### 6. Stage 04: Cinematic Script Studio (`src/components/stages/Stage04Script.tsx`)

```tsx
import React from 'react';
import { ScriptBeat } from '../../types/fx';

const SCRIPT_BEATS: ScriptBeat[] = [
  {
    id: 'b-01',
    sceneSlug: '01 // EXT. FINANCIAL DISTRICT - DAWN - 05:42',
    timecode: '00:00 - 00:22',
    cameraRig: 'ARRI ALEXA 65 LARGE FORMAT // HAWK V-LITE 1.3X',
    visualDirection: 'Rain glazes the charcoal tarmac like liquid obsidian. 40,000 decibels of financial market fury echo off mirrored skyscrapers. A storm of corporate velocity.',
    soundArchitecture: { layer: 'URBAN CONCRETE RUMBLE', intensity: 84 },
  },
  {
    id: 'b-02',
    sceneSlug: '02 // INT. AUDI Q-SERIES - CONTINUOUS',
    timecode: '00:23 - 00:54',
    cameraRig: '40MM ANAMORPHIC // LOGC4 REC.709-LUT',
    visualDirection: 'The heavy frameless door closes with a definitive airlock-tight THUD. Instant, absolute stillness. The sonic storm evaporates completely.',
    soundArchitecture: { layer: 'INTERNAL CABIN ACOUSTIC NULL', intensity: -60 },
    dialogue: {
      speaker: 'THE VOICE (V.O.)',
      enText: 'In a civilization obsessed with noise, the ultimate power is not having to shout.',
      arText: 'في عالم مهووس بالضجيج، القوة الحقيقية تكمن في ألا تضطر للصراخ.',
    },
  },
];

export const Stage04Script: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stage Header */}
      <div className="border border-noir-border bg-obsidian-900 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="text-signal-vermilion font-mono text-xs mb-1">
            STAGE 04 // MASTER CONTINUITY SCRIPT & DIRECTOR TREATMENT
          </div>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            السيناريو السينمائي والتوجيه الإخراجي (ARRI 65 RAW)
          </h1>
          <p className="text-neutral-400 text-xs font-mono mt-1">
            DURATION: 90 SECONDS | ASPECT: 2.39:1 ANAMORPHIC | SOUND: DOLBY ATMOS 7.1.4
          </p>
        </div>
        <div className="flex gap-3">
          <button className="border border-noir-border px-3 py-2 text-xs font-mono text-neutral-300">
            A/V DUAL PANE
          </button>
          <button className="bg-signal-vermilion hover:bg-orange-600 text-black font-bold px-4 py-2 text-xs font-mono tracking-wider">
            EXPORT PRODUCTION BIBLE (.FDX / .PDF)
          </button>
        </div>
      </div>

      {/* Screenplay & Optics Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Screenplay Document */}
        <div className="lg:col-span-8 space-y-6">
          {SCRIPT_BEATS.map((beat) => (
            <div key={beat.id} className="border border-noir-border bg-obsidian-900 p-6 font-mono text-xs">
              <div className="flex justify-between items-center text-signal-vermilion pb-2 border-b border-noir-border">
                <span className="font-bold">{beat.sceneSlug}</span>
                <span>{beat.timecode}</span>
              </div>

              <div className="mt-3 text-neutral-400">CAMERA RIG: {beat.cameraRig}</div>
              <p className="mt-2 text-neutral-200 leading-relaxed font-sans text-sm">
                {beat.visualDirection}
              </p>

              {beat.dialogue && (
                <div className="my-6 max-w-xl mx-auto border-y border-noir-border py-4 text-center space-y-2">
                  <div className="text-signal-vermilion font-bold tracking-widest">
                    {beat.dialogue.speaker}
                  </div>
                  <div className="text-white text-base font-serif italic">
                    "{beat.dialogue.enText}"
                  </div>
                  <div className="text-neutral-300 text-base font-sans mt-1">
                    «{beat.dialogue.arText}»
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Director Optics & Acoustics Matrix */}
        <div className="lg:col-span-4 space-y-6">
          <div className="border border-noir-border bg-obsidian-900 p-5 font-mono text-xs space-y-4">
            <div className="text-white font-bold border-b border-noir-border pb-2">
              CAMERA & OPTICS TELEMETRY
            </div>
            <div className="space-y-2 text-neutral-400">
              <div className="flex justify-between">
                <span>SENSOR</span>
                <span className="text-white">Arri Alexa 65 Large Format</span>
              </div>
              <div className="flex justify-between">
                <span>GLASS</span>
                <span className="text-white">Hawk V-Lite 1.3x Anamorphic</span>
              </div>
              <div className="flex justify-between">
                <span>SHUTTER / COLOR</span>
                <span className="text-signal-vermilion">180.0° | LogC4 Rec.709</span>
              </div>
            </div>

            <div className="text-white font-bold border-b border-noir-border pt-4 pb-2">
              SOUND MASTER ARCHITECTURE
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-neutral-400 mb-1">
                  <span>URBAN CONCRETE RUMBLE</span>
                  <span className="text-signal-vermilion">+4.2 dB</span>
                </div>
                <div className="w-full bg-obsidian-950 h-1.5">
                  <div className="bg-signal-vermilion h-1.5 w-4/5" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-neutral-400 mb-1">
                  <span>INTERNAL CABIN ACOUSTIC NULL</span>
                  <span className="text-signal-emerald">-60 dB</span>
                </div>
                <div className="w-full bg-obsidian-950 h-1.5">
                  <div className="bg-signal-emerald h-1.5 w-1/12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

### 7. Main Application Entry Point (`src/App.tsx`)

```tsx
import React, { useState } from 'react';
import { FXMasterShell } from './components/layout/FXMasterShell';
import { Stage01Brief } from './components/stages/Stage01Brief';
import { Stage02Insight } from './components/stages/Stage02Insight';
import { Stage04Script } from './components/stages/Stage04Script';

export const App: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<string>('stage-01');

  return (
    <FXMasterShell activeStage={currentStage} onStageSelect={setCurrentStage}>
      {currentStage === 'stage-01' && <Stage01Brief />}
      {currentStage === 'stage-02' && <Stage02Insight />}
      {currentStage === 'stage-04' && <Stage04Script />}
      {currentStage === 'hub' && <Stage01Brief />}
    </FXMasterShell>
  );
};

export default App;
```
