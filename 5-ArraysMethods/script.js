// 08/02/2025 - Author: Gustavo Lopes Nomelini

const vectors = { default: [37, true, "GUWOP"] }; // Store multiple vectors
let activeVector = "default"; // The currently selected vector

// Function to update the display of the current array
function updateDisplay() {
  if (!vectors[activeVector]) {
    console.error("Active vector does not exist!");
    return;
  }

  const values = vectors[activeVector];
  document.getElementById("array").textContent = values.join(" | ") || "Empty";
  document.getElementById("vector-length").textContent = values.length;

  const list = document.getElementById("array-list");
  list.innerHTML = "";

  values.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item}`;
    list.appendChild(li);
  });

  console.log(`Updated display for vector: ${activeVector}`);
}

// Function to update dropdowns with available vectors
function updateVectorDropdowns() {
  const select1 = document.getElementById("concatVector1");
  const select2 = document.getElementById("concatVector2");
  const activeSelect = document.getElementById("vectorSelect");

  if (!select1 || !select2 || !activeSelect) {
    console.error("Dropdown elements are missing!");
    return;
  }

  [select1, select2, activeSelect].forEach((select) => {
    select.innerHTML = "";
    Object.keys(vectors).forEach((vectorName) => {
      const option = document.createElement("option");
      option.value = vectorName;
      option.textContent = vectorName;
      if (vectorName === activeVector && select === activeSelect)
        option.selected = true;
      select.appendChild(option);
    });
  });

  console.log("Vector dropdowns updated.");
}

// Function to switch active vector
function switchVector(newVector) {
  if (vectors[newVector]) {
    activeVector = newVector;
    updateDisplay();
  } else {
    console.warn(`Attempted to switch to non-existent vector: ${newVector}`);
  }
}

// Function to create a new vector
function createVector(name) {
  if (!name || vectors[name]) {
    alert("Vector name already exists or is invalid!");
    return;
  }
  vectors[name] = [];
  updateVectorDropdowns();
  switchVector(name);
}

// Push: Add new value at the end
document.getElementById("pushForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const newValue = document.getElementById("pushInput").value.trim();
  if (newValue !== "") {
    vectors[activeVector].push(newValue);
    updateDisplay();
    document.getElementById("pushInput").value = "";
  }
});

// Pop: Remove last item
document.getElementById("popButton")?.addEventListener("click", () => {
  if (vectors[activeVector].length > 0) {
    vectors[activeVector].pop();
    updateDisplay();
  }
});

// Unshift: Add new value to the beginning
document.getElementById("unshiftForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const newValue = document.getElementById("unshiftInput").value.trim();
  if (newValue !== "") {
    vectors[activeVector].unshift(newValue);
    updateDisplay();
    document.getElementById("unshiftInput").value = "";
  }
});

// Shift: Remove first item
document.getElementById("shiftButton")?.addEventListener("click", () => {
  if (vectors[activeVector].length > 0) {
    vectors[activeVector].shift();
    updateDisplay();
  }
});

// Splice: Remove/Add in the middle
document.getElementById("spliceButton")?.addEventListener("click", () => {
  const index = parseInt(prompt("Enter index to modify:"));
  const deleteCount = parseInt(prompt("How many elements to remove?")) || 0;
  const newValue = prompt("Enter a new value (or leave empty to just remove):");

  if (!isNaN(index) && index >= 0 && index < vectors[activeVector].length) {
    if (newValue) {
      vectors[activeVector].splice(index, deleteCount, newValue);
    } else {
      vectors[activeVector].splice(index, deleteCount);
    }
    updateDisplay();
  } else {
    alert("Invalid index! Please enter a valid number.");
  }
});

// Slice: Extract a portion of the array
document.getElementById("sliceForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const start = parseInt(document.getElementById("sliceStart").value, 10);
  const end = document.getElementById("sliceEnd").value
    ? parseInt(document.getElementById("sliceEnd").value, 10)
    : undefined;

  if (!isNaN(start) && start >= 0 && start < vectors[activeVector].length) {
    const slicedArray = vectors[activeVector].slice(start, end);
    document.getElementById("sliceResult").textContent =
      `Sliced Array: [ ${slicedArray.join(" | ")} ]`;
  } else {
    alert("Please enter a valid start index.");
  }
});

// Concatenate Two Vectors
document.getElementById("concatForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const vector1 = document.getElementById("concatVector1").value;
  const vector2 = document.getElementById("concatVector2").value;

  if (vector1 !== vector2 && vectors[vector1] && vectors[vector2]) {
    vectors[activeVector] = vectors[vector1].concat(vectors[vector2]);
    updateDisplay();
    alert(`${vector1} has being insert in the beginning of ${vector2}`);
  } else {
    alert("Please select two different vectors.");
  }
});

// Initial display setup
updateDisplay();
updateVectorDropdowns();

// Handle vector selection change
document.getElementById("vectorSelect")?.addEventListener("change", (event) => {
  switchVector(event.target.value);
});

// Create Vector Form Submission
document
  .getElementById("createVectorForm")
  ?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("vectorName").value.trim();
    if (name) {
      createVector(name);
      document.getElementById("vectorName").value = "";
    }
  });
