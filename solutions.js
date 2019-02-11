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


// Number 1 //  DONE

function isTrue(input) {

    if(input === true) {
        return true;
    } else {
        return false;
    }

}

// Number 2 //   DONE

function isFalse(input) {

    if (input === false) {
        return true;
    } else {
        return false;
    }
}

// Number 3 //       DONE

function not(input) {

    return !input;

}





// Number 4 //   DONE

function addOne(numOrString) {

    if(typeof numOrString === typeof 1) {

        return numOrString + 1;

    } else if (typeof numOrString === "string") {

        return +numOrString + 1;
    }

}


// Number 5 //  DONE

function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else if (input % 2 !== 0) {
        return false;
    }
}

isEven(false);

// Number 6 //  DONE

function isIdentical(x, y) {

    if(x === y) {
        return true;
    } else {
        return false;
    }
}

// Number 7 //     DONE! Woohoo!

function isEqual(a,b) {

     if (a == b) {
        return true;
    } else {
         return false;
     }
}

// Number 8 //   DONE

function or(input1,input2) {

    return input1 || input2;
}


// Number 9 //   DONE...??

function and(input1,input2){

    return input1 && input2;
}

// Number 10 //

function concat(input1,input2) {

    if((typeof input1 === "string") && (typeof input2 === "string")) {

        return input1 + input2;

    } else if ((typeof input1 === typeof 1) && (typeof input2 === typeof 1)) {

        return input1.toString() + input2.toString();
    }
}