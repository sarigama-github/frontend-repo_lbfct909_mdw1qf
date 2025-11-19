import { useState } from 'react'

const navItems = [
  { href: '#home', label: 'Beranda' },
  { href: '#solutions', label: 'Solusi' },
  { href: '#process', label: 'Proses' },
  { href: '#contact', label: 'Kontak' },
]

export default function WasteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-emerald-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-emerald-600 text-white font-bold grid place-items-center">W</div>
            <span className="font-semibold text-emerald-900">WastePalm</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-emerald-800 hover:text-emerald-600 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg className="w-6 h-6 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-emerald-50 text-emerald-800">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
