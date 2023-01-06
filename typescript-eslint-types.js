module.exports = {
    rules: {
        // 🕸
        '@typescript-eslint/require-array-sort-compare': 'error',

        // 👀
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/return-await': ['error', 'always'],
        '@typescript-eslint/dot-notation': 'error',

        /**
         * #high, #improves-code-stability, #improves-code-understanding
         * Bad: `if (value)`, Good: `if (value !== undefined)`
         */
        '@typescript-eslint/strict-boolean-expressions': ['error'],

        /**
         * #high, #improves-code-stability, #improves-code-understanding
         * Bad: `return foo !== null && foo !== undefined ? foo : 'a string'`
         * Good: `foo ?? 'a string'`
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'error',

        /**
         * #improves-code-stability, #improves-code-understanding
         * Mark all functions that return a Promise as `async`. This clearly shows all asynchronous
         * functions and ensures you can't return a non-Promise value.
         */
        '@typescript-eslint/promise-function-async': [
            'error',
            {
                checkArrowFunctions: false,
            },
        ],

        /**
         * #improves-code-stability
         * Warns about properties that can be readonly but aren't.
         * Improves code stability because it warns users when trying to turn a readonly property into a
         * mutable one.
         */
        '@typescript-eslint/prefer-readonly': 'error',

        /**
         * #improves-code-stability
         * Allow only strings and numbers to be placed in template expressions.
         * Bad: `${null}`, Bad: `${[]}`
         * Good: `${'string'}`, Good: `${4}`
         */
        '@typescript-eslint/restrict-template-expressions': [
            'error',
            {
                allowNumber: true,
            },
        ],

        /**
         * #improves-code-understanding
         * Bad: `array.indexOf(value) !== -1`, Good: `array.includes(values)`
         */
        '@typescript-eslint/prefer-includes': 'error',

        /**
         * #improves-code-understanding
         * Bad: `array[array.length - 1] === '.'`, Good: `array.endsWith('.')`
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        /**
         * #improves-code-understanding
         * Bad: `'' + {}`
         * Bad: ({}.toString())
         * Good: 'Text' + true
         * Good: `Arrays too: ${[1, 2, 3]}`
         */
        '@typescript-eslint/no-base-to-string': 'error',

        /**
         * #improves-code-understanding
         * ```ts
         * // Bad
         * const func = () => 'value'
         * await func()
         *
         * // Good
         * const func = async () => 'value'
         * await func()
         * ```
         */
        '@typescript-eslint/await-thenable': 'error',

        /**
         * #remove-unnecessary, #improves-code-understanding
         * Bad: `const value = 3 as number`, Good: `const value = 3`
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        /**
         * #remove-unnecessary, #improves-code-understanding
         * @example
         * // Bad
         * function f<T = number>() {}
         * f<number>();
         * // Good
         * function f<T = number>() {}
         * f<string>();
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',

        /**
         * #remove-unnecessary, #improves-code-understanding
         * Asynchronous functions that don’t use await might not need to be asynchronous functions and
         * could be the unintentional result of refactoring.
         */
        '@typescript-eslint/require-await': 'error',

        /**
         * #ban, #low
         * Don't use `for-in` loops for arrays.
         * Bad: `for (const x in [3, 4, 5]) {`, Good: `for (const x in { a: 3, b: 4, c: 5 }) {`
         */
        '@typescript-eslint/no-for-in-array': 'error',

        /**
         * #consistency, #low
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
    },
}
