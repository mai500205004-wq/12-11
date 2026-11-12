'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  ChevronDown,
  CircleHelp,
  Command,
  Film,
  Grid3X3,
  Layers3,
  Menu,
  PenLine,
  Play,
  Plus,
  Search,
  Settings2,
  Sparkles,
  TerminalSquare,
  Zap,
} from 'lucide-react'

type Theme = 'noir' | 'editorial' | 'quantum'

const themes: { id: Theme; icon: typeof Film; name: string; subtitle: string }[] = [
  { id: 'noir', icon: Film, name: "Director's Noir", subtitle: 'Cinematic studio' },
  { id: 'editorial', icon: PenLine, name: 'Haute Editorial', subtitle: 'Luxury publishing' },
  { id: 'quantum', icon: Zap, name: 'Quantum Deck', subtitle: 'Telemetry command' },
]

function Logo() {
  return (
    <div className="brand-mark" aria-label="TextFX home">
      <span className="brand-icon"><Sparkles /></span>
      <span>TEXT<span>FX</span></span>
    </div>
  )
}

function ThemeSwitcher({ theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
  const [open, setOpen] = useState(false)
  const current = themes.find((item) => item.id === theme)!
  const Icon = current.icon

  return (
    <div className="switcher-wrap">
      <button className="realm-switcher" onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="listbox">
        <span className="switcher-icon"><Icon /></span>
        <span className="switcher-copy"><small>VISUAL REALM</small><strong>{current.name}</strong></span>
        <ChevronDown className="switcher-chevron" />
      </button>
      {open && (
        <div className="theme-menu" role="listbox">
          {themes.map((item) => {
            const ItemIcon = item.icon
            return (
              <button key={item.id} className={`theme-option ${theme === item.id ? 'selected' : ''}`} onClick={() => { setTheme(item.id); setOpen(false) }} role="option" aria-selected={theme === item.id}>
                <span className="option-icon"><ItemIcon /></span>
                <span><strong>{item.name}</strong><small>{item.subtitle}</small></span>
                {theme === item.id && <Check />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Sidebar({ theme }: { theme: Theme }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top"><Logo /><button className="mobile-menu" aria-label="Open menu"><Menu /></button></div>
      <div className="workspace-label"><span className="workspace-avatar">A</span><span><b>Acme Studio</b><small>Pro workspace</small></span><ChevronDown /></div>
      <nav className="side-nav" aria-label="Main navigation">
        <p>Workspace</p>
        <a className="active"><Grid3X3 /> Overview <span className="nav-count">4</span></a>
        <a><Layers3 /> Projects</a>
        <a><TerminalSquare /> Prompt lab <span className="new-dot" /></a>
        <a><BarChart3 /> Analytics</a>
        <p className="nav-space">Manage</p>
        <a><Settings2 /> Settings</a>
        <a><CircleHelp /> Help center</a>
      </nav>
      <div className="sidebar-bottom"><div className="usage-head"><span>Monthly usage</span><b>68%</b></div><div className="usage-bar"><span /></div><small>20.4k of 30k generations</small><button className="upgrade-btn">Upgrade plan <ArrowUpRight /></button></div>
    </aside>
  )
}

function StatCard({ label, value, trend, icon: Icon }: { label: string; value: string; trend: string; icon: typeof Activity }) {
  return <div className="stat-card"><div className="stat-top"><span>{label}</span><span className="stat-icon"><Icon /></span></div><div className="stat-value">{value}</div><div className="stat-trend"><span>↗ {trend}</span> <em>vs last month</em></div></div>
}

function PromptCard({ theme }: { theme: Theme }) {
  return <section className="prompt-card"><div className="prompt-header"><div><div className="eyebrow">PROMPT LAB <span className="live-chip"><i /> LIVE</span></div><h2>Turn an idea into a <i>scene.</i></h2><p>Direct your next breakthrough with a little help from TextFX.</p></div><button className="ghost-button"><Settings2 /> Configure</button></div><div className="prompt-editor"><div className="editor-toolbar"><span className="file-label"><span className="file-dot" /> Untitled scene</span><span className="editor-tools"><Command /> K <span className="divider" /> <span>GPT-4o</span><ChevronDown /></span></div><div className="prompt-input">A rainy night in Tokyo. A lone detective steps out of the shadows, his coat catching the neon glow of a city that never forgets<span className="cursor" /></div><div className="prompt-footer"><span className="char-count">104 / 2,000</span><button className="generate-button"><Play /> Generate scene</button></div></div><div className="prompt-suggestions"><span>Try a direction</span><button>More cinematic <ArrowUpRight /></button><button>Make it concise <ArrowUpRight /></button><button>Write a logline <ArrowUpRight /></button></div></section>
}

function RecentProjects() {
  const projects = [
    { title: 'The Last Light', type: 'Screenplay · 14 scenes', time: 'Edited 8m ago', tone: 'gold', mark: '◒' },
    { title: 'Brand manifesto v2', type: 'Long-form · 1,240 words', time: 'Edited 2h ago', tone: 'burgundy', mark: 'M' },
    { title: 'Orbital / launch film', type: 'Treatment · 8 scenes', time: 'Edited yesterday', tone: 'cyan', mark: '◈' },
  ]
  return <section className="recent-section"><div className="section-heading"><div><div className="eyebrow">YOUR WORK</div><h2>Recent projects</h2></div><button className="view-all">View all <ArrowUpRight /></button></div><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className={`project-art ${project.tone}`}><span>{project.mark}</span><small>{project.type.split(' · ')[0].toUpperCase()}</small></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.type}</p></div><span className="project-menu">•••</span></div><div className="project-time">{project.time}</div></article>)}<button className="new-project"><Plus /><span>New project</span><small>Start with a blank canvas</small></button></div></section>
}

function QuantumPulse() {
  return <div className="quantum-pulse" aria-hidden="true"><div className="pulse-ring ring-one" /><div className="pulse-ring ring-two" /><div className="pulse-core" /></div>
}

export default function Page() {
  const [theme, setTheme] = useState<Theme>('noir')
  return <main className={`app-shell theme-${theme}`}><Sidebar theme={theme} /><div className="main-content"><header className="topbar"><div className="mobile-logo"><Logo /></div><div className="breadcrumb"><span>Workspace</span><span>/</span><b>Overview</b></div><div className="top-actions"><ThemeSwitcher theme={theme} setTheme={setTheme} /><button className="icon-button" aria-label="Search"><Search /></button><button className="icon-button notification" aria-label="Notifications"><Bell /><i /></button><span className="user-avatar">JD</span></div></header><div className="page-content"><div className="hero-row"><div><p className="eyebrow">WEDNESDAY, OCTOBER 22, 2026</p><h1>Good morning, Jordan<span>.</span></h1><p className="hero-subtitle">Your creative command center is ready.</p></div><button className="primary-button"><Plus /> New project</button></div><div className="stats-grid"><StatCard label="Generations" value="1,284" trend="12.8%" icon={Sparkles} /><StatCard label="Words created" value="48.6k" trend="8.2%" icon={PenLine} /><StatCard label="Active projects" value="12" trend="2 new" icon={Layers3} /><div className="signal-card"><div><span className="eyebrow">SYSTEM STATUS</span><h3>All systems <i>nominal</i></h3></div><QuantumPulse /><span className="signal-label">98.4% uptime</span></div></div><PromptCard theme={theme} /><RecentProjects /></div><footer className="footer"><span>TextFX Intelligence Suite <b>v2.4.0</b></span><span>Made for the next scene <span className="footer-star">✦</span></span></footer></div></main>
}
