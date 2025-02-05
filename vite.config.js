import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: 'src/index.html',
         catRedirect: 'src/cat-redirect.html',
         musicplayer: 'src/musicplayer.html',
      }
    }
  }
});
