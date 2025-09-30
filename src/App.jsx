import { useEffect, useRef, useState } from 'react'

const skillIcons = {
  Python: (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-gold" fill="currentColor" aria-hidden>
      <path d="M26 5h-8a7 7 0 0 0-7 7v6h12v3c0 1.1-.9 2-2 2h-3c-2.8 0-5 2.2-5 5v4a7.2 7.2 0 0 0 7.2 7.2H27a7 7 0 0 0 7-7v-6H22v-3c0-1.1.9-2 2-2h3c2.8 0 5-2.2 5-5V12c0-3.9-3.2-7-7-7Z" />
      <circle cx="20" cy="11" r="1.8" />
      <circle cx="28" cy="37" r="1.8" />
    </svg>
  ),
  Kotlin: (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-gold" aria-hidden>
      <path d="M8 40V8h32L24 24l16 16H8Z" fill="currentColor" fillOpacity="0.75" />
      <path d="M8 40 24 24 8 8v32Z" fill="currentColor" />
    </svg>
  ),
  'AI/ML': (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="24" cy="24" r="6" />
      <path d="M24 6v6m0 24v6M6 24h6m24 0h6M11 11l4.2 4.2M32.8 32.8 37 37M37 11l-4.2 4.2M11 37l4.2-4.2" />
    </svg>
  ),
  Android: (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 18a8 8 0 0 1 16 0v11c0 3.9-3.1 7-7 7h-2c-3.9 0-7-3.1-7-7V18Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M16 18a8 8 0 0 1 16 0" />
      <path d="M14 18v11a9 9 0 0 0 9 9h2a9 9 0 0 0 9-9V18" />
      <path d="M18 11 15 7M30 11l3-4" />
      <circle cx="19" cy="15" r="1.5" fill="currentColor" />
      <circle cx="29" cy="15" r="1.5" fill="currentColor" />
    </svg>
  ),
  Databases: (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <ellipse cx="24" cy="12" rx="12" ry="5" fill="currentColor" fillOpacity="0.18" />
      <path d="M12 12v24c0 2.8 5.4 5 12 5s12-2.2 12-5V12" />
      <path d="M12 24c0 2.8 5.4 5 12 5s12-2.2 12-5" />
      <path d="M12 18c0 2.8 5.4 5 12 5s12-2.2 12-5" />
    </svg>
  ),
}

const skills = [
  {
    name: 'Python',
    detail: 'LangChain tooling, rapid prototyping, expressive data storytelling',
    icon: skillIcons.Python,
  },
  {
    name: 'Kotlin',
    detail: 'Jetpack Compose UIs, modular architecture, coroutine mastery',
    icon: skillIcons.Kotlin,
  },
  {
    name: 'AI/ML',
    detail: 'LangChain · TensorFlow · NLP · CNNs · Transformers',
    icon: skillIcons['AI/ML'],
  },
  {
    name: 'Android',
    detail: 'Android 14 experiences, Firebase services, performance profiling',
    icon: skillIcons.Android,
  },
  {
    name: 'Databases',
    detail: 'MongoDB · MySQL — resilient persistence that scales',
    icon: skillIcons.Databases,
  },
]

const projects = [
  {
    id: 'memory-management',
    title: 'Memory Management Project',
    subtitle: 'C++ · Win32 API',
    description:
      'Custom OS-level memory allocator visualiser crafted in C++ with Win32 API, charting control blocks, fragmentation, and allocation timelines in real time.',
    highlight:
      'Built deterministic memory pools and debug overlays so learners can watch allocators behave beneath the UI.',
    github: 'https://github.com/jyotraditya2345/Memory-Managemnt-Project-307632',
  },
  {
    id: 'not-a-robot',
    title: "I'm Not a Robot",
    subtitle: 'Eye Tracking · Anti-Cheat',
    description:
      'Computer-vision-powered anti-cheat sentry that monitors pupil movement to guarantee attentiveness and flag suspicious spikes in deviation.',
    highlight:
      'Calibrated multi-camera tracking and blink heuristics to slash false positives while keeping latency friendly for live proctoring.',
    github: 'https://github.com/jyotraditya2345/Captch-Error-Detection',
  },
  {
    id: 'ragg-chatbot',
    title: 'RAGG Chatbot',
    subtitle: 'Retrieval QA · PDF Intelligence',
    description:
      'Retrieval-augmented chatbot that ingests PDF knowledge bases and answers domain questions with contextual citations across pages.',
    highlight:
      'Optimised chunking and reranking to keep hallucinations minimal while responding in under 1.5 seconds.',
    github: 'https://github.com/jyotraditya2345/Ragg-chatbot-to-read-files',
  },
  {
    id: 'meme-emotion',
    title: 'Emotion Detection on Offensive Memes',
    subtitle: 'Vision + NLP',
    description:
      'Multimodal classifier blending ResNet vision embeddings with transformer text streams to recognise and flag offensive meme content.',
    highlight:
      'Introduced dual-attention fusion for subtle sarcasm cues, boosting F1 scores on the Women-Offensive dataset.',
    github: 'https://github.com/jyotraditya2345/women-offensive-setection-content-memes/tree/main',
  },
  {
    id: 'rag-medfaq',
    title: 'RAG Medical FAQ Chatbot',
    subtitle: 'Healthcare · LangChain',
    description:
      'Conversational assistant for medical FAQs that keeps context windows stable, cites peer-reviewed sources, and speaks in easy-to-follow language.',
    highlight:
      'Crafted safety guardrails and graceful fallbacks that nudge users to qualified professionals whenever questions stretch beyond scope.',
    github: 'https://github.com/jyotraditya2345/rag-medfaq-chatbot',
  },
]

const experiences = [
  {
    company: 'eStreet IT',
    role: 'Data Analyst',
    timeline: '2025 – Present',
    notes: 'Lead analyst translating telemetry into treasure maps with dashboards, ETL flows, and KPI signals the crew can steer by.',
  },
  {
    company: 'Hughes Systique',
    role: 'AI Intern',
    timeline: '2024',
    notes: 'Tuned generative AI pipelines, productionised prompt chains, and released guarded AI agents into enterprise ecosystems.',
  },
  {
    company: 'YHills EdTech',
    role: 'Cybersecurity Intern',
    timeline: '2024',
    notes: 'Automated vulnerability sweeps and guard-duty scripts while coaching recruits on secure code practices.',
  },
]

const achievements = [
  {
    name: 'ReactJS – Infosys Springboard',
    type: 'Certification',
    blurb:
      'Hands-on certification focused on component systems, state orchestration, and production deployment patterns.',
    link: 'https://drive.google.com/file/d/1T_oBArpSz-8kV9YGMi_QD_grUZmYRg2G/view',
  },
  {
    name: 'Python – Infosys Springboard',
    type: 'Certification',
    blurb:
      'Credential covering modern Python practices, from asynchronous workflows to data automation.',
    link: 'https://drive.google.com/file/d/1kbQzKF6V5X5ErYl8_Gz151FFa_kIHUuY/view',
  },
  {
    name: 'Android 14 + Kotlin MasterClass – Udemy',
    type: 'Certification',
    blurb:
      'Masterclass on Android 14, Jetpack Compose, and Kotlin coroutines with production-grade app builds.',
    link: 'https://www.udemy.com/certificate/UC-1e7cd835-45ca-4bce-ba2b-4d8597aa1108/',
  },
]

const ASSET_BASE_URL = import.meta.env.BASE_URL
const SHIP_IMAGE_URL = `${ASSET_BASE_URL}Thousand_Sunny_Infobox.webp`
const SHADOW_MONARCH_IMAGE = `${ASSET_BASE_URL}shadow-monarch.jpeg`
const BOUNTY_IMAGE = `${ASSET_BASE_URL}one-piece.png`
const BOUNTY_FLOAT_IMAGE = `${ASSET_BASE_URL}bounty-poster.png`
const BACKGROUND_IMAGE = `${ASSET_BASE_URL}background image.png`

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const achievementsRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative min-h-screen text-gray-100">
      <GlobalBackground />
      <NoiseOverlay />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-oceanLight/30 bg-abyss/70 backdrop-blur-xl">
        <div className="section-container flex flex-col items-start gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-gray-300 sm:gap-6 sm:text-sm">
            <button
              type="button"
              onClick={() => scrollTo(aboutRef)}
              className="transition hover:text-gold"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollTo(projectsRef)}
              className="transition hover:text-gold"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => scrollTo(achievementsRef)}
              className="transition hover:text-gold"
            >
              Achievements
            </button>
            <button
              type="button"
              onClick={() => scrollTo(contactRef)}
              className="transition hover:text-gold"
            >
              Contact
            </button>
          </nav>
          <a
            href="https://www.linkedin.com/in/jyotiradityachopra/"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-gold/60 px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.32em] text-gold transition hover:bg-gold hover:text-abyss sm:w-auto"
          >
            Join the Crew
          </a>
        </div>
      </header>

      <main className="pt-24">
        <section className="relative flex min-h-screen items-center overflow-hidden pt-12 sm:pt-20">
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 opacity-60">
            <OceanBackdrop />
          </div>
          <div className="section-container relative z-10 grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.6em] text-gold/80">
                  Ahoy! Welcome aboard the Going Merry · Shadow Expedition
                </p>
                <h1 className="font-display text-5xl leading-tight text-gold drop-shadow-[0_10px_40px_rgba(244,193,93,0.35)] sm:text-6xl">
                  Jyotiraditya Chopra
                </h1>
                <p className="max-w-xl text-lg text-gray-300">
                  Developer forging AI/ML adventures, Android experiences, and stories that sail between worlds. Blending pirate grit with shadow hunter focus to build immersive solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => scrollTo(projectsRef)}
                  className="rounded-full border border-gold/70 bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-abyss transition hover:shadow-glow"
                >
                  View My Work
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo(contactRef)}
                  className="rounded-full border border-gold/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold transition hover:bg-abyssLight/70 hover:text-gold"
                >
                  Contact Me
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <span className="uppercase tracking-[0.4em]">Developer</span>
                <span className="uppercase tracking-[0.4em]">AI/ML Engineer</span>
                <span className="uppercase tracking-[0.4em]">Android Builder</span>
                <span className="uppercase tracking-[0.4em]">Storyteller</span>
              </div>
              <HeroShipVisual />
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-ember/20 blur-3xl" />
                <div className="relative w-full max-w-md rounded-[40px] border border-oceanLight/40 bg-oceanLight/20 p-6 backdrop-blur-xl shadow-abyss">
                  <SoloLevelingSilhouette />
                  <div className="relative mt-6 rounded-[30px] border border-treasure/40 bg-gradient-to-b from-amber-900/40 via-amber-800/30 to-amber-950/60 p-6 text-amber-100 shadow-inner">
                    <p className="text-center font-display text-3xl tracking-[0.22em] text-amber-200">
                      Wanted
                    </p>
                    <div className="mt-4 flex justify-center">
                      <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-amber-500/70 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                        <img
                          src={BOUNTY_IMAGE}
                          alt="Wanted poster portrait"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="mt-6 space-y-2 text-center text-sm tracking-[0.3em] text-amber-200/90">
                    <p className="font-semibold">LEVEL 99 DEVELOPER</p>
                    <p>SKILLS · RAG · ANDROID · KOTLIN · PYTHON</p>
                  </div>
                  <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
                  <p className="mt-4 text-center text-xs uppercase tracking-[0.35em] text-amber-300/70">
                    Capture alive for legendary builds
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ShipAndShadows />
        </section>

        <section ref={aboutRef} id="about" className="relative py-24 scroll-mt-40">
          <div className="section-container grid items-start gap-12 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-8">
              <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-gold">
                About The Captain
              </h2>
              <p className="text-lg text-gray-300">
                I weave narratives through code — blending data-driven insight, mobile craftsmanship, and AI intuition. From designing retrieval-augmented knowledge keepers to charting Android adventures, each project is a voyage into uncharted waters.
              </p>
              <p className="text-lg text-gray-300">
                Inspired by the Going Merry spirit and the relentless shadows of Solo Leveling, I build resilient, story-rich experiences. Every crew deserves interfaces that feel alive, adaptive, and ready for the next dungeon gate.
              </p>
            </div>
            <div className="rounded-[36px] border border-amber-600/50 bg-gradient-to-b from-amber-900/40 via-amber-900/20 to-amber-950/60 p-8 text-amber-200 shadow-abyss">
              <p className="text-center font-display text-3xl tracking-[0.28em]">Bounty Ledger</p>
              <ul className="mt-6 space-y-4 text-sm uppercase tracking-[0.3em] text-amber-100/80">
                <li className="grid grid-cols-[140px,1fr] items-start gap-x-6 border-b border-amber-500/30 pb-4 sm:grid-cols-[180px,1fr] sm:gap-x-8">
                  <span>Alias</span>
                  <span className="justify-self-end text-right leading-snug">"Code Voyager"</span>
                </li>
                <li className="grid grid-cols-[140px,1fr] items-start gap-x-6 border-b border-amber-500/30 pb-4 sm:grid-cols-[180px,1fr] sm:gap-x-8">
                  <span>Current Quest</span>
                  <span className="justify-self-end text-right leading-snug">AI-Augmented Experiences</span>
                </li>
                <li className="grid grid-cols-[140px,1fr] items-start gap-x-6 border-b border-amber-500/30 pb-4 sm:grid-cols-[180px,1fr] sm:gap-x-8">
                  <span>Guild</span>
                  <span className="justify-self-end text-right leading-snug">Solo Dev Corps</span>
                </li>
                <li className="grid grid-cols-[140px,1fr] items-start gap-x-6 sm:grid-cols-[180px,1fr] sm:gap-x-8">
                  <span>Alignment</span>
                  <span className="justify-self-end text-right leading-snug">Shadow Hunter — Treasure Seeker</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative py-24 scroll-mt-40">
          <div className="section-container">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-gold">
                  Dungeon Power Ups
                </h2>
                <p className="mt-4 max-w-xl text-gray-300">
                  Arcane rune cards infused with the skills that fuel each battle. Hover to feel their energy pulsate like dungeon cores ready to unleash.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="rune-card p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/60 bg-abyss/60 shadow-glow animate-pulseGlow">
                        {skill.icon}
                      </div>
                      <h3 className="font-display text-2xl uppercase tracking-[0.35em] text-gold">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-300">{skill.detail}</p>
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                  </div>
                ))}
                <FloatingBountyPoster />
              </div>
            </div>
          </div>
        </section>

        <section ref={projectsRef} id="projects" className="relative py-24 scroll-mt-40">
          <div className="section-container">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-gold">
                  Floating Islands · Projects
                </h2>
                <p className="mt-4 max-w-2xl text-gray-300">
                  Each island floats above a dungeon gate, powered by craftsmanship and relentless iteration. Drop anchor to explore the lore and source code.
                </p>
              </div>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="island-card group flex h-full flex-col overflow-hidden border border-gold/5 p-8 text-left"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-3xl uppercase tracking-[0.3em] text-gold">
                      {project.title}
                    </h3>
                    <span className="min-w-[8rem] rounded-full border border-ember/60 px-4 py-2 text-center text-xs uppercase tracking-[0.3em] text-ember/90">
                      View Lore
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-ember/80">{project.subtitle}</p>
                  <p className="mt-6 flex-1 text-sm leading-relaxed text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gold/80">
                    <span>Click to open logbook</span>
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 scroll-mt-40">
          <div className="section-container">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-gold">
                  Crew & Allies
                </h2>
                <p className="mt-4 max-w-2xl text-gray-300">
                  Legendary crews that sharpened my blades. Each engagement stacked XP through data quests, AI raids, and cybersecurity sieges.
                </p>
              </div>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {experiences.map((experience) => (
                <div key={experience.company} className="crew-card p-8">
                  <p className="text-xs uppercase tracking-[0.4em] text-ember/80">
                    {experience.timeline}
                  </p>
                  <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.32em] text-gold">
                    {experience.company}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gray-300">
                    {experience.role}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-gray-300">
                    {experience.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={achievementsRef} id="achievements" className="relative py-24 scroll-mt-40">
          <div className="section-container">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-gold">
                  Treasure Chest · Achievements
                </h2>
                <p className="mt-4 max-w-2xl text-gray-300">
                  Tokens collected along the voyage. Each scroll and medal represents a dungeon cleared and a new skill unlocked.
                </p>
              </div>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {achievements.map((achievement) => (
                <div key={achievement.name} className="treasure-card p-8">
                  <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">
                    {achievement.type}
                  </p>
                  <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.3em] text-gold">
                    {achievement.name}
                  </h3>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
                  <p className="mt-6 text-sm text-amber-100/80">{achievement.blurb}</p>
                  {achievement.link ? (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-amber-200 transition hover:text-amber-100"
                    >
                      View Certificate
                      <span aria-hidden className="text-base">↗</span>
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={contactRef} id="contact" className="relative pb-24 scroll-mt-40">
          <div className="section-container">
            <div className="rounded-[40px] border border-ember/60 bg-oceanLight/30 p-12 backdrop-blur-2xl shadow-abyss">
              <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-gold">
                Contact · Dungeon Gate
              </h2>
              <p className="mt-4 max-w-2xl text-gray-300">
                Ready to open the next gate together? Summon shadow soldiers, chart a treasure hunt, or craft an android experience that feels otherworldly.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ContactCard label="Email" value="jyotiradityachopra973@gmail.com" href="mailto:jyotiradityachopra973@gmail.com" />
                <ContactCard label="LinkedIn" value="linkedin.com/in/jyotiradityachopra" href="https://www.linkedin.com/in/jyotiradityachopra/" />
                <ContactCard label="GitHub" value="github.com/jyotraditya2345" href="https://github.com/jyotraditya2345" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-oceanLight/20 bg-abyss/90 py-10">
        <div className="section-container flex flex-col gap-4 text-center text-xs uppercase tracking-[0.3em] text-gray-500">
          <p>Going Merry · Shadow Legion © {new Date().getFullYear()}</p>
          <p>Crafted with Tailwind, React, and a touch of anime grit</p>
        </div>
      </footer>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      ) : null}
    </div>
  )
}

function ContactCard({ label, value, href }) {
  const isMailto = href?.startsWith('mailto:')
  return (
    <a
      href={href}
      target={isMailto ? undefined : '_blank'}
      rel={isMailto ? undefined : 'noreferrer'}
      className="group flex flex-col gap-2 overflow-hidden rounded-3xl border border-gold/40 bg-abyss/40 p-6 transition hover:border-gold hover:shadow-glow"
    >
      <span className="text-xs uppercase tracking-[0.4em] text-ember/80">{label}</span>
      <span className="break-all text-sm font-semibold tracking-[0.16em] text-gold transition group-hover:text-amber-200">
        {value}
      </span>
    </a>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[32px] border border-gold/50 bg-abyss/95 p-10 shadow-glow">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 text-xs uppercase tracking-[0.4em] text-amber-200/70 transition hover:text-amber-200"
        >
          Close ×
        </button>
        <p className="text-xs uppercase tracking-[0.4em] text-ember/80">Project Logbook</p>
        <h3 className="mt-4 font-display text-4xl uppercase tracking-[0.3em] text-gold">
          {project.title}
        </h3>
        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-ember/80">
          {project.subtitle}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-gray-200">{project.description}</p>
        <div className="mt-6 rounded-2xl border border-gold/30 bg-abyss/60 p-6 text-sm text-gray-200">
          <p className="uppercase tracking-[0.32em] text-gold/80">Mission Highlight</p>
          <p className="mt-3 leading-relaxed">{project.highlight}</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold transition hover:bg-gold hover:text-abyss"
          >
            View GitHub
          </a>
          <span className="text-xs uppercase tracking-[0.4em] text-gray-500">
            Adventure recorded in the Grand Line Archives
          </span>
        </div>
      </div>
    </div>
  )
}

function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <img
        src={BACKGROUND_IMAGE}
        alt="Straw hat and swords background"
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}

function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.15] mix-blend-soft-light">
      <div className="absolute inset-0 animate-floatSlow" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' viewBox=\'0 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.9\'/%3E%3C/svg%3E")', backgroundSize: '240px 240px' }} />
    </div>
  )
}

function OceanBackdrop() {
  return (
    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="oceanGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0f1b33" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#061024" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#01040d" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#oceanGradient)" />
      {[...Array(15)].map((_, index) => {
        const opacity = 0.08 + index * 0.02
        const y = 60 + index * 35
        return (
          <path
            key={index}
            d={`M0 ${y} Q 120 ${y - 18}, 240 ${y} T 480 ${y} T 720 ${y}`}
            fill="none"
            stroke="#132648"
            strokeOpacity={opacity}
            strokeWidth="1.2"
          />
        )
      })}
    </svg>
  )
}

function HeroShipVisual() {
  return (
    <div className="relative max-w-xl -translate-y-2 rounded-[40px] border border-oceanLight/40 bg-oceanLight/20 p-6 shadow-abyss backdrop-blur-xl md:-translate-y-3 lg:-translate-y-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] border border-oceanLight/30 bg-abyss/80">
        <img
          src={SHIP_IMAGE_URL}
          alt="Thousand Sunny sailing across the hero horizon"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[40px] ring-1 ring-inset ring-abyssLight/20" />
    </div>
  )
}

function FloatingBountyPoster() {
  return (
    <div className="hidden xl:flex items-center justify-center">
      <div className="animate-float">
        <img
          src={BOUNTY_FLOAT_IMAGE}
          alt="Floating bounty poster"
          className="w-60 max-w-[18rem] rotate-3 rounded-[22px] border border-amber-400/70 shadow-[0_22px_55px_rgba(3,7,18,0.6)]"
          loading="lazy"
        />
      </div>
    </div>
  )
}

function ShipAndShadows() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      <div className="absolute top-36 right-[10%] flex gap-8 opacity-70">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-48 w-32 animate-float rounded-full bg-gradient-to-b from-indigo-900/70 via-abyss/60 to-black/70 blur-[1px]"
            style={{ animationDelay: `${index * 1.5}s` }}
          />
        ))}
      </div>
    </div>
  )
}

function SoloLevelingSilhouette() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-oceanLight/40 bg-gradient-to-b from-abyss via-oceanLight/40 to-abyss p-8">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(40, 60, 120, 0.35), transparent 55%), radial-gradient(circle at 80% 15%, rgba(14, 25, 55, 0.45), transparent 60%)' }} />
      <div className="relative mx-auto aspect-[3/4] w-40 overflow-hidden rounded-[22px] border border-indigo-400/40 bg-black/40 shadow-[0_20px_45px_rgba(3,7,18,0.65)]">
        <img
          src={SHADOW_MONARCH_IMAGE}
          alt="Shadow monarch form"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-oceanLight/40" />
      </div>
      <p className="mt-6 text-center text-sm uppercase tracking-[0.4em] text-gray-300">
        Shadow Monarch Form
      </p>
    </div>
  )
}

export default App
