document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const positionsTable = document
    .getElementById("positionsTable")
    .getElementsByTagName("tbody")[0];

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
});

function fillPositionsTable(positionsData) {
  // Get the tbody element where the positions will be inserted
  const tbody = document.querySelector("#positionsTable tbody");

  // Clear any existing rows in the tbody
  tbody.innerHTML = "";

  // Loop through each row and column to create the table cells
  positionsData.rows.forEach((row, rowIndex) => {
    if (rowIndex === 0) return; // Skip the placeholder "Row"

    positionsData.columns.forEach((col, colIndex) => {
      if (colIndex === 0) return; // Skip the placeholder "Column"

      // Create the string A-L01R...A...
      const positionString = `A-L01${row}A${col
        .substring(1)
        .padStart(2, "0")}`;
      const cellString = `A-L01.Positions[${colIndex},${rowIndex},0]`;

      // Create the table row and cells
      const tr = document.createElement("tr");
      const tdPosition = document.createElement("td");
      tdPosition.textContent = cellString;

      const tdDescription = document.createElement("td");
      tdDescription.textContent = positionString;

      // Append the cells to the row
      tr.appendChild(tdPosition);
      tr.appendChild(tdDescription);

      // Append the row to the table body
      tbody.appendChild(tr);
    });
  });
}

// Call the function to fill the table
fillPositionsTable(positionsData);

// =============================================================================

// Position Mother Shuttle
// 100		"A-L01".Positions[1,9,0]	Float	(il numero centrale rimane sempre 9)
// 101		"A-L01".Positions[1,9,1]	Float	Il numero a sinistra da 1 a 38 e si alterna 0 e 1 con quello di destra,
// 102		"A-L01".Positions[2,9,0]	Float	pertanto 1,9,0 e 1,9,1
// 103		"A-L01".Positions[2,9,1]	Float	I prossimi sarrano 2,9,0 e 2,9,1
// 		…		e cosí via
// 		"A-L01".Positions[38,9,0]	Float
// 		"A-L01".Positions[38,9,1]	Float

// Position Baby Shuttle
// 100		"A-L01".Positions[1,1,0]	Float	array multidimensionale di 38 per 38 con il numero a destra sempre a 0
// 101		"A-L01".Positions[1,2,0]	Float
// 102		"A-L01".Positions[1,3,0]	Float
// 103		"A-L01".Positions[1,4,0]	Float
// 		…
// 		"A-L01".Positions[1,38,0]	Float

// 		"A-L01".Positions[2,1,0]	Float
// 		"A-L01".Positions[2,2,0]	Float
// 		"A-L01".Positions[2,3,0]	Float
// 		"A-L01".Positions[2,4,0]	Float
// 		…
// 		"A-L01".Positions[2,38,0]	Float

// 		Fino alla
// 		"A-L01".Positions[38,38,0]

// =============================================================================
