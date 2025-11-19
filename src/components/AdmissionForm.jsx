import { useState } from 'react'

export default function AdmissionForm({ backendUrl }) {
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', previous_school: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backendUrl}/api/admissions`, {
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
    <section id="admission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Pendaftaran Siswa Baru (PPDB)</h2>
            <p className="text-slate-600 mt-2">Isi formulir berikut untuk mengajukan pendaftaran. Tim kami akan menghubungi Anda segera.</p>
            {status === 'success' && (
              <div className="mt-4 p-3 rounded border border-green-200 bg-green-50 text-green-700">Terima kasih! Formulir berhasil dikirim.</div>
            )}
            {status && status !== 'success' && status !== 'loading' && (
              <div className="mt-4 p-3 rounded border border-red-200 bg-red-50 text-red-700">Terjadi kesalahan. Silakan coba lagi.</div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
                <input required name="full_name" value={form.full_name} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="email@contoh.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">No. HP</label>
                <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="08xxxxxxxxxx" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Asal Sekolah</label>
                <input name="previous_school" value={form.previous_school} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="SMP/MTs" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Pertanyaan tambahan (opsional)" />
              </div>
            </div>
            <button disabled={status==='loading'} type="submit" className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              {status==='loading' ? 'Mengirim...' : 'Kirim Pendaftaran'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
