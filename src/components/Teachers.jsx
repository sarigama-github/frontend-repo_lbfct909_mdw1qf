export default function Teachers({ teachers = [] }) {
  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Guru Berkualitas</h2>
          <p className="text-slate-600 mt-2">Tenaga pendidik berpengalaman dan kompeten di bidangnya</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((t, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-white text-center shadow-sm hover:shadow-md transition">
              <img src={t.photo_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400'} alt={t.name} className="w-24 h-24 rounded-full mx-auto object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{t.name}</h3>
              <p className="text-blue-700 font-medium">{t.subject}</p>
              <p className="text-slate-600 mt-2">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
