import { useState, useMemo, useEffect, useRef } from 'react'

export default function Learn() {
  const sections = useMemo(() => ([
    {
      id: 'science',
      title: 'The science of happiness & nature',
      desc: 'Why green time boosts mood and reduces stress.',
      content: (
        <div className="space-y-4 text-emerald-900/90">
          <p>
            Spending time with plants—even a single one on your windowsill—has a surprisingly powerful impact on your well‑being.
            Research shows that caring for living things lowers stress hormones, reduces anxiety, and helps the mind slow down.
            When you touch soil, observe new leaves, or simply check on your plant, your brain shifts into a calmer, more mindful state.
          </p>
          <p>
            This happens because nature naturally invites presence. Small moments like watering, noticing growth, or adjusting the light pull
            your attention away from stress and back into the now. These tiny pauses create mental breathing room, reduce cognitive overload,
            and help the body relax.
          </p>
          <p>
            Green time also strengthens what psychologists call nature connectedness—the feeling of belonging to the natural world.
            People with a stronger connection to nature report higher happiness, greater purpose, and better overall life satisfaction.
            And the best part: you don’t need a garden or forest to feel these effects. Even indoor plants can provide the same emotional benefits.
          </p>
          <p>
            By making plant care simple and accessible, Cutty brings these well‑being benefits into everyday life. Growing a small cutting into a flourishing plant is more than a hobby—
            it’s a gentle way to boost mood, restore balance, and reconnect with something real.
          </p>
        </div>
      )
    },
    {
      id: 'ikea',
      title: 'The IKEA effect',
      desc: 'You love what you build — growing plants enhances meaning.',
      content: (
        <div className="space-y-4 text-emerald-900/90">
          <p>
            Humans naturally value things more when they’ve helped create them. This is known as the IKEA Effect—the psychological phenomenon
            where effort increases love, pride, and emotional attachment. When you build something yourself, it becomes meaningful because you made it happen.
          </p>
          <p>
            Cutty brings this effect into the world of plant care. When you plant a small cutting, water it, and watch it slowly turn into a thriving flower,
            you don’t just see a plant—you see your work, your patience, your care. Every new leaf becomes a small victory. Every bit of growth reflects your own effort.
          </p>
          <p>
            This feeling of ownership boosts happiness in a powerful way. It strengthens confidence, increases motivation, and creates a deep sense of accomplishment.
            Instead of instant, disposable results, you experience the joy of watching something you nurtured come to life.
          </p>
          <p>
            Growing a plant isn’t just an activity—it’s a meaningful journey. And meaning is one of the strongest foundations of long‑term well‑being.
            With Cutty, you get to build something beautiful, and love it even more because it grew through you.
          </p>
        </div>
      )
    },
    {
      id: 'mindfulness',
      title: 'Gardening & mindfulness',
      desc: 'Turn small care moments into daily mindful rituals.',
      content: (
        <div className="space-y-4 text-emerald-900/90">
          <h3 className="text-lg font-semibold text-emerald-900">Turn small care moments into daily mindful rituals</h3>
          <p>
            Gardening naturally slows life down. When you water your plant, feel the soil, or notice a tiny new leaf, your mind shifts out of hurry mode
            and into calm, focused attention. These small gestures become mindful rituals—simple pauses that gently reset your thoughts.
          </p>
          <p>
            Mindfulness doesn’t always require meditation or long practices. Sometimes, it’s as easy as checking on your plant. Each moment of care draws you into the present:
            the color of a new sprout, the texture of the soil, the way your plant leans toward the light. These small observations quiet the mind and reduce stress,
            helping you feel more centered.
          </p>
          <p>
            With Cutty, these mindful moments happen naturally throughout your week. As your plant grows, you grow with it—becoming more observant, patient,
            and connected to what’s right in front of you. In a world full of distractions, caring for a living thing becomes a gentle anchor, grounding your day with calm and intention.
          </p>
        </div>
      )
    }
  ]), [])

  const [active, setActive] = useState(sections[0].id)
  const panelRef = useRef(null)

  // Optional: support hash deep-linking like /learn#ikea
  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : ''
    if (hash && sections.find(s => s.id === hash)) {
      setActive(hash)
    }
  }, [sections])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.hash = active
      window.history.replaceState(null, '', url.toString())
    }
  }, [active])

  const activeSection = sections.find(s => s.id === active) ?? sections[0]

  return (
    <div className="bg-emerald-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-emerald-900">Happiness Hub</h1>
        <p className="mt-2 text-emerald-800/90">Science-backed insights, gentle guides, and activities for all ages.</p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {sections.concat([
            { id: 'video', title: 'Video: Dahlia cutting basics', desc: 'Quick visual guide to get started in minutes.' },
            { id: 'first-month', title: 'Step-by-step: First month', desc: 'From cutting to first sprout with gentle reminders.' },
            { id: 'kids', title: 'Kids & schools track', desc: 'Classroom-friendly challenges and printable badges.' },
          ]).map((c) => (
            <button
              key={c.id}
              onClick={() => {
                if (sections.some(s => s.id === c.id)) {
                  setActive(c.id)
                  panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className={`text-left rounded-2xl border p-6 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50 ${
                sections.some(s => s.id === c.id)
                  ? active === c.id
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                    : 'bg-white border-emerald-100 hover:border-emerald-200 hover:shadow-sm'
                  : 'bg-white/60 border-emerald-100/70 opacity-70 cursor-default'
              }`}
              aria-pressed={active === c.id}
            >
              <p className={`font-semibold ${active === c.id ? 'text-white' : 'text-emerald-900'}`}>{c.title}</p>
              <p className={`${active === c.id ? 'text-emerald-50/90' : 'text-emerald-700/90'} mt-2 text-sm`}>{c.desc}</p>
              {sections.some(s => s.id === c.id) ? (
                <span className={`inline-block mt-4 text-xs font-medium rounded-full px-3 py-1 ${active === c.id ? 'bg-white/15 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                  Read
                </span>
              ) : (
                <span className="inline-block mt-4 text-xs font-medium rounded-full px-3 py-1 bg-emerald-100 text-emerald-800/70">Coming soon</span>
              )}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div ref={panelRef} className="mt-10">
          <div role="tablist" aria-label="Learn tabs" className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active === s.id}
                aria-controls={`panel-${s.id}`}
                id={`tab-${s.id}`}
                onClick={() => setActive(s.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50 ${
                  active === s.id ? 'bg-emerald-700 text-white' : 'bg-white text-emerald-800 border border-emerald-200 hover:border-emerald-300'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${activeSection.id}`}
            aria-labelledby={`tab-${activeSection.id}`}
            className="mt-6 rounded-2xl bg-white border border-emerald-100 p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-emerald-900">{activeSection.title}</h2>
            <p className="mt-1 text-emerald-700/90">{activeSection.desc}</p>
            <div className="mt-5 prose prose-emerald max-w-none">
              {activeSection.content}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
