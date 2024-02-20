import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import CONFIG from './gitprofile.config';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  base: CONFIG.base || '/',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: 'Portfolio of DD',
          metaDescription: 'DD Blog',
          metaImageURL: CONFIG.seo.imageURL,
        },
      },
    }),
    ...(CONFIG.enablePWA
      ? [
          VitePWA({
            registerType: 'autoUpdate',
            workbox: {
              navigateFallback: undefined,
            },
            includeAssets: ['logo_git.png'],
            manifest: {
              name: 'Portfolio',
              short_name: 'Portfolio',
              description: 'Personal Portfolio',
              icons: [
                {
                  src: 'logo_git.png',
                  sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
                  type: 'image/png',
                },
              ],
            },
          }),
        ]
      : []),
  ],
  define: {
    CONFIG: CONFIG,
  },
});
