import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 👇 coloque o nome exato do seu repositório no GitHub aqui
  base: '/Portif-lio-Luan/',
  plugins: [react()],
});
