// BASE GOAL:

// Problem 1: Create a function called "addToArrayOne" that adds a single value to an array. 
// The function takes two parameters: 
// The first parameter is the array the value will be added to and 
// the second parameter is the value.

function addToArrayOne(arr,x) {
    arr.push(x);
}

// Problem 2: Create a function called "addWithoutPush" that adds a single value to the end of the array 
// without using the Array.push method. The function takes two parameters: 
// The first parameter is the array the value will be added to and the second parameter is the value.

function addWithoutPush (arr,x) {
    let manualPushIndex = arr.length;
    arr[manualPushIndex] = x;
}

// Problem 3: Create a function called "removeFirst" that removes the first index of an array.
function removeFirst (arr) {
    arr.shift();
}

// Problem 4: Create a function called "removeLast" that removes the last index of an array.
function removeLast (arr) {
    arr.pop();
}

// Problem 5: Create a function called "addToBeginning" that adds a single value to the beginning of an array. 
// The function takes two parameters: 
// The first parameter is the array the value will be added to and the second parameter is the value.
function addToBeginning (arr,x) {
    arr.unshift(x);
}

// Problem 6: Create a function called "switchFirstAndLast" that 
// switches the places of the first and the last value of the array.
function switchFirstAndLast (arr) {
    let lastToFirst = arr.pop();
    let firstToLast = arr.shift();
    arr.push(firstToLast);
    arr.unshift(lastToFirst);
}

// Problem 7: Create a function called "flipIt" that reverses the order of an array.
function flipIt (arr) {
    arr.reverse();
}

// *******************************************************************
// STRETCH GOAL

// Problem 8: Create a function called "palindromeChecker" that 
// checks whether a string is a pallindrome or not. 
// If it is a pallindrome, return true, otherwise, return false. 
// In this case, assume that the string will be just one word with no punctuation.

function palindromeChecker (aString) {
    //This formula works for any odd or even string length.
    let iterations = Math.floor((aString.length)/2);
    for (let i=0; i < iterations; i++) {
        if ( aString[i] != aString[aString.length-(i+1)]) {
            return false;
        }
    }
    return true;
}