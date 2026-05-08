import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
  Sparkles,
  ImageIcon,
  Mountain,
  UserCircle2,
  Palette,
} from 'lucide-react'

function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const sections = [
    {
      title: 'Ilustraciones',
      icon: <Palette size={22} />,
      desc: 'Narrativas visuales con composición cinematográfica, iluminación atmosférica y emociones cuidadosamente construidas.',
      images: [
        '/pj1.jpg',
        '/pj2.jpg',
        '/pj3.jpg',
        '/pj4.jpg',
        '/pj5.jpg',
      ],
    },

    {
      title: 'Escenarios',
      icon: <Mountain size={22} />,
      desc: 'Paisajes diseñados para transmitir calma, fantasía, nostalgia y profundidad ambiental.',
      images: [
        '/pj6.jpg',
        '/pj7.jpg',
        '/pj8.jpg',
        '/pj9.jpg',
      ],
    },

    {
      title: 'Retratos',
      icon: <UserCircle2 size={22} />,
      desc: 'Retratos estilizados con enfoque expresivo, detalles suaves y una estética semi realista.',
      images: [
        '/pj10.jpg',
        '/pj11.jpg',
        '/pj12.jpg',
        '/pj13.jpg',
      ],
    },

    {
      title: 'Iconos & Conceptos',
      icon: <ImageIcon size={22} />,
      desc: 'Diseños rápidos, conceptos visuales y piezas compactas para perfiles, branding o referencias.',
      images: [
        '/pj14.jpg',
        '/pj15.jpg',
        '/pj16.jpg',
        '/pj17.jpg',
      ],
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050403] text-[#f5f0e6]">

{/* 🌌 BACKGROUND CINEMÁTICO */}
<div className="absolute inset-0 -z-10 overflow-hidden">

  {/* ========================= */}
  {/* DESKTOP */}
  {/* ========================= */}

  <div className="hidden md:block absolute inset-0">

    {/* Fondo expandido difuminado */}
    <div
      className="
        absolute inset-0
        scale-125
        blur-3xl
        opacity-45
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: "url('/herogalery.jpg')",
        backgroundPosition: 'center center',
      }}
    />

    {/* Imagen principal */}
    <div
      className="
        absolute inset-0
        bg-cover bg-no-repeat
      "
      style={{
        backgroundImage: "url('/herogalery.jpg')",

        /*
          50% = centro exacto
          42% = sube un poco
          38% = muestra más cielo
        */
        backgroundPosition: 'center 42%',
      }}
    />

  </div>

  {/* ========================= */}
  {/* MOBILE */}
  {/* ========================= */}

  <div className="md:hidden absolute inset-0">

    {/* Fondo blur */}
    <div
      className="
        absolute inset-0
        scale-125
        blur-3xl
        opacity-50
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: "url('/herogalery1.jpg')",
        backgroundPosition: 'center center',
      }}
    />

    {/* Imagen principal */}
    <div
      className="
        absolute inset-0
        bg-cover bg-no-repeat
        scale-105
      "
      style={{
        backgroundImage: "url('/herogalery1.jpg')",

        /*
          Mantiene personaje visible
          sin deformar la composición
        */
        backgroundPosition: 'center 12%',
      }}
    />

  </div>

  {/* Overlay cinematográfico */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/90" />

  {/* Glow superior */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.18),transparent_60%)]" />

  {/* Glow inferior */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_55%)]" />

</div>

      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-20 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles size={18} className="text-gold" />
              <span className="text-sm tracking-[0.2em] uppercase text-[#e8d5b8]/70">
                Portfolio Visual
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gold leading-none mb-8">
              Galería
            </h1>

            <p className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl text-[#e8d5b8]/85 leading-relaxed">
              Una colección de ilustraciones, escenarios y personajes construidos
              con una dirección artística enfocada en atmósfera, emoción y narrativa visual.
              Cada pieza busca transmitir identidad propia y una sensación cinematográfica.
            </p>

          </motion.div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="relative px-4 sm:px-6 pb-28">

        <div className="max-w-7xl mx-auto space-y-28">

          {sections.map((section, sectionIndex) => (

            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >

              {/* HEADER */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">

                <div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-gold/15 backdrop-blur-xl flex items-center justify-center text-gold">
                      {section.icon}
                    </div>

                    <span className="text-sm tracking-[0.25em] uppercase text-[#e8d5b8]/50">
                      Colección
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">
                    {section.title}
                  </h2>

                  <p className="max-w-3xl text-[#e8d5b8]/75 text-lg leading-relaxed">
                    {section.desc}
                  </p>

                </div>

                {/* SCROLL HINT */}
                <div className="hidden lg:flex items-center gap-3 text-[#e8d5b8]/45">
                  <ChevronLeft size={18} />
                  <span className="text-sm uppercase tracking-[0.25em]">
                    Desliza
                  </span>
                  <ChevronRight size={18} />
                </div>

              </div>

              {/* SLIDER */}
              <div className="relative">

<div
  className="
    gallery-scroll

    flex gap-6 overflow-x-auto pb-6
    snap-x snap-mandatory

    transition-all duration-500
  "
>

                  {section.images.map((image, imageIndex) => (

                    <motion.div
                      key={imageIndex}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="
                        group
                        relative
                        min-w-[88vw]
                        sm:min-w-[420px]
                        lg:min-w-[520px]
                        snap-center
                      "
                    >

                      {/* CARD */}
                      <div
                        className="
                          relative
                          overflow-hidden
                          rounded-[2rem]
                          border border-white/10
                          bg-white/5
                          backdrop-blur-xl
                          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                        "
                      >

                        {/* IMAGE CONTAINER */}
                        <div className="relative aspect-[4/5] overflow-hidden">

                          <img
                            src={image}
                            alt={`Artwork ${imageIndex + 1}`}
                            className="
                              w-full h-full object-cover
                              transition-transform duration-700
                              group-hover:scale-105
                            "
                          />

                          {/* DARK OVERLAY */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

                          {/* GLOW */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(212,175,136,0.18),transparent_70%)]" />

                          {/* TOP BADGE */}
                          <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl">
                            <Sparkles size={15} className="text-gold" />

                            <span className="text-xs uppercase tracking-[0.2em] text-[#f5f0e6]/70">
                              Artwork
                            </span>
                          </div>

                          {/* ACTION */}
                          <button
                            onClick={() => setSelectedImage(image)}
                            className="
                              absolute bottom-5 right-5
                              w-14 h-14
                              rounded-2xl
                              border border-white/10
                              bg-black/40
                              backdrop-blur-xl
                              flex items-center justify-center
                              text-white
                              transition-all duration-300
                              hover:scale-110
                              hover:bg-[#d4af88]
                              hover:text-black
                            "
                          >
                            <Expand size={20} />
                          </button>

                          {/* BOTTOM INFO */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">

                            <h3 className="text-2xl font-serif text-[#f5e1c5] mb-2">
                              {section.title}
                            </h3>

                            <p className="text-sm text-[#e8d5b8]/65 leading-relaxed">
                              Pieza visual desarrollada con enfoque artístico,
                              iluminación ambiental y composición dinámica.
                            </p>

                          </div>

                        </div>

                      </div>

                    </motion.div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* FULLSCREEN VIEWER */}
      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[100]
              bg-black/90 backdrop-blur-xl
              flex items-center justify-center
              p-4 md:p-10
            "
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute top-6 right-6
                w-14 h-14 rounded-2xl
                bg-white/10 backdrop-blur-xl
                border border-white/10
                flex items-center justify-center
                hover:bg-white/20
                transition
              "
            >
              <X size={24} />
            </button>

            {/* IMAGE */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.35 }}
              src={selectedImage}
              alt="Preview"
              className="
                max-w-full max-h-full
                object-contain
                rounded-3xl
                shadow-[0_20px_120px_rgba(0,0,0,0.65)]
              "
            />

          </motion.div>

        )}

      </AnimatePresence>

        {/* FINAL CTA */}
        <motion.section
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[3rem]
            border border-[rgba(212,175,136,0.15)]
            bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]
            backdrop-blur-2xl
            p-10 sm:p-14 md:p-20
            text-center
          "
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.18),transparent_65%)]" />

          <div className="relative z-10 max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/15 bg-white/5 mb-8">

              <Sparkles size={16} className="text-gold" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#e8d5b8]/55">
                Conoce a mis personajes
              </span>

            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gold leading-tight mb-8">
              Descubre a todos
              <span className="block text-[#f1d2a9]">
                mis fantásticos personajes
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e8d5b8]/80 leading-relaxed mb-12">
              Así como he hecho objetos y escenarios, también he dedicado gran
              parte de mi tiempo y esfuerzo en construir personajes a los
              que les transmito gran parte de mí misma.
            </p>

            <a
              href="/Personajes"
              className="
                inline-flex items-center justify-center
                px-10 py-5 rounded-full
                bg-gradient-to-r from-[#d4af88] via-[#f1d2a9] to-[#d4af88]
                text-[#0a0603]
                font-semibold
                shadow-[0_0_35px_rgba(212,175,136,0.35)]
                transition-all duration-500
                hover:scale-105
              "
            >
              Ver Personajes
            </a>

          </div>

        </motion.section>

    </div>
  )
}

export default Galeria