function createPositions() {
  var positions = {};
  var rows = ["Row"];
  var columns = ["Column"];
  var direction = ["A","B"]; 


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
var positionsData = createPositions();
// console.log(positionsData);


