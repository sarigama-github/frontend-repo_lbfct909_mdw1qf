export default function Events({ events = [] }) {
  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Agenda Sekolah</h2>
          <p className="text-slate-600 mt-2">Kegiatan terdekat yang dapat diikuti siswa</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((e, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">{e.title}</h3>
                  <p className="text-slate-600 mt-1">{e.description}</p>
                </div>
                <div className="text-right text-sm text-slate-500">
                  <p>{new Date(e.date).toLocaleDateString()}</p>
                  <p>{e.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
