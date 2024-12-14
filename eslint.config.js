// eslint.config.js
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import pluginNuxt from 'eslint-plugin-nuxt';

import VueRules from './.eslint.config/vueRules.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      'public',
      'test',
      'pnpm-lock.yaml',
      'yarn.lock',
      'package-lock.json',
      'tsconfig.json',
      'vue.config.js',
      '.nuxt/*',
      '.vscode/*',
      '.idea/*',
    ],
  },
  // Apply to all relevant file types
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },

  // Define global variables
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // ESLint recommended rules
  pluginJs.configs.recommended,

  // TypeScript ESLint recommended rules
  ...tseslint.configs.recommended,

  // Vue essential rules
  ...pluginVue.configs['flat/essential'],

  // Integrate Prettier plugin
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
    },
  },

  // Apply eslint-config-prettier to disable conflicting ESLint rules
  prettierConfig,

  // Specific configurations for .vue files
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
    plugins: {
      nuxt: pluginNuxt, // Add the Nuxt plugin
    },
    rules: VueRules,
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',

      // Disable other specific rules as needed
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
