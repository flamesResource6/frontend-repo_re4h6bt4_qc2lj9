export default function Events() {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-emerald-900">Events & Challenges</h1>
        <p className="mt-2 text-emerald-800/90">Seasonal gatherings, hashtag challenges, and local meet-ups.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {title: 'Spring Start', desc: 'Kick off new cuttings together. Share #SpringStart for a First Sprout badge.'},
            {title: 'Summer Bloom', desc: 'Celebrate color! Photo challenge with #SummerBloom. Win refill kits.'},
            {title: 'Autumn Colors', desc: 'Cozy maintenance and gratitude prompts with #AutumnColors.'},
          ].map((e,i)=>(
            <div key={i} className="rounded-2xl bg-white border border-emerald-100 p-6">
              <p className="font-semibold text-emerald-900">{e.title}</p>
              <p className="text-emerald-700/90 mt-2 text-sm">{e.desc}</p>
              <button className="mt-4 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm">Join</button>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-emerald-100/60 border border-emerald-200 p-6">
          <p className="font-semibold text-emerald-900">Gardener map</p>
          <p className="text-sm text-emerald-800/90">Find friendly growers near you for a local meet-up.</p>
          <div className="mt-3 aspect-[3/1] rounded-xl bg-white border border-emerald-200 grid place-items-center text-emerald-700/70">Map placeholder</div>
        </div>
      </section>
    </div>
  )
}
