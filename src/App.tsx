import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'

import Contacto from './pages/Contacto'
import Galeria from './pages/Galeria'
import Servicios from './pages/Servicios'
import Personajes from './pages/Personajes'

/* 🧠 Hook: siempre scroll arriba al cambiar página */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

/* 🌌 HOME */
function Home() {
  const navigate = useNavigate()

useEffect(() => {
  let triggered = false

  const handleScroll = () => {
    if (window.scrollY > 80 && !triggered) {
      triggered = true
      navigate('/galeria')
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => window.removeEventListener('scroll', handleScroll)
}, [navigate])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
{/* 🖼️ BACKGROUND CONTROLADO */}
<div className="absolute inset-0 z-0">

  {/* Desktop (hero.jpg 2008x1167) */}
  <div
    className="hidden md:block absolute inset-0 bg-cover bg-no-repeat"
    style={{
      backgroundImage: "url('/hero.jpg')",
      backgroundPosition: "center 42%", // 🔥 baja el foco sin crear “hueco” con el nav
    }}
  />

  {/* Mobile (hero3.jpg 1284x1363) */}
  <div
    className="md:hidden absolute inset-0 bg-cover bg-no-repeat scale-105"
    style={{
      backgroundImage: "url('/hero3.jpg')",
      backgroundPosition: "center 18%", // 🔥 recorta arriba/lados, mantiene personaje visible
    }}
  />

  {/* Overlay para legibilidad */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/80" />

  {/* Glow suave */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,136,0.15),transparent_60%)]" />

</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,136,0.15),transparent_70%)]" />

      {/* Contenido */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-32 md:pt-40">
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl sm:text-6xl md:text-8xl font-serif text-gold mb-6"
        >
          MELANY JULIETH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-4xl text-[#e8d5b8] mb-12"
        >
          Ilustradora Digital • Galería & Arte
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/galeria"
            className="px-10 py-4 bg-gold text-[#0a0603] font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Explorar Galería
          </Link>

          <Link
            to="/contacto"
            className="px-10 py-4 border border-gold/60 rounded-full hover:bg-white/10 transition"
          >
            Contactarme
          </Link>
        </div>
      </div>
    </section>
  )
}

/* 🌟 APP */
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Galería', to: '/galeria' },
    { name: 'Servicios', to: '/servicios' },
    { name: 'Personajes', to: '/personajes' },
    { name: 'Contacto', to: '/contacto' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0603] text-[#f5f0e6] overflow-x-hidden">

      <ScrollToTop />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(212,175,136,0.08)] border-b border-[rgba(212,175,136,0.2)]">
        
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3">
            <span className="text-3xl">🦋</span>
            <h1 className="text-2xl md:text-3xl font-serif text-gold">
              JULIETH
            </h1>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex gap-10 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-gold transition hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
{isMenuOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="md:hidden fixed inset-0 z-40"
  >
    {/* Fondo oscuro */}
    <div
      className="absolute inset-0 bg-black/70 backdrop-blur-md"
      onClick={() => setIsMenuOpen(false)}
    />

    {/* Panel */}
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
        absolute top-16 left-1/2 -translate-x-1/2
        w-[90%] max-w-sm
        rounded-2xl
        bg-[rgba(20,12,8,0.85)]
        backdrop-blur-xl
        border border-[rgba(212,175,136,0.25)]
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        p-6
      "
    >
      <div className="flex flex-col gap-4 text-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.to}
            onClick={() => setIsMenuOpen(false)}
            className="
              py-3 rounded-xl
              border border-transparent
              hover:border-gold/40
              hover:bg-white/5
              transition-all duration-300
              text-lg tracking-wide
            "
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.div>
  </motion.div>
)}
      </nav>

      {/* CONTENIDO */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/personajes" element={<Personajes />} />
        </Routes>
      </div>

    </div>
  )
}

export default App