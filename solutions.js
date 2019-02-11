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
 * isTrue done
 * isFalse done
 * not done
 * addOne done
 * isEven done
 * isIdentical done
 * isEqual
 * or done
 * and
 * concat
 */

function isTrue(input){
    return input == true;
}

function isFalse(input){
    return input == false;
}

function not(input){
    return !input == true;
}

function addOne(num){
    return (Number(num) + 1);
}

function isEven(num){
    return (num % 2 === 0);
}

function or(inputA, inputB){
    return (inputA || inputB);
}

function isIdentical(inputA, inputB){
    return (inputA === inputB);
}

function isEqual(inputA, inputB){
    return (inputA == inputB);
}

function and(inputA, inputB){
    return (inputA && inputB);
}

function concat(inputA, inputB){
    return (inputA.toString() + inputB);
}