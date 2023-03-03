module.exports = {
    /**
     * Problematic because some IDEs comment out a line without adding space after. For example,
     * WebStorm doesn't add a space when commenting out JSX.
     *
     * #consistency, #formatting
     * Setting `markers: [,]` in order to allow commenting out function parameters.
     * Bad: `//This is a comment with no whitespace at the beginning`
     * Good: `// This is a comment with no whitespace at the beginning`
     */
    'spaced-comment': ['error', 'always', { markers: [','] }],

    // 👀
    // problematic because it didn't work in some edge cases. also, it doesn't seem very important
    // but it requires a lot time to order them correctly.
    '@typescript-eslint/member-ordering': 'error',
    // not sure how much value it adds
    '@typescript-eslint/method-signature-style': 'error',

    // - was causing problems in BetterEvents.ts
    // - `object` is not the same as `{}`
    // - seems to create too little value
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
}
