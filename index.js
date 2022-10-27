import confusingBrowserGlobals from 'confusing-browser-globals'

export default {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // enables the use of `import { a } from b` syntax. required for TypeScript imports
        sourceType: 'module',

        project: './tsconfig.json',
    },

    extends: [
        './eslint',

        './typescript-eslint',
        './react-hooks',
        './react',
        './unicorn',
        './promise',
    ],

    rules: {
        'no-restricted-globals': ['error', ...confusingBrowserGlobals],
    },

    plugins: ['@typescript-eslint', 'react-hooks', 'react', 'unicorn', 'promise'],

    ignorePatterns: ['scripts/'],

    env: {
        es6: true,
        node: true,
        browser: true,
    },
}
