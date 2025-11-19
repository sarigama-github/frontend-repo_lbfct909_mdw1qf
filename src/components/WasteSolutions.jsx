import { Leaf, Recycle, FlameKindling, Droplets, Factory, Bolt } from 'lucide-react'

const items = [
  {
    icon: Leaf,
    title: 'Kompos TKKS',
    desc: 'Mengolah tandan kosong (TKKS) menjadi kompos berkualitas untuk pemupukan kebun.'
  },
  {
    icon: FlameKindling,
    title: 'Biomassa & BRF',
    desc: 'Cangkang & serat sebagai bahan bakar boiler, atau Biochar/BRF untuk perbaikan tanah.'
  },
  {
    icon: Droplets,
    title: 'Biogas dari POME',
    desc: 'Pemanfaatan limbah cair POME untuk digester menghasilkan biogas (CH4) ramah lingkungan.'
  },
  {
    icon: Bolt,
    title: 'Listrik dari Biogas',
    desc: 'Konversi biogas menjadi listrik/steam untuk pabrik atau dijual ke grid lokal.'
  },
  {
    icon: Recycle,
    title: 'Daur Ulang Air',
    desc: 'Polishing pond & MBR untuk daur ulang air proses yang aman.'
  },
  {
    icon: Factory,
    title: 'Pemantauan IoT',
    desc: 'Sensor online untuk CH4, pH, COD/BOD, debit & emisi agar selalu sesuai regulasi.'
  },
]

export default function WasteSolutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Solusi Utama</h2>
        <p className="mt-3 text-emerald-700/80 max-w-2xl">Paket solusi end-to-end untuk menekan emisi, mematuhi regulasi, dan membuka peluang ekonomi sirkular.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon: Icon, title, desc}) => (
            <div key={title} className="rounded-2xl border border-emerald-100 p-6 shadow-sm hover:shadow-md transition bg-emerald-50/30">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-emerald-700/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
