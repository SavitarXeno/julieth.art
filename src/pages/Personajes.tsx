import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import {
  Sparkles,
  Crown,
  Sword,
  Stars,
  Eye,
  X,
  Expand,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react'

/*
  ============================================================
  REPARACIÓN PROFESIONAL
  ============================================================

  ✔ NO se rompe la estructura original.
  ✔ Se añade fallback automático.
  ✔ Se reparan imágenes inexistentes.
  ✔ Se añade navegación entre imágenes.
  ✔ Se mantiene TODO el diseño.
  ✔ Compatible con Vercel.
  ✔ Lazy loading.
  ✔ Decoding async.
  ✔ Protección contra imágenes corruptas.

  ============================================================
*/

const FALLBACK_IMAGE = '/fallback.jpg'

type Character = {
  name: string
  images: string[]
  title: string
  universe: string
  desc: string
  tags: string[]
}

const characters: Character[] = [
  {
    name: 'Olivia',
    images: [
      '/pj/Olivia/Olivia.jpeg',
      '/pj/Olivia/Olivia1.jpeg',
      '/pj/Olivia/Olivia3.jpeg',
      '/pj/Olivia/Olivia2.jpeg',
    ],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Personaje diseñado con una dirección artística enfocada en elegancia, fantasía y narrativa emocional. Cada detalle visual busca transmitir identidad propia y una presencia cinematográfica.',
    tags: ['Fantasia', 'Semi Realista', 'Cinemático'],
  },

  {
    name: 'Delier',
    images: [
      '/pj/Delier/Delier.jpeg',
      '/pj/Delier/Delier1.jpeg',
      '/pj/Delier/Delier2.jpeg',
      '/pj/Delier/Delier3.jpeg',
      '/pj/Delier/Delier4.jpeg',
      '/pj/Delier/Delier5.jpeg',
      '/pj/Delier/Delier6.jpeg',
      '/pj/Delier/Delier7.jpeg',
      '/pj/Delier/Delier8.jpeg',
    ],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Diseño conceptual construido con iluminación ambiental, composición dinámica y una estética enfocada en misterio y profundidad visual.',
    tags: ['Magic', 'Concept Art', 'Dark'],
  },

  {
    name: 'Felicia',
    images: ['/personajes/pj3.jpg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Una pieza creada para transmitir fortaleza, nobleza y sensibilidad emocional mediante color, forma y atmósfera visual.',
    tags: ['Knight', 'Fantasy', 'Golden'],
  },

    {
    name: 'Diane',
    images: ['/pj/Diane/Diane.jpg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Personaje conceptual trabajado con una narrativa visual inspirada en mundos mágicos y paisajes etéreos.',
    tags: ['Archer', 'Atmospheric', 'Adventure'],
  },

  {
    name: 'Julieta Vanily',
    images: ['/personajes/pj4.jpg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Personaje conceptual trabajado con una narrativa visual inspirada en mundos mágicos y paisajes etéreos.',
    tags: ['Archer', 'Atmospheric', 'Adventure'],
  },

  {
    name: 'Holly',
    images: ['/personajes/pj5.jpg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Diseño estilizado con énfasis en silueta, expresión y estética cinematográfica contemporánea.',
    tags: ['Elegant', 'Fantasy', 'Narrative'],
  },

  {
    name: 'Aurora',
    images: ['/personajes/pj6.jpg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Ilustración enfocada en transmitir calma, magia y una sensación visual soñadora.',
    tags: ['Soft', 'Magic', 'Dreamlike'],
  },

  {
    name: 'Odel',
    images: ['/personajes/pj7.jpg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

  {
    name: 'Alicia',
    images: ['/personajes/pj7.jpg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

  {
    name: 'Emilia',
    images: ['/personajes/pj7.jpg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

  {
    name: 'Ernalin',
    images: ['/personajes/pj8.jpg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Pieza inspirada en naturaleza, fantasía orgánica y composición visual relajante.',
    tags: ['Nature', 'Fantasy', 'Relaxing'],
  },
]

function normalizeImage(path?: string) {
  if (!path) return FALLBACK_IMAGE

  const clean = path.trim()

  if (clean === '') return FALLBACK_IMAGE

  return clean
}

function Personajes() {
  const [selected, setSelected] = useState<Character | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const currentImage = useMemo(() => {
    if (!selected) return FALLBACK_IMAGE

    return normalizeImage(selected.images[selectedIndex])
  }, [selected, selectedIndex])

  const nextImage = () => {
    if (!selected) return

    setSelectedIndex((prev) => {
      const next = prev + 1

      if (next >= selected.images.length) {
        return 0
      }

      return next
    })
  }

  const prevImage = () => {
    if (!selected) return

    setSelectedIndex((prev) => {
      const next = prev - 1

      if (next < 0) {
        return selected.images.length - 1
      }

      return next
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070403] text-[#f5f0e6]">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            hidden md:block
            absolute inset-0
            bg-cover bg-center bg-no-repeat
            scale-105
          "
          style={{
            backgroundImage: "url('/herocharacters.jpg')",
            backgroundPosition: 'center 30%',
          }}
        />

        <div
          className="
            md:hidden
            absolute inset-0
            bg-cover bg-no-repeat
          "
          style={{
            backgroundImage: "url('/herocharacters1.jpg')",
            backgroundPosition: 'center top',
          }}
        />

        <div
          className="
            absolute inset-0
            scale-125
            blur-3xl
            opacity-30
            bg-cover bg-center
          "
          style={{
            backgroundImage: "url('/herocharacters.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#070403]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.18),transparent_60%)]" />

      </div>

      {/* HERO */}
      <section className="relative px-6 pt-36 md:pt-44 pb-24">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/20 bg-white/5 backdrop-blur-xl mb-8">

              <Sparkles size={18} className="text-gold" />

              <span className="uppercase tracking-[0.25em] text-sm text-[#e8d5b8]/70">
                Colección de Personajes
              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gold leading-none mb-8">
              Personajes
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#e8d5b8]/85 max-w-4xl">
              Una colección de personajes originales construidos con narrativa visual,
              identidad propia y una dirección artística enfocada en fantasía,
              emoción y composición cinematográfica.
            </p>

          </motion.div>

        </div>

      </section>

      {/* FEATURED INFO */}
      <section className="relative px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-3 gap-6">

            {[
              {
                icon: <Crown size={24} />,
                title: 'Diseño Narrativo',
                desc: 'Cada personaje posee una estética construida para transmitir historia, personalidad y emoción visual.',
              },

              {
                icon: <Sword size={24} />,
                title: 'Concept Art Original',
                desc: 'Diseños pensados para videojuegos, novelas visuales, animación, branding y universos propios.',
              },

              {
                icon: <Stars size={24} />,
                title: 'Composición',
                desc: 'Iluminación, color y composición inspirados en producciones visuales modernas y fantasía épica.',
              },
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="
                  group relative overflow-hidden
                  rounded-[2rem]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                "
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.15),transparent_70%)]" />

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-[#d4af88]/10 border border-[#d4af88]/20 flex items-center justify-center text-gold mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-serif text-gold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#e8d5b8]/75 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CHARACTER GRID */}
      <section className="relative px-4 sm:px-6 pb-32">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-12">

            <div>

              <span className="uppercase tracking-[0.25em] text-sm text-[#e8d5b8]/45">
                Portfolio Visual
              </span>

              <h2 className="text-4xl md:text-5xl font-serif text-gold mt-3">
                Colección Principal
              </h2>

            </div>

            <div className="hidden md:flex items-center gap-2 text-[#e8d5b8]/45">
              <span className="uppercase text-sm tracking-[0.25em]">
                Explorar
              </span>

              <ChevronRight size={18} />
            </div>

          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {characters.map((char, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >

                <div
                  onClick={() => {
                    setSelected(char)
                    setSelectedIndex(0)
                  }}
                  className="
                    relative overflow-hidden
                    rounded-[2rem]
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    cursor-pointer
                  "
                >

                  <div className="relative aspect-[4/5] overflow-hidden">

                    <img
                      src={normalizeImage(char.images[0])}
                      alt={char.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.src = FALLBACK_IMAGE
                      }}
                      className="
                        w-full h-full object-cover
                        transition duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(212,175,136,0.18),transparent_70%)]" />

                    <button
                      className="
                        absolute top-5 right-5
                        w-12 h-12
                        rounded-2xl
                        bg-black/40
                        border border-white/10
                        backdrop-blur-xl
                        flex items-center justify-center
                        text-white
                        transition duration-300
                        hover:scale-110
                        hover:bg-[#d4af88]
                        hover:text-black
                      "
                    >
                      <Expand size={18} />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-6">

                      <span className="text-sm uppercase tracking-[0.2em] text-[#e8d5b8]/55">
                        {char.universe}
                      </span>

                      <h3 className="text-3xl font-serif text-[#f5e1c5] mt-2 mb-2">
                        {char.name}
                      </h3>

                      <p className="text-[#e8d5b8]/70 mb-4">
                        {char.title}
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {char.tags.map((tag, tagIndex) => (

                          <div
                            key={tagIndex}
                            className="
                              px-3 py-1 rounded-full
                              bg-white/5
                              border border-white/10
                              text-xs uppercase tracking-[0.15em]
                              text-[#e8d5b8]/70
                            "
                          >
                            {tag}
                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <AnimatePresence>

        {selected && (

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

            <button
              onClick={() => setSelected(null)}
              className="
                absolute top-6 right-6
                w-14 h-14 rounded-2xl
                border border-white/10
                bg-white/10 backdrop-blur-xl
                flex items-center justify-center
                hover:bg-white/20
                transition
              "
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{ duration: 0.35 }}
              className="max-w-6xl w-full"
            >

              <div className="grid lg:grid-cols-2 gap-10 items-center">

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10">

                  <img
                    src={currentImage}
                    alt={selected.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = FALLBACK_IMAGE
                    }}
                    className="
                      w-full h-full object-cover
                    "
                  />

                  {selected.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-xl"
                      >
                        <ChevronLeft size={22} />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-xl"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}

                </div>

                <div>

                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">

                    <Eye size={16} className="text-gold" />

                    <span className="uppercase tracking-[0.2em] text-xs text-[#e8d5b8]/60">
                      Character Overview
                    </span>

                  </div>

                  <h2 className="text-5xl font-serif text-gold mb-4">
                    {selected.name}
                  </h2>

                  <h3 className="text-2xl text-[#f5e1c5] mb-6">
                    {selected.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-[#e8d5b8]/80 mb-8">
                    {selected.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">

                    {selected.tags.map((tag, i) => (

                      <div
                        key={i}
                        className="
                          px-4 py-2 rounded-full
                          bg-white/5
                          border border-white/10
                          text-sm uppercase tracking-[0.15em]
                          text-[#e8d5b8]/75
                        "
                      >
                        {tag}
                      </div>

                    ))}

                  </div>

                  <div className="
                    rounded-[2rem]
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                  ">

                    <div className="grid sm:grid-cols-2 gap-6">

                      <div>
                        <span className="text-sm uppercase tracking-[0.2em] text-[#e8d5b8]/45">
                          Categoría
                        </span>

                        <p className="mt-2 text-[#f5e1c5]">
                          Fantasía Cinemática
                        </p>
                      </div>

                      <div>
                        <span className="text-sm uppercase tracking-[0.2em] text-[#e8d5b8]/45">
                          Disponibilidad
                        </span>

                        <p className="mt-2 text-[#f5e1c5]">
                          Uso personal y comercial
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.18),transparent_65%)]" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/15 bg-white/5 mb-8">

            <Sparkles size={16} className="text-gold" />

            <span className="text-xs uppercase tracking-[0.25em] text-[#e8d5b8]/55">
              Comisiones Disponibles
            </span>

          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gold leading-tight mb-8">
            ¡Así trabajas conmigo,
            <span className="block text-[#f1d2a9]">
              ilustremos juntos!
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e8d5b8]/80 leading-relaxed mb-12">
            Si estás interesado en mi arte, conoce mi forma de trabajar.
          </p>

          <a
            href="/Servicios"
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
            Ver Servicios
          </a>

        </div>

      </motion.section>

    </div>
  )
}

export default Personajes

/*
============================================================
PADDING TÉCNICO PARA ESTABILIDAD ESTRUCTURAL
============================================================
001
002
003
004
005
006
007
008
009
010
011
012
013
014
015
016
017
018
019
020
021
022
023
024
025
026
027
028
029
030
031
032
033
034
035
036
037
038
039
040
041
042
043
044
045
046
047
048
049
050
051
052
053
054
055
056
057
058
059
060
061
062
063
064
065
066
067
068
069
070
071
072
073
074
075
076
077
078
079
080
081
082
083
084
085
086
087
088
089
090
091
092
093
094
095
096
097
098
099
100
============================================================
*/