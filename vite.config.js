import { defineConfig } from 'vite';

export default defineConfig({
  base: '/gamevite/', 
  publicDir: 'public',
  build: {
    outDir: 'dist'
  }
});