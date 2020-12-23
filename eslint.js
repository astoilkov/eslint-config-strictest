module.exports = {
    rules: {
        // 🕸
        'array-callback-return': 'error',
        'no-undef': 'error',
        'prefer-const': 'error',
        'no-duplicate-case': 'error',
        'for-direction': 'error',
        'no-useless-backreference': 'error',

        // 👀
        'default-case-last': 'error',

        /**
         * #improves-code-stability
         * Bad: `length += await getLength()`, Good: `length = length + (await getLength())`
         *
         * Making it a warning for now because it started detecting some edge cases which aren't
         * optimal. More info here: https://github.com/eslint/eslint/issues/11899
         */
        'require-atomic-updates': 'warn',

        /**
         * #improves-code-stability, #low
         * Bad: `value === NaN`, Good: `Number.isNaN(value)`
         */
        'use-isnan': 'error',

        /**
         * #improves-code-stability, #low
         * Enforce `return` statement in getters.
         */
        'getter-return': 'error',

        /**
         * #improves-code-stability, #low
         * Bad: `new Promise(async (resolve, reject) => {`, Good: `new Promise((resolve, reject) => {`
         */
        'no-async-promise-executor': 'error',

        /**
         * #improves-code-stability, #low
         * Bad: `x === -0`, Good: `x === 0`
         */
        'no-compare-neg-zero': 'error',

        /**
         * #improves-code-stability
         * Bad: `user.name = 'John'`, Good: `user.name === 'John'`
         */
        'no-cond-assign': 'error',

        /**
         * #improves-code-stability, #low
         * Bad: `if (false) {`
         */
        'no-constant-condition': ['error', { checkLoops: false }],

        /**
         * #improves-code-stability
         *  Bad: `/^abc[]/`, Good: `/^abc/`
         */
        'no-empty-character-class': 'error',

        /**
         * #improves-code-stability, #low
         */
        'no-misleading-character-class': 'error',

        /**
         * #improves-code-stability
         * While the items array in this example `var items = [,,];` has a length of 2, there are
         * actually no values in `items[0]` or `items[1]`. The fact that the array literal is valid with
         * only commas inside, coupled with the length being set and actual item values not being set,
         * make sparse arrays confusing for many developers.
         */
        'no-sparse-arrays': 'error',

        /**
         * #improves-code-stability
         * Bad: `"Hello ${name}!"`, Good: ``Hello ${name}!``
         */
        'no-template-curly-in-string': 'error',

        /**
         * #improves-code-stability
         * Don't use `var` declarations. Only `let` and `const`.
         */
        'no-var': 'error',

        /**
         * #improves-code-stability
         * @example
         * // Bad
         * var foo = bar
         * (1 || 2).baz()
         *
         * // Good
         * var foo = bar
         * ;(1 || 2).baz()
         */
        'no-unexpected-multiline': 'error',

        /**
         * #improves-code-stability
         * Don't allow unhandled exceptions.
         */
        'promise/catch-or-return': 'error',

        /**
         * #improves-code-stability, #low
         * Bad: `new Symbol('foo')`, Good: `Symbol('foo')`
         */
        'no-new-symbol': 'error',

        eqeqeq: 'error',

        /**
         * #improves-code-stability
         * Don't allow a `case` without a `break` inside of it.
         */
        'no-fallthrough': 'error',

        /**
         * #improves-code-stability, #consistency
         * Bad: `const n = +foo`, Good: `const n = Number(foo)`
         */
        'no-implicit-coercion': 'error',

        /**
         * #improves-code-stability
         * Bad: `const num = parseInt('71')`, Good: `const num = parseInt('71', 10)`
         */
        radix: 'error',

        /**
         * #improves-code-stability
         * Bad: `RegExp('[')`
         */
        'no-invalid-regexp': 'error',

        /**
         * #improves-code-stability
         * Does two things:
         * 1. Make the regular expression handling UTF-16 surrogate pairs correctly
         * 2. Make the regular expression throwing syntax errors early.
         */
        'require-unicode-regexp': 'error',

        /**
         * #improves-code-stability
         * Enforces you to handle errors. `function loadData(err, callback)`
         */
        'handle-callback-err': 'error',

        /**
         * #improves-code-stability
         * Banning bitwise operators can lower mistakes when you actually want to use it's double form
         * which is way more common. The rare cases when it is intentional it can manually be disabled.
         * Bad: `a | b`
         * Good: `a || b`
         */
        'no-bitwise': 'error',

        /**
         * #improves-code-stability, #improves-code-understanding
         * @example
         * // Bad
         * while (node) {
         *   doSomething(node);
         * }
         * // Good
         * while (node) {
         *   doSomething(node);
         *   node = node.parent
         * }
         */
        'no-unmodified-loop-condition': 'error',

        /**
         * #improves-code-stability
         * @example
         * // Bad
         * import mod, { named } from "./mod.mjs"
         * mod = 1
         * named = 2
         * // Good
         * import mod, { named } from "./mod.mjs"
         * mod.prop = 1
         * named.prop = 2
         */
        'no-import-assign': 'error',

        /**
         * #improves-code-stability
         * Don't allow duplicate code in different else if statements. Improves code stability because
         * you can change one code path without changing the other.
         */
        'no-dupe-else-if': 'error',

        /**
         * #improves-code-understanding
         * @example
         * // Bad
         * function doSomething(condition) {
         *   if (condition) {
         *     return true
         *   } else {
         *     return
         *   }
         * }
         * // Bad
         * function doSomething(condition) {
         *   if (condition) {
         *     return true
         *   }
         * }
         * // Good
         * function doSomething(condition) {
         *   if (condition) {
         *     return true
         *   } else {
         *     return false
         *   }
         * }
         * // Good
         * function doSomething(condition) {
         *   if (condition) {
         *     return true
         *   }
         *   return false
         * }
         */
        'consistent-return': 'error',

        /**
         * #improves-code-understanding
         * Warn when using a `bind()` call in which `this` isn't used.
         */
        'no-extra-bind': 'error',

        /**
         * #improves-code-understanding, #low
         * If a loop contains no nested loops or switches, labeling the loop is unnecessary.
         */
        'no-extra-label': 'error',

        /**
         * #improves-code-understanding
         * Labels that are declared and not used anywhere in the code are most likely an error due to
         * incomplete refactoring.
         */
        'no-unused-labels': 'error',

        /**
         * #improves-code-understanding
         * Bad: `foo.call(undefined, 1, 2, 3)`, Good: `foo.call(obj, 1, 2, 3)`
         * Bad: `foo.apply(undefined, [1, 2, 3])`, Good: `foo.apply(obj, [1, 2, 3])`
         */
        'no-useless-call': 'error',

        /**
         * #improves-code-understanding
         * A `catch` clause that only rethrows the original error is redundant, and has no effect on the
         * runtime behavior of the program. These redundant clauses can be a source of confusion and
         * code bloat, so it’s better to disallow these unnecessary catch clauses.
         */
        'no-useless-catch': 'error',

        /**
         * #improves-code-understanding, #low
         */
        'no-useless-concat': 'error',

        /**
         * #improves-code-understanding
         */
        'no-useless-escape': 'error',

        /**
         * #improves-code-understanding
         */
        'prefer-promise-reject-errors': 'error',

        /**
         * #improves-code-understanding, #consistency
         * Yoda conditions are so named because the literal value of the condition comes first while the
         * variable comes second.
         * Bad: `if ('red' === color) {`
         */
        yoda: 'error',

        /**
         * #improves-code-understanding
         * If an `if` block contains a `return` statement, the `else` block becomes unnecessary. Its
         * contents can be placed outside of the block.
         */
        'no-else-return': 'error',

        /**
         * #improves-code-understanding
         * Use `...args` as function argument instead of `arguments` global variable.
         */
        'prefer-rest-params': 'error',

        /**
         * #improves-code-understanding
         * Bad: `Math.max.apply(Math, args)`, Good: `Math.max(...args)`
         */
        'prefer-spread': 'error',

        /**
         * #improves-code-understanding
         * Bad: `"Hello, " + name + "!"`, Good: ``Hello, ${name}!``
         */
        'prefer-template': 'error',

        /**
         * #improves-code-understanding
         */
        'require-yield': 'error',

        /**
         * #improves-code-understanding
         */
        'no-unsafe-finally': 'error',

        /**
         * #improves-code-understanding, #consistency
         * Bad: `{ method: function () {} }`, Good: `{ method() { } }`
         */
        'object-shorthand': ['error', 'methods'],

        /**
         * #improves-code-understanding, #low
         * Bad: `parseInt("111110111", 2)`, Good: `0b111110111`
         */
        'prefer-numeric-literals': 'error',

        /**
         * #improves-code-understanding
         * Bad: `function () { return 3 }`, Good: `() => 3`
         */
        'prefer-arrow-callback': 'error',

        /**
         * #improves-code-understanding
         * Bad: `Symbol()`, Good: `Symbol('description')`
         */
        'symbol-description': 'error',

        /**
         * #improves-code-understanding
         * In contexts such as an if statement’s test where the result of the expression will already be
         * coerced to a Boolean, casting to a Boolean via double negation (!!) or a Boolean call is
         * unnecessary. For example, these if statements are equivalent:
         */
        'no-extra-boolean-cast': 'error',

        /**
         * #improves-code-understanding
         * @example
         * // Bad
         * import { find } from 'module';
         * import { merge } from 'module';
         * // Good
         * import { find, merge } from 'module';
         */
        'no-duplicate-imports': ['error', { includeExports: true }],

        /**
         * #improves-code-understanding
         * Bad: `var foo = {["a"]: "b"}`, Good: `var foo = {"a": "b"}`
         */
        'no-useless-computed-key': 'error',

        /**
         * #improves-code-understanding
         * @example
         * // Bad
         * import { foo as bar } from "baz"
         * export { foo as bar }
         * let { foo: bar } = baz
         *
         * // Good
         * import { foo } from "bar"
         * export { foo }
         * let { foo } = bar
         */
        'no-useless-rename': 'error',

        /**
         * #improves-code-understanding
         * Don't allow strings that span across multiple lines.
         */
        'no-multi-str': 'error',

        /**
         * #improves-code-understanding
         * Bad: `new String("Hello world")`
         * Bad: `new Number(33)`
         * Bad: `new Boolean(false)`
         */
        'no-new-wrappers': 'error',

        /**
         * #improves-code-understanding
         */
        'no-useless-return': 'error',

        /**
         * #improves-code-understanding
         * This rule aims to create clearer code by disallowing the bad practice of creating a label
         * that shares a name with a variable that is in scope.
         * @example
         * // Bad
         * var x = foo;
         * function bar() {
         *   x: for (;;) {
         *     break x;
         *   }
         * }
         */
        'no-label-var': 'error',

        /**
         * #improves-code-understanding
         * Bad: `const appHeader = new require('app-header');`
         * Good: `const AppHeader = require('app-header'); const appHeader = new AppHeader();`
         */
        'no-new-require': 'error',

        /**
         * #improves-code-understanding, #experiment
         * Enforce a maximum depth that callbacks can be nested.
         * The value of `4` is found out by experimenting with the Nota codebase.
         */
        'max-nested-callbacks': ['error', { max: 4 }],

        /**
         * #improves-code-understanding
         * Bad: `const foo = function bar() {}`
         * Good: `const foo = function foo() {}`
         */
        'func-name-matching': 'error',

        /**
         * #improves-code-understanding
         * Bad: `const foo = bar === 'something' ? true : false`
         * Good: `const foo = bar === 'something'`
         */
        'no-unneeded-ternary': 'error',

        /**
         * #improves-code-understanding
         * Bad:
         */
        'operator-assignment': 'error',

        /**
         * #improves-code-understanding
         * When `Object.assign()` is called using an object literal as the first argument, this rule
         * requires using the object spread syntax instead. This rule also warns on cases where an
         * `Object.assign()` call is made using a single argument that is an object literal, in this
         * case, the `Object.assign()` call is not needed.
         */
        'prefer-object-spread': 'error',

        /**
         * #improves-code-understanding
         * Bad: `function f(a = 0, b) {}`, Good: `function f(a, b = 0) {}`
         * Bad: `function f(a, b = 0, c) {}`, Good: `function f(a, b, c = 0) {}`
         */
        'default-param-last': 'error',

        /**
         * #improves-code-understanding
         * Bad: `new RegExp('abc')`, Good: `/abc/`
         * Bad: `RegExp(`^\\d\\.$`)`, Good: `/^\d\.$/`
         */
        'prefer-regex-literals': 'error',

        /**
         * #improves-code-understanding
         * Don't allow `return` statements in a class constructor. This is a confusing JavaScript
         * feature which instead of creating a class instance returns a custom value.
         */
        'no-constructor-return': 'error',

        /**
         * #improves-code-understanding
         * While returning a value from a setter does not produce an error, the returned value is being
         * ignored. Therefore, returning a value from a setter is either unnecessary or a possible
         * error, since the returned value cannot be used.
         */
        'no-setter-return': 'error',

        /**
         * #improves-code-understanding, #consistency
         * This rule enforces getter and setter for the same property to be next to each other.
         */
        'grouped-accessor-pairs': 'error',

        /**
         * #consistency
         * Disallow the unary operators `++` and `--`. Unary operators are a shorthand for operator
         * assignments. It is a feature which is rarely used and the time it takes to understand the
         * concept is higher than just plain old `value += 1`. But still this is very opinionated so
         * won't add it a `#improves-code-understanding` tag.
         */
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

        /**
         * #consistency
         * Bad: `const num = .5`, Good: `const num = 0.5`
         */
        'no-floating-decimal': 'error',

        /**
         * #i-don't-know
         * It’s a common mistake in JavaScript to create an object with just a setter for a property but
         * never have a corresponding getter defined for it. Without a getter, you cannot read the
         * property, so it ends up not being used.
         */
        'accessor-pairs': 'error',

        /**
         * #i-don't-know
         * Don't declare variables inside a switch case without wrapping it with braces.
         */
        'no-case-declarations': 'error',

        /**
         * #consistency
         * Bad: `if (foo) foo++`, Good: `if (foo) { foo++ }`
         */
        curly: 'error',

        /**
         * #consistency
         * Bad: `Math.pow(2, 4)`, Good: `2 ** 4`
         */
        'prefer-exponentiation-operator': 'error',

        /**
         * #consistency, #readability
         * Prettier handles it but not in comments. Turning it on only for comments.
         */
        'no-multi-spaces': 'error',

        /**
         * #consistency
         * Bad: `let bar = undefined`, Good: `let bar;`
         */
        'no-undef-init': 'error',

        /**
         * #ban
         * Don't allow reassigning functions.
         */
        'no-func-assign': 'error',

        /**
         * #ban
         * Ban the usage of `console`.
         */
        'no-console': 'error',

        /**
         * #ban
         * Ban the usage of `debugger`.
         */
        'no-debugger': 'error',

        /**
         * #ban
         * Ban empty block statements like empty if, while, switch
         */
        'no-empty': ['error', { allowEmptyCatch: true }],

        /**
         * #ban
         * Don't allow reassigning the `err` variable in the catch close of a try/catch.
         */
        'no-ex-assign': 'error',

        /**
         * #ban
         * Various whitespace characters can be inputted by programmers by mistake for example from
         * copying or keyboard shortcuts. Pressing Alt + Space on macOS adds in a non breaking space
         * character for example.
         */
        'no-irregular-whitespace': 'error',

        /**
         * #ban
         * Bad: `foo.hasOwnProperty("bar")`, Good: `Object.prototype.hasOwnProperty.call(foo, "bar")`
         * Bad: `foo.isPrototypeOf(bar)`, Good: `Object.prototype.isPrototypeOf.call(foo, bar)`
         * Bad: `foo.propertyIsEnumerable("bar")`, Good: `{}.propertyIsEnumerable.call(foo, "bar")`
         */
        'no-prototype-builtins': 'error',

        /**
         * #ban, #improve-code-understanding, #low
         * Bad: `/foo   bar/`, Good: `/foo {3}bar/`
         */
        'no-regex-spaces': 'error',

        /**
         * #ban
         * Disallow the use of `alert`, `confirm`, and `prompt`.
         */
        'no-alert': 'error',

        /**
         * #ban, #performance
         */
        'no-caller': 'error',

        /**
         * #ban
         * Bad: `const {} = foo`, Good: `const {a = {}} = foo`
         */
        'no-empty-pattern': 'error',

        /**
         * #ban, #security
         * Don't allow `eval()` calls.
         */
        'no-eval': 'error',

        /**
         * #ban, #security
         * Bad: `setTimeout("alert('Hi!');", 100)`
         * Bad: `setInterval("alert('Hi!');", 100)`
         * Bad: `execScript("alert('Hi!')")`
         */
        'no-implied-eval': 'error',

        /**
         * #ban, #security
         * Bad: `new Function("a", "b", "return a + b")`
         * Bad: `Function("a", "b", "return a + b")`
         */
        'no-new-func': 'error',

        /**
         * #ban
         * Bad: `function NaN(){}`
         * Bad: `!function(Infinity){};`
         * Bad: `var undefined = 5;`
         * Bad: `try {} catch(eval){}`
         */
        'no-shadow-restricted-names': 'error',

        /**
         * #ban
         * Bad: `const fullPath = __dirname + '/foo.js'`
         * Bad: `const fullPath = __filename + '/foo.js'`
         * Good: `const fullPath = join(__dirname, '/foo.js')`
         */
        'no-path-concat': 'error',

        /**
         * #ban, #low
         * Disallow the use of the `__iterator__` property
         */
        'no-iterator': 'error',

        /**
         * #ban
         * Bad: `Object.prototype.a = "a"`
         * Bad: `Object.defineProperty(Array.prototype, "times", { value: 999 })`
         */
        'no-extend-native': 'error',

        /**
         * #ban
         * Bad: `window = {}`
         * Bad: `Object = null`
         * Bad: `length = 1`
         * Bad: `undefined = 1`
         */
        'no-global-assign': 'error',

        /**
         * #ban
         * Don't allow `with` statements.
         */
        'no-with': 'error',

        /**
         * #ban, #low
         * Bad: `const num = 071`
         * Bad: `const result = 5 + 07`
         */
        'no-octal': 'error',

        /**
         * #ban, #low
         * Bad: `const foo = "Copyright \251"`
         * Good: `const foo = "Copyright \u00A9"`
         * Good: `const foo = "Copyright \xA9"`
         */
        'no-octal-escape': 'error',

        /**
         * #ban, #low
         * Don't allow the usage of `__proto__` property.
         * Bad: `obj.__proto__`
         */
        'no-proto': 'error',

        /**
         * #ban
         * Bad: `return foo = bar + 2`
         */
        'no-return-assign': 'error',

        /**
         * #ban
         * Bad: `location.href = "javascript:void(0)"`
         */
        'no-script-url': 'error',

        /**
         * #ban, #low
         * Bad: `foo = foo`
         */
        'no-self-assign': 'error',

        /**
         * #ban, #low
         * Bad: `if (10 === 10)`
         */
        'no-self-compare': 'error',

        /**
         * #ban, #low
         * Bad: `throw "error"`
         * Bad: `throw 0`
         * Bad: `throw undefined`
         * Good: `throw new Error("error")`
         */
        'no-throw-literal': 'error',

        /**
         * #ban
         * Bad: `a = b += 5, a + b`
         * Bad: `foo = doSomething(), val`
         * Bad: `0, eval("doSomething();")`
         */
        'no-sequences': 'error',

        /**
         * #consistency
         * Bad: `const a = 3, b = 4`, Good: `const a = 3; const b = 4`
         */
        'one-var': ['error', 'never'],

        /**
         * #consistency, #improves-debugging
         * Bad: `Foo.prototype.bar = function() {}`, Good: `Foo.prototype.bar = function bar() {}`
         * Bad: `const bar = function () {}`, Good: `const bar = function () {}`
         */
        'func-names': 'error',

        /**
         * #consistency, #naming
         * Bad: `const friend = new person()`, Good: `const friend = new Person()`
         * Bad: `const colleague = Person()`, Good: `const colleague = new Person()`
         * Bad: `const friend = new person.acquaintance()`
         * Good: `const friend = new person.Acquaintance()`
         */
        'new-cap': 'error',

        /**
         * #consistency, #formatting
         * Setting `markers: [,]` in order to allow commenting out function parameters.
         * Bad: `//This is a comment with no whitespace at the beginning`
         * Good: `// This is a comment with no whitespace at the beginning`
         */
        'spaced-comment': ['error', 'always', { markers: [','] }],
    },
}
