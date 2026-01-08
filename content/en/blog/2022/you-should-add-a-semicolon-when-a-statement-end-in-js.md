---
title: "You Should Add a Semicolon at the End of JavaScript Statements"
date: 2022-09-28T19:27:33+08:00
tags: ['js']
slug: you-should-add-a-semicolon-when-a-statement-end-in-js
summary: Digging into the details of JS code in a newsletter taught me the importance of adding semicolons in JavaScript.
showtoc: true
---

## 1. Background

This morning, while organizing my emails, I was drawn to a "spot the bug" column in a newsletter.

```javascript
const newsletter = "Bytes"
const tagline = "Your weekly dose of JavaScript"

[newsletter, tagline].forEach((el) => console.log(el))
```

These three short lines of code hide a subtle trap. When I created a new JS file in VS Code and tried to run this code using `node xxx.js`, it threw an error.

Eventually, I found the cause and solution at the end of the newsletter.

+ Cause:

> Because the second line of JS code doesn't have a semicolon, the JS interpreter treats lines 2 and 3 as a single line:

```javascript
const tagline = "Your weekly dose of JavaScript"[newsletter, tagline].forEach((el) => console.log(el))
```

It first executes the code on the right side of the assignment, accessing the string and iterating through the sequence to output.

The way the string is being accessed here is incorrect: `"Your weekly dose of JavaScript"[newsletter, tagline]`

For strings, using str[indexNum] can only access a single character, where indexNum should be a number.

Because the second JS statement doesn't have a semicolon at the end, the JS interpreter's execution flow differs from the original intention.

+ Solutions:
  + Add a `+` sign before `[newsletter, tagline]`
  + Add a `;` after the `const tagline = "Your weekly dose of JavaScript"` statement

The semicolon solution was verified in VS Code. The first solution (adding `+`) didn't work initially.

After communicating with the author and doing my own research, the first method was also verified in VS Code.

This "spot the bug" experience gave me a deeper understanding of `;` and `+` in JavaScript.

## 2. Key Takeaways

1) Adding a unary operator like `+` before a function in JS causes the interpreter to treat what follows as an expression.
This can compensate for JS's parsing errors caused by missing semicolons.

2) Expressions generally need a variable to receive their return value.
The first solution provided by the newsletter author didn't initially work in VS Code, but when I used a variable to receive the expression's return value, the code ran correctly.

## 3. References

[JavaScript plus sign in front of function expression](https://stackoverflow.com/questions/13341698/javascript-plus-sign-in-front-of-function-expression)

[MDN Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

[MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## 4. Email Materials

[2022-09-27-newsletter](/document/2022-09-27-newsletter.html)
