
# Setup React Authentication with jwt 
## 1 Install Vite
## https://vite.dev/guide/
    select - react
    select - typescript/javascript
## 2 git setup [version control]
## https://git-scm.com/install/windows
## 3. Chakra UI Installation
## URL https://v2.chakra-ui.com/getting-started
npm i @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
<ChakraProvider> add into the main.tsx component

## 4 Routing installation
https://reactrouter.com/start/data/installation
npm i react-router

## 5 React Hook Form
## npm install react-hook-form
This library is used for form validation

## 6 Axios Install
npm install axios

## 7 Transtack React Query 
npm i @tanstack/react-query

## 8  ESLint Plugin Query
npm i -D @tanstack/eslint-plugin-query
It is recommended to also use our ESLint Plugin Query to help you catch bugs

## 9 NPM
npm install zustand

## 10 redux toolkit with redux-persist
npm install @reduxjs/toolkit react-redux redux-persist

# Or, use any package manager of your choice.

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

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

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

