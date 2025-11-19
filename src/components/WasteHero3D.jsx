import Spline from '@splinetool/react-spline'
import { useState } from 'react'

export default function WasteHero3D() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-700 to-sky-700">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_60%)]" />

      <div className="absolute inset-0 hidden lg:block">
        {/* Spline 3D scene (palm oil mill style). Will gracefully hide on error */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <Spline
            scene="https://prod.spline.design/4B3hLw0c3q0cF3El/scene.splinecode"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-50 ring-1 ring-white/20 text-sm">
            Pengelolaan Limbah Sawit 3D
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Ubah Limbah Kelapa Sawit Menjadi Energi & Nilai Ekonomi
          </h1>
          <p className="mt-6 text-emerald-50/90 text-lg">
            Solusi modern dan berkelanjutan untuk mengolah POME, tandan kosong (TKKS), dan cangkang menjadi biogas, kompos, serta bahan bakar alternatif.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-emerald-800 font-semibold shadow hover:shadow-lg transition">
              Lihat Solusi
            </a>
            <a href="#process" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/30 font-semibold hover:bg-white/15 transition">
              Alur Proses
            </a>
          </div>
        </div>
      </div>

      {/* Subtle foreground gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
    </section>
  )
}
