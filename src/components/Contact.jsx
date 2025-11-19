import { useState } from 'react'

export default function Contact({ backendUrl }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) setStatus('success')
      else setStatus(data?.detail || 'error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Hubungi Kami</h2>
            <p className="text-slate-600 mt-2">Ada pertanyaan? Kami siap membantu.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>Alamat: Jl. Pendidikan No. 123, Jakarta</li>
              <li>Telepon: +62 812-3456-7890</li>
              <li>Email: info@smamodern.sch.id</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            {status === 'success' && (
              <div className="mb-4 p-3 rounded border border-green-200 bg-green-50 text-green-700">Pesan telah terkirim. Terima kasih!</div>
            )}
            {status && status !== 'success' && status !== 'loading' && (
              <div className="mb-4 p-3 rounded border border-red-200 bg-red-50 text-red-700">Terjadi kesalahan. Coba lagi.</div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nama Anda" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="email@contoh.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea required name="message" value={form.message} onChange={handleChange} rows="4" className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tulis pesan Anda" />
              </div>
            </div>
            <button disabled={status==='loading'} type="submit" className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              {status==='loading' ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
