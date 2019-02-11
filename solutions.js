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
    if (typeof input != "boolean") {
        return false;
    } else if (!input) {
        return false;
    } else {
        return true;
    }
}

function isFalse(value) {
    if (typeof value != "boolean") {
        return false;
    } else if (!value) {
        return true;
    } else {
        return false;
    }
}

function not(input) {
    return !input;
}

function addOne(input) {
    if (Number(input)) {
        return Number(input) + 1;
    } else if (Number(input) === 0) {
        return Number(input) + 1;
    }
}

function isEven(input) {
    if (Number(input) % 2 === 0) {
        return true;
    } else if (input === false) {
        return false;
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

function or (input1, input2) {
    if (input1 || input2) {
        return true;
    } else {
        return false;
    }
}

function and (input1, input2) {
    if (input1 && input2) {
        return true;
    } else {
        return false;
    }
}

function concat (input1, input2) {
    if (typeof input1 == "string" && typeof input2 == "string") {
        return input1 + input2;
    } else if (typeof input1 == "number" && typeof input2 == "number") {
        return input1.toString() + input2.toString();
    } else if (input1 && input2) {
        return input1.toString() + input2.toString();
    }
}