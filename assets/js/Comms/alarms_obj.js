const Alarms = {
  Controller: [
    {
      bit0: true,
      bit1: false,
      // ...
    },
    // ...
  ],
  Carrier: [
    {
      bit0: false,
      bit1: false,
      bit2: false,
      bit3: false,
      bit4: false,
      bit5: false,
      bit6: false,
      // ...
    },
    // ...
  ],
  Lifter: [
    {
      bit0: false,
      bit1: false,
      bit2: false,
      // ...
    },
    // ...
  ],
};

// Define the Warnings object
const Warnings = {
  Dummy: [
    {
      bit0: true,
      // ...
    },
    // ...
  ],
};

const alarmsAndWarnings = [
  {
    id: 100,
    type: "Alarm",
    description: "Emergency Signal",
    active: Alarms.Controller[0].bit0,
  },
  {
    id: 101,
    type: "Alarm",
    description: "Pallet Presence Lost",
    active: Alarms.Controller[0].bit1,
  },
  {
    id: 102,
    type: "Alarm",
    description: "Drive in fault",
    active: Alarms.Carrier[0].bit0,
  },
  {
    id: 103,
    type: "Alarm",
    description: "Out Of Tolerance",
    active: Alarms.Carrier[0].bit1,
  },
  {
    id: 104,
    type: "Alarm",
    description: "Timeout positioning",
    active: Alarms.Carrier[0].bit2,
  },
  {
    id: 105,
    type: "Alarm",
    description: "Limit Switch forward",
    active: Alarms.Carrier[0].bit3,
  },
  {
    id: 106,
    type: "Alarm",
    description: "Limit Switch backward",
    active: Alarms.Carrier[0].bit4,
  },
  {
    id: 107,
    type: "Alarm",
    description: "Encoder Error",
    active: Alarms.Carrier[0].bit5,
  },
  {
    id: 108,
    type: "Alarm",
    description: "Encoder Not Homed",
    active: Alarms.Carrier[0].bit6,
  },
  {
    id: 109,
    type: "Alarm",
    description: "Drive in fault",
    active: Alarms.Lifter[0].bit0,
  },
  {
    id: 110,
    type: "Alarm",
    description: "Timeout Positioning",
    active: Alarms.Lifter[0].bit1,
  },
  {
    id: 111,
    type: "Alarm",
    description: "Lifter location unknown",
    active: Alarms.Lifter[0].bit2,
  },
  {
    id: 112,
    type: "Warning",
    description: "This is a dummy warning",
    active: Warnings.Dummy[0].bit0,
  },
];

// document.addEventListener("DOMContentLoaded", function () {
//   setInterval(function () {
//     fetch("IORead.html")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Assuming data.Alarm_000 is the correct path
//         Alarms.Controller[0].bit0 = data.Alarm_000;
//         console.log("Updated: " + Alarms.Controller[0].bit0);
//       })
//       .catch((error) => {
//         console.log(
//           "There has been a problem with your fetch operation:",
//           error
//         );
//         console.log(response);
//         console.log(data);
//       });
//   }, 1500);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   setInterval(function () {
//     fetch("IORead.html")
//       .then((response) => response.json())
//       .then((data) => {
//         gCarrierManSpeed = data.CarrierManSpeed;
//         console.log("Read: " + gCarrierManSpeed);
//       });
//   }, 1500);
// });
