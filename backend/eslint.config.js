import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  // Arquivos que o ESLint deve ignorar
  {
    ignores: ['node_modules', 'dist'],
  },

  // Regras recomendadas JavaScript
  js.configs.recommended,

  // Regras recomendadas TypeScript
  ...tseslint.configs.recommended,

  // Integração com Prettier
  {
    plugins: {
      prettier,
    },

    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Desativa regras conflitantes com Prettier
  prettierConfig
);
