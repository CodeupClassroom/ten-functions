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

function isTrue(booleanValue){

    if(booleanValue === true){

        return true;

    }

    else{

        return false;
    }

}

    isTrue(true);
    isTrue(false);
    isTrue(0);
    isTrue(null);
    isTrue("true");
    isTrue("Banana");
    isTrue([1,2]);


function isFalse(booleanValue){

    if(booleanValue === false){

        return true;

    }

    else{

        return false;
    }

}

isFalse(false);
isFalse(true);
isFalse(0);
isFalse(null);
isFalse("");
isFalse("Banana");
isFalse([1,2]);


function not(booleanValue){

    // if(booleanValue == true){
    //
    //     return false;
    //
    // }
    //
    // else{
    //
    //     return true;
    // }


        return !booleanValue;


}

not(false);
not(5);
not("hello");
not(0);
not("");
not(null);
not(NaN);
not("undefined");
not(true);
not(Infinity);
not(123);


function addOne(x){



    if(x==Infinity){

        return Infinity;
    }
    var parsed=parseInt(x);
    var solution=parsed+1;




    return solution;


}

addOne(0);
addOne(2);
addOne("-5");
addOne(5.789);
addOne(Infinity);
addOne("2");
addOne("0");
addOne("banana");
addOne(true);
addOne(NaN);

function isEven(x){



    var parsed=parseInt(x);

    if(parsed % 2 ==  0) {

        return true;

    }else{

        return false;;
    }




}

isEven(2);
isEven(-4);
isEven("8");
isEven(0);
isEven(3);
isEven("banana");
isEven(true);
isEven(false);

function isIdentical(input1,input2){




    if(input1 === input2){

        return true;
    }else{

        return false;
    }


}

isIdentical(42,42);
isIdentical(false,false);

isIdentical(2,"5");

isIdentical("3",3);



function isEqual(input1,input2){

    if(input1 == input2){


        return true;
    }else{

        return false;
    }



}

function or(input1,input2){

    var output = input1 || input2;

    return output;

}

function and(input1,input2){

    var output = input1 && input2;

    return output;

}

function concat(x,y){


    var concatenated;

    if(x == typeof String && y == typeof String){

        concatenated=x.concat(y);

    } else{

        concatenated=("" + x + y);
    }



    return concatenated;

}

