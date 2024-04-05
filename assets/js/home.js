// Function to update the row title based on PLC data

const updaterowTitle = (rowNumber) => {
  const rowTitle = document.getElementById("row-title");
  rowTitle.textContent = `${ShuttleToWMS.Status.Carrier.Position}`;
};

// Function to update the position of the AGV and highlight the corresponding Number
const updateAGVPosition = (newPosition) => {
  var positionString = ShuttleToWMS.Status.Carrier.Position;
  // Extracting the column number from the position string using a regular expression.
  // This will match the 'R' followed by any digit(s) and capture the digits only.
  var match = positionString.match(/A(\d+)/);
  var newPosition = match ? parseInt(match[1], 10) : null;

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

// Update function call
setInterval(() => {
  updateAGVPosition(ShuttleToWMS.Status.Carrier.Position);
  updaterowTitle(ShuttleToWMS.Status.Carrier.Position);
}, 1000); // Update rate

const btnLogical = document.getElementById("btn_logical");
const btnPhysical = document.getElementById("btn_physical");
const logicalControls = document.getElementById("logical-controls");
const physicalControls = document.getElementById("physical-controls");
const physicalPositionInput = document.getElementById("physical-position");
const confirmPositionBtn = document.getElementById("confirm-position");
const dimensionLabel = document.getElementById("dimension-label");

// Arrays for dropdown options
const rows = positionsData.rows; // Replace with actual rows
const positions = positionsData.columns; // Replace with actual positions

// Populate dropdowns for logical controls
const rowSelect = createDropdown("row-select", rows);
const positionSelect = createDropdown("position-select", positions);
const rowLabel = document.getElementById("logical-label");
const positionLabel = document.getElementById("position-label");
rowLabel.appendChild(rowSelect);
rowSelect.setAttribute("disabled", "true");
logicalControls.appendChild(positionSelect);
positionSelect.setAttribute("disabled", "true");

btnLogical.addEventListener("click", function () {
  enableSection(logicalControls);
  disableSection(physicalControls);
  btnLogical.classList.add("active");
  btnPhysical.classList.remove("active");
  btn_go.classList.remove("active");
  HMI_PLC.FromHMI.Selection.Carrier.mm_or_logical = true;
  dimensionLabel.textContent = "0 mm";
  physicalPositionInput.value = 0;
  
});

btnPhysical.addEventListener("click", function () {
  disableSection(logicalControls);
  enableSection(physicalControls);
  btnPhysical.classList.add("active");
  btnLogical.classList.remove("active");
  btn_go.classList.remove("active");
  HMI_PLC.FromHMI.Selection.Carrier.mm_or_logical = true;
  // Correct way to reset selects to their first option
  rowSelect.value = rowSelect.options[0].value;
  positionSelect.value = positionSelect.options[0].value;
  document.getElementById("labelState span").innerHTML = "Physical";
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

let controlsInputs = [rowSelect, positionSelect]; // Correctly include both selects
let btn_go = document.getElementById("btn_go");

controlsInputs.forEach((controlInput) => {
  controlInput.addEventListener("change", () => {
    btn_go.classList.remove("active");
    // Use controlInput, not input
    if (
      controlsInputs.every(
        (controlInput) =>
          controlInput.value !== "Row" && controlInput.value !== "Column"
      )
    ) {
      btn_go.classList.add("active");
    }
  });
});

physicalPositionInput.addEventListener("input", () => {
  btn_go.classList.remove("active");
  confirmPositionBtn.classList.remove("active");
  if (
    physicalPositionInput.value > 0 &&
    physicalPositionInput.value !== "" &&
    physicalPositionInput.value !== 0
  ) {
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
  if (physicalPositionInput.value > 0) {
    HMI_PLC.FromHMI.Setting.Carrier.PositionToReach_mm = parseFloat(
      physicalPositionInput.value
    );
    // console.log(HMI_PLC.FromHMI.Setting.Carrier.PositionToReach_mm); // For testing
    GoMessage.style.display = "flex";
    btn_go.classList.remove("active");
  } else if (rowSelect.value !== "Row" && positionSelect.value !== "Column") {
    HMI_PLC.FromHMI.Setting.Carrier.PositionToReach_logical =
      createPositionString(rowSelect.value, positionSelect.value);
    GoMessage.style.display = "flex";
    btn_go.classList.remove("active");
  }

  // ShuttleToWMS.Status.Carrier.Position = HMI_PLC.FromHMI.Setting.Carrier.PositionToReach_logical; Only for Testing
  // HMI_PLC.FromHMI.Selection.Carrier.mm_or_logical = false;  toggle?

  // Hide the message after 10 seconds
  setTimeout(() => {
    GoMessage.style.display = "none";
  }, 3000);
});

function createPositionString(row, column) {
  // Assuming row is like 'R019' and column is like 'A01'
  // Construct the final string
  return `A-L01${row}${column}`; // Using template literal
}
