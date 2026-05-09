import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Faz o Sass enxergar a pasta styles como raiz de busca
        loadPaths: ['src/styles'],
        // Agora você pode usar o nome do arquivo direto
        additionalData: `@use "_index.scss" as *;\n`
      }
    }
  }
});