module.exports = {
    rules: {
        // disabled because it doesn't work when TypeScript handles all cases for a value, the simple
        // ESLint could never know if all literal values are handled in order to produce a correct error
        'consistent-return': 'off',

        // https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',

        // waiting
        // '@typescript-eslint/no-implicit-any-catch': 'error',
        // '@typescript-eslint/no-loop-func': 'error',
        // '@typescript-eslint/consistent-indexed-object-style': 'error'
        // '@typescript-eslint/no-unnecessary-type-constraint': 'error'
        // '@typescript-eslint/no-confusing-void-expression': 'error'
        // '@typescript-eslint/unbound-method': 'error'
        // '@typescript-eslint/non-nullable-type-assertion-style': 'error'
        // https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.21.0

        // experimental
        // '@typescript-eslint/no-unsafe-assignment': 'error',

        // read more about and configure:
        // '@typescript-eslint/naming-convention': 'error'
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md

        // 🕸
        '@typescript-eslint/ban-ts-comment': ['error'],
        '@typescript-eslint/no-explicit-any': [
            'error',
            {
                ignoreRestArgs: true,
            },
        ],
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-loss-of-precision': 'error', // undocumented
        '@typescript-eslint/prefer-literal-enum-member': 'error', // undocumented

        // 👀
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',

        '@typescript-eslint/prefer-enum-initializers': 'error', // undocumented

        /**
         * #improves-code-stability
         * Optional chain expressions are designed to return undefined if the optional property is
         * nullish. Using non-null assertions after an optional chain expression is wrong, and
         * introduces a serious type safety hole into your code.
         * Bad: `foo?.bar!`, Good: `foo?.bar`
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        /**
         * #improves-code-understanding
         * Bad: `function f(a = 0, b: number) {}`, Good: `function f(a: number, b = 0) {}`
         */
        '@typescript-eslint/default-param-last': 'error',

        /**
         * #improves-code-understanding
         * Bad: `for (let index = 0; index < array.length; index++) {`
         * Good: `for (const element of array) {`
         */
        '@typescript-eslint/prefer-for-of': 'error',

        /**
         * #improves-code-understanding
         * @example
         * // Bad
         * import { find } from 'module';
         * import { merge } from 'module';
         * // Good
         * import { find, merge } from 'module';
         */
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': ['error'],

        /**
         * #improves-code-understanding, #consistency
         * Bad: `foo && foo.a && foo.a.b && foo.a.b.c`
         * Good: `foo?.a?.b?.c`
         */
        '@typescript-eslint/prefer-optional-chain': 'error',

        /**
         * #i-don't-know
         * Empty constructors.
         * ```ts
         * // Bad
         * class A {
         *  constructor() {}
         * }
         * class A extends B {
         *   constructor(value) {
         *     super(value);
         *   }
         * }
         * ```
         */
        '@typescript-eslint/no-useless-constructor': 'error',

        /**
         * #consistency, #improves-code-understanding
         * Bad: `constructor(private readonly name: string) {}`, Good: `constructor(name: string) {}`
         */
        '@typescript-eslint/no-parameter-properties': 'error',

        /**
         * #consistency
         * Bad: `const bar = foo!!!.bar`, Good: `const bar = foo!.bar`
         */
        '@typescript-eslint/no-extra-non-null-assertion': 'error',

        /**
         * #ban, #low
         * This rule suggests using a function type instead of an interface or object type literal with
         * a single call signature.
         */
        '@typescript-eslint/prefer-function-type': 'error',

        /**
         * #ban
         * Don't allow defining namespaces. Use `import/export` syntax for organizing code.
         */
        '@typescript-eslint/no-namespace': 'error',

        /**
         * #ban
         * Don't allow for TypeScript `/// <reference />` syntax.
         */
        '@typescript-eslint/triple-slash-reference': 'error',

        /**
         * #ban, #low
         * Bad: `interface Foo {}`
         * Bad: `interface Bar extends Foo {}`
         */
        '@typescript-eslint/no-empty-interface': 'error',

        /**
         * #ban
         * Bad: `delete container[name]`, Good: `delete container.aaa`
         */
        '@typescript-eslint/no-dynamic-delete': 'error',

        /**
         * #consistency, #ban, #affects-code-execution
         * Bad: `Array(1, 2, 3)`, Good: `[1, 2, 3]`, Good: `Array(20)`
         * #affects-code-execution because the `Array` constructor could overwritten - extremely rare.
         */
        '@typescript-eslint/no-array-constructor': 'error',

        /**
         * #remove-unnecessary, #improves-code-understanding
         * Warns for any two overloads that could be unified into one by using a union or an
         * optional/rest parameter.
         */
        '@typescript-eslint/unified-signatures': 'error',

        /**
         * #consistency
         * Bad: `const self = this`
         */
        '@typescript-eslint/no-this-alias': 'error',

        /**
         * #consistency
         * Bad: `<number>value`, Good: `value as number`
         * Bad: `const x = { ... } as T;`, Good: `const x: T = { ... };`
         */
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
        ],

        /**
         * #consistency
         * Forces all array declarations to use the same style. `T[]` and
         * `readonly T[]` instead of `Array<T>` and `ReadonlyArray<T>`
         */
        '@typescript-eslint/array-type': 'error',

        /**
         * #consistency
         * Don't add `public`. Exceptions are class and object properties.
         */
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            { accessibility: 'no-public', overrides: { properties: 'explicit' } },
        ],

        /**
         * #consistency
         * ```ts
         * // Bad
         * foo(s: string): void;
         * bar(): void {}
         * foo(sn: string | number): void {}
         *
         * // Good
         * bar(): void {}
         * foo(s: string): void;
         * foo(sn: string | number): void {}
         * ```
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',

        /**
         * #consistency
         * Bad: `const value: number = 4`, Good: `const value = 4`
         */
        '@typescript-eslint/no-inferrable-types': [
            'error',
            { ignoreParameters: true, ignoreProperties: true },
        ],

        /**
         * #consistency
         * Bad: `'foo' as 'foo'`, Good: `'foo' as const`
         */
        '@typescript-eslint/prefer-as-const': 'error',
    },
}
