import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type Character = {
  name: string
  image: string
  desc: string
}

const characters: Character[] = Array.from({ length: 10 }, (_, i) => ({
  name: `pj${i + 1}`,
  image: `/personajes/pj${i + 1}.jpg`,
  desc: 'Personaje original con diseño detallado, narrativa visual y composición cuidada.',
}))

function Personajes() {
  const [selected, setSelected] = useState<Character | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0603] text-[#f5f0e6] overflow-hidden">

      {/* ✨ Fondo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.1),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* 🧠 HEADER */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-gold mb-4">
            Personajes
          </h1>
          <p className="text-[#e8d5b8]/80 text-lg">
            Explora una colección de personajes diseñados con enfoque narrativo,
            estética cuidada y detalle emocional.
          </p>
        </div>

        {/* 🎯 CONTENEDOR SCROLL */}
        <div className="relative">

          {/* Gradientes laterales */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0603] to-transparent z-10" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0603] to-transparent z-10" />

          {/* Slider */}
          <div
            className="
              flex gap-6 overflow-x-auto pb-6
              snap-x snap-mandatory
              scrollbar-hide
            "
          >
            {characters.map((char, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="
                  min-w-[280px] sm:min-w-[320px] md:min-w-[360px]
                  snap-start
                  group cursor-pointer
                "
                onClick={() => setSelected(char)}
              >
                {/* Card */}
                <div className="relative rounded-2xl overflow-hidden border border-gold/20 bg-white/5 backdrop-blur">

                  {/* Imagen con ratio controlado */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay hover */}
                    <div className="
                      absolute inset-0 opacity-0 group-hover:opacity-100
                      bg-gradient-to-t from-black/70 via-black/20 to-transparent
                      transition duration-500
                    " />
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-lg text-gold mb-1">{char.name}</h3>
                    <p className="text-sm text-[#e8d5b8]/70 line-clamp-2">
                      {char.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* 🔥 MODAL FULLSCREEN */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Cerrar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              ✕
            </button>

            {/* Contenido */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* Imagen */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="
                      w-full h-full object-contain
                      cursor-zoom-in
                      hover:scale-105
                      transition duration-500
                    "
                  />
                </div>

                {/* Info */}
                <div>
                  <h2 className="text-3xl font-serif text-gold mb-4">
                    {selected.name}
                  </h2>

                  <p className="text-[#e8d5b8]/80 mb-6 leading-relaxed">
                    {selected.desc}
                  </p>

                  <div className="text-sm text-[#e8d5b8]/60">
                    Ilustración original • Alta resolución • Uso personal/comercial disponible
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Personajes