// 08/02/2025 - Author: Gustavo Lopes Nomelini

const values = [37, true, "GUWOP"];

// Function to update the display of the array
function updateDisplay() {
  document.getElementById("array").textContent = values.join(" | ");

  const list = document.getElementById("array-list");
  list.innerHTML = ""; // Clear existing items

  values.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item}`;
    list.appendChild(li);
  });
}

// Initial display update
updateDisplay();

// PUSH: Add new value at the end
document.getElementById("pushForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const newValue = document.getElementById("pushInput").value;
  values.push(newValue);
  updateDisplay();
  document.getElementById("pushInput").value = "";
});

// POP: Remove last item
document.getElementById("popButton").addEventListener("click", () => {
  values.pop();
  updateDisplay();
});

// UNSHIFT: Add item at the beginning
document.getElementById("unshiftForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const newValue = document.getElementById("unshiftInput").value;
  values.unshift(newValue);
  updateDisplay();
  document.getElementById("unshiftInput").value = "";
});

// SHIFT: Remove first item
document.getElementById("shiftButton").addEventListener("click", () => {
  values.shift();
  updateDisplay();
});

// SPLICE: Remove/Add in the middle
document.getElementById("spliceButton").addEventListener("click", () => {
  const index = parseInt(prompt("Enter index to modify:"));
  const deleteCount = parseInt(prompt("How many elements to remove?"));
  const newValue = prompt("Enter a new value (or leave empty to just remove):");

  if (!isNaN(index) && !isNaN(deleteCount)) {
    if (newValue) {
      values.splice(index, deleteCount, newValue);
    } else {
      values.splice(index, deleteCount);
    }
    updateDisplay();
  } else {
    alert("Invalid input!");
  }
});
