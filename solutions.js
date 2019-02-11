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

function isTrue(input) {
    if(input === true) {
        return true;
    } else {
        return false;
    }

}

// console.log(isTrue(true));
// console.log(isTrue(false));
// console.log(isTrue(false));
// console.log(isTrue(9));
// console.log(isTrue("true"));

function isFalse(input) {
    if(input === false) {
        return true;
    } else {
        return false;
    }
}

function not(input) {
    return !input;

}

function addOne(input) {
    if (input) {
       return (Number(input) + 1);
    } else {
        return NaN;
    }
}

console.log(addOne(4));
console.log(addOne(-5));
console.log(addOne("0"));

function isEven(num) {
    // var num = input
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isIdentical(input1, input2) {
    if (input1 === input2) {
        return true;
    } else {
        return false;
    }
}

function isEqual(input1, input2) {
    if (input1 == input2) {
        return true;
    } else {
        return false;
    }
}

function or(input1, input2) {
    if (input1 || input2) {
        return input1 || input2;
    } else {
        return false;
    }
}

function and(input1, input2) {
    if (input1 && input2) {
        return input1 && input2;
    } else {
        return false;
    }
}

function concat(input1, input2) {
    if (input1 + input2) {
        return input1.toString() + input2.toString();
    }
}

console.log(concat("Code", "up"));
console.log(concat(4, 2));