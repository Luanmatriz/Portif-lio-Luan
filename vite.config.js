import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portif-lio-Luan/', // <== adiciona essa linha
  plugins: [react()],
