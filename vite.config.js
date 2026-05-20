import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/archery-pwa/',
  plugins: [react()],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-router-dom')) {
            return 'router';
          }

          if (
            id.includes('react') ||
            id.includes('react-dom')
          ) {
            return 'react';
          }

          if (id.includes('zustand')) {
            return 'state';
          }
        }
      }
    }
  }
});
