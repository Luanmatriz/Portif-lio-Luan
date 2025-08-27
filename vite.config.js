import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portif-lio-Luan/',  // nome da sua pasta no GitHub Pages (repositório)
  plugins: [react()],
});
