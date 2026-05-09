<!-- Banner institucional opcional aqui -->

# Lohane Assessoria

> Contabilidade moderna, descomplicada e focada no crescimento do seu negócio.

## Sobre o Projeto

Este repositório contém o código-fonte do site institucional da **Lohane Assessoria**, desenvolvido em React + TypeScript + Vite.

O site apresenta:
- Página inicial com seções de destaque (Hero, Serviços, Sobre)
- Layout responsivo e moderno
- Contato via WhatsApp
- Componentes reutilizáveis

## Tecnologias Utilizadas
- React
- TypeScript
- Vite
- MUI (Material UI)
- SCSS Modules

## Como rodar localmente

1. Instale as dependências:
  ```bash
  npm install
  ```
2. Rode o projeto:
  ```bash
  npm run dev
  ```
3. Acesse em [http://localhost:5173](http://localhost:5173)

## Estrutura de Pastas
- `src/pages/Home` — Página principal e seções
- `src/components` — Componentes reutilizáveis
- `src/layouts` — Layouts como Header e Footer
- `src/styles` — Estilos globais e variáveis

## Contato
Para dúvidas ou serviços contábeis, entre em contato:
- WhatsApp: [21 97456-7004](https://wa.me/5521974567004)

---
Desenvolvido com ❤️ por Gustavo Bento
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
