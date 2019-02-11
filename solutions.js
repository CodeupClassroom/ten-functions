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

var trueAnswer;
function isTrue(input) {
    trueAnswer = input === true;
    return trueAnswer;

}

var falseAnswer;
function isFalse(input) {
    falseAnswer = input === false;
    return falseAnswer;
}

function not(input){
    return !input;
}

function addOne(input){
    if (typeof input === typeof 1) {
        return input + 1;
    } else if (typeof input === typeof "string") {
        return parseInt(input) + 1;
    }
}


function isEven(input){
    return input % 2 === 0;
}


function isIdentical(inputOne, inputTwo ){
    if (inputOne === inputTwo) {
        return true;

    } else if (inputOne !== inputTwo)
        return false;
}


function isEqual (inputOne, inputTwo) {
    if (inputOne == inputTwo){
        return true;
    } else {
        return false;

    }
}
console.log(isEqual(3, "3"));
console.log(isEqual("abc123", "abc123"));
console.log(isEqual(true, 1));
console.log(isEqual(4, -5));
console.log(isEqual("java", "javascript"));

function or(inputOne, inputTwo){
    return inputOne || inputTwo;
}


function and(inputOne, inputTwo){
    return inputOne && inputTwo;
}

console.log(or(true, true));
console.log(or(true, false));


function concat(inputOne, inputTwo) {
    return inputOne + inputTwo;
}
console.log(concat("code", "up"));
console.log(concat("connect", "4"));
console.log(concat("hello", "world"));
console.log(concat(4, 2));
console.log(concat(true, true));