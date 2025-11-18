import { Link, NavLink } from 'react-router-dom'
import { Leaf, ShoppingBag, Users } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How it Works' },
  { to: '/community', label: 'Community' },
  { to: '/learn', label: 'Learn' },
  { to: '/events', label: 'Events' },
  // Removed duplicate Shop from middle nav to avoid repetition
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
            <Leaf className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-emerald-800 tracking-tight">Cutty</p>
            <p className="text-xs text-emerald-600">Grow Happiness Together</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-emerald-800/80 hover:text-emerald-900 transition-colors ${isActive ? 'text-emerald-900 font-medium' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/community" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm shadow-sm hover:bg-emerald-700 transition-colors">
            <Users className="w-4 h-4" /> Join Community
          </Link>
          <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm shadow-sm hover:bg-emerald-700 transition-colors">
            <ShoppingBag className="w-4 h-4" /> Shop
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm cursor-pointer">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-emerald-100 p-2">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm text-emerald-800/80 hover:bg-emerald-50 ${isActive ? 'bg-emerald-50 text-emerald-900' : ''}`}>
                  {item.label}
                </NavLink>
              ))}
              <div className="px-3 py-2 grid grid-cols-2 gap-2">
                <Link to="/community" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">
                  <Users className="w-4 h-4" /> Join
                </Link>
                <Link to="/shop" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">
                  <ShoppingBag className="w-4 h-4" /> Shop
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
