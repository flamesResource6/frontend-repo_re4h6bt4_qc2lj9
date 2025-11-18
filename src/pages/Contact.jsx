export default function Contact(){
  return (
    <div className="bg-emerald-50 min-h-screen">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-emerald-900">Join Us</h1>
        <p className="mt-2 text-emerald-800/90">Become part of the Cutty Community. Say hello, subscribe, or ask anything.</p>

        <form className="mt-8 space-y-4 bg-white border border-emerald-100 rounded-2xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Your name" className="rounded-full border border-emerald-200 px-4 py-2 bg-white/70" />
            <input type="email" placeholder="Email" className="rounded-full border border-emerald-200 px-4 py-2 bg-white/70" />
          </div>
          <textarea placeholder="Message" rows={4} className="w-full rounded-2xl border border-emerald-200 px-4 py-3 bg-white/70" />
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-emerald-600 text-white px-6 py-2">Send</button>
            <button className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-6 py-2">Newsletter signup</button>
          </div>
        </form>
      </section>
    </div>
  )
}
