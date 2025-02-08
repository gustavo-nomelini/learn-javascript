// 08/02/2025 - Author: Gustavo Lopes Nomelini

const vectors = { default: [37, true, "GUWOP"] }; // Store multiple vectors
let activeVector = "default"; // The currently selected vector

// Function to update the display of the current array
function updateDisplay() {
  const values = vectors[activeVector]; // Get current vector
  document.getElementById("array").textContent = values.join(" | ");
  document.getElementById("vector-length").textContent = values.length;

  const list = document.getElementById("array-list");
  list.innerHTML = "";

  values.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item}`;
    list.appendChild(li);
  });
}

// Function to update the dropdown list of vectors
function updateVectorDropdown() {
  const select = document.getElementById("vectorSelect");
  select.innerHTML = "";

  Object.keys(vectors).forEach((vectorName) => {
    const option = document.createElement("option");
    option.value = vectorName;
    option.textContent = vectorName;
    if (vectorName === activeVector) option.selected = true;
    select.appendChild(option);
  });
}

// Function to switch active vector
function switchVector(newVector) {
  if (vectors[newVector]) {
    activeVector = newVector;
    updateDisplay();
  }
}

// Function to create and store a new vector
function createVector(name) {
  if (vectors[name]) {
    alert("Vector name already exists!");
    return;
  }
  vectors[name] = [];
  updateVectorDropdown();
  switchVector(name);
}

// Initial display update
updateDisplay();
updateVectorDropdown();

// Handle vector selection change
document.getElementById("vectorSelect").addEventListener("change", (event) => {
  switchVector(event.target.value);
});

// Create Vector Form Submission
document
  .getElementById("createVectorForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("vectorName").value.trim();
    if (name) {
      createVector(name);
      document.getElementById("vectorName").value = "";
    }
  });

// PUSH: Add new value at the end
document.getElementById("pushForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const newValue = document.getElementById("pushInput").value;
  vectors[activeVector].push(newValue);
  updateDisplay();
  document.getElementById("pushInput").value = "";
});

// POP: Remove last item
document.getElementById("popButton").addEventListener("click", () => {
  vectors[activeVector].pop();
  updateDisplay();
});

// UNSHIFT: Add item at the beginning
document.getElementById("unshiftForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const newValue = document.getElementById("unshiftInput").value;
  vectors[activeVector].unshift(newValue);
  updateDisplay();
  document.getElementById("unshiftInput").value = "";
});

// SHIFT: Remove first item
document.getElementById("shiftButton").addEventListener("click", () => {
  vectors[activeVector].shift();
  updateDisplay();
});
