/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   'import.meta.vitest': 'undefined',
  // },
  plugins: [react()],
  server: {
    port: 3200,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['src/__test__/setupTests.ts'],
    includeSource: ['src/**/*.{ts,tsx}'],
    watch: false,
    globals: true,
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/__test__/**/*.test.{ts,tsx}',
        'src/__test__/setupTests.ts',
        'src/main.tsx',
        'src/*.d.ts',
      ],
      provider: 'c8',
      all: true,
    },
    mockReset: true,
    restoreMocks: true,
  },
});
