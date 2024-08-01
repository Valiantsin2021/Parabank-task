import prettier from 'eslint-config-prettier'
import jsdoc from 'eslint-plugin-jsdoc'
import playwright from 'eslint-plugin-playwright'
import globals from 'globals'

export default [
  {
    plugins: { prettier, playwright, jsdoc },
    files: ['projects/**/*.test.js', 'fixtures/**/*.js', 'pages/*.js', 'utils/**/*.js', 'utils/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        __ENV: 'readonly'
      }
    },
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'jsdoc/require-description': 'warn',
      'jsdoc/check-values': 'error',
      'playwright/no-conditional-in-test': 'off',
      'playwright/expect-expect': 'off',
      'playwright/no-focused-test': 'error',
      'playwright/require-soft-assertions': 'warn',
      'no-console': 'off',
      'no-useless-escape': 'off',
      'no-empty-pattern': 'off',
      'no-eval': 'error',
      'no-multi-spaces': 'error',
      'no-new': 'warn',
      'no-return-assign': 'warn',
      'comma-dangle': ['error', 'never'],
      strict: ['error', 'global'],
      'func-style': ['warn', 'expression'],
      'no-new-func': 'error',
      'no-param-reassign': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-invalid-this': 'error',
      'prefer-destructuring': ['warn', { array: true, object: true }, { enforceForRenamedProperties: true }],
      'no-implied-eval': 'error',
      eqeqeq: 'error',
      'no-with': 'error',
      'func-call-spacing': ['error', 'never'],
      'max-len': ['off', { code: 150, ignoreComments: true }],
      'new-cap': ['error', { newIsCap: true }],
      'new-parens': 'error',
      quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-var': 'warn',
      'no-unused-vars': ['warn', { vars: 'local' }],
      'no-prototype-builtins': 'off'
    }
  }
]
