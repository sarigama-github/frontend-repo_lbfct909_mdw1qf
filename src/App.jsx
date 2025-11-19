import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import News from './components/News'
import Teachers from './components/Teachers'
import Events from './components/Events'
import AdmissionForm from './components/AdmissionForm'
import Contact from './components/Contact'

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const [settings, setSettings] = useState(null)
  const [programs, setPrograms] = useState([])
  const [news, setNews] = useState([])
  const [teachers, setTeachers] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [s, p, n, t, e] = await Promise.all([
          fetch(`${backendUrl}/api/settings`).then(r => r.json()).catch(() => []),
          fetch(`${backendUrl}/api/programs`).then(r => r.json()).catch(() => []),
          fetch(`${backendUrl}/api/news`).then(r => r.json()).catch(() => []),
          fetch(`${backendUrl}/api/teachers`).then(r => r.json()).catch(() => []),
          fetch(`${backendUrl}/api/events`).then(r => r.json()).catch(() => []),
        ])
        setSettings(s?.[0] || null)
        setPrograms(Array.isArray(p) ? p : [])
        setNews(Array.isArray(n) ? n : [])
        setTeachers(Array.isArray(t) ? t : [])
        setEvents(Array.isArray(e) ? e : [])
      } catch (err) {
        // silent
      }
    }

    fetchAll()
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero settings={settings} />
        <Programs programs={programs} />
        <News news={news} />
        <Teachers teachers={teachers} />
        <Events events={events} />
        <AdmissionForm backendUrl={backendUrl} />
        <Contact backendUrl={backendUrl} />
      </main>
      <footer className="py-10 border-t border-slate-200 text-center text-slate-600">
        © {new Date().getFullYear()} SMA Modern. All rights reserved.
      </footer>
    </div>
  )
}

export default App
