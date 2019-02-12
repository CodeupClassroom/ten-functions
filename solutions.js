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

//////////////////////////addONE///////////////////////////////////////////////

function addOne(number) {
    return (Number(number) + 1);
}

addOne(9);

//////////////////////////isTrue///////////////////////////////////////////////

function isTrue(input) {
    if (input === true){
        return true
    } else {
       return false
    }
}

isTrue(input);

//////////////////////////isEven///////////////////////////////////////////////

function isEven(input) {
    if ((input % 2) === 0){
        return true
    } else {
        return false
    }
}

isEven(input);

//////////////////////////isFalse///////////////////////////////////////////////

function isFalse(input) {
    if (input === false){
        return true
    } else {
        return false
    }
}

isFalse(input);

//////////////////////////not///////////////////////////////////////////////////

function not(input) {
    return !input
}
not(input);

//////////////////////////isIdentical///////////////////////////////////////////

function isIdentical(input1,input2) {
    return input1 === input2
}

isIdentical(input1,inpput2);

//////////////////////////isEqual//////////////////////////////////////////////

function isEqual(input1,input2) {
    return (input1 == input2);
}

isEqual(input1,input2);

//////////////////////////or////////////////////////////////////////////////////

function or(inputOne,inputTwo) {
    return inputOne || inputTwo;
}
or(inputOne,inputTwo);

//////////////////////////and///////////////////////////////////////////////////

function and(inputOne,inputTwo) {
    return inputOne && inputTwo;
}

and(inputOne,inputTwo);

//////////////////////////concat////////////////////////////////////////////////

function concat(input1,input2) {
    return ((input1.toString())+(input2.toString()));
}

concat(input1,input2);