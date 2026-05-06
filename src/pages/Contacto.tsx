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
            estás exactamente donde debes estar, porque deseo manifestar tus sueños.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
                group relative p-5 sm:p-6 rounded-2xl
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

        {/* 🧠 EXTRA INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-20 max-w-2xl"
        >
          <p className="text-sm sm:text-base text-[#e8d5b8]/70 leading-relaxed">
            ✔ Respuesta en menos de 24h  
            <br />
            ✔ Ilustraciones personalizadas  
            <br />
            ✔ Uso personal y comercial disponible
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default Contacto