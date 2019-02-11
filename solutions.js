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

function concat(inputConcat_x, inputConcat_y) {
    return inputConcat_x.toString() + inputConcat_y.toString();
}

// Alternate solution to concat
// function concat(inputConcat_x, inputConcat_y) {
//     return "" + inputConcat_x + inputConcat_y;
// }


console.log(concat("true", "true"));
console.log(concat("hello", "world"));
console.log(concat(4, 2));


function isEqual(isEqual_x, isEqual_y) {
    return isEqual_x == isEqual_y;
}

isEqual("java", "javascript");
isEqual("3.6", 3.6);


function or(or_x, or_y) {
    return or_x || or_y;
}

or();


function and(and_x, and_y) {
    return and_x && and_y;
}

and();


function isIdentical(isIdentical_x, isIdentical_y){
    return isIdentical_x === isIdentical_y;
}

isIdentical();


function addOne(addOne_x) {
    return +addOne + 1;
}

console.log("addOne: " + addOne("0"));


function isEven(isEven_x) {
    if (isEven_x === false) {
        return isEven_x;
    }
    return isEven_x % 2 === 0;
}

// Alternate solution to isEven
// function isEven(isEven_x) {
//     return (isEven_x % 2 === 0 && !isTrue(isEven_x) && !isFalse(isEven_x));
// }

console.log("isEven:" + isEven(false));


function not(not_x) {
    return !not_x;
}

console.log("Not true: " + not(true));
console.log("Not false: " + not(false));


function isFalse(isFalse_x) {
    return isFalse_x === false;
}

isFalse("true");


function isTrue(isTrue_x) {
    return isTrue_x === true;
}

isTrue("6");