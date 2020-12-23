# Rules

Type:
- 🕸️ Bug catcher. Less bugs.
- 👀 Eyes read. "Programs must be written for people to read, and only incidentally for machines to execute."
- 👿 Evil practice.

Status:
- ✔️ A rule which turned on\
- 🤔 Still wondering if it is a good idea\
- ⛔ Rule which was considered but was declined

### ✔️ 🕸 `@typescript-eslint/no-explicit-any`

[no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)

### ✔️  🕸  `@typescript-eslint/require-array-sort-compare`

[Requires Array#sort calls to always provide a compareFunction (require-array-sort-compare)](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md)

Bad: `numbers.sort()`\
Good: `numbers.sort((a, b) => a - b)`

### ✔️ 🕸 `array-callback-return`

[array-callback-return](https://eslint.org/docs/rules/array-callback-return)

Some array methods require `return` statements. Ensure there is a `return` statement.

Which one of the two code blocks have a bug inside of it?
```typescript
const isInCodeBlock = editor.getSelections().every((selection) => {
    findOverlappingNodes(editor.markdown.nodes, selection).some(
        (node) =>
            node.type === 'block-html' ||
            node.type === 'block-math' ||
            node.type === 'block-fenced-code' ||
            node.type === 'block-indented-code',
    )
})

const isInCodeBlock = editor.getSelections().every((selection) =>
    findOverlappingNodes(editor.markdown.nodes, selection).some(
        (node) =>
            node.type === 'block-html' ||
            node.type === 'block-math' ||
            node.type === 'block-fenced-code' ||
            node.type === 'block-indented-code',
    )
)
```

The first code block has the bug. The rule catches the bug but your eyes can miss it. The first function has curly braces which means it needs a `return` statement.

### ✔️ 🕸 `no-undef`

[Disallow Undeclared Variables (no-undef)](https://eslint.org/docs/rules/no-undef)

In the general case TypeScript detects undeclared variables. However, in the case of some disabled globals like `top` and `name` this rule reports the problems.

```javascript
globals: {
    top: 'off',
    name: 'off',
}
```

### ✔️  🕸  `no-duplicate-case`

[Rule to disallow a duplicate case label (no-duplicate-case)](https://eslint.org/docs/rules/no-duplicate-case)

Doesn't allow handling the same case in a `switch` statement twice.

### ✔️  🕸  `for-direction`

[Enforce "for" loop update clause moving the counter in the right direction. (for-direction)](https://eslint.org/docs/rules/for-direction)

Bad: `for (var i = 0; i < 10; i--)`\
Good: `for (var i = 0; i < 10; i++)`

Bad: `for (var i = 10; i >= 0; i++)`\
Good: `for (var i = 10; i >= 0; i--)`

### ✔️  🕸  `react-hooks/rules-of-hooks`

Enforces general rules of React Hooks: https://reactjs.org/docs/hooks-rules.html.

A must if you are developing with React Hooks. It is created by the React team. Without this hook a lot of bugs can creep in.

### ✔️  🕸  `react-hooks/exhaustive-deps`

Enforces general rules of React Hooks: https://reactjs.org/docs/hooks-rules.html

A must if you are developing with React Hooks. It is created by the React team. Without this hook a lot of bugs can creep in.

### ✔️ 🕸 `@typescript-eslint/ban-ts-comment`

[typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md)

Don't allow `@ts-expect-error`, `@ts-ignore`, `@ts-nocheck`, `@ts-check` comments in the code.

Almost all TypeScript checks catch some kind of possibility of a bug. Disabling TypeScript errors is quite dangerous. For years developing an app we never once needed to disable a TypeScript error.

Solid evidence should be presented in order to remove this rule from the list.

### ✔️ 🕸 `@typescript-eslint/no-invalid-this`

[typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md)

Disallow `this` keywords outside of classes or class-like objects.

### ✔️ 🕸 `no-useless-backreference`

[no-useless-backreference](https://eslint.org/docs/7.0.0/rules/no-useless-backreference)

### ✔️ 👀 `prefer-const`

[Suggest using const (prefer-const)](https://eslint.org/docs/rules/prefer-const)

- 😄 Promotes less `let` statements. `let` statements are harder to follow because their value can always change and we need to read the entire scope to understand what happens with the variable.

### ✔️ 👀 `@typescript-eslint/explicit-function-return-type`

[Require explicit return types on functions and class methods (explicit-function-return-type)](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)

- 😄 enables refactoring which otherwise won't catch the changes
- 😄 consistency between single and multi parameter functions because Prettier formats single parameter functions like `e => onKeyDown(e)` and multi parameter functions with brackets `(a, b) => do(a, b)` this way even single parameter functions have brackets `(e): void => onKeydown(e)`.

### ✔️  👀  `@typescript-eslint/class-literal-property-style`

[Ensures that literals on classes are exposed in a consistent style (class-literal-property-style)](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md)

Improves code consistency by enforcing one type of literal declaration. The default value is used – which is better for TypeScript projects but can not optimal for JavaScript projects. JavaScript can reassign the value which is not expected from the TypeScript compiler and the end result can be confusing for the developer consuming your API. For more information read the rule documentation.

### ✔️  👀  `unicorn/prefer-number-properties`

[Prefer Number static properties over global ones.](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-number-properties.md)

Consistency. Prefers `Number.isNaN()` and `Number.isFinite()` which are better more modern versions of the their global counterparts.

```javascript
// Bad
const foo = parseInt('10', 2);
const foo = parseFloat('10.5');
const foo = isNaN(10);
const foo = isFinite(10);
if (Object.is(foo, NaN)) {}
const {parseInt} = Number;
const foo = parseInt('10', 2);

// Good
const foo = Number.parseInt('10', 2);
const foo = Number.parseFloat('10.5');
const foo = Number.isNaN(10);
const foo = Number.isFinite(10);
if (Object.is(foo, Number.NaN)) {}
```

### ✔️ 👀 `@typescript-eslint/member-ordering`

[typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md)

Enforces consistent order of properties, constructors, methods and their access levels private, protected and public. Using the default configuration.

### ✔️  👀  `method-signature-style`

[method-signature-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md)

Increases consistency thus making it easier to read.

```typescript
// Good
interface T1 {
  func(arg: string): number;
}

// Bad
interface T2 {
  func: (arg: string) => number;
}
```

### ✔️ 👀 `@typescript-eslint/no-confusing-non-null-assertion`

[typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md)

### ✔️ 👀 `@typescript-eslint/ban-types`

Bans some types from being used: `String`, `Boolean`, `Number`, `Object`, `Symbol` and `{}`.

Extending the defaults to add `{}` to the banned types in favor of `object`. This is because `object` is the more restrictive type. An explanation about the differences can be found in the article [Typing objects in TypeScript](https://2ality.com/2020/01/typing-objects-typescript.html).

If this rule doesn't exist the following code won't work:
```ts
function getString(): String {
  return 'string'
}
function manipulateString(value: string) {
  return value + '++'
}

// Argument of type 'String' is not assignable to parameter of type 'string'. 'string'
// is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
manipulateString(getString())
```

###  ✔️ 👀 `@typescript-eslint/prefer-reduce-type-parameter`

[typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)

Promotes the better way to use `array.reduce()`.

### ✔️ 👀 `@typescript-eslint/no-invalid-void-type`

[typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md)

Improves consistency by banning invalid usages of the `void` keyword.

`allowInGenericTypeArguments` isn't set to `false` because `Promise<void>` becomes an error. `Promise<void>` is a common pattern when running a promise which doesn't resolve with a value.

### ✔️ 👀 `@typescript-eslint/dot-notation`

[typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)

### ✔️ 👀 `default-case-last`

[default-case-last](https://eslint.org/docs/7.0.0/rules/default-case-last)

### ✔️ 👀 `unicorn/prefer-optional-catch-binding`

[prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-optional-catch-binding.md)

If you don't use a variable better to remove it.

### 🧪  🐎  `unicorn/prefer-set-has`

[Prefer Set#has() over Array#includes() when checking for existence or non-existence](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-set-has.md)

### 🤔 👀 `unicorn/string-content`

[Enforce better string content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/string-content.md)
    - `are not` -> `aren't`, `is not` -> `isn't`

### 🤔 👀 `@typescript-eslint/naming-convention`

[Enforces naming conventions for everything across a codebase](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)

Time consuming to setup.

### 🤔 👀 `unicorn/no-null`

[no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-null.md)

Issues:
- not rendering a component in React is done via `return null`
- `useRef<HTMLInputElement>(null)` – `undefined` can't be used in this case


### 🤔 👀 `@typescript-eslint/typedef`

[Requires type annotations to exist (typedef)](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md)

- 😃 It solves similar problem to `@typescript-eslint/explicit-function-return-type` which is turned on
- 😡 Every `array.filter()` or similar needs to specify a type

### 🤔 👀 `unicorn/prefer-replace-all` (planned)

Will turn it on in the future when `replaceAll()` is widely available.

### 🤔 👀 `no-unused-expressions` (blocked)

[Disallow Unused Expressions (no-unused-expressions)](https://eslint.org/docs/2.0.0/rules/no-unused-expressions)

Removed because TypeScript `?.` syntax breaks it for now.

```typescript
// Bad
if(0) 0
(function anIncompleteIIFE () {})
```

### 🤔 🕸 `react/no-array-index-key`

[Prevent usage of Array index in keys (react/no-array-index-key)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

### ⛔ 🕸 `@typescript-eslint/no-unnecessary-condition`

[Prevents conditionals where the type is always truthy or always falsy](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md)

`allowConstantLoopConditions: true`

The problem is that `array[index - 1] !== undefined` shows an error. If this gets fixed we can enable it.

### ⛔ 👀 `no-lonely-if`, `unicorn/no-lonely-if`

The main reason for disabling this rule is that code is confusing sometimes when the rule is followed. The main reason is that if you have a single level of `if, else if` statements you expect those statements to have conditions around the same topic. But sometimes that topic is `if A is enabled do A1 or do B1` and then `B1` has logical conditions on its own.

If an if statement is the only statement in the else block, it is often clearer to use an else if form.
```javascript
if (foo) {
  // ...
} else {
  if (bar) {
    // ...
  }
}
```

Disabled because of this case. You want to think in two branches untitled and non untitled. This isn't possible if this rule is enabled because the code will look like the second example:
```javascript
if (isPathToUntitledFile(filePath)) {
    autoSaver.request(filePath, editor.contents())

    if (editor.contents() === '') {
        removeDirtyAction(filePath)
    } else {
        setDirtyTextAction(filePath, editor.contents())
    }
} else {
    if (isAutoSaveActive && isWritable) {
        autoSaver.request(filePath, editor.contents())
    } else if (fileContents === editor.contents()) {
        removeDirtyAction(filePath)
    } else {
        setDirtyTextAction(filePath, editor.contents())
    }
}
```
```javascript
// This is less understandable than the example above:
if (isPathToUntitledFile(filePath)) {
    autoSaver.request(filePath, editor.contents())

    if (editor.contents() === '') {
        removeDirtyAction(filePath)
    } else {
        setDirtyTextAction(filePath, editor.contents())
    }
} else if (isAutoSaveActive && isWritable) {
    autoSaver.request(filePath, editor.contents())
} else if (fileContents === editor.contents()) {
    removeDirtyAction(filePath)
} else {
    setDirtyTextAction(filePath, editor.contents())
}
```

Another example:
```ts
if (selectedButtonIndex === 0) {
    const selections = editor.getSelections()
    editor.contents(newFileContents)
    editor.setSelections(selections)

    removeDirtyAction(filePath)
} else {
    if (isAutoSaveActive) {
        autoSaver.request(filePath, editor.contents())
    } else {
        setDirtyTextAction(filePath, editor.contents())
    }
}
```
```ts
if (selectedButtonIndex === 0) {
    const selections = editor.getSelections()
    editor.contents(newFileContents)
    editor.setSelections(selections)

    removeDirtyAction(filePath)
} else if (isAutoSaveActive) {
    autoSaver.request(filePath, editor.contents())
} else {
    setDirtyTextAction(filePath, editor.contents())
}
```

### ⛔ `unicorn/no-useless-undefined`

[no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-undefined.md)

Conflicts with `array-callback-return`.

### ⛔ `unicorn/no-reduce`

[no-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-reduce.md)

There is too much debate for this. Maybe if this gets traction and most people agree `no-reduce` is a good idea I can consider it again.

### ⛔ `no-negated-condition`

[no-negated-condition - Rules](https://eslint.org/docs/rules/no-negated-condition)

Bad: `a !== b ? 'first' : 'second'`

In some edge cases this rule isn't the best idea. Also in a lot of common cases it is debatable if it's better. Because this rule is so controversial we disable it.

### ⛔  `react/no-access-state-in-setstate`

Bad: `this.setState({value: this.state.value + 1})`\
Good: `this.setState(prevState => ({value: prevState.value + 1}))`

Use hooks instead of classes. This is why this rule isn't part of the rules list.

### ⛔ `react/jsx-child-element-spacing`

This was initially turned on but didn't play well with Prettier. When trying to add `{\**\/}` to bypass an error Prettier puts it on a new line and makes it confusing.

### ⛔ `line-comment-position`

Prettier incorrectly introduces warnings for this rule.

### ⛔ `@typescript-eslint/lines-between-class-members`

[lines-between-class-members - Rules](https://eslint.org/docs/rules/lines-between-class-members)
[lines-between-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md)

It requires spaces between properties not just methods:
```typescript
private itemA: string
// requires a new line here
private itemB: string
```

### ⛔  `no-magic-numbers`, `@typescript-eslint/no-magic-numbers`

### ⛔ `@typescript-eslint/init-declarations`

[typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md)

Sometimes you don't have with what to initialize a value. Initializing it with `undefined` is confusing because it's code that doesn't do anything.

```typescript
let expensiveToCalculateValue
function getValue() {
    if (expensiveToCalculateValue === undefined) {
        expensiveToCalculateValue = calculate()
    }
    
    return expensiveToCalculateValue
}
```

### ⛔ `@typescript-eslint/prefer-ts-expect-error`

We disable suppressing of errors with `@typescript-eslint/ban-ts-comment`. Thus this rule won't have any effect.

### ⛔  `react/boolean-prop-naming`

[Enforces consistent naming for boolean props (react/boolean-prop-naming)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md)

The rules optimize for a TypeScript environment. In TypeScript React PropTypes don't make sense.

###   ⛔ `padded-blocks`, `comma-style`, `no-mixed-operators`, `unicorn/number-literal-case`, `@typescript-eslint/comma-spacing`, `@typescript-eslint/semi`, `react/jsx-closing-bracket-location`, `react/jsx-closing-tag-location`, `react/jsx-curly-newline`, `react/jsx-curly-spacing`, `react/jsx-equals-spacing`, `react/jsx-first-prop-new-line`, `react/jsx-indent-props`, `react/jsx-indent`, `react/jsx-max-props-per-line`, `react/jsx-one-expression-per-line`, `react/jsx-props-no-multi-spaces`, `react/jsx-space-before-closing`, `react/jsx-tag-spacing`, `react/jsx-wrap-multilines`, `arrow-body-style`, `arrow-parens`, `arrow-spacing`, `generator-star-spacing`, `rest-spread-spacing`, `template-curly-spacing`, `yield-star-spacing`, `dot-location`, `comma-dangle`, `space-infix-ops`, `unicorn/empty-brace-spaces`

All rules above are formatting – we don't have formatting rules because we leave that to Prettier.

- [prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

## 🤔

### `no-new`

### `class-methods-use-this`




Enable when Slicedown is rewritten in TypeScript and maybe directly enable
'@typescript-eslint/no-unsafe-call': 'error',
'@typescript-eslint/no-unsafe-return': 'error',
'@typescript-eslint/no-unsafe-member-access': 'error',
     *
Great for improving code quality by adding it and going through the code adding readonly to
function parameters. Great for small modules. Probably a good idea for `local_modules`.
'@typescript-eslint/prefer-readonly-parameter-types': 'error',
     *
Considering:
- `@typescript-eslint/explicit-module-boundary-types` - instead of
- `@typescript-eslint/generic-type-naming` - takes time to turn on, has small value
- `@typescript-eslint/no-require-imports` - need to turn on `esModuleInterop` in `tsconfig.json`
- `@typescript-eslint/restrict-plus-operands` - leaving it here to think about it
- `@typescript-eslint/no-non-null-assertion` – We use comments for explaining why we put `!`
  instead of disabling them globally. Our approach seems superior - code is more
  understandable.
- `react/no-unescaped-entities` - Too little value and it has both advantages and disadvantages.
- `unicorn/prevent-abbreviations` - hard to turn on
- `complexity` - https://eslint.org/docs/rules/complexity
- `no-param-reassign` - I really like this rule but want to enable it later because it isn't easy
  to turn on.
- `'max-params': ['error', { max: 4 }],` - Really like this. Will need some time to turn on.
  Default value for `max` is `3` - consider it.
- `no-restricted-syntax` - This can be useful when a rule doesn't exist for what we want to do.
  Putting it here in order to remember we can use it in the future.
- `lines-around-comment`
    I am not sure. Maybe when the team is bigger it is worth thinking about this more.
    ```javascript
    'lines-around-comment': [
        'error',
        {
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
        allowClassStart: true,
        applyDefaultIgnorePatterns: false,
        },
    ]
    ```

## ⛔

- All ESLint Formatting rules are denied as Prettier handles it.

- `@typescript-eslint/no-floating-promises` - I tried to understand what type of improvement this
  rule makes to the code but without success. I can't turn on a rule which I can't understand the
  value behind it.
- `@typescript-eslint/no-explicit-any` - Too many false positives
- `@typescript-eslint/no-misused-new` - Such a small small value creation
- `@typescript-eslint/no-type-alias` - Tried it. it destroys more value than it creates. it is
  useful for making a rule to now create aliases for primitive types but not a good idea to not
  be allowed to make complex object aliases.
- `@typescript-eslint/no-unused-vars` - TypeScript `noUnusedLocals` and `noUnusedParameters` are
  a better implementation of the same check
- `@typescript-eslint/no-use-before-define` - Don't see the value. it's useful for variables but
  TypeScript already does this
- `@typescript-eslint/prefer-namespace-keyword` - We have another rule which disables the use of
  namespace - `@typescript-eslint/no-namespace`
- `@typescript-eslint/restrict-plus-operands` - I may be missing something here. I don't see how
  this can improve the code. It requires more verbose code which may be good or bad.
- `@typescript-eslint/unbound-method` - I like the concept. In reality I use a specific approach
  in a lot of the code which causes a lot of false positives, this approach can be removed in the
  future so I can revisit this rule.
- `@typescript-eslint/no-var-requires` - We use `require()` for lazy-evaluation and for modules
  with no type definitions. We don't want to ban those cases.
- `@typescript-eslint/ban-ts-ignore` – `@typescript-eslint/ban-ts-comment` does the same plus
  some extra things.
- `react/default-props-match-prop-types` - We don't use React `propTypes`
- `react/destructuring-assignment` - Most commonly we use `useSelector()` and not `props`
  parameter. In the other cases we use TypeScript which requires double definition of properties
  when using destructing which is hard to read and increases the boilerplate.
- `react/display-name` - We don't use React classes.
- `react/jsx-max-depth` - Limits experiments and early(draft) code that still doesn't need
  refactoring without adding much value.
- `react/jsx-no-bind` - We don't use React classes where this approach is required.
- `react/jsx-no-literals` - Bad: `<div>text</div>`. It just requires unnecessary complication.
- `react/jsx-no-undef` - TypeScript handles it.
- `react/jsx-props-no-spreading` - The value it creates and the value it destroys is debatable.
- `react/jsx-sort-default-props` - Requires time to follow it but doesn't provide a lot of value.
- `react/jsx-sort-props` - Requires time to follow it but doesn't provide a lot of value.
- `react/jsx-uses-react` - No need. We doesn't have `no-unused-vars` rule enabled because we have
  it enabled in TypeScript config which handles React variable correctly.
- `react/jsx-uses-vars` - Same as above.
- `react/no-danger` - Properties themselves are descriptive enough informing you of the dangers.
- `react/no-deprecated` - React handles deprecations well enough. This rule is complicated to set
  up because it requires to provide React version in shared settings.
- `react/no-did-mount-set-state` - We don't use React classes.
- `react/no-did-update-set-state` - We don't use React classes.
- `react/no-direct-mutation-state` - We don't use React classes.
- `react/no-redundant-should-component-update` - We don't use React classes.
- `react/no-typos` - We don't use React classes.
- `react/no-unknown-property` - TypeScript handles it.
- `react/no-unsafe` - The UNSAFE prefix of these methods is quite enough to know to not use them.
- `react/no-unused-prop-types` - We don't use `propTypes` and classes.
- `react/no-unused-state` - We don't use React classes.
- `react/no-will-update-set-state` - We don't use React classes.
- `react/prefer-es6-class` - We don't use React classes.
- `react/prefer-read-only-props` - Flow only rule.
- `react/prefer-stateless-function` - We don't use React classes.
- `react/prop-types` - We use TypeScript for that.
- `react/react-in-jsx-scope` - TypeScript handles it.
- `react/require-default-props` - We don't use `propTypes`. We use TypeScript.
- `react/require-optimization` - We don't use React classes.
- `react/sort-comp` - We don't use React classes.
- `react/sort-prop-types` - We don't use `propTypes`. We use TypeScript.
- `react/state-in-constructor` - We don't use React classes.
- `react/static-property-placement` - We don't use React classes.
- `react/style-prop-object` - TypeScript handles it.
- `react/void-dom-elements-no-children` - TypeScript handles it.
- `react/forbid-component-props` - We don't need this.
- `react/forbid-dom-props` - We don't need this.
- `react/forbid-elements` - We don't need this.
- `react/forbid-foreign-prop-types` - We don't use `propTypes` and classes.
- `react/forbid-prop-types` - We don't use `propTypes` and classes.
- `react/no-multi-comp` - First this rule was enabled but then I decided to remove it. It
  actually improves code quality but sometimes you want to build prototypes which you aren't sure
  how to structure yet. This lowers flexibility.
- `no-await-in-loop` -
- `no-control-regex` - So, so specific. So little value. Also I don't fully understand it.
- `no-dup-args` - TypeScript handles it.
- `no-dup-keys` - TypeScript handles it.
- `no-extra-parens` -
- `no-inner-declarations` - This seems to be obsolete with ES6.
- `no-obj-calls` - TypeScript handles it.
- `no-unreachable` - TypeScript handles it.
- `no-unsafe-negation` - TypeScript handles it.
- `valid-typeof` - TypeScript handles it.
- `constructor-super` - TypeScript handles it.
- `no-class-assign` - TypeScript handles it.
- `no-const-assign` - TypeScript handles it.
- `no-dupe-class-members` - TypeScript handles it.
- `no-restricted-imports` - Don't see for what we can use this.
- `no-this-before-super` - TypeScript handles it.
- `no-useless-constructor` - Already using `@typescript-eslint/no-useless-constructor`
- `no-confusing-arrow` - Tried it but it doesn't seem to bring too much value.
- `prefer-destructuring` - Tried it but the errors aren't fixable in TypeScript and I don't even
  know it is better always using destructing.
- `unicorn/no-keyword-prefix` - Too restrictive for the small value it creates.
- `unicorn/prefer-includes` - `@typescript/eslint` handles it.
- `unicorn/no-unsafe-regex` - Because there are issues even `sindresorhus` acknowledges:
  https://github.com/sindresorhus/eslint-plugin-unicorn/issues/153
- `unicorn/no-for-loop` - We are already using `@typescript-eslint/prefer-for-of`.
- `prefer-starts-ends-with` - `@typescript-eslint/prefer-string-starts-ends-with` handles it.
- `block-scoped-var` - We don't use `var` declarations.
- `default-case` - A better rule for `switch` statements should exist. For example in TypeScript
  there is variables that have only literal values possible so the possible options are finite
  amount. In this case there is no need for a default case.
- `no-div-regex` - Syntax highlight in code editors fixes this problem pretty well.
- `max-classes-per-file` - With time I start to believe rules that restrict architecture
  decisions aren't good decisions. Rules are for things that you can miss or don't know.
  Architecture decisions are very hard and can be violated in some cases when you do have enough
  arguments. This is why you need to give the freedom to the developers to violate them.
- `no-empty-function` - There is `@typescript-eslint/no-empty-function` rule.
- `no-eq-null` - `eqeqeq` handles it.
- `no-implicit-globals` - Webpack handles it.
- `no-labels` - It is very popular that labels should be avoided. However, there are cases that
  you are better off using labels. Put together these two things and the value of this rule
  becomes too low while creating cases where it needs to be disabled.
- `no-lone-blocks` - This is actually an interesting technique I want to experiment for a long
  time. I don't want to disable it for now.
- `no-loop-func` - It does warn for array methods which require callbacks and are inside a loop -
  this rarely can be optimized easily. On the other hand for all the codebase it didn't warn for
  anything that can be improved.
- `no-redeclare` - We don't use `var` declarations. We have `no-var` rule enabled.
- `no-restricted-properties` - We don't need that for now in our codebase.
- `no-return-await` - I don't see the value in this rule.
- `no-void` - void expressions are useful in React `useEffect()` and `useLayoutEffect()` calls
  because we can avoid making a function with curly braces.
- `require-await` - We use `@typescript-eslint/require-await` instead.
- `vars-on-top` - We don't use var declarations. We have `no-var` rule enabled.
- `wrap-iife` - TypeScript handles it.
- `strict` - This doesn't make sense when using TypeScript with `alwaysStrict` set to `true`.
- `init-declarations` - Don't understand the value it creates when already using TypeScript.
- `no-delete-var` - Don't see a reason why you would disallow the `delete` operator.
- `no-restricted-globals` - TypeScript handles it.
- `no-undefined` - There is a better way to handle this problem than turning this rule on.
- `no-unused-vars` - TypeScript together with `noUnusedLocals` and `noUnusedParameters` is a
  better solution.
- `no-use-before-define` - TypeScript together with `no-var` rule handles it.
- `global-require` - We intentionally use `require()` statements not on top of the file for
  lazy-loading purposes.
- `no-buffer-constructor` - We are already using `unicorn/no-new-buffer`.
- `no-mixed-requires` - `one-var-declaration-per-line` handles it.
- `no-process-env` - We are using `process.env.NODE_ENV` together with webpack.
- `no-process-exit` - We are already using `unicorn/no-process-exit`.
- `no-restricted-modules` - This would probably be useful if we are a bigger team.
- `no-sync` - We are building an Electron app where it is fine to use synchronous methods.
- `no-shadow` - Really good rule which improves code understanding a lot. However, it needs an
  option which disables anonymous functions or functions which are parameters to array methods.
  For now it reports too many false positives like
  `const file = files.find(file => file.path === path)`.
- `callback-return` - Tried the rule but I can't understand why it requires to return the result
  of the callback `return callback()`.
- `lines-between-class-members` - Like this rule but it also warns about property declarations
  which isn't desired. I want to have lines only between methods.
- `camelcase` - We are already using `@typescript-eslint/camelcase`.
- `nonblock-statement-body-position` - We are already using `curly`.
- `unicode-bom` - Don't understand the problem well enough to turn it on.
- `func-style` - Choosing a declaration style for functions is a hard decision I don't understand
  fully. This is why for now I don't want to make any decision regarding this.
- `capitalized-comments` - It would have been useful if it can be enabled only for `/*` comments
  and disabled for `//` comments.
- `no-inline-comments` - @erusev uses that type of comments. Maybe they are useful. For now don't
  want to decide.
- `multiline-comment-style` - This rule fails when commenting code.
- `one-var-declaration-per-line` - `one-var` handles it.
- `sort-imports` - This can be very hard rule to follow without creating enough value.
- `promise/avoid-new` - I don't understand why I should ban this. What is the problem with
  `new Promise()`?
- `promise/no-native` - There is no point in the rule when targeting Electron or latest browsers.
- `valid-params` - TypeScript handles it.
- `promise/prefer-await-to-callbacks` - This seems to hard to follow if even possible.
- `promise/no-new-statics` - TypeScript handles it.
- `promise/always-return` - I actually can't understand why this is a good idea.
- `promise/no-promise-in-callback` - Not documented. Can't understand how it works.
- `unicorn/prefer-reflect-apply` - Until this approach is more mainstream it seems like it
  destroys more value than it creates.
- `no-nested-ternary` - Not sure if it creates more value than it destroys. Seems like too little
  value to spend the time to answer that question.
- `unicorn/no-nested-ternary` - Not sure if it creates more value than it destroys. Seems like
  too little value to spend the time to answer that question.
- `unicorn/consistent-function-scoping` - Doesn't work great with React. If you have a
  `useEffect()` hook it is better to add the listener inside the `useEffect()` call and this rule
  promotes the opposite. It is better to be inside the `useEffect()` because you encapsulate the
  usage of the method this way and it is easier to understand. I believe the React team promotes
  this type of usage.
- `@typescript-eslint/no-untyped-public-signature` - Will directly turn on the more restrictive
  `@typescript-eslint/explicit-function-return-type` rule.
- `@typescript-eslint/no-empty-function` - It was initially turned on but it was disable because
  of three reasons: it creates almost no value as it is super easy to see empty functions, it
  highlights the entire function while writing it, there are cases when you intentionally want to
  create an empty function
- `@typescript-eslint/no-misused-promises` - nice rule. in theory it should be turned on. in
  practice it creates too much friction without adding to much value. maybe if we are super
  pedantic you should turn it on.
