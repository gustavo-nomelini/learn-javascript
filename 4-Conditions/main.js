// 07/02/2025
// Author : Gustavo Lopes Nomelini
const prompt = require("prompt-sync")();

function gradeNotNull(grade) {
  const numGrade = Number.parseFloat(grade.trim()); // Convert input to a number
  if (isNaN(numGrade)) {
    // Check if conversion failed
    return 0;
  }
  return numGrade; // Return the valid number
}

function grade() {
  const grade1 = prompt("Type your first grade: ");
  const grade2 = prompt("Type your second grade: ");
  const grade3 = prompt("Type your third grade: ");

  const x = gradeNotNull(grade1);
  const y = gradeNotNull(grade2);
  const z = gradeNotNull(grade3);

  const mean = (x + y + z) / 3;

  if (mean >= 7.0) {
    return console.log(`You passed! :) \nWith mean ${mean.toFixed(2)}`);
  }
  return console.log(`You failed! :( \nWith mean ${mean.toFixed(2)}`);
}

grade();

// example when returnin boolean
// no need to use if/else
function canDrive(age) {
  return age >= 18;
}

console.log(canDrive(20));

function evenOrOdd(number) {
  const x = Number.parseInt(number);
  if (x % 2 === 0) {
    return "even";
  }
  return "odd";
}
// ternary operator :
// condition ? expressionWhenTrue : expressionWhenFalse
