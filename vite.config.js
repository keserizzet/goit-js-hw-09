import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    global: 'window', // `global` değişkenini `window` ile eşleştir
  },
});
