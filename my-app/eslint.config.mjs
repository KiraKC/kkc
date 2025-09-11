// eslint.config.mjs
import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Add other rules as needed
    },
  },
]);