module.exports = {
    // waiting
    // '@typescript-eslint/no-implicit-any-catch': 'error',
    // '@typescript-eslint/no-loop-func': 'error',
    // '@typescript-eslint/consistent-indexed-object-style': 'error'
    // '@typescript-eslint/no-duplicate-imports': 'error'
    // '@typescript-eslint/no-unnecessary-type-constraint': 'error'
    // '@typescript-eslint/no-confusing-void-expression': 'error'
    // '@typescript-eslint/unbound-method': 'error'
    // '@typescript-eslint/non-nullable-type-assertion-style': 'error'

    // experimental
    // '@typescript-eslint/no-unsafe-assignment': 'error',

    // read more about and configure:
    // '@typescript-eslint/naming-convention': 'error'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md

    // 🕸
    '@typescript-eslint/require-array-sort-compare': 'error',
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
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/ban-types': [
        'error',
        {
            types: {
                '{}': {
                    message: 'Use object instead',
                    fixWith: 'object',
                },
            },
        },
    ],
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error', // undocumented

    /**
     * #improves-code-stability
     * Warns about properties that can be readonly but aren't.
     * Improves code stability because it warns users when trying to turn a readonly property into a
     * mutable one.
     */
    '@typescript-eslint/prefer-readonly': 'error',

    /**
     * #improves-code-stability, #improves-code-understanding
     * Bad: `if (value)`, Good: `if (value !== undefined)`
     */
    '@typescript-eslint/strict-boolean-expressions': ['error'],

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
     * Optional chain expressions are designed to return undefined if the optional property is
     * nullish. Using non-null assertions after an optional chain expression is wrong, and
     * introduces a serious type safety hole into your code.
     * Bad: `foo?.bar!`, Good: `foo?.bar`
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    /**
     * #improves-code-stability, #improves-code-understanding
     * Bad: `return foo !== null && foo !== undefined ? foo : 'a string'`
     * Good: `foo ?? 'a string'`
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    /**
     * #improves-code-understanding
     * Bad: `function f(a = 0, b: number) {}`, Good: `function f(a: number, b = 0) {}`
     */
    '@typescript-eslint/default-param-last': 'error',

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
     * #improves-code-understanding
     * Bad: `for (let index = 0; index < array.length; index++) {`
     * Good: `for (const element of array) {`
     */
    '@typescript-eslint/prefer-for-of': 'error',

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
     * Don't use `for-in` loops for arrays.
     * Bad: `for (const x in [3, 4, 5]) {`, Good: `for (const x in { a: 3, b: 4, c: 5 }) {`
     */
    '@typescript-eslint/no-for-in-array': 'error',

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
     * Asynchronous functions that don’t use await might not need to be asynchronous functions and
     * could be the unintentional result of refactoring.
     */
    '@typescript-eslint/require-await': 'error',

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
     * Only define types using `type`.
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

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

    /**
     * I don't understand it.
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
}
