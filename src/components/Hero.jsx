export default function Hero({ settings }) {
  const schoolName = settings?.school_name || 'SMA Modern Nusantara'
  const tagline = settings?.tagline || 'Sekolah unggulan dengan pendekatan modern'

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 opacity-90"></div>
      <svg className="absolute -top-24 -right-24 w-96 h-96 text-white/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M34.6,-58.8C43.9,-51.6,49.6,-40.4,56.7,-29.8C63.8,-19.1,72.2,-9.1,74.7,2.1C77.2,13.4,73.7,26.8,65.3,36.1C56.9,45.4,43.5,50.7,30.8,56.1C18.1,61.5,6.1,67,-6,74.1C-18,81.3,-36,90,-46.4,84.5C-56.9,79,-60,59.4,-64.7,43.2C-69.5,27,-76,14.2,-73.7,2.1C-71.4,-10.1,-60.3,-20.3,-51.6,-28.2C-42.9,-36.1,-36.5,-41.6,-28.1,-49.5C-19.6,-57.5,-9.8,-68.7,1.1,-70.7C12,-72.7,24,-65.9,34.6,-58.8Z" transform="translate(100 100)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {schoolName}
            </h1>
            <p className="mt-6 text-lg text-blue-50 max-w-xl">
              {tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#admission" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:shadow-md transition">
                Daftar PPDB
              </a>
              <a href="#programs" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500/20 backdrop-blur text-white border border-white/40 font-semibold hover:bg-white/10 transition">
                Lihat Program
              </a>
            </div>
          </div>

          <div className="relative">
            <img src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTY2hvb2wlMjBjYW1wdXN8ZW58MHwwfHx8MTc2MzU0MzQzNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="School campus" className="rounded-2xl shadow-2xl border border-white/20" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <p className="text-slate-700 font-semibold">Fasilitas Lengkap</p>
              <p className="text-slate-500 text-sm">Laboratorium, Perpustakaan Modern, Sport Center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
