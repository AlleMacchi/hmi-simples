function createPositions() {
  //=================================
  // Initialise all positions
  //==============================

  var positions = {};
  var rows = ["Row"];
  var columns = ["Column"];
  var direction = ["A", "B"];

  for (var row = 1; row <= 38; row++) {
    var rowKey = "R" + row.toString().padStart(3, "0");
    positions[rowKey] = [];
    rows.push(rowKey); // Add this row to the rows list

    for (var column = 1; column <= 38; column++) {
      var columnKey = direction[0] + column.toString().padStart(2, "0");
      positions[rowKey].push({
        description: columnKey,
        value: 0,
      });
      if (row === 1) {
        // Only add columns for the first row to avoid duplicates
        columns.push(columnKey);
      }
    }
  }

  return { positions: positions, rows: rows, columns: columns }; // Return an object containing all three
}

// console.log(positionsData);

//=================================
// Update position result on Search
//=================================

const searchInput = document.getElementById("searchInput");
const positionsTable = document
  .getElementById("positionsTable")
  .getElementsByTagName("tbody")[0];
const valueInput = document.getElementById("value-input");
const setButton = document.getElementById("SetButton");
const teachInButton = document.getElementById("teachInButton");
const AGVposition = document
  .getElementById("AGV-position")
  .querySelector("span");
const positionValue = document.getElementById("position-value");

const outMessage = document.getElementById("outMessage");
let selectedRow = null;

searchInput.addEventListener("keyup", function () {
  const searchTerm = searchInput.value.toLowerCase();
  Array.from(positionsTable.rows).forEach(function (row) {
    const positionNumber = row.cells[0].textContent.toLowerCase();
    const description = row.cells[1].textContent.toLowerCase();
    const match =
      positionNumber.includes(searchTerm) || description.includes(searchTerm);
    row.style.display = match ? "" : "none";
  });
});

//=================================
// Create Table
//=================================

function fillPositionsTable(positionsData) {
  const tbody = document.querySelector("#positionsTable tbody");
  tbody.innerHTML = "";

  positionsData.rows.forEach((row, rowIndex) => {
    if (rowIndex === 0) return; // Skip the header

    positionsData.columns.forEach((col, colIndex) => {
      if (colIndex === 0) return; // Skip the header

      const positionString = `A-L01${row}${col}`;
      const cellString = `A-L01.Positions[${rowIndex},${colIndex},0]`;

      const tr = document.createElement("tr");
      const tdPosition = document.createElement("td");
      const tdDescription = document.createElement("td");

      tdPosition.textContent = cellString;
      tdDescription.textContent = positionString;

      tr.appendChild(tdPosition);
      tr.appendChild(tdDescription);

      // Add click event to the row for selection
      tr.addEventListener("click", function () {
        // Remove the selected class from the previously selected row
        if (selectedRow) {
          valueInput.value = "";
          selectedRow.classList.remove("selected");
          sendDataToUrl(
            "IOWritePositionLogic.html",
            `"HMI_PLC".FromHMI.Position.logical`,
            selectedRow.description
          );
          sendDataToUrl(
            "IOWriteRequest.html",
            `"HMI_PLC".FromHMI.Position.request`,
            true
          );
          // TODO: possible problem delay on request
          if (updatePositionResult() == 1) {
            sendDataToUrl(
              "IOWriteRequest.html",
              `"HMI_PLC".FromHMI.Position.request`,
              false
            );
          } else {
            console.log("Position request not set");
            outMessage.textContent = "Something went wrong. Please try again.";
            outMessage.style.color = "red"; // Optional: Change color for error message
            return;
          }
        }
        selectedRow = tr;
        tr.classList.add("selected");

        // Focus on the input field for immediate editing
        valueInput.focus();
        setButton.disabled = false;
      });

      tbody.appendChild(tr);
    });
  });
}

//=================================
// Update position result
//=================================

teachInButton.addEventListener("click", () => {
  // Copy actPosition_mm to the input
  valueInput.value = updateAGVPositionMM();
});

setButton.addEventListener("click", () => {
  // Update HMI_PLC object with new value from input

  if (selectedRow === null) {
    console.log("No position selected");
    outMessage.textContent = "Please select a position before setting.";
    outMessage.style.color = "red"; // Optional: Change color for error message
    return;
  }
  if (valueInput.value === "") {
    console.log("No value entered");
    outMessage.textContent = "Please enter a value before setting.";
    outMessage.style.color = "red"; // Optional: Change color for error message
    return;
  }

  const newValue = parseFloat(valueInput.value);
  sendDataToUrl(
    "IOWritePositionMM.html",
    `"HMI_PLC".FromHMI.Position.mm`,
    newValue
  );
  sendDataToUrl("IOWriteUpdate.html", `"HMI_PLC".FromHMI.Position.update`, 1);

  if (updatePositionResult() == 1) {
    sendDataToUrl("IOWriteUpdate.html", `"HMI_PLC".FromHMI.Position.update`, 0);
    outMessage.style.color = "white";
    outMessage.textContent = "Position updated successfully.";
  } else {
    console.log("Position request not set");
    outMessage.textContent = "Something went wrong. Please try again.";
    outMessage.style.color = "red"; // Optional: Change color for error message
    return;
  }

  // Reset the selected row
  //  valueInput.value = "";
  //  valueInput.disabled = true;
  //  setButton.disabled = true;

  // Log the updated HMI_PLC object (or handle as necessary)
  // selectedRow.value = newValue;
  // console.log(selectedRow.value, newValue);
});

//================================
// Create Tabel
//================================

var positionsData = createPositions();
// Call the function to fill the table
fillPositionsTable(positionsData);

//===========================
// Update Data
//===========================

// console.log(updatePositionResult());
// console.log(updateAGVPositionMM());

function updatePositionResult() {
  return Array_38;
}

function updateAGVPositionMM() {
  AGVposition.textContent = `${Array_45} mm`
  positionValue.textContent = `${Array_45} mm`
  return Array_45;
}

setInterval(updateAGVPositionMM, 1000); // Repeat every 1000ms as an example
// setInterval(updatePositionResult, 1000);
