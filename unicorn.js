module.exports = {
    rules: {
        // waiting
        // 'unicorn/prefer-math-trunc': 'error'
        // 'unicorn/numeric-separators-style': 'error'
        // 'unicorn/prefer-ternary': 'error'
        // 'unicorn/prefer-date-now`: 'error'
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-default-parameters.md
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-some.md
        // https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v26.0.0
        // https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v27.0.0
        // https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v29.0.0

        // experimental
        'unicorn/prefer-set-has': 'error',

        // 🕸
        'unicorn/no-object-as-default-parameter': 'error', // undocumented

        // 👀
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-optional-catch-binding': 'error',
        'unicorn/prefer-array-find': 'error', // undocumented

        /**
         * #improves-code-stability, #low
         */
        'unicorn/no-array-instanceof': 'error',

        /**
         * #improves-code-stability, #improves-code-understanding
         * Bad: `// eslint-disable-next-line`, Good: `// eslint-disable-next-line no-console`
         */
        'unicorn/no-abusive-eslint-disable': 'error',

        /**
         * #improves-code-stability
         * Bad: `console.log('abc ', 'def')`, Good: `console.log('abc', 'def')`
         */
        'unicorn/no-console-spaces': 'error',

        /**
         * #improves-code-stability
         * Bad: `[1, 2, 3].map(fn)`, Good: `[1, 2, 3].map(x => fn(x))`
         */
        'unicorn/no-fn-reference-in-iterator': 'error',

        /**
         * #improves-code-stability, #improves-performance
         * Bad: `foo.innerText = '🦄'`, Good: `foo.textContent = '🦄'`
         */
        'unicorn/prefer-text-content': 'error',

        /**
         * #improves-code-stability, #low
         */
        'unicorn/prefer-add-event-listener': 'error',

        /**
         * #improves-code-understanding
         * This rule enforces you to throw a `TypeError` after a type checking if-statement, instead of
         * a generic `Error`.
         * @example
         * // Bad
         * if (Array.isArray(foo) === false) {
         *   throw new Error('Array expected');
         * }
         * // Good
         * if (Array.isArray(foo) === false) {
         *   throw new TypeError('Array expected');
         * }
         */
        'unicorn/prefer-type-error': 'error',

        /**
         * #improves-code-understanding
         * Bad: `if (event.keyCode === 8) {`, Good: `if (event.key === 'Backspace') {`
         */
        'unicorn/prefer-event-key': 'error',

        /**
         * #improves-code-understanding
         * Bad: `throw Error()`, Good: `throw new Error()`
         */
        'unicorn/throw-new-error': 'error',

        /**
         * #improves-code-understanding, #consistency
         * Enforces the name of the variable in a catch statement to be `err`.
         */
        'unicorn/catch-error-name': ['error', { name: 'err' }],

        /**
         * #improves-code-understanding
         * More info here:
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
         */
        'unicorn/no-unused-properties': 'error',

        /**
         * #improves-code-understanding
         * Bad: `const foo = 1.0`, Good: `const foo = 1`
         */
        'unicorn/no-zero-fractions': 'error',

        /**
         * #improves-code-understanding
         *
         * Bad: `childNode.replaceWith(newNode)`
         * Good: `parentNode.replaceChild(newNode, oldNode)`
         *
         * Bad: `referenceNode.before(newNode)`
         * Good: `parentNode.insertBefore(newNode, referenceNode)`
         *
         * Bad: `referenceNode.before('text')`
         * Good: `referenceNode.insertAdjacentText('beforebegin', 'text')`
         *
         * Bad: `referenceNode.before(newNode)`
         * Good: `referenceNode.insertAdjacentElement('beforebegin', newNode)`
         */
        'unicorn/prefer-modern-dom-apis': 'error',

        /**
         * #improves-code-understanding
         * Bad: `foo.appendChild(bar)`, Good: `foo.append(bar)`
         */
        'unicorn/prefer-node-append': 'error',

        /**
         * #improves-code-understanding
         * Bad: `foo.parentNode.removeChild(bar)`, Good: `foo.remove()`
         */
        'unicorn/prefer-node-remove': 'error',

        /**
         * #improves-code-understanding
         * Bad: `document.getElementById('foo')`, Good: `document.querySelector('#foo')`
         */
        'unicorn/prefer-query-selector': 'error',

        /**
         * #improves-code-understanding
         * Bad: `const regex = /[0-9]/`, Good: `const regex = /\d/`
         */
        'unicorn/better-regex': 'error',

        /**
         * #improves-code-understanding
         * Bad: `new Error()`, Good: `new Error('message')`
         */
        'unicorn/error-message': 'error',

        /**
         * #improves-code-understanding
         * Bad: `const foo = '\xa9';`, Good: `const foo = '\xA9';`
         */
        'unicorn/escape-case': 'error',

        /**
         * #improves-code-understanding, #consistency, #opinionated
         * Bad: `if (string.length) {}`, Good: `if (array.length !== 0) {}`
         */
        'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],

        /**
         * #improves-code-understanding, #consistency
         */
        'unicorn/new-for-builtins': 'error',

        /**
         * #improves-code-understanding, #consistency, #opinionated
         * Allow only camelCase and pascalCase file names.
         */
        'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],

        /**
         * #improves-code-understanding, #low
         * Bad: `const [,, foo] = parts`, Good: `const [, foo] = parts`
         */
        'unicorn/no-unreadable-array-destructuring': 'error',

        /**
         * #improves-code-understanding
         * Bad: `[1, 2, 3].map(i => [i]).flat()`, Good: `[1, 2, 3].flatMap(i => [i])`
         */
        'unicorn/prefer-flat-map': 'error',

        /**
         * #improves-code-understanding, #consistency
         * Bad: `foo.slice(foo.length - 2, foo.length - 1)`, Bad: `foo.splice(foo.length - 1, 1)`
         * Good: `foo.slice(-2, -1)`, Good: `foo.splice(-1, 1)`
         */
        'unicorn/prefer-negative-index': 'error',

        /**
         * #consistency
         * Bad: `foo.substr(1, 2)`, Bad: `foo.substring(1, 3)`, Good: `foo.slice(1, 3)`
         */
        'unicorn/prefer-string-slice': 'error',

        /**
         * #consistency
         * Bad: `const foo = bar.trimLeft()`, Bad: `const foo = bar.trimRight()`
         * Good: `const foo = bar.trimStart()`, Good: `const foo = bar.trimEnd()`
         */
        'unicorn/prefer-trim-start-end': 'error',

        /**
         * #consistency
         * Bad: `const m = require('@foo/bar/index')`, Good: `const m = require('@foo/bar')`
         */
        'unicorn/import-index': 'error',

        /**
         * #consistency
         * Bad: `element.setAttribute('data-foo', 'bar')`, Good: `element.dataset.foo = 'bar'`
         */
        'unicorn/prefer-dataset': 'error',

        /**
         * #i-don't-know, #low
         */
        'unicorn/custom-error-definition': 'error',

        /**
         * #consistency
         * Bad: `const foo = '\x1B'`, Good: `const foo = '\u001B'`
         */
        'unicorn/no-hex-escape': 'error',

        /**
         * #ban
         * Don't use `process.exit()`. Allowed only in `#!/usr/bin/env node` files and in
         * `process.on('<event>', func)` event handles.
         */
        'unicorn/no-process-exit': 'error',

        /**
         * #ban
         * Bad: `const buffer = new Buffer('7468697320697320612074c3a97374', 'hex')`
         * Good: `const buffer = Buffer.from('7468697320697320612074c3a97374', 'hex')`
         * Bad: `const buffer = new Buffer(10)`
         * Good: `Buffer.alloc(10)`
         */
        'unicorn/no-new-buffer': 'error',
    },
}
