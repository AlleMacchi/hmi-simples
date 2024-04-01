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
