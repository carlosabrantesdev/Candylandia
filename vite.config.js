import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Candylandia/',
  plugins: [reactRefresh()],
});