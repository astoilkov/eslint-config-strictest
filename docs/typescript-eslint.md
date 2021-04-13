# `typescript-eslint`

## 👀 `return-await: always`

- 😃 calling `return await` adds the line of code to the stack trace, otherwise it doesn't
- 😃 must have in a try/catch
    - ❓ can the option `in-try-catch` be used instead of `always`
- 😃 it can even be categorized as 🕸 because if you don't call await in try/catch it won't work
- 😡 ❓ `return await new Promise((resolve, reject) => {...` looks too verbose