import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),

    // Optimización automática de imágenes
    ViteImageOptimizer({
      test: /\.(jpg|jpeg|png)$/i,
      jpeg: { quality: 78 },
      png: { quality: 80 },
      webp: { quality: 80 },
    }),

    // PWA Configuration
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Julieth.art',
        short_name: 'Julieth',
        description: 'Galería de Arte Digital | Melany Julieth Plazas',
        theme_color: '#0a0603',
        background_color: '#0a0603',
        display: 'standalone',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        
        // Aumentamos el límite para permitir archivos grandes
        maximumFileSizeToCacheInBytes: 25 * 1024 * 1024, // 25 MB

        // Excluir archivos específicos del precaching
        globIgnores: [
          '**/*mexafood*.webp',   // Excluye los archivos problemáticos
          '**/mexafood*'
        ],

        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/assets\//],
      }
    })
  ]
})