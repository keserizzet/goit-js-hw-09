import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Eğer HTML dosyanız src klasöründeyse
  build: {
    outDir: '../dist', // Çıktı dizini
  },
});
