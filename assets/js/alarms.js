const tableBody = document.querySelector("#alarmTable tbody");

let alarmsCounter = document.getElementById("alarmsCounter");

// Filter active alarms and warnings
// AGVBABY
const activeAlarmsAndWarnings = AGVBabyalarmsAndWarnings.filter(
  (item) => item.active
);

// AGVMOTHER
// const activeAlarmsAndWarnings = AGVMotheralarmsAndWarnings.filter(
//   (item) => item.active
// );

if (activeAlarmsAndWarnings.length > 0) {
  alarmsCounter.textContent = activeAlarmsAndWarnings.length;
  alarmsCounter.style.display = "flex";

  // Change color to yellow if there are no alarms and only warnings are active
  if (!activeAlarmsAndWarnings.some((item) => item.type === "Alarm")) {
    alarmsCounter.style.color = "yellow";
    alarmsCounter.style.boxShadow = "0 0 10px yellow";
  }
} else {
  alarmsCounter.style.display = "none";
}

function createAlarmsTable() {
  if (tableBody) {
    tableBody.innerHTML = "";
  }
  // if (tableBody.childElementCount > 0) {
    // console.log("Creating alarms table");
    // Populate the table with active alarms and warnings
    activeAlarmsAndWarnings.forEach((item) => {
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      idCell.textContent = item.id;
      const typeCell = document.createElement("td");
      typeCell.textContent = item.type;
      const descCell = document.createElement("td");
      descCell.textContent = item.description;

      row.appendChild(idCell);
      row.appendChild(typeCell);
      row.appendChild(descCell);
      tableBody.appendChild(row);
    });
  // }
}
