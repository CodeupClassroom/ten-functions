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
    return input === true;
}

function not(input) {
    return !input;
}

function isFalse(input){
    return input === false;
}

function addOne(input){
    return +input + 1;
}

function isEven(input){
    if (input === false) {
    return false;
    }else if (input % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function isIdentical(in1, in2) {
    return in1 === in2;
}

function or(in1, in2){
    return in1 || in2;
}

function and(in1, in2){
    return in1 && in2
}

function concat(in1, in2){
    return "" + in1 + in2;
}
 function isEqual(int1, int2){
    return int1 == int2;
 }