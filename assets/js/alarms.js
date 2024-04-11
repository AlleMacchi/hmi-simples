function createAlarmsTable() {
  // =======================
  //Initialise
  // =======================
  const AGVBabyalarmsAndWarnings = [
    {
      id: 100,
      type: "Alarm",
      description: "Emergency Signal",
      active: readBits(Array_40)[0], // Ensure these gData properties are updated accordingly
    },
    {
      id: 101,
      type: "Alarm",
      description: "Pallet Presence Lost",
      active: readBits(Array_40)[1],
    },
    // Continuing with corrected references
    {
      id: 102,
      type: "Alarm",
      description: "Drive in fault",
      active: readBits(Array_40)[0],
    },
    {
      id: 103,
      type: "Alarm",
      description: "Out Of Tolerance",
      active: readBits(Array_40)[1],
    },
    {
      id: 104,
      type: "Alarm",
      description: "Timeout positioning",
      active: readBits(Array_40)[2],
    },
    {
      id: 105,
      type: "Alarm",
      description: "Limit Switch forward",
      active: readBits(Array_40)[3],
    },
    {
      id: 106,
      type: "Alarm",
      description: "Limit Switch backward",
      active: readBits(Array_40)[4],
    },
    {
      id: 107,
      type: "Alarm",
      description: "Encoder Error",
      active: readBits(Array_40)[5],
    },
    {
      id: 108,
      type: "Alarm",
      description: "Encoder Not Homed",
      active: readBits(Array_40)[6],
    },
    {
      id: 109,
      type: "Alarm",
      description: "Drive in fault",
      active: readBits(Array_43)[0],
    },
    {
      id: 110,
      type: "Alarm",
      description: "Timeout Positioning",
      active: readBits(Array_43)[1],
    },
    {
      id: 111,
      type: "Alarm",
      description: "Lifter location unknown",
      active: readBits(Array_43)[2],
    },
    // {
    //   id: 112,
    //   type: "Warning",
    //   description: "This is a dummy warning",
    //   active: Warnings.Dummy[0].bit0,
    // },
  ];

  const AGVMotheralarmsAndWarnings = [
    {
      id: 200,
      type: "Alarm",
      description: "Emergency Signal",
      active: readBits(Array_40)[0],
    },
    {
      id: 201,
      type: "Alarm",
      description: "Pallet Limit Left Engaged",
      active: readBits(Array_40)[1],
    },
    {
      id: 202,
      type: "Alarm",
      description: "Pallet Limit Right Engaged",
      active: readBits(Array_40)[2],
    },
    {
      id: 203,
      type: "Alarm",
      description: "Satellite Limit Left Engaged",
      active: readBits(Array_40)[3],
    },
    {
      id: 204,
      type: "Alarm",
      description: "Satellite Limit Right Engaged",
      active: readBits(Array_40)[4],
    },
    {
      id: 205,
      type: "Alarm",
      description: "Drive in fault",
      active: readBits(Array_42)[0],
    },
    {
      id: 206,
      type: "Alarm",
      description: "Position sensor in fault",
      active: readBits(Array_42)[1],
    },
    {
      id: 207,
      type: "Alarm",
      description: "Out of Tolerance Position",
      active: readBits(Array_42)[2],
    },
    {
      id: 208,
      type: "Alarm",
      description: "Timeout positioning",
      active: readBits(Array_42)[3],
    },
    {
      id: 209,
      type: "Alarm",
      description: "Limit Switch Forward",
      active: readBits(Array_42)[4],
    },
    {
      id: 210,
      type: "Alarm",
      description: "Limit Switch Backward",
      active: readBits(Array_42)[5],
    },
    {
      id: 211,
      type: "Warning",
      description: "Selection Maintenance WiFi Controller activated",
      active: readBits(Array_41)[1],
    },
    // Add additional alarms and warnings as needed.
  ];



  //================================
  // Create Table from Alarms active
  //================================

  const tableBody = document.querySelector("#alarmTable tbody");
  let alarmsCounter = document.getElementById("alarmsCounter");

  const activeAlarmsAndWarnings = AGVBabyalarmsAndWarnings.filter(
    (item) => item.active
  );

  // console.log(AGVBabyalarmsAndWarnings);
  // console.log(activeAlarmsAndWarnings);

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

//==============================
// setInterval to update alarms
//==============================
setInterval(createAlarmsTable, 1000);
