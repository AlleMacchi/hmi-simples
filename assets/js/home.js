//===================
// Update Data
//===================

function createPositionString() {
  if (
    Array_33 === undefined ||
    Array_34 === undefined ||
    Array_35 === undefined
  ) {
    return "No Data Available";
  }
  let row = Array_33.toString().padStart(3, "0");
  let dir = Array_34 ? "A" : "B";
  let col = Array_35.toString().padStart(2, "0");

  return `A-L01R${row}${dir}${col}`;
}

function createPositionSelectionString(row, col) {
  let dir = Array_34 ? "A" : "B";
  return `A-L01R${row}${dir}${col}`;
}

const rowTitle = document.getElementById("row-title");
const updaterowTitle = () => {
  rowTitle.textContent = "";
  rowTitle.textContent = createPositionString();
};

const updateAGVPosition = () => {
  var positionString = createPositionString();
  var match = positionString.match(/A(\d+)/);
  var newPosition = match ? parseInt(match[1], 10) : null;

  document
    .querySelectorAll(".square.active, .Number.active")
    .forEach((element) => {
      element.classList.remove("active");
    });

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

// ======================================
// Initialise
// ======================================

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

//=============================================
// Physical and Logical Button to write
//=============================================

btnLogical.addEventListener("click", function () {
  sendDataToUrl(
    "IOWriteCarrierMmOrLogical.html",
    `"HMI_PLC".FromHMI.Selection.Carrier.mm_or_logical`,
    true
  );
  enableSection(logicalControls);
  disableSection(physicalControls);
  btnLogical.classList.add("active");
  btnPhysical.classList.remove("active");
  btn_go.classList.remove("active");
  dimensionLabel.textContent = "0 mm";
  physicalPositionInput.value = 0;
});

btnPhysical.addEventListener("click", function () {
  sendDataToUrl(
    "IOWriteCarrierMmOrLogical.html",
    `"HMI_PLC".FromHMI.Selection.Carrier.mm_or_logical`,
    false
  );
  disableSection(logicalControls);
  enableSection(physicalControls);
  btnPhysical.classList.add("active");
  btnLogical.classList.remove("active");
  btn_go.classList.remove("active");
  rowSelect.value = rowSelect.options[0].value;
  positionSelect.value = positionSelect.options[0].value;
});

//=============================================
// Graphic changes on the screen
//=============================================

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

//=============================================
// Dropdowns and Inputs Creation
//=============================================

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

//=============================================
// Go Button
//=============================================

btn_go.addEventListener("mousedown", () => {
  btn_go.classList.add("clicked");
  btn_go.classList.remove("active");
});

btn_go.addEventListener("mouseup", () => {
  setTimeout(() => btn_go.classList.remove("clicked"), 150);
});
btn_go.addEventListener("mouseleave", () => {
  setTimeout(() => btn_go.classList.remove("clicked"), 150);
});

btn_go.addEventListener("click", () => {
  if (physicalPositionInput.value > 0) {
    sendDataToUrl(
      "IOWritePosition.html",
      `"HMI_PLC".FromHMI.Setting.Carrier.PositionToReach_mm`,
      parseFloat(physicalPositionInput.value)
    );

    GoMessage.style.display = "flex";
    btn_go.classList.remove("active");
  } else if (rowSelect.value !== "Row" && positionSelect.value !== "Column") {
    sendDataToUrl(
      "IOWritePositionLogical.html",
      `"HMI_PLC".FromHMI.Setting.Carrier.PositionToReach_logical`,
      createPositionSelectionString(rowSelect.value, positionSelect.value)
    );

    GoMessage.style.display = "flex";
    btn_go.classList.remove("active");
  }
  setTimeout(() => {
    GoMessage.style.display = "none";
  }, 3000);
});

//=============================================
// Step Controls
// =============================================

// Assuming you have an array of steps like this
const taskToStepsMapping = {
  0: ["0: Init"],
  1: [
    "0: Init",
    "1: Lift Down",
    "2: Go to Position",
    "3: Lift Up",
    "4: Go to First Position",
    "5: Go to Mother",
  ],
  2: [
    "0: Init",
    "1: Lift Up",
    "2: Go to Position",
    "3: Lift Down",
    "4: Go to First Position",
    "5: Go to mother",
  ],
  3: ["0: Init", "1: Go to Position"],
};

updateStepDropdown();
function updateStepDropdown() {
  let steps;
  if (Array_9 >= 0 && Array_9 <= 3) {
    steps = taskToStepsMapping[Array_9];
  } else {
    steps = ["0: Init"];
  }
  let stepDropdown = createDropdown("stepSelect", steps);

  let stepLabel = document.getElementById("stepLabel");
  if (stepLabel.childElementCount > 0) {
    stepLabel.removeChild(stepLabel.firstChild);
  }
  stepLabel.appendChild(stepDropdown);
}

// Event listener for dropdown click
document.getElementById("stepSelect").addEventListener("click", function () {
  updateStepDropdown();
});

document
  .getElementById("stepChangeButton")
  .addEventListener("click", function () {
    sendDataToUrl(
      "IOWriteNewStep.html",
      `"HMI_PLC".FromHMI.Setting.Machine.newStep`,
      document.getElementById("stepSelect").value[0].split(":")[0]
    );
    sendDataToUrl(
      "IOWriteUpdateStep.html",
      `"HMI_PLC".FromHMI.Command.updateStep`,
      true
    );
    // TODO: possible problem delay on request
    if (updatePositionResult() == 1) {
      sendDataToUrl(
        "IOWriteUpdateStep.html",
        `"HMI_PLC".FromHMI.Command.updateStep`,
        false
      );
    } else {
      console.log("Position request not set");
    }
  });

const stepControlsContainer =
  document.getElementsByClassName("dropdown-container")[0];
const currentStep = document.getElementById("currentStep");

function updateCurrentStep() {
  if ((Array_9 >= 0) & (Array_3 <= 5)) {
    currentStep.textContent = taskToStepsMapping[Array_9][Array_3];
  } else {
    currentStep.textContent = "No Step";
  }
}

//=============================================
// Step Controls MAnual and Auto Mode Removed
//=============================================

// function checkStepsControls() {
//   if (decodeHTMLEntity(gData.StatusMode) == "Auto") {
//     // if (decodeHTMLEntity(gData.StatusMode) == "AUTO") {
//     stepControlsContainer.classList.add("ControlsDisabled");
//     document
//       .getElementsByClassName("position-controls")[0]
//       .classList.add("ControlsDisabled");
//     document
//       .getElementsByClassName("position-controls")[1]
//       .classList.add("ControlsDisabled");
//     document
//       .getElementsByClassName("position-controls")[2]
//       .classList.add("ControlsDisabled");
//   } else {
//     updateStepDropdown(gData.WMStoShuttle_TaskNumber);
//     stepControlsContainer.classList.remove("ControlsDisabled");
//     document
//       .getElementsByClassName("position-controls")[0]
//       .classList.remove("ControlsDisabled");
//     document
//       .getElementsByClassName("position-controls")[1]
//       .classList.remove("ControlsDisabled");
//     document
//       .getElementsByClassName("position-controls")[2]
//       .classList.remove("ControlsDisabled");
//   }
// }

// checkStepsControls();

//=============================================
// Update Data
//=============================================

setInterval(() => {
  updaterowTitle();
  updateAGVPosition();
  updateCurrentStep();
}, 1000);
