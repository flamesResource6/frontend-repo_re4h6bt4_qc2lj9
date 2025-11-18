import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-emerald-50 min-h-screen text-emerald-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">Grow plants. Grow happiness.</h1>
            <p className="mt-4 text-lg text-emerald-800/90">A gentle social platform where people share plant progress, support each other, and build real happiness through nature.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/community" className="rounded-full bg-emerald-600 text-white px-6 py-3 shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors cursor-pointer" aria-label="Join the Community">
                Join the Community
              </Link>
              <Link to="/shop" className="rounded-full bg-white text-emerald-800 px-6 py-3 border border-emerald-200 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors cursor-pointer" aria-label="Start Your Cutty Kit">
                Start Your Cutty Kit
              </Link>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-3xl bg-white shadow-lg border border-emerald-100 overflow-hidden">
              <img 
                src="https://media.discordapp.net/attachments/692077531272052768/1440123736064917534/image0.jpg?ex=691dabfe&is=691c5a7e&hm=6fc8885ec508c053a319411971290ce5222535311a6002d43b159addb44a75e6&=&format=webp&width=928&height=930" 
                alt="Cutty Box kit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">How Cutty Works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Get your Cutty Box',
                desc: 'DIY plant kit with dahlia cutting, soil, pot, fertilizer, and mini greenhouse.',
                to: '/shop',
              },
              {
                title: 'Grow at your own pace',
                desc: 'Easy, guided growth with reminders and simple instructions.',
                to: '/how-it-works',
              },
              {
                title: 'Share your journey',
                desc: 'Post photos, celebrate milestones, and connect with others.',
                to: '/community',
              },
            ].map((s, i) => (
              <Link
                key={i}
                to={s.to}
                className="rounded-2xl border border-emerald-100 p-6 bg-emerald-50/40 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all block cursor-pointer hover:shadow-sm hover:-translate-y-0.5"
                aria-label={s.title}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">{i + 1}</div>
                <p className="font-semibold">{s.title}</p>
                <p className="text-emerald-700/90 mt-2 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Plant a seed of happiness today</h3>
              <p className="mt-2 text-white/90">Join a safe, uplifting community and grow something beautiful together.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Link to="/community" className="rounded-full bg-white text-emerald-700 px-6 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer">Join Community</Link>
              <Link to="/shop" className="rounded-full bg-emerald-700/30 text-white border border-white/40 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer">Get the Kit</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
