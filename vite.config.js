import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // This repository is published at https://pratham1c1.github.io/Portfolio/
  // Keep relative asset URLs compatible with both GitHub Pages and local preview.
  base: './',
});
