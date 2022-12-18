/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    open: true,
  },
  plugins: [react(), svgr(), tsconfigPaths()],
  test: {
    // テスト環境を指定
    environment: 'happy-dom',
    // API をグローバルに使う
    globals: true,
    setupFiles: './src/setup.ts',
    // coverage: {
    //   // カバレッジ収集を有効化
    //   enabled: true,
    //   // テキスト（コンソール）と JSON 形式のサマリーで報告
    //   reporter: ['text', 'json-summary'],
    // },
  },
});
