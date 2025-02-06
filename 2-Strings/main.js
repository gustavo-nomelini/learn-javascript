// 06/02/2025
// Author : Gustavo Lopes Nomelini
//
// Strings in JavaScript
// they can be declared with single '' or double quotes ""
//
function getCharCount(string) {
  return string.length;
}

function getFullName(string1, string2) {
  return string1 + " " + string2;
}

function shoutMyString(string) {
  return string.toUpperCase();
}

function lowerCase(string) {
  return string.toLowerCase();
}

function getFirstCharacter(string) {
  return string[0];
  // return string.at(0);
}

function getLastCharacter(string) {
  return string[string.length - 1];
}

const prompt = require("prompt-sync")();

const firstName = prompt("Enter your first name: ");
const lastName = prompt("Enter your last name: ");
const fullName = getFullName(firstName, lastName);
console.log(`Hello, ${fullName}!`);
console.log(
  `Your initials : ${getFirstCharacter(firstName) + getFirstCharacter(lastName)}`,
);

const name = fullName.substring(0, firstName.length);
console.log(
  `Using the substring method to take the first name,
    out of the full name ! : ${name}`,
);

function getCapitalized(string) {
  return (
    getFirstCharacter(string).toUpperCase() + lowerCase(string).substring(1)
  );
}

const randomWord = prompt("Enter a word like 'TesTINg' : ");
console.log(`${getCapitalized(randomWord)}`);

function getDescription(text) {
  if (text.length > 10) {
    return text.substring(0, 10) + "...";
  }
  return text;
}

text = prompt(
  "Type a text, only shows the 10 first characters then ellipsis ... : ",
);
console.log(`${getDescription(text)}`);
