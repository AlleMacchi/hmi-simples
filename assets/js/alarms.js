// Define the Alarms object
const Alarms = {
  Controller: [
    {
      bit0: "Emergency Signal",
      bit1: "Pallet Presence Lost",
      // ...
    },
    // ...
  ],
  Carrier: [
    {
      bit0: "Drive in fault",
      bit1: "Out Of Tolerance",
      bit2: "Timeout positioning",
      bit3: "Limit Switch forward",
      bit4: "Limit Switch backward",
      bit5: "Encoder Error",
      bit6: "Encoder Not Homed",
      // ...
    },
    // ...
  ],
  Lifter: [
    {
      bit0: "Drive in fault",
      bit1: "Timeout Positioning",
      bit2: "Lifter location unknown",
      // ...
    },
    // ...
  ],
};

// Define the Warnings object
const Warnings = {
  Dummy: [
    {
      bit0: "Dummy warning value",
      // ...
    },
    // ...
  ],
};

// Modify the alarmsAndWarnings array
const alarmsAndWarnings = [
  {
    id: 0,
    type: "Alarm",
    value: Alarms.Controller[0].bit0,
    description: "Emergency Signal",
    active: true,
  },
  {
    id: 1,
    type: "Alarm",
    value: Alarms.Controller[0].bit1,
    description: "Pallet Presence Lost",
    active: false,
  },
  {
    id: 100,
    type: "Alarm",
    value: Alarms.Carrier[0].bit0,
    description: "Drive in fault",
    active: false,
  },
  {
    id: 101,
    type: "Alarm",
    value: Alarms.Carrier[0].bit1,
    description: "Out Of Tolerance",
    active: false,
  },
  {
    id: 102,
    type: "Alarm",
    value: Alarms.Carrier[0].bit2,
    description: "Timeout positioning",
    active: false,
  },
  {
    id: 103,
    type: "Alarm",
    value: Alarms.Carrier[0].bit3,
    description: "Limit Switch forward",
    active: false,
  },
  {
    id: 104,
    type: "Alarm",
    value: Alarms.Carrier[0].bit4,
    description: "Limit Switch backward",
    active: false,
  },
  {
    id: 105,
    type: "Alarm",
    value: Alarms.Carrier[0].bit5,
    description: "Encoder Error",
    active: false,
  },
  {
    id: 106,
    type: "Alarm",
    value: Alarms.Carrier[0].bit6,
    description: "Encoder Not Homed",
    active: false,
  },
  {
    id: 200,
    type: "Alarm",
    value: Alarms.Lifter[0].bit0,
    description: "Drive in fault",
    active: false,
  },
  {
    id: 201,
    type: "Alarm",
    value: Alarms.Lifter[0].bit1,
    description: "Timeout Positioning",
    active: false,
  },
  {
    id: 202,
    type: "Alarm",
    value: Alarms.Lifter[0].bit2,
    description: "Lifter location unknown",
    active: false,
  },
  {
    id: 99999,
    type: "Warning",
    value: Warnings.Dummy[0].bit0,
    description: "This is a dummy warning",
    active: true,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Find the table's tbody
  const tableBody = document.querySelector("#alarmTable tbody");

  let alarmsCounter = document.getElementById("alarmsCounter");

  // Filter active alarms and warnings
  const activeAlarmsAndWarnings = alarmsAndWarnings.filter(
    (item) => item.active
  );

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
});
