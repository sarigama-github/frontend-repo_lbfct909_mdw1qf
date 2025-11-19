import WasteNavbar from './components/WasteNavbar'
import WasteHero3D from './components/WasteHero3D'
import WasteSolutions from './components/WasteSolutions'
import WasteProcess from './components/WasteProcess'
import Contact from './components/Contact'

export default function WasteApp() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <WasteNavbar />
      <main>
        <div id="home"><WasteHero3D /></div>
        <WasteSolutions />
        <WasteProcess />
        <div id="contact"><Contact backendUrl={backendUrl} /></div>
      </main>
      <footer className="py-10 border-t border-emerald-100 text-center text-emerald-700">
        © {new Date().getFullYear()} WastePalm. All rights reserved.
      </footer>
    </div>
  )
}
