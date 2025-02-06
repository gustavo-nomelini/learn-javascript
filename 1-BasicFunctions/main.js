// 06/02/2025 - Gustavo Lopes Nomelini
// basic arithmetics and syntax
// making a CLI calculator

function sum(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

function remainder(x, y) {
  return x % y;
}
//
const prompt = require("prompt-sync")();
const x = prompt("Choose a number X: ");
const y = prompt("Choose a number Y: ");
//
const numX = Number.parseFloat(x);
const numY = Number.parseFloat(y);
const intX = Number.parseInt(x);
const intY = Number.parseInt(y);
//
console.log(`X + Y = ${sum(numX, numY)}`);
console.log(`X - Y = ${sum(numX, -numY)}`);
console.log(`Y - X = ${sum(-numX, numY)}`);
console.log(`X * Y = ${multiply(numX, numY)}`);
console.log(`X / Y = ${division(numX, numY)}`);
console.log(`X % Y = ${remainder(intX, intY)}`);
