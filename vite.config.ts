/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    open: true,
  },
  plugins: [react()],
  test: {
    // テスト環境を指定
    environment: 'happy-dom',
    // API をグローバルに使う
    globals: true,
  },
});
