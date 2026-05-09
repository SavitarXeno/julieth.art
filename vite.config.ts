import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),

    // =========================================
    // 🖼️ IMAGE OPTIMIZER
    // =========================================
    ViteImageOptimizer({
      test: /\.(jpg|jpeg|png|webp)$/i,

      jpeg: {
        quality: 78,
      },

      png: {
        quality: 80,
      },

      webp: {
        quality: 80,
      },
    }),

    // =========================================
    // 📱 PWA
    // =========================================
    VitePWA({
      registerType: 'autoUpdate',

      injectRegister: 'auto',

      devOptions: {
        enabled: false,
      },

      // =========================================
      // 🔥 ARCHIVOS ESTÁTICOS
      // =========================================
      includeAssets: [
        'favicon.png',
        'icon-192.png',
        'icon-512.png',
      ],

      // =========================================
      // 📄 MANIFEST
      // =========================================
      manifest: {
        name: 'Julieth.art',

        short_name: 'Julieth',

        description:
          'Galería de Arte Digital | Melany Julieth Plazas',

        theme_color: '#0a0603',

        background_color: '#0a0603',

        display: 'standalone',

        orientation: 'portrait',

        start_url: '/',

        scope: '/',

        lang: 'es-MX',

        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },

          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },

          // Maskable para Android moderno
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },

      // =========================================
      // ⚙️ WORKBOX
      // =========================================
      workbox: {
        cleanupOutdatedCaches: true,

        clientsClaim: true,

        skipWaiting: true,

        navigateFallback: '/index.html',

        // =========================================
        // ❌ EVITA QUE VERCEL ROMPA ASSETS
        // =========================================
        navigateFallbackDenylist: [
          /^\/assets\//,
          /^\/icons\//,
          /^\/images\//,
          /.*\.(png|jpg|jpeg|svg|webp|gif|ico)$/,
        ],

        // =========================================
        // 📦 ARCHIVOS CACHEABLES
        // =========================================
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}',
        ],

        // =========================================
        // 📏 LÍMITE DE CACHE
        // =========================================
        maximumFileSizeToCacheInBytes:
          25 * 1024 * 1024,

        // =========================================
        // 🚫 IGNORAR ARCHIVOS PESADOS/ROTOS
        // =========================================
        globIgnores: [
          '**/*mexafood*.webp',
          '**/mexafood*',
          '**/*.psd',
          '**/*.kra',
        ],

        // =========================================
        // 🌐 RUNTIME CACHE
        // =========================================
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              request.destination === 'image',

            handler: 'CacheFirst',

            options: {
              cacheName: 'images-cache',

              expiration: {
                maxEntries: 300,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          {
            urlPattern: ({ request }) =>
              request.destination === 'script' ||
              request.destination === 'style',

            handler: 'StaleWhileRevalidate',

            options: {
              cacheName: 'assets-cache',

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],

  // =========================================
  // 🔧 BUILD
  // =========================================
  build: {
    sourcemap: false,

    assetsInlineLimit: 0,

    chunkSizeWarningLimit: 3000,

rollupOptions: {
  output: {
    manualChunks(id) {

      if (id.includes('react')) {
        return 'react'
      }

      if (id.includes('framer-motion')) {
        return 'motion'
      }

    },
  },
},
  },

  // =========================================
  // 📂 PUBLIC DIR
  // =========================================
  publicDir: 'public',

  // =========================================
  // 🌐 SERVER
  // =========================================
  server: {
    host: true,
    port: 5173,
  },

  preview: {
    host: true,
    port: 4173,
  },
})