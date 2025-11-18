export default function Footer() {
  return (
    <footer className="mt-24 border-t border-emerald-100 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-semibold text-emerald-900">Cutty</p>
          <p className="text-emerald-700/80 mt-2">A gentle social platform that blends gardening with real happiness.</p>
        </div>
        <div>
          <p className="font-medium text-emerald-900">Explore</p>
          <ul className="mt-2 space-y-2 text-emerald-800/80">
            <li>Home</li>
            <li>Community</li>
            <li>Learn</li>
            <li>Events</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-emerald-900">Newsletter</p>
          <p className="text-emerald-700/80 mt-2">Join to get seasonal tips and community challenges.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-full border border-emerald-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/70" />
            <button className="rounded-full bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-emerald-700/70 py-6">© {new Date().getFullYear()} Cutty – Grow Happiness Together</div>
    </footer>
  )
}
