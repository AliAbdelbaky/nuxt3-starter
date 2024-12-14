// .eslint.config/vueRules.js

export default {
  // **Vue-Specific Rules**

  // 1. Disable the multi-word component name rule to allow single-word component names
  'vue/multi-word-component-names': 'off',

  // 2. Enforce component name casing in PascalCase
  'vue/component-definition-name-casing': ['error', 'PascalCase'],

  // 3. Disallow the use of v-html to prevent XSS attacks
  'vue/no-v-html': 'error',

  // 4. Enforce attribute naming style in kebab-case
  'vue/attribute-hyphenation': ['error', 'always'],

  // 5. Require components to have a name when using defineComponent
  // "vue/define-component-has-name": ["error", { "ignoreConstructors": false }],

  // 6. Enforce consistent spacing around curly braces in templates
  'vue/require-default-prop': 'error',

  // 7. Warn about unused components
  'vue/no-unused-components': 'warn',

  // 8. Warn about unused variables in templates
  'vue/no-unused-vars': 'warn',

  // 9. Ensure valid usage of v-slot
  'vue/valid-v-slot': 'error',

  // 10. Disable the rule that warns about undefined components (use with caution)
  'vue/no-undef-components': 'off',

  // **Nuxt-Specific Rules**

  // Uncomment these if you have eslint-plugin-nuxt installed
  // "nuxt/no-cjs-exports": "error",
  // "nuxt/no-env-in-hooks": "error",
  // "nuxt/no-ssr-switch": "error",

  // **Additional Recommendations**

  // 11. Enforce the use of template-based components over script-based
  'vue/prefer-template': 'error',

  // 12. Enforce the use of v-slot shorthand syntax
  'vue/v-slot-style': [
    'error',
    {
      atComponent: 'shorthand',
      default: 'shorthand',
    },
  ],

  // 13. Enforce consistent spacing before and after the arrow in arrow functions
  'vue/space-infix-ops': 'error',

  // 14. Disallow duplicate attribute names in Vue components
  'vue/no-duplicate-attributes': [
    'error',
    {
      allowCoexistClass: false,
      allowCoexistStyle: false,
    },
  ],

  // 15. Enforce the ordering of component options
  'vue/order-in-components': [
    'error',
    {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'components',
        'directives',
        'filters',
        ['extends', 'mixins'],
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        'render',
        'renderError',
      ],
    },
  ],
};
