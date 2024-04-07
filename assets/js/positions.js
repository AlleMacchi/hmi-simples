document.addEventListener("DOMContentLoaded", function () {
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
            selectedRow.classList.remove("selected");
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

  // Call the function to fill the table
  fillPositionsTable(positionsData);

  AGVposition.textContent = `${HMI_PLC.ToHMI.Status.Carrier.actPosition_mm}`;

  teachInButton.addEventListener("click", () => {
    // Copy actPosition_mm to the input
    const actPosition = HMI_PLC.ToHMI.Status.Carrier.actPosition_mm;
    valueInput.value = actPosition;
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
    selectedRow.value = newValue;
    outMessage.style.color = "white";
    outMessage.textContent = "Position updated successfully.";

    // Log the updated HMI_PLC object (or handle as necessary)
    // console.log(selectedRow.value, newValue);
  });
});
