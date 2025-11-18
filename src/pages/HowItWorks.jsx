export default function HowItWorks() {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-emerald-900">How Cutty Works</h1>
        <p className="mt-3 text-emerald-800/90">Three gentle steps to grow plants and happiness.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Get your Cutty Box',
              desc: 'DIY plant kit with dahlia cutting, soil, pot, fertilizer, and mini greenhouse.'
            },
            {
              title: 'Grow at your own pace',
              desc: 'Easy, guided growth with reminders and simple instructions.'
            },
            {
              title: 'Share your journey',
              desc: 'Post photos, celebrate milestones, and connect with others.'
            }
          ].map((s, i) => (
            <div key={i} className="rounded-2xl bg-white border border-emerald-100 p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">{i + 1}</div>
              <p className="font-semibold text-emerald-900">{s.title}</p>
              <p className="text-emerald-700/90 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
