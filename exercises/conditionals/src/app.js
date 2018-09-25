// Write a function called 'higherNumber' that takes two numbers and returns the higher number
function higherNumber(num1,num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

/* Write an function "inRelationToThree" that takes one parameter
 - If the number is greater than 3, return "greater than three".
 - If the number is less than or equal to 3 and greater than or equal to 0, 
   return "greater than zero and less than or equal to three"
  -If it is anything else, return "is less than zero".
*/
function inRelationToThree(x) {
  if (x > 3) {
    return "greater than three";
  } else if (x <= 3 && x >= 0) {
    return "greater than zero and less than or equal to three";
  } else {
    return "is less than zero";
  }
}

// Write a function called "fizzBuzz" which pushes the integers from 1 to 15 into an array 
// that will be returned when it is done. 
// For multiples of three push "Fizz" instead of the number and for the multiples of five push "Buzz". 
// For numbers which are multiples of both three and five push "FizzBuzz".
function fizzBuzz () {
  let arr = [];
  for (let i=1; i<=15; i++) {
    if        ( (i%3 == 0) && (i%5 == 0) ) {
      arr.push("FizzBuzz");
    } else if ( (i%3 == 0) && (i%5 != 0) ) {
      arr.push("Fizz");
    } else if ( (i%3 != 0) && (i%5 == 0) ) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}


// Write a function called "sleepings", it should accept one parameter, an integer called "hours". 
// Write a conditional statement inside of the function. 
// If the number of hours is greater than or equal to 8, return "Enough". 
// If it is less than that, return "Not Enough".

function sleepings(hours) {
  if (hours>=8) {
    return "Enough";
  } else if (hours<8) {
    return "Not Enough";
  }
}
