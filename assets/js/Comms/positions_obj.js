function createPositions() {
  var positions = {};
  var rows = ["Row"];
  var columns = ["Column"];

  for (var row = 1; row <= 38; row++) {
    var rowKey = "R" + row.toString().padStart(3, "0");
    positions[rowKey] = [];
    rows.push(rowKey); // Add this row to the rows list

    for (var column = 1; column <= 38; column++) {
      var columnKey = "A" + column.toString().padStart(2, "0");
      positions[rowKey].push({
        description: columnKey,
        value: 0.0,
      });
      if (row === 1) {
        // Only add columns for the first row to avoid duplicates
        columns.push(columnKey);
      }
    }
  }

  return { positions: positions, rows: rows, columns: columns }; // Return an object containing all three
}
var positionsData = createPositions();

// var positionsArray = createPositions();
// console.log(positionsArray);

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
