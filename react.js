module.exports = {
    rules: {
        /**
         * #improves-code-stability
         */
        'react/jsx-key': 'error',

        /**
         * #improves-code-stability
         * The default value of type attribute for button HTML element is "submit" which is often not
         * the desired behavior and may lead to unexpected page reloads. This rules enforces an explicit
         * type attribute for all the button elements and checks that its value is valid per spec
         * (i.e., is one of "button", "submit", and "reset").
         */
        'react/button-has-type': 'error',

        /**
         * #improves-code-stability
         * (not exactly code stability, maybe the category should be with different name)
         * Bad: `<div>// empty div </div>`
         */
        'react/jsx-no-comment-textnodes': 'error',

        /**
         * #improves-code-stability
         * Prevent duplicate properties in JSX - just like in JavaScript strict mode.
         */
        'react/jsx-no-duplicate-props': 'error',

        /**
         * #improves-code-stability, #security
         * When creating a JSX element that has an a tag, it is often desired to have the link open in a
         * new tab using the `target='_blank'` attribute. Using this attribute unaccompanied by
         * `rel='noreferrer noopener'`, however, is a severe security vulnerability (see here for more
         * details) This rules requires that you accompany `target='_blank'` attributes with
         * `rel='noreferrer noopener'`.
         */
        'react/jsx-no-target-blank': 'error',

        /**
         * #improves-code-understanding
         * Don't add children properties when `dangerouslySetInnerHTML` is used.
         */
        'react/no-danger-with-children': 'error',

        /**
         * #improves-code-understanding
         * A fragment is redundant if it contains only one child, or if it is the child of a html
         * element, and is not a keyed fragment.
         */
        'react/jsx-no-useless-fragment': 'error',

        /**
         * #i-don't-know
         * Bad: `<div>a</div>`, Good: `return <div>a</div>`
         */
        'react/require-render-return': 'error',

        /**
         * #consistency
         * Bad: `<Control required={true} />`, Good: `<Control required />`
         */
        'react/jsx-boolean-value': 'error',

        /**
         * #consistency
         * Bad: `<span>{'Hello'}</span>`, Good: `<span>Hello</span>`,
         * Bad: `<Control value={'something'} />`, Good: `<Control value="something" />`,
         */
        'react/jsx-curly-brace-presence': 'error',

        /**
         * #consistency
         * Bad: `<React.Fragment>content</React.Fragment>`, Good: `<>content</>`
         */
        'react/jsx-fragments': 'error',

        /**
         * #ban
         * Allow only `.tsx` files for React components.
         */
        'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],

        /**
         * #ban
         * Don use `React.findDOMNode()` method.
         */
        'react/no-find-dom-node': 'error',

        /**
         * #ban
         * `ReactDOM.render()` currently returns a reference to the root `ReactComponent` instance.
         * However, using this return value is legacy and should be avoided because future versions of
         * React may render components asynchronously in some cases.
         */
        'react/no-render-return-value': 'error',

        /**
         * #ban
         * Disables the usage of `this.setState()` which ensures we don't use classes and only hooks.
         */
        'react/no-set-state': 'error',

        /**
         * #ban
         * Don't allow strings as refs.
         * Bad: `<div ref="hello"></div>`
         */
        'react/no-string-refs': 'error',

        /**
         * #ban
         * No access to `this.props` and other `this` properties in function components.
         */
        'react/no-this-in-sfc': 'error',

        /**
         * #ban
         * Bad: `<MyComponent children={<AnotherComponent />} />`
         * Good: `<MyComponent><AnotherComponent /></MyComponent>`
         */
        'react/no-children-prop': 'error',

        /**
         * #consistency, #naming
         * Only PascalCase names for components.
         */
        'react/jsx-pascal-case': 'error',

        /**
         * #consistency, #naming
         * Bad: `<MyComponent handleChange={this.handleChange} />`
         * Good: `<MyComponent onChange={this.handleChange} />`
         * Bad: `<MyComponent onChange={this.componentChanged} />`
         * Good: `<MyComponent onChange={this.onComponentChanged} />`
         */
        'react/jsx-handler-names': 'error',

        /**
         * #consistency, #formatting
         * Ensure components with no children to be self closing. Prettier previously handled this but
         * it no longer does.
         * Bad: `<Component></Component>`, Good: `<Component />`
         */
        'react/self-closing-comp': 'error',
    },
}
