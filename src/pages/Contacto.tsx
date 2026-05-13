import { motion } from 'framer-motion'

function Contacto() {
  const links = [
    { name: 'Behance', url: 'https://www.behance.net/julieth_007plazas2' },
    { name: 'Instagram', url: 'https://www.instagram.com/julieth_0007' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@julieth_000777' },
    { name: 'X (Twitter)', url: 'https://x.com/Happy_uhh' },
    { name: 'Ko-fi', url: 'https://ko-fi.com/julieth_0077' },
    { name: 'Linktree', url: 'https://linktr.ee/plazasjulieth6' },
  ]

  return (
    <div className="min-h-screen text-[#f5f0e6] overflow-hidden bg-[#0a0603]">

{/* 🖼️ BACKGROUND CONTROLADO */}
<div className="absolute inset-0 z-0">

        {/* Desktop (Hero1 horizontal) */}
    <div
        className="hidden md:block absolute inset-0 bg-cover bg-no-repeat"
        style={{
        backgroundImage: "url('/hero1.jpg')",
        backgroundPosition: "center 30%",
        }}
    />

        {/* Mobile (Hero2 vertical optimizado) */}
    <div
        className="md:hidden absolute inset-0 bg-cover bg-no-repeat"
        style={{
        backgroundImage: "url('/hero2.jpg')",
        backgroundPosition: "center top",
        }}
    />

        {/* Overlay dinámico */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,136,0.2),transparent_60%)]" />
      </div>

      {/* 🧱 LAYOUT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* 🔥 HERO TEXTO */}
        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif text-gold mb-6 leading-tight"
          >
            Convirtamos tu idea
            <span className="block text-[#f1d2a9]">
              en una obra inolvidable
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[#e8d5b8]/90 leading-relaxed mb-10"
          >
            Trabajo cada ilustración con su debida importancia, combinando técnica,
            esfuerzo y emoción. Si buscas algo que realmente destaque,
            estás exactamente donde debes estar, porque deseo manifestar tus sueños. 🪻
          </motion.p>

          {/* CTA */}
          <motion.a
            href="mailto:juliethmelany5@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="
              inline-block px-8 py-4 sm:px-10 sm:py-5 rounded-full
              text-base sm:text-lg font-medium
              bg-gradient-to-r from-[#d4af88] via-[#f1d2a9] to-[#d4af88]
              text-[#0a0603]
              shadow-[0_0_30px_rgba(212,175,136,0.4)]
              hover:scale-105 transition-all duration-300
            "
          >
            ✉ Contactar ahora
          </motion.a>
        </div>

        {/* 🧩 SEPARADOR VISUAL */}
        <div className="my-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af88]/40 to-transparent" />

        {/* 🌐 REDES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="
                group relative p-6 sm:p-6 rounded-2xl
                border border-gold/20
                backdrop-blur-lg bg-white/5
                overflow-hidden
                transition-all duration-300
                hover:scale-[1.04]
              "
            >
              {/* Glow hover */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br from-[#d4af88]/25 via-[#f5e6cc]/10 to-[#d4af88]/25
              " />

              {/* Línea animada */}
              <div className="
                absolute bottom-0 left-0 h-[2px] w-0
                bg-gradient-to-r from-[#d4af88] to-[#f1d2a9]
                group-hover:w-full transition-all duration-500
              " />

              <span className="relative z-10 text-base sm:text-lg tracking-wide">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

{/* 🌌 ABOUT / EXTRA INFO */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9 }}
  className="mt-28 relative"
>
  <div
    className="
      relative
      overflow-hidden
      rounded-[2.5rem]
      border border-[rgba(212,175,136,0.15)]
      bg-[rgba(18,12,8,0.72)]
      backdrop-blur-2xl
      shadow-[0_25px_120px_rgba(0,0,0,0.45)]
    "
  >
    {/* Glow Corregido - Ahora está dentro del contenedor redondeado */}
    <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(212,175,136,0.14),transparent_50%)] pointer-events-none" />

    {/* Línea superior */}
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af88]/40 to-transparent relative z-10" />

    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 p-8 sm:p-10 md:p-14 relative z-10">


      {/* BIO */}
      <div>

        {/* Tag */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/15 bg-white/5 mb-8">

          <div className="w-2 h-2 rounded-full bg-[#d4af88]" />

          <span className="text-xs uppercase tracking-[0.3em] text-[#e8d5b8]/60">
            Sobre la artista
          </span>

        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold leading-tight mb-8">
          Fantasía, emoción
          <span className="block text-[#f1d2a9]">
            y narrativa visual
          </span>
        </h2>

        <div className="space-y-6 text-[#e8d5b8]/78 leading-relaxed text-sm sm:text-base md:text-lg">

          <p>
            Soy <span className="text-[#f1d2a9]">Melany Julieth Plazas Yacue</span>,
            ilustradora digital y estudiante de Animación 3D en el
            SENA Ibagué — Centro Industrial y Construcción Regional Tolima.
          </p>

          <p>
            Desde pequeña he sentido una fuerte conexión con los mundos fantásticos,
            las historias épicas y los personajes capaces de transmitir emociones
            profundas con una sola mirada. Cada ilustración nace buscando exactamente eso:
            crear algo que se sienta vivo.
          </p>

          <p>
            Me inspiran especialmente los paisajes naturales, la iluminación cinematográfica
            y las películas animadas que rompen los límites de la realidad. Intento que cada
            pieza tenga atmósfera propia, profundidad emocional y una identidad visual memorable.
          </p>

        </div>

      </div>

      {/* SIDE INFO */}
      <div className="flex flex-col gap-8">

        {/* Servicios rápidos */}
        <div
          className="
            rounded-[2rem]
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-7
          "
        >

          <h3 className="text-xl font-serif text-[#f1d2a9] mb-6">
            Información rápida
          </h3>

          <div className="space-y-4">

            {[
              'Respuesta habitual en menos de 24 horas',
              'Ilustraciones totalmente personalizadas',
              'Disponible para proyectos personales y comerciales',
              'Comunicación directa durante todo el proceso',
            ].map((item, i) => (

              <div
                key={i}
                className="flex items-start gap-4"
              >

                <div className="mt-2 w-2 h-2 rounded-full bg-[#d4af88]" />

                <p className="text-[#e8d5b8]/75 leading-relaxed text-sm sm:text-base">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Habilidades */}
        <div
          className="
            rounded-[2rem]
            border border-[rgba(212,175,136,0.12)]
            bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]
            p-7
          "
        >

          <div className="flex items-center justify-between gap-4 mb-6">

            <h3 className="text-xl font-serif text-[#f1d2a9]">
              Herramientas & Workflow
            </h3>

            <div className="px-3 py-1 rounded-full border border-gold/15 bg-black/20 text-xs tracking-[0.2em] uppercase text-[#e8d5b8]/45">
              Software
            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            {[
              'ibisPaint',
              'ibisPaint X',
              'Adobe Photoshop',
              'Krita',
              'Adobe Illustrator',
            ].map((skill, i) => (

              <div
                key={i}
                className="
                  px-4 py-2 rounded-full
                  border border-white/10
                  bg-white/5
                  text-sm text-[#f5f0e6]/80
                  hover:border-[#d4af88]/30
                  hover:bg-[#d4af88]/10
                  transition-all duration-300
                "
              >
                {skill}
              </div>

            ))}

          </div>

          {/* Contact mini */}
          <div className="mt-8 pt-6 border-t border-white/10">

            <p className="text-xs uppercase tracking-[0.25em] text-[#e8d5b8]/45 mb-3">
              Contacto directo
            </p>

            <a
              href="mailto:plazasjulieth6@gmail.com"
              className="
                text-[#f1d2a9]
                hover:text-white
                transition-colors duration-300
                break-all
              "
            >
              plazasjulieth6@gmail.com
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

</motion.section>

      </div>
    </div>
  )
}

export default Contacto