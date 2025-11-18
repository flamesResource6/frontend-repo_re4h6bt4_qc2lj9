export default function Learn() {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-emerald-900">Happiness Hub</h1>
        <p className="mt-2 text-emerald-800/90">Science-backed insights, gentle guides, and activities for all ages.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {title: 'The science of happiness & nature', desc: 'Why green time boosts mood and reduces stress.'},
            {title: 'The IKEA effect', desc: 'You love what you build — growing plants enhances meaning.'},
            {title: 'Gardening & mindfulness', desc: 'Turn small care moments into daily mindful rituals.'},
            {title: 'Video: Dahlia cutting basics', desc: 'Quick visual guide to get started in minutes.'},
            {title: 'Step-by-step: First month', desc: 'From cutting to first sprout with gentle reminders.'},
            {title: 'Kids & schools track', desc: 'Classroom-friendly challenges and printable badges.'},
          ].map((c,i)=>(
            <div key={i} className="rounded-2xl bg-white border border-emerald-100 p-6">
              <p className="font-semibold text-emerald-900">{c.title}</p>
              <p className="text-emerald-700/90 mt-2 text-sm">{c.desc}</p>
              <button className="mt-4 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm">Read</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
