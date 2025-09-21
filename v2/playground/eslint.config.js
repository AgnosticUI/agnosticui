import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  // Apply the recommended Astro configuration
  ...eslintPluginAstro.configs.recommended,
  
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      // General ESLint rules for JavaScript files
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // General rules
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      
      // Turn off base rules that are handled by TypeScript
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  
  {
    files: ['**/*.astro'],
    rules: {
      // Astro-specific rules
      'astro/no-set-html-directive': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      // Astro files have different scoping rules
      'no-unused-vars': 'off',
    },
  },
  
  {
    files: ['**/*.spec.ts', '**/*.test.ts', '**/*test.js'],
    rules: {
      // Test files can be more lenient
      'no-console': 'off',
    },
  },
  
  {
    ignores: [
      'dist/**',
      '.astro/**', 
      'node_modules/**',
      'public/**',
      '*.config.*',
    ],
  },
];