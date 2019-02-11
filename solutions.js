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

function isTrue (input) {
    return input === true;
}

function isFalse (input) {
    return input === false;
}

function not (input) {
    var booleanType = input;
    return !booleanType;
}

function addOne (input) {
    if (!isNaN(input)) {
        if (typeof input == "number") {
            return input + 1;
        } else if (typeof input == "string"){
            var number = parseInt(input);
            return number + 1;
        }
    }
}

function isEven (input) {
    if (input === false) {
        return false;
    }
    else if (input % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isIdentical (inputOne, inputTwo) {
    if (inputOne === inputTwo) {
        return true;
    } else {
        return false;
    }
}

function isEqual (inputOne, inputTwo) {
    if (inputOne == inputTwo) {
        return true;
    } else {
        return false;
    }
}

function or (inputOne, inputTwo) {
    return inputOne || inputTwo;
}

function and (inputOne, inputTwo) {
    return inputOne && inputTwo;
}

function concat (inputOne, inputTwo) {
    if (typeof inputOne == "string" && typeof inputTwo == "string") {
        return inputOne + inputTwo;
    } else if (typeof inputOne == "number" && typeof inputTwo == "number") {
        var numberInputOne = inputOne.toString();
        var numberInputTwo = inputTwo.toString();
        return numberInputOne + numberInputTwo;
    } else if (typeof inputOne == "boolean" && typeof inputTwo == "boolean") {
        var booleanInputOne = inputOne.toString();
        var booleanInputTwo = inputTwo.toString();
        return booleanInputOne + booleanInputTwo;
    }

}
