import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/archery-pwa/',
  plugins: [react()]
});
