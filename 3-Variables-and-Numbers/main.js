// 07/02/2025
// Author : Gustavo Lopes Nomelini
// learning about how to declare variables
// string vs numbers and converting types

// const prompt = require("prompt-sync")();
const num = 37;
const string = "30";

// this will convert number into string and print "3730"
console.log(num + string);

// converting string into a number :
stringIntoNumber = Number.parseFloat(string, 10);
const result = num + stringIntoNumber; // 67
console.log(result);

// converting number into a string :
resultString = result.toString();
console.log(resultString + num); // "6737"
console.log(resultString + string); // "6730"

// some number methods
console.log(Math.round(2.87));
console.log(Math.floor(2.87));
console.log(Math.ceil(2.1));

// always go with CONST until you realize you need to
// be able to re-assign the variable later on, then switch to let
// for example counters and iterators you use LET
// the keyword VAR is for old versions of JS and browsers
