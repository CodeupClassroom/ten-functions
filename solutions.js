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

function isTrue(input){
    if (input===true){
        return true;
    }else{
        return false;
    }
}
 isTrue();
console.log(isTrue(true));             // true
console.log(isTrue(false));            // false
console.log(isTrue(0));                // false
console.log(isTrue(null));             // false
console.log(("true"));           // false
console.log(isTrue("Banana"));         // false
console.log(isTrue([1, 2]));



function isFalse(value){
    // return value === false;
    if (value===false){
        return true;
    }else{
        return false;
    }

}
isFalse();
console.log(isFalse(false));             // true
console.log(isFalse(true));              // false
console.log(isFalse(0));                 // false
console.log(isFalse(null));              // false
console.log(isFalse(""));                // false
console.log(isFalse("Banana"));          // false
console.log(isFalse([1, 2]));            // false


function not(input){
    return !input;
}
not();
console.log(not(false));                  // true
console.log(not(0));                      // true
console.log(not(""));                     // true
console.log(not(null));                   // true
console.log(not(NaN));                    // true
console.log(not(undefined));              // true
console.log(not(true));                   // false
console.log(not("something"));            // false
console.log(not(Infinity));               // false
console.log(not(123));                    // false


function addOne(input){
    input=Number(input);
    return input + 1;
}
addOne();
console.log(addOne(0));                    // 1
console.log(addOne(2));                    // 3
console.log(addOne(-5));                   // -4
console.log(addOne(5.789));                // 6.789
console.log(addOne(Infinity));             // Infinity





function isEven(input){
    input=parseInt(input);
    if (input %2 == 0) {
        return true;
    }else{
           return false;
        }

}
isEven();


function isIdentical(input1,input2){
    if(input1===input2){
        return true;
    }
    else{
        return false;
    }
}

function isEqual(input1,input2){
    if(input1==input2){
        return true;
    }
    else{
        return false;
    }
}

function or(input1,input2){
    return input1 || input2;
}
or();

function and(input1,input2){
    return input1 && input2;
}
and();

function concat(input1,input2) {
    if (typeof (input1) && typeof (input2) == "string") {
        return input1 + input2;
    } else {

        return input1.toString() + input2.toString();
    }
}
// concat();
console.log(concat(2,3));
console.log(concat("sabita","regmi"));