# `eslint-plugin-strictest`

> Exception free software through super strict ESLint rules

⚠️ The library isn't yet ready for others to use. I use it in my own repos. However, my goal is to make it available for everybody. If you interested, you can star it or write an issue.

## Why?

- Documented. Every decision for each rule is documented. For now the documentation is scattered through comments and documents. 
- No exception. I have been using this library in a production app and we have close to zero exceptions.
- Less bugs. Catching a bug with ESLint rule is extremely rare. Howerver, there are a few rules that do this very successfully.
- Modular. There are multiple rule categories — you turn on the relevant ones for you.

## Configurations

- `typescript-eslint`
- `unicorn`
- `react`
- `react-hooks`
- `promise`
- `eslint`

## Example configuration (with TypeScript)

With `yarn install confusing-browser-globals`.

`.eslintrc`
```javascript
const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
    parser: '@typescript-eslint/parser',

    extends: [
        'strictest/eslint',
        
        'strictest/promise',
        'strictest/react',
        'strictest/react-hooks',
        'strictest/unicorn',
        'strictest/typescript-eslint',
    ],

    plugins: ['promise', 'react', 'react-hooks', '@typescript-eslint', 'unicorn'],

    parserOptions: {
        // enables the use of `import { a } from b` syntax. required for TypeScript imports
        sourceType: 'module',

        project: './tsconfig.json',
    },

    env: {
        es6: true,
        browser: true,
    },

    rules: {
        'no-restricted-globals': ['error', ...confusingBrowserGlobals],
    },
}
```