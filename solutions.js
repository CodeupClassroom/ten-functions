"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// 2. isTrue

function isTrue(input) {
    if (input === Boolean(true)) {
        return true;
    } else {
        return false;
    }
}

// 3. isFalse

function isFalse(input) {
    if (input) {
        return false;
    } else {
        return true;
    }
}

// 4. not

function not(input) {
    if (input) {
        return !Boolean(true);
    } else {
        return Boolean(true);
    }
}

// 5. addOne

function addOne(input) {
    return Number(input) + 1;
}

// 1. isEven

function isEven(input) {
    return input % 2 === 0;
}

isEven();

// 2. isIdentical

function isIdentical(input1, input2) {
    return input1 === input2;
}

// 3. isEqual

function isEqual(input1, input2) {
    return input1 == input2;
}

// 4. or

function or(input1, input2) {
    return input1 || input2;
}

// 1. and

function and(input1, input2) {
    return input1 && input2;
}

// 1. concat

function concat(input1, input2) {
    return input1 + input2;
}
