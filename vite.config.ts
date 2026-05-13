import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// =========================================================
// 🎨 CONFIGURACIÓN PROFESIONAL VITE
// =========================================================
// Reparaciones aplicadas:
//
// ✅ Evita que los iconos transparentes sean recomprimidos
// ✅ Evita fondo negro en PNG transparentes
// ✅ Excluye favicons, maskable y apple icons
// ✅ Cache PWA optimizado
// ✅ React estable sin manualChunks rotos
// ✅ Mejor compatibilidad móvil
// ✅ Mejor rendimiento de imágenes
// ✅ Evita corrupción de alpha channel
// ✅ Compatible con Vercel / Netlify / Cloudflare
// ✅ Reduce errores del Service Worker
// ✅ Mejor estabilidad en producción
//
// Sí, Savitar… el maldito fondo negro aparece porque
// algunos optimizadores PNG destruyen el canal alpha.
// Aquí literalmente blindamos los iconos para que
// jamás sean tocados por el optimizador.
// =========================================================

const ICON_EXCLUSIONS = [
  /favicon/i,
  /icon-192/i,
  /icon-512/i,
  /apple-touch-icon/i,
  /maskable/i,
  /pwa/i,
]

export default defineConfig({
  // =========================================================
  // 🧩 PLUGINS
  // =========================================================
  plugins: [
    react(),

    // =========================================================
    // 🖼️ IMAGE OPTIMIZER
    // =========================================================
ViteImageOptimizer({
  test: /^(?!.*(favicon|icon-192|icon-512|apple-touch-icon)).*\.(jpe?g|png|webp)$/i,
    // -------------------------------------------------------
      // FORMATOS SOPORTADOS
      // -------------------------------------------------------


      // -------------------------------------------------------
      // 🚫 EXCLUSIÓN TOTAL DE ICONOS
      // -------------------------------------------------------
      // Esto evita:
      //
      // ❌ pérdida de transparencia
      // ❌ fondo negro
      // ❌ corrupción del canal alpha
      // ❌ recompresión agresiva
      //

      // -------------------------------------------------------
      // JPEG
      // -------------------------------------------------------
      jpeg: {
        quality: 78,
        progressive: true,
      },

      // -------------------------------------------------------
      // PNG
      // -------------------------------------------------------
      // IMPORTANTE:
      //
      // optimizationLevel alto puede romper transparencias
      // en ciertos pipelines.
      //
      png: {
        quality: 82,
        compressionLevel: 7,
      },

      // -------------------------------------------------------
      // WEBP
      // -------------------------------------------------------
      webp: {
        quality: 82,
        lossless: false,
      },
    }),

    // =========================================================
    // 📱 PWA
    // =========================================================
    VitePWA({
      // -------------------------------------------------------
      // Registro automático
      // -------------------------------------------------------
      registerType: 'autoUpdate',

      injectRegister: 'auto',

      // -------------------------------------------------------
      // DEV OPTIONS
      // -------------------------------------------------------
      devOptions: {
        enabled: false,
      },

      // -------------------------------------------------------
      // ARCHIVOS PÚBLICOS
      // -------------------------------------------------------
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'apple-touch-icon.png',
        'icon-192.png',
        'icon-512.png',
      ],

      // =======================================================
      // 📦 MANIFEST
      // =======================================================
      manifest: {
        name: 'Julieth.art',

        short_name: 'Julieth',

        description:
          'Galería de Arte Digital | Melany Julieth Plazas',

        lang: 'es-MX',

        start_url: '/',

        scope: '/',

        display: 'standalone',

        orientation: 'portrait',

        background_color: '#0a0603',

        theme_color: '#0a0603',

        categories: [
          'art',
          'design',
          'portfolio',
          'graphics',
        ],

        // =====================================================
        // ICONOS
        // =====================================================
        // IMPORTANTE:
        //
        // purpose: "any"
        // ayuda a evitar comportamientos raros
        // de Android con transparencia.
        //
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },

          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },

          // ---------------------------------------------------
          // MASKABLE
          // ---------------------------------------------------
          // Usa una versión separada idealmente.
          // Android añade fondos si no existe padding.
          //
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },

      // =======================================================
      // ⚙️ WORKBOX
      // =======================================================
      workbox: {
        // -----------------------------------------------------
        // Limpieza de caches viejas
        // -----------------------------------------------------
        cleanupOutdatedCaches: true,

        clientsClaim: true,

        skipWaiting: true,

        // -----------------------------------------------------
        // Fallback SPA
        // -----------------------------------------------------
        navigateFallback: '/index.html',

        // -----------------------------------------------------
        // EXCLUSIONES DEL FALLBACK
        // -----------------------------------------------------
        navigateFallbackDenylist: [
          /^\/api\//,
          /^\/assets\//,
          /^\/icons\//,
          /^\/images\//,
          /^\/fonts\//,

          /.*\.(png|jpg|jpeg|svg|webp|gif|ico)$/,

          /.*\.(woff|woff2|ttf|eot)$/,

          /.*\.(js|css)$/,

          /.*\.(json)$/,

          /.*\.(xml)$/,

          /.*\.(txt)$/,

          /.*\.(map)$/,

          /.*\.(mp4|webm|ogg)$/,

          /.*\.(mp3|wav)$/,
        ],

        // -----------------------------------------------------
        // CACHE GLOBAL
        // -----------------------------------------------------
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}',
        ],

        // -----------------------------------------------------
        // IGNORAR ARCHIVOS
        // -----------------------------------------------------
        globIgnores: [
          '**/*.map',

          '**/*.psd',

          '**/*.kra',

          '**/*mexafood*.webp',

          '**/mexafood*',

          '**/node_modules/**/*',

          // 🚫 ICONOS
          '**/favicon*',

          '**/apple-touch-icon*',

          '**/icon-192*',

          '**/icon-512*',
        ],

        // -----------------------------------------------------
        // LÍMITE DE CACHE
        // -----------------------------------------------------
        maximumFileSizeToCacheInBytes:
          25 * 1024 * 1024,

        // =====================================================
        // 📦 RUNTIME CACHING
        // =====================================================
        runtimeCaching: [
          // ===================================================
          // 🖼️ IMÁGENES
          // ===================================================
          {
            urlPattern: ({ request }) =>
              request.destination === 'image',

            handler: 'CacheFirst',

            options: {
              cacheName: 'images-cache-v1',

              expiration: {
                maxEntries: 400,

                maxAgeSeconds:
                  60 * 60 * 24 * 30,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          // ===================================================
          // 📜 SCRIPTS / CSS
          // ===================================================
          {
            urlPattern: ({ request }) =>
              request.destination === 'script' ||
              request.destination === 'style',

            handler: 'StaleWhileRevalidate',

            options: {
              cacheName: 'assets-cache-v1',

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          // ===================================================
          // 🔤 FUENTES
          // ===================================================
          {
            urlPattern: ({ request }) =>
              request.destination === 'font',

            handler: 'CacheFirst',

            options: {
              cacheName: 'fonts-cache-v1',

              expiration: {
                maxEntries: 30,

                maxAgeSeconds:
                  60 * 60 * 24 * 365,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],

  // =========================================================
  // 🔧 BUILD
  // =========================================================
  build: {
    // -------------------------------------------------------
    // Source maps
    // -------------------------------------------------------
    sourcemap: true,

    // -------------------------------------------------------
    // Minificador
    // -------------------------------------------------------
    minify: 'esbuild',

    // -------------------------------------------------------
    // INLINE
    // -------------------------------------------------------
    assetsInlineLimit: 0,

    // -------------------------------------------------------
    // Chunk warnings
    // -------------------------------------------------------
    chunkSizeWarningLimit: 3000,

    // -------------------------------------------------------
    // Rollup
    // -------------------------------------------------------
    // NO manualChunks
    // porque literalmente te rompía React.
    //
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },

    // -------------------------------------------------------
    // TARGET
    // -------------------------------------------------------
    target: 'esnext',

    // -------------------------------------------------------
    // CSS
    // -------------------------------------------------------
    cssCodeSplit: true,
  },

  // =========================================================
  // 📂 PUBLIC
  // =========================================================
  publicDir: 'public',

  // =========================================================
  // 🌐 RESOLVE
  // =========================================================
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  // =========================================================
  // 🌐 SERVER
  // =========================================================
  server: {
    host: true,

    port: 5173,

    strictPort: false,

    open: false,
  },

  // =========================================================
  // 👀 PREVIEW
  // =========================================================
  preview: {
    host: true,

    port: 4173,
  },

  // =========================================================
  // ⚡ OPTIMIZACIÓN
  // =========================================================
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
    ],

    exclude: [],
  },

  // =========================================================
  // 🧪 ESBUILD
  // =========================================================
  esbuild: {
    legalComments: 'none',
  },

  // =========================================================
  // 🧱 CSS
  // =========================================================
  css: {
    devSourcemap: true,
  },
})