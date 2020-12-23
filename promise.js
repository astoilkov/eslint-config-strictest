module.exports = {
    rules: {
        /**
         * #improves-code-understanding
         * Always name the parameters of `Promise` `resolve` and `reject`.
         */
        'promise/param-names': 'error',

        /**
         * #improves-code-understanding
         * Bad: `promiseA.then(() => promiseB.then())`, Good: `promiseA.then(() => promiseB).then()`
         */
        'promise/no-nesting': 'error',

        /**
         * #improves-code-understanding
         * Bad: `promise.then(() => callback('value'))`, Good: `return promise.then(() => 'value')`
         */
        'promise/no-callback-in-promise': 'error',

        /**
         * #improves-code-understanding, #opinionated
         * Bad: `promise.then(() => {})`, Good: `await promise`
         */
        'promise/prefer-await-to-then': 'error',

        /**
         * #ban
         * Bad: `promise.then(() => Promise.resolve(foo)`, Good: `promise.then(() => foo)`
         * Bad: `promise.then(() => Promise.reject(foo)`
         * Good: `promise.then(() => throw new Error('description'))`
         */
        'promise/no-return-wrap': 'error',

        /**
         * #ban
         * Bad: `promise.finally(() => { return foo })`
         */
        'promise/no-return-in-finally': 'error',
    },
}
