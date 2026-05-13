import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'

import Galeria from './pages/Galeria'
import Personajes from './pages/Personajes'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
{/* 🖼️ BACKGROUND */}
<div className="absolute inset-0 z-0">

{/* Desktop */}
<div className="hidden md:block absolute inset-0 overflow-hidden">

  {/* Fondo extendido difuminado */}
  <div
    className="
      absolute inset-0
      scale-125
      blur-3xl
      opacity-45
      bg-cover bg-center bg-no-repeat
    "
    style={{
      backgroundImage: "url('/hero.jpg')",
      backgroundPosition: "center center",
    }}
  />

  {/* Imagen principal */}
  <div
    className="
      absolute inset-0
      bg-cover bg-no-repeat
    "
    style={{
      backgroundImage: "url('/hero.jpg')",

      /* Baja ligeramente TODO el encuadre */
      backgroundPosition: "center 15%",

      /*
        Ajuste fino:
        50% = centro exacto
        52% = baja apenas
        55% = baja demasiado
      */
    }}
  />

</div>

  {/* Mobile */}
  <div
    className="md:hidden absolute inset-0 bg-cover bg-no-repeat scale-105"
    style={{
      backgroundImage: "url('/hero3.jpg')",
      backgroundPosition: "center 18%",
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

        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <Link
            to="/galeria"
            className="px-10 py-4 bg-gold text-black text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Explorar Galería
          </Link>

          <Link
            to="/contacto"
            className="px-10 py-4 border border-gold/60 rounded-full hover:bg-white/10 transition
                group
                relative
                overflow-hidden

                rounded-full

                border border-[#d4af88]/50
                backdrop-blur-md

                text-white
                text-lg

                transition-all duration-500
                hover:scale-105
              "
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
    { name: 'Personajes', to: '/personajes' },
    { name: 'Servicios', to: '/servicios' },
    { name: 'Contacto', to: '/contacto' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0603] text-[#f5f0e6] overflow-x-hidden">

      <ScrollToTop />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(212,175,136,0.08)] border-b border-[rgba(212,175,136,0.2)]">
        
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3">
            <h1 className="text-3xl md:text-3xl font-serif text-gold">
              🦋
            </h1>            <h1 className="text-2xl md:text-3xl font-serif text-gold">
              JULIETH
            </h1>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="
  relative

  text-[1.08rem]
  font-light
  tracking-wide

  text-[#f5f0e6]

  transition-all duration-300

  hover:text-[#f0d2ab]
  hover:scale-105

  after:absolute
  after:left-0
  after:-bottom-2
  after:h-[1px]
  after:w-0
  after:bg-[#d4af88]

  after:transition-all
  after:duration-300

  hover:after:w-full
"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile */}
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="
    md:hidden

    p-2 rounded-xl

    border border-white/10
    bg-white/5
    backdrop-blur-md

    hover:bg-white/10
    transition-all duration-300
  "
>
  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
        </div>

        {/* Mobile Menu */}
    <AnimatePresence>

        {isMenuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0
              z-40
              md:hidden
            "
          >

            {/* Fondo */}
            <div
              onClick={() => setIsMenuOpen(false)}
              className="
                absolute inset-0
                bg-black/70
                backdrop-blur-md
              "
            />

            {/* Panel */}
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.35 }}

              className="
                absolute

                top-24
                left-4
                right-4

                rounded-3xl

                border border-[rgba(212,175,136,0.2)]

                bg-[rgba(15,10,8,0.92)]

                backdrop-blur-2xl

                shadow-[0_20px_80px_rgba(0,0,0,0.55)]

                overflow-hidden
              "
            >

              <div className="p-6 flex flex-col gap-2">

                {navLinks.map((link, index) => (

                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >

                    <Link
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        block

                        py-4 px-5
                        rounded-2xl

                        text-lg

                        transition-all duration-300

                        hover:bg-white/5
                        hover:border-[#d4af88]/20
                        hover:text-[#f0d2ab]

                        border border-transparent
                      "
                    >
                      {link.name}
                    </Link>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      </nav>

      {/* CONTENIDO */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />

        </Routes>
      </div>

    </div>
  )
}

export default App