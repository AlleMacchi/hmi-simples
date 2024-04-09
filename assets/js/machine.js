// Get the select element
const selection = document.getElementById("standard-select");

// Add event listener for 'change' event
selection.addEventListener("change", function (event) {
  // Reset selections to false
  HMI_PLC.FromHMI.Selection.Carrier.enable = false;
  HMI_PLC.FromHMI.Selection.Lifter.enable = false;

  // Set the corresponding selection to true based on the dropdown choice
  if (event.target.value === "Wheels") {
    sendDataToUrl(
      "IOWrite.html",
      '"HMI_PLC".FromHMI.Selection.Lifter.enable',
      false
    );
    sendDataToUrl(
      "IOWrite.html",
      '"HMI_PLC".FromHMI.Selection.Carrier.enable',
      true
    );
    // HMI_PLC.FromHMI.Selection.Carrier.enable = true;
  } else if (event.target.value === "Lifter") {
    sendDataToUrl(
      "IOWrite.html",
      '"HMI_PLC".FromHMI.Selection.Carrier.enable',
      false
    );
    sendDataToUrl(
      "IOWrite.html",
      '"HMI_PLC".FromHMI.Selection.Lifter.enable',
      true
    );
    // HMI_PLC.FromHMI.Selection.Lifter.enable = true;
  } else {
    sendDataToUrl(
      "IOWrite.html",
      '"HMI_PLC".FromHMI.Selection.Lifter.enable',
      false
    );
    sendDataToUrl(
      "IOWrite.html",
      '"HMI_PLC".FromHMI.Selection.Carrier.enable',
      false
    );
    // HMI_PLC.FromHMI.Selection.Carrier.enable = false;
    // HMI_PLC.FromHMI.Selection.Lifter.enable = false;
  }

  // Log or handle the updated HMI_PLC object as needed
  // console.log("Carrier enabled: ", HMI_PLC.FromHMI.Selection.Carrier.enable);
  // console.log("Lifter enabled: ", HMI_PLC.FromHMI.Selection.Lifter.enable);
});

// 404   423  406        410
// 408   432  409        411
// 405        407

//         17

var Modulo_0 = readBits(gData.ShuttleToWMS_DI_Module0);
var Modulo_1 = readBits(gData.ShuttleToWMS_DI_Module1);
var Battery = gData.ShuttleToWMS_AI_Module_0_Channel_0 > 0 ? 1 : 0;

function updateSensorsFromBits() {
  // Mapping from sensor IDs to their respective bits in the ShuttleToWMS object
  const sensorMapping = {
    "sensor-404": Modulo_0[4],
    "sensor-405": Modulo_0[5],
    "sensor-406": Modulo_0[6],
    "sensor-407": Modulo_0[7],
    "sensor-408": Modulo_0[8],
    "sensor-409": Modulo_0[9],
    "sensor-410": Modulo_0[10],
    "sensor-411": Modulo_0[11],
    "sensor-416": Modulo_1[0],
    "sensor-417": Modulo_1[1],
    "sensor-418": Modulo_1[2],
    "sensor-419": Modulo_1[3],
    "sensor-420": Modulo_1[4],
    "sensor-423": Modulo_1[7],
    "sensor-432": Battery,
    // The battery level isn't a binary sensor, so we'll handle it separately
  };

  // console.log(sensorMapping["sensor-404"]);

  // console.log(sensorMapping);

  // Iterate over the sensorMapping and update the classes accordingly
  for (const [sensorId, isActive] of Object.entries(sensorMapping)) {
    const sensorElement = document.getElementById(sensorId);
    // console.log(sensorElement.classList, isActive);
    if (sensorElement) {
      if (isActive) {
        sensorElement.classList.add("activeSensor");
      } else {
        sensorElement.classList.remove("activeSensor");
      }
    }
  }

  // Update the battery level indicator
  const batteryLevel = gData.ShuttleToWMS_AI_Module_0_Channel_0;
  const batteryLevelElement = document.getElementById("sensor-432");
  if (batteryLevelElement) {
    batteryLevelElement.style.width = `${batteryLevel}%`;
    batteryLevelElement.textContent = `${batteryLevel}%`;

    // Add the 'low-battery' class if the battery level is below a threshold, e.g., 20%
    if (batteryLevel <= 20) {
      batteryLevelElement.classList.remove("activeSensor");
      batteryLevelElement.classList.add("low-batterySensor");
      batteryLevelElement.style.color = "var(--light-blue)";
    } else {
      batteryLevelElement.classList.remove("low-batterySensor");
      batteryLevelElement.style.color = "black";
    }
  }
}

// This function should be called whenever the ShuttleToWMS object is updated with new sensor data

// // =================================================================================================

// // document
// //   .getElementById("standard-select")
// //   .addEventListener("change", function () {
// //     var selectedOption = this.value;
// //     if (selectedOption === "Wheels") {
// //       selWheelsON();
// //       selLifterOFF();
// //     }
// //     if (selectedOption === "Lifter") {
// //       selWheelsOFF();
// //       selLifterON();
// //     }
// //   });

// // function selLifterON() {
// //   event.preventDefault();
// //   var url = "IOWrite.html";
// //   var name = '"HMI_PLC".FromHMI.Command.selLifterMovements';
// //   var val = 1;
// //   var sdata = encodeURIComponent(name) + "=" + val;

// //   var xhr = new XMLHttpRequest();
// //   xhr.open("POST", url, true);
// //   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// //   xhr.onreadystatechange = function () {
// //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
// //       // Request finished, do something with the response if needed
// //     }
// //   };
// //   xhr.send(sdata);
// // }

// // function selLifterOFF() {
// //   event.preventDefault();
// //   var url = "IOWrite.html";
// //   var name = '"HMI_PLC".FromHMI.Command.selLifterMovements';
// //   var val = 0;
// //   var sdata = encodeURIComponent(name) + "=" + val;

// //   var xhr = new XMLHttpRequest();
// //   xhr.open("POST", url, true);
// //   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// //   xhr.onreadystatechange = function () {
// //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
// //       // Request finished, do something with the response if needed
// //     }
// //   };
// //   xhr.send(sdata);
// // }

// // function selWheelsON() {
// //   event.preventDefault();
// //   var url = "IOWrite.html";
// //   var name = '"HMI_PLC".FromHMI.Command.selCarrierMovements';
// //   var val = 1;
// //   var sdata = encodeURIComponent(name) + "=" + val;

// //   var xhr = new XMLHttpRequest();
// //   xhr.open("POST", url, true);
// //   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// //   xhr.onreadystatechange = function () {
// //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
// //       // Request finished, do something with the response if needed
// //     }
// //   };
// //   xhr.send(sdata);
// // }

// // function selWheelsOFF() {
// //   event.preventDefault();
// //   var url = "IOWrite.html";
// //   var name = '"HMI_PLC".FromHMI.Command.selCarrierMovements';
// //   var val = 0;
// //   var sdata = encodeURIComponent(name) + "=" + val;

// //   var xhr = new XMLHttpRequest();
// //   xhr.open("POST", url, true);
// //   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// //   xhr.onreadystatechange = function () {
// //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
// //       // Request finished, do something with the response if needed
// //     }
// //   };
// //   xhr.send(sdata);
// // }
