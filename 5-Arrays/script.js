// 08/02/2025
// Author: Gustavo Lopes Nomelini

const empty = []; // Empty array
const grades = [7.8, 8.9, 9.3];
const names = ["Gustavo", "Jéssica"];
const values = [37, true, "GUWOP"];

// Search the <ol> element
const list = document.getElementById("array-list");

// Function to update the display of the array in both the <h2> and the list
function updateDisplay() {
  // Update the <h2> element with id="array"
  document.getElementById("array").innerHTML = values.join(" | ");

  // Clear the list element
  list.innerHTML = "";

  // Loop through the array and create list items
  values.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item}`;
    // li.textContent = `Index ${index}: ${item}`; // Set text content with index (optional)
    list.appendChild(li); // Append <li> to the list
  });
}

// Initial display update
updateDisplay();

// PUSH : ADD/APPEND item to last position
// document.getElementById("pushButton").addEventListener("click", () => {
//   values.push();
// });
//
// Adding addEventListener to the form for the push operation
const pushForm = document.getElementById("pushForm");
pushForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from reloading the page

  // GET the input from the form
  const pushInput = document.getElementById("pushInput");
  const newValue = pushInput.value;

  // use the push method to add new value to array
  values.push(newValue);

  //updating display after pushing the new value
  updateDisplay();

  //clear the input field for the next entry
  pushInput.value = "";
});

// POP: Remove the last element when the "popButton" is clicked
document.getElementById("popButton").addEventListener("click", () => {
  values.pop();
  updateDisplay(); // Correct function call
});
