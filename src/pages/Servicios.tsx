import { motion } from 'framer-motion'
import {
  Sparkles,
  Palette,
  ImageIcon,
  Wand2,
  Gem,
  Clock3,
  ShieldCheck,
  MessageCircleMore,
  Check,
} from 'lucide-react'

function Servicios() {
  const services = [
    {
      title: 'Retratos',
      icon: <Palette size={22} />,
      desc: 'Retratos estilizados y semi realistas con enfoque cinematográfico, expresividad emocional y detalles cuidadosamente trabajados.',
      price: 'Desde $20 USD',
      includes: [
        'Iluminación detallada',
        'Expresiones personalizadas',
        'Render semi realista',
        'Paleta artística',
      ],
    },

    {
      title: 'Ilustración Completa',
      icon: <Sparkles size={22} />,
      desc: 'Escenas completas construidas desde cero con composición visual, atmósfera narrativa, personajes, iluminación y fondos elaborados.',
      price: 'Cotización personalizada',
      includes: [
        'Fondos complejos',
        'Narrativa visual',
        'Múltiples personajes',
        'Diseño cinematográfico',
      ],
    },

    {
      title: 'Concept Art',
      icon: <Wand2 size={22} />,
      desc: 'Diseño visual para personajes, criaturas, mundos, armas, objetos y conceptos originales enfocados en identidad y worldbuilding.',
      price: 'Desde $35 USD',
      includes: [
        'Diseño original',
        'Variaciones visuales',
        'Exploración conceptual',
        'Ideas visuales',
      ],
    },

    {
      title: 'Iconos & Bocetos',
      icon: <ImageIcon size={22} />,
      desc: 'Ilustraciones rápidas para perfiles, referencias visuales, stickers, conceptos rápidos y contenido digital.',
      price: 'Desde $10 USD',
      includes: [
        'Entrega rápida',
        'Formato digital',
        'Ideal para redes',
        'Diseños compactos',
      ],
    },
  ]

  const workflow = [
    {
      title: 'Planeación',
      desc: 'Analizamos tu idea, referencias visuales, emociones y dirección artística.',
    },
    {
      title: 'Boceto',
      desc: 'Se desarrolla una composición inicial con estructura visual y poses.',
    },
    {
      title: 'Render & Color',
      desc: 'Trabajo detallado de iluminación, materiales, ambiente y color.',
    },
    {
      title: 'Entrega Final',
      desc: 'Exportación final optimizada y revisiones según el acuerdo del proyecto.',
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0603] text-[#f5f0e6]">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0">

        {/* Desktop */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/hero4.jpg')",
            backgroundPosition: 'center 32%',
          }}
        />

        {/* Mobile */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/hero5.jpg')",
            backgroundPosition: 'center top',
          }}
        />

        {/* Blur background */}
        <div
          className="
            absolute inset-[-5%]
            scale-110
            blur-[80px]
            opacity-30
            bg-cover bg-center
          "
          style={{
            backgroundImage: "url('/hero4.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#0a0603]" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.15),transparent_60%)]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-28">

        {/* HERO */}
        <section className="max-w-5xl mb-28">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/15 bg-white/5 backdrop-blur-xl mb-8">

              <Sparkles size={18} className="text-gold" />

              <span className="text-xs uppercase tracking-[0.28em] text-[#e8d5b8]/60">
                Comisiones abiertas
              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gold leading-none mb-8">
              Servicios &
              <span className="block text-[#f1d2a9]">
                Comisiones
              </span>
            </h1>

            <p className="max-w-4xl text-lg sm:text-xl md:text-2xl text-[#e8d5b8]/85 leading-relaxed">
              Ilustraciones digitales desarrolladas con enfoque cinematográfico,
              narrativa visual y una dirección artística orientada a emociones,
              atmósfera y composición. Cada pieza busca sentirse viva,
              memorable y profundamente personal.
            </p>

          </motion.div>

        </section>

        {/* SERVICES */}
        <section className="mb-32">

          <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-[#e8d5b8]/45 mb-4">
                Categorías disponibles
              </p>

              <h2 className="text-4xl md:text-5xl font-serif text-gold">
                Tipos de ilustración
              </h2>

            </div>

            <div className="hidden lg:flex items-center gap-3 text-[#e8d5b8]/40">
              <Gem size={18} />
              <span className="tracking-[0.2em] uppercase text-sm">
                Calidad artística
              </span>
            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

            {services.map((service, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-[rgba(212,175,136,0.12)]
                  bg-[rgba(255,255,255,0.04)]
                  backdrop-blur-xl
                  p-7
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#d4af88]/30
                "
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.18),transparent_70%)]" />

                {/* Top */}
                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-gold/10 flex items-center justify-center text-gold mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-serif text-[#f1d2a9] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[#e8d5b8]/75 leading-relaxed mb-7 text-sm sm:text-base">
                    {service.desc}
                  </p>

                  <div className="space-y-3 mb-8">

                    {service.includes.map((item, idx) => (

                      <div
                        key={idx}
                        className="flex items-center gap-3"
                      >

                        <Check size={15} className="text-gold" />

                        <span className="text-sm text-[#e8d5b8]/70">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                  <div className="pt-6 border-t border-white/10">

                    <span className="text-[#f1d2a9] text-lg">
                      {service.price}
                    </span>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

        {/* PROCESS */}
        <section className="mb-32">

          <div className="max-w-4xl mb-14">

            <p className="text-sm uppercase tracking-[0.25em] text-[#e8d5b8]/45 mb-4">
              Workflow creativo
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6">
              ¿Cómo funciona el proceso?
            </h2>

            <p className="text-lg text-[#e8d5b8]/75 leading-relaxed">
              Cada proyecto sigue una estructura organizada y colaborativa para
              garantizar calidad visual, comunicación clara y resultados coherentes
              con tu idea original.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-6">

            {workflow.map((step, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  relative
                  rounded-[2rem]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-7
                  overflow-hidden
                "
              >

                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#d4af88] to-transparent" />

                <div className="text-5xl font-serif text-[#d4af88]/20 mb-6">
                  0{i + 1}
                </div>

                <h3 className="text-2xl font-serif text-[#f1d2a9] mb-4">
                  {step.title}
                </h3>

                <p className="text-[#e8d5b8]/72 leading-relaxed">
                  {step.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* BENEFITS */}
        <section className="mb-32">

          <div className="grid lg:grid-cols-3 gap-7">

            {[
              {
                icon: <ShieldCheck size={22} />,
                title: 'Pagos Seguros',
                desc: 'Métodos internacionales y digitales disponibles según tu país, incluyendo PayPal y Ko-fi.',
              },

              {
                icon: <Clock3 size={22} />,
                title: 'Tiempo de Entrega',
                desc: 'Los proyectos suelen completarse entre 4 y 10 días dependiendo del nivel de detalle.',
              },

              {
                icon: <MessageCircleMore size={22} />,
                title: 'Comunicación Directa',
                desc: 'Feedback constante, revisiones organizadas y atención personalizada durante todo el proyecto.',
              },
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-[rgba(212,175,136,0.12)]
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                "
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_right,rgba(212,175,136,0.15),transparent_70%)]" />

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl border border-gold/15 bg-white/5 flex items-center justify-center text-gold mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-serif text-[#f1d2a9] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#e8d5b8]/75 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

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
                Proyecto personalizado
              </span>

            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gold leading-tight mb-8">
              Transformemos tu idea
              <span className="block text-[#f1d2a9]">
                en una ilustración inolvidable
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e8d5b8]/80 leading-relaxed mb-12">
              Si tienes un personaje, una escena, una historia o incluso una idea
              todavía incompleta, podemos convertirla en una pieza visual con identidad,
              emoción y dirección artística profesional.
            </p>

            <a
              href="/contacto"
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
              Solicitar Ilustración
            </a>

          </div>

        </motion.section>

      </div>

    </div>
  )
}

export default Servicios