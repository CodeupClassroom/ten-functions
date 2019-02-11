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
} console.log (isTrue(true));


function isFalse(input) {
   return input === false;
} console.log (isFalse(false));


function not(input) {
    return input !== true;
} console.log(not(true));


function addOne(input) {
    if (input >= 0 && input !== true && input !== false || input < 0){
        return +input + 1;
    }else {return NaN;}
} console.log(addOne("2"));


function isEven(input) {
    if (input !== true && input !== false && input % 2 === 0){
        return true;
    } else return false;
} console.log(isEven("-3"));


function isIdentical(input1, input2) {
    if(input1 === input2){
        return true;
    } else {return false;}
} console.log (isIdentical(false, false));


function isEqual(input3, input4) {
    if(input3 == input4){
        return true;
    } else {return false;}
} console.log (isEqual(true, "1"));


function or(input5, input6) {
    return input5 || input6;
} console.log(or("he", "fd"));


function and(input7, input8) {
    return input7 && input8;
} console.log(and("he", "fd"));

function concat(input1, input2) {
   return input1.toString() + input2.toString();
} console.log(concat(1, 3));

















