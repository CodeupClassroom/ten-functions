Ten Functions
=================

Click `Show` in the header to run the app live. Updates to your code will instantly deploy and update live.


Ten Functions
------------

- Programing fundamentals in JavaScript
    - Working with values, variables, and data types
    - Using comparrison operators
    - Working with boolean operators
    - Working with JS internal functions to make  and perform actions.
    - Writing functions that take in inputs, process, and return outputs.
    
    
### ← index.html

Where you'll write the content of your website. 

### ← style.css

CSS files add styling rules to your content.

### ← script.js

## Testing out your functions yourself
- The automated tests are
- If you need to console.log the output of your functions:
- do `console.log(isTrue(input));`

## Hints

Consider this example problem.

> Write a function called `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
>
> `isBoolean("Dog")` should return `false` because a string is not a boolean
>
> `isBoolean(false)` should return `true` because only true and false are boolean values.

- When a problem says `return`, it means `return`, not `console.log`.

- When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an argument. It's modifying a global variable, and that is not the same as accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output. Functions that do not have an explicit `return` statement return `undefined` by default.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```



Made by [Ryan Orsinger](https://ryanorsinger.glitch.me/)
-------------------

\ ゜o゜)ノ
