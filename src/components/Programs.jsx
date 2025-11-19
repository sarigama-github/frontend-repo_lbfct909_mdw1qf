export default function Programs({ programs = [] }) {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Program Unggulan</h2>
          <p className="text-slate-600 mt-2">Pilihan jurusan dan kegiatan akademik terbaik untuk masa depan siswa</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition bg-white">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-4">
                <span className="text-xl">{p.icon ? '★' : '✓'}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">{p.name}</h3>
              <p className="text-slate-600 mt-2">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
