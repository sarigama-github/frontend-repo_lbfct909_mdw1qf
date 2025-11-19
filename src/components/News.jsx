export default function News({ news = [] }) {
  return (
    <section id="news" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Berita Terbaru</h2>
            <p className="text-slate-600 mt-2">Update kegiatan dan informasi sekolah</p>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-700">Lihat semua</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((n, idx) => (
            <article key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
              {n.image_url && (
                <img src={n.image_url} alt={n.title} className="w-full h-40 object-cover" />
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 line-clamp-2">{n.title}</h3>
                <p className="text-slate-600 mt-2 line-clamp-3">{n.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
