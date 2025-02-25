// ARRAY METHODS AND CALLBACKS
//
// array.filter(callback)
// always return an ARRAY
function filterPositiveTemperatures(temperatures) {
  return temperatures.filter(function (temperature) {
    return temperature > 0;
  });
}

function filterNegativeTemperatures(temperatures) {
  return temperatures.filter(function (temperature) {
    return temperature < 0;
  });
}

// array.find(callback)
// returns the first array item that matches
// the callback condition
// or return undefined
function getYear(years, searchYear) {
  // return years.find(year => year === searchYear);
  return years.find(function (year) {
    return year === searchYear;
  });
}

function getOddYears(years) {
  return years.filter(function (year) {
    if (year % 2 !== 0) {
      return year;
    }
  });
}

// array.map(callback)
// TRANSFORM an array into another one
function arrayToUpperCase(array) {
  return array.map(function (index) {
    return index.toUpperCase();
  });
}

function doubleNumbers(numbers) {
  return numbers.map(function (number) {
    return number * 2;
  });
}

// array.includes(item)
// this method takes an item rather than a callback
// and returns TRUE when that item exists in the array
// returns FALSE otherwise
const groceries = ["Apple", "Banana", "Peach"];
groceries.includes("Apple"); //true
groceries.includes("Tomato"); //false

// array.join(glue)
// automatically invokes .toString() formatted
groceries.join(" | ");

function getStringSizes(strings) {
  return strings.map(function (string) {
    return string.length;
  });
}
