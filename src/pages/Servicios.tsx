import { motion } from 'framer-motion'

function Servicios() {
  const services = [
    {
      title: 'Retratos',
      desc: 'Captura expresiones y esencia con un estilo semi-realista profesional.',
      price: 'Desde $20 USD',
    },
    {
      title: 'Ilustración Completa',
      desc: 'Escenas detalladas con narrativa visual, desde el fondo, hasta múltiples objetos y personajes, composición y color cuidadosamente trabajado.',
      price: 'Cotización personalizada',
    },
    {
      title: 'Concept Art',
      desc: 'Diseño de personajes, mundos, mapas y elementos visuales para proyectos creativos.',
      price: 'Desde $35 USD',
    },
    {
      title: 'Iconos & Bocetos',
      desc: 'Ilustraciones rápidas ideales para perfiles, ideas iniciales o contenido digital.',
      price: 'Desde $10 USD',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0603] text-[#f5f0e6] relative overflow-hidden">

{/* 🖼️ BACKGROUND CONTROLADO */}
<div className="absolute inset-0 z-0">

        {/* Desktop (Hero1 horizontal) */}
    <div
        className="hidden md:block absolute inset-0 bg-cover bg-no-repeat"
        style={{
        backgroundImage: "url('/hero4.jpg')",
        backgroundPosition: "center 30%",
        }}
    />

        {/* Mobile (Hero2 vertical optimizado) */}
    <div
        className="md:hidden absolute inset-0 bg-cover bg-no-repeat"
        style={{
        backgroundImage: "url('/hero5.jpg')",
        backgroundPosition: "center top",
        }}
    />

        {/* Overlay dinámico */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,136,0.2),transparent_60%)]" />
      </div>

      {/* ✨ Fondo elegante */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.12),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* 🧠 HEADER */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-gold mb-6"
          >
            Formato de Comisiones
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#e8d5b8]/90 leading-relaxed"
          >
            Ilustraciones digitales con enfoque en narrativa, emoción y detalle.
            Cada pieza es construida cuidadosamente para transmitir una historia única.
          </motion.p>
        </div>

        {/* 💎 SERVICIOS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="
                group relative p-6 rounded-2xl
                border border-gold/20
                backdrop-blur-md bg-white/5
                overflow-hidden
                hover:scale-[1.03]
                transition-all duration-300
              "
            >
              {/* Glow hover */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br from-[#d4af88]/20 via-transparent to-[#d4af88]/20
              " />

              <h3 className="text-xl font-semibold text-gold mb-3 relative z-10">
                {service.title}
              </h3>

              <p className="text-sm text-[#e8d5b8]/80 mb-4 relative z-10">
                {service.desc}
              </p>

              <span className="text-sm text-[#f1d2a9] relative z-10">
                {service.price}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ✅ BENEFICIOS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">

          {[
  {
    title: 'Pagos Flexibles y Seguros',
    desc: 'Métodos internacionales como PayPal, Ko-fi y alternativas digitales disponibles según tu país. Procesos claros, sin complicaciones y con total transparencia en cada etapa.',
  },
  {
    title: 'Flujo Profesional de Trabajo',
    desc: 'Cada proyecto sigue un proceso estructurado: boceto, revisión, color y entrega final. Tiempos estimados de 4 a 10 días, ajustables según complejidad y prioridad.',
  },
  {
    title: 'Comunicación Directa',
    desc: 'Atención personalizada durante todo el proceso. Feedback constante, revisiones cuidadas y un enfoque colaborativo para lograr exactamente lo que imaginas.',
  },
].map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 + i * 0.12 }}
    className="
      group relative p-6 rounded-xl
      border border-gold/10
      bg-white/5 backdrop-blur
      overflow-hidden
      transition-all duration-300
      hover:scale-[1.03]
    "
  >
    {/* Glow sutil */}
    <div className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      transition duration-500
      bg-gradient-to-br from-[#d4af88]/15 via-transparent to-[#d4af88]/15
    " />

    {/* Línea inferior elegante */}
    <div className="
      absolute bottom-0 left-0 h-[2px] w-0
      bg-gradient-to-r from-[#d4af88] to-[#f1d2a9]
      group-hover:w-full transition-all duration-500
    " />

    <h4 className="relative z-10 text-lg text-gold mb-2 tracking-wide">
      {item.title}
    </h4>

    <p className="relative z-10 text-sm text-[#e8d5b8]/80 leading-relaxed">
      {item.desc}
    </p>
  </motion.div>
))}

        </div>

        {/* 🚀 CTA FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">
            ¿Listo para empezar tu proyecto?
          </h2>

          <a
            href="/contacto"
            className="
              inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-[#d4af88] via-[#f1d2a9] to-[#d4af88]
              text-[#0a0603] font-medium
              shadow-[0_0_25px_rgba(212,175,136,0.4)]
              hover:scale-105 transition
            "
          >
            Solicitar Ilustración
          </a>
        </motion.div>

      </div>
    </div>
  )
}

export default Servicios