// Function to update the layer title based on PLC data
const updateLayerTitle = (layerNumber) => {
  const layerTitle = document.getElementById("layer-title");
  layerTitle.textContent = `Layer ${layerNumber}`;
};

// Function to update the position of the AGV and highlight the corresponding Number
const updateAGVPosition = (newPosition) => {
  // First, remove the 'active' class from all squares and Numbers
  document
    .querySelectorAll(".square.active, .Number.active")
    .forEach((element) => {
      element.classList.remove("active");
    });

  // Add the 'active' class to the target square and Number
  const targetSquare = document.querySelector(
    `.square[data-position="${newPosition}"]`
  );
  const targetNumber = document.querySelector(
    `.Number[data-position="${newPosition}"]`
  );

  if (targetSquare && targetNumber) {
    targetSquare.classList.add("active");
    targetNumber.classList.add("active");
  }
};

// Simulating PLC variable updates
var newPosition = 0;
var currentLayer = 1;

const getPLCPosition = () => {
  newPosition = (newPosition % 38) + 1; // This will cycle the position from 1 to 38
  return newPosition;
};

const getPLCLayer = () => {
  // Placeholder for actual PLC layer data retrieval
  currentLayer = (currentLayer % 3) + 1; // This will cycle the layer from 1 to 3
  return currentLayer;
};

// Update function call
setInterval(() => {
  const newPosition = getPLCPosition(); // Simulate getting new position from PLC
  const newLayer = getPLCLayer(); // Simulate getting new layer from PLC
  updateAGVPosition(newPosition);
  updateLayerTitle(newLayer);
}, 1000); // Update rate

const btnLogical = document.getElementById("btn_logical");
const btnPhysical = document.getElementById("btn_physical");
const logicalControls = document.getElementById("logical-controls");
const physicalControls = document.getElementById("physical-controls");
const physicalPositionInput = document.getElementById("physical-position");
const confirmPositionBtn = document.getElementById("confirm-position");
const dimensionLabel = document.getElementById("dimension-label");

// Arrays for dropdown options
const layers = ["Layers", "Layer 1", "Layer 2"]; // Replace with actual layers
const positions = ["Positions", "Position 1", "Position 2"]; // Replace with actual positions

// Populate dropdowns for logical controls
const layerSelect = createDropdown("layer-select", layers);
const positionSelect = createDropdown("position-select", positions);
const layerLabel = document.getElementById("logical-label");
const positionLabel = document.getElementById("position-label");
layerLabel.appendChild(layerSelect);
layerSelect.setAttribute("disabled", "true");
logicalControls.appendChild(positionSelect);
positionSelect.setAttribute("disabled", "true");

btnLogical.addEventListener("click", function () {
  enableSection(logicalControls);
  disableSection(physicalControls);
  btnLogical.classList.add("active");
  btnPhysical.classList.remove("active");
  btn_go.classList.remove("active");
  dimensionLabel.textContent = "0 mm";
  physicalPositionInput.value = "";
});

btnPhysical.addEventListener("click", function () {
  disableSection(logicalControls);
  enableSection(physicalControls);
  btnPhysical.classList.add("active");
  btnLogical.classList.remove("active");
  btn_go.classList.remove("active");
  // Correct way to reset selects to their first option
  layerSelect.value = layerSelect.options[0].value;
  positionSelect.value = positionSelect.options[0].value;
});

confirmPositionBtn.addEventListener("click", function () {
  dimensionLabel.textContent = physicalPositionInput.value + " mm";
  btn_go.classList.add("active");
});

function enableSection(section) {
  Array.from(section.getElementsByTagName("input")).forEach((input) =>
    input.removeAttribute("disabled")
  );
  Array.from(section.getElementsByTagName("button")).forEach((button) =>
    button.removeAttribute("disabled")
  );
  Array.from(section.getElementsByTagName("select")).forEach((select) =>
    select.removeAttribute("disabled")
  );
}

function disableSection(section) {
  Array.from(section.getElementsByTagName("input")).forEach((input) =>
    input.setAttribute("disabled", "true")
  );
  Array.from(section.getElementsByTagName("button")).forEach((button) =>
    button.setAttribute("disabled", "true")
  );
  Array.from(section.getElementsByTagName("select")).forEach((select) =>
    select.setAttribute("disabled", "true")
  );
}

function createDropdown(id, options) {
  const select = document.createElement("select");
  select.id = id;
  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    select.appendChild(opt);
  });
  return select;
}

let controlsInputs = [layerSelect, positionSelect]; // Correctly include both selects
let btn_go = document.getElementById("btn_go");

controlsInputs.forEach((controlInput) => {
  
  controlInput.addEventListener("change", () => {
    btn_go.classList.remove("active");
    // Use controlInput, not input
    if (
      controlsInputs.every(
        (controlInput) =>
          controlInput.value !== "Positions" && controlInput.value !== "Layers"
      )
    ) {
      btn_go.classList.add("active");
    }
  });
});

physicalPositionInput.addEventListener("input", () => {
  btn_go.classList.remove("active");
  confirmPositionBtn.classList.remove("active");
  if (physicalPositionInput.value) {
    confirmPositionBtn.classList.add("active");
  }
});



  // Adding "mousedown" event to simulate button press
  btn_go.addEventListener("mousedown", () => {
    btn_go.classList.add("clicked");
    btn_go.classList.remove("active");
  });

  // Removing "clicked" class shortly after "mouseup" to simulate the visual effect
  btn_go.addEventListener("mouseup", () => {
    setTimeout(() => btn_go.classList.remove("clicked"), 150);
  });

  // Also remove "clicked" class on "mouseleave" to ensure the effect is cleared if the mouse leaves the button before mouseup
  btn_go.addEventListener("mouseleave", () => {
    setTimeout(() => btn_go.classList.remove("clicked"), 150);
  });


  btn_go.addEventListener("click", () => {
    btn_go.classList.remove("active");
    // Show the message
    GoMessage.style.display = "flex";

    // Hide the message after 10 seconds
    setTimeout(() => {
      GoMessage.style.display = "none";
    }, 3000);
  });