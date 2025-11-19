export default function WasteProcess() {
  const steps = [
    {
      title: '1. Pemisahan & Pengumpulan',
      desc: 'Pisahkan POME, TKKS, cangkang/serat sejak hulu. Sediakan area timbun & drainase sesuai standar.'
    },
    {
      title: '2. Pra-perlakuan',
      desc: 'Shredding TKKS, penurunan TSS/COD awal POME, dan pengeringan biomassa.'
    },
    {
      title: '3. Proses Utama',
      desc: 'Digester anaerobik untuk POME → biogas; komposting/aerated static pile untuk TKKS; boiler/pyrolysis untuk cangkang.'
    },
    {
      title: '4. Pemanfaatan Produk',
      desc: 'Biogas ke genset/boiler; kompos ke kebun; air hasil polishing untuk reuse irigasi/proses.'
    },
    {
      title: '5. Monitoring & Kepatuhan',
      desc: 'Pemasangan sensor IoT dan dashboard emisi, pelaporan berkala, dan SOP operasional.'
    }
  ]

  return (
    <section id="process" className="py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Alur Proses</h2>
        <div className="mt-10 grid lg:grid-cols-5 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/70 backdrop-blur border border-emerald-100 p-6 shadow-sm">
              <h3 className="font-semibold text-emerald-800">{s.title}</h3>
              <p className="mt-2 text-sm text-emerald-700/80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
