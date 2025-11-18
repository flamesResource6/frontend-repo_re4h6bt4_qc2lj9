import { Link } from 'react-router-dom'
import { Sprout, Heart, Users, BookOpen, Calendar, ShoppingBag } from 'lucide-react'

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
              <Link to="/community" className="rounded-full bg-emerald-600 text-white px-6 py-3 shadow hover:bg-emerald-700">Join the Community</Link>
              <Link to="/shop" className="rounded-full bg-white text-emerald-800 px-6 py-3 border border-emerald-200 hover:bg-emerald-50">Start Your Cutty Kit</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { icon: <Users className='w-4 h-4' />, label: 'Community Feed' },
                { icon: <Sprout className='w-4 h-4' />, label: 'How it Works' },
                { icon: <BookOpen className='w-4 h-4' />, label: 'Learn & Science' },
                { icon: <Calendar className='w-4 h-4' />, label: 'Events' },
                { icon: <ShoppingBag className='w-4 h-4' />, label: 'Shop' },
                { icon: <Heart className='w-4 h-4' />, label: 'Well-being' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl bg-white/80 border border-emerald-100 px-3 py-2">
                  <span className="text-emerald-600">{c.icon}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-3xl bg-white shadow-lg border border-emerald-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1600&auto=format&fit=crop" alt="Happy people gardening" className="w-full h-full object-cover" />
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
              },
              {
                title: 'Grow at your own pace',
                desc: 'Easy, guided growth with reminders and simple instructions.',
              },
              {
                title: 'Share your journey',
                desc: 'Post photos, celebrate milestones, and connect with others.',
              },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-emerald-100 p-6 bg-emerald-50/40">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">{i + 1}</div>
                <p className="font-semibold">{s.title}</p>
                <p className="text-emerald-700/90 mt-2 text-sm">{s.desc}</p>
              </div>
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
              <Link to="/community" className="rounded-full bg-white text-emerald-700 px-6 py-3 font-medium">Join Community</Link>
              <Link to="/shop" className="rounded-full bg-emerald-700/30 text-white border border-white/40 px-6 py-3">Get the Kit</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
