// 10/02/2025 - Gustavo Lopes Nomelini
//
const numbers = [1, 13, 37, 73, 81, 95];
// const array = document.getElementById("array");
document.getElementById("numbers").innerHTML = numbers.join(" | ").toString();

const firstElement = numbers[0];
const lastElement = numbers.at(-1);
const arraySize = numbers.length;

// displaying a and unordered list using
// FOR loop
//
// let text = "<ul>";
// for (let i = 0; i < arraySize; i++) {
//   text += "<li>" + number[i] + "</li>";
// }
// text += "</ul>";
// //displaying in html:
// document.getElementById("numbersList").innerHTML = text;
//
//###################################################
// we can also loop through an array using forEach()
// #################################################
function myFunction(value) {
  text += "<li>" + value + "</li>";
}
let text = "<ul>";
numbers.forEach(myFunction);
text += "</ul>";
document.getElementById("numbersList").innerHTML = text;
//######################################################
// It is better to use a for loop, a for of loop, or Array.forEach()
// when the order is important , use FOR IN when looping ojbects
// #####################################################
const names = ["Gustavo", "Jéssica", "Maria", "Robson"];
let namesList = "<ul>";
// for (let name of names) {
//   namesList += `<li>${name}</li>`;
// }
for (const [index, name] of names.entries()) {
  // Using .entries() to get index
  namesList += `<li>${index}: ${name}</li>`; // Display index before name
}
namesList += "</ul>";
document.getElementById("namesList").innerHTML = namesList;

// let list = "<ol>";
// names.forEach((name, index) => {
//   list += `<li>${index}: ${name}</li>`;
// });
// document.getElementById("list").innerHTML = list;
const myArray = ["Gustavo", 37, true];
document.getElementById("testing").innerHTML = myArray.join(" | ").toString();
let test = "<ol>";
myArray.forEach((value) => {
  test += `<li>${value}</li>`;
});
document.getElementById("testingList").innerHTML = test;
