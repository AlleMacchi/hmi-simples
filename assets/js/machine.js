// Get the select element
const selection = document.getElementById("standard-select");

// Add event listener for 'change' event
selection.addEventListener("change", function (event) {
  // Reset selections to false
  // Set the corresponding selection to true based on the dropdown choice
  if (event.target.value === "Wheels") {
    sendDataToUrl(
      "IOWriteLifterEnable.html",
      '"HMI_PLC".FromHMI.Selection.Lifter.enable',
      false
    );
    sendDataToUrl(
      "IOWriteCarrierEnable.html",
      '"HMI_PLC".FromHMI.Selection.Carrier.enable',
      true
    );
    // HMI_PLC.FromHMI.Selection.Carrier.enable = true;
  } else if (event.target.value === "Lifter") {
    sendDataToUrl(
      "IOWriteCarrierEnable.html",
      '"HMI_PLC".FromHMI.Selection.Carrier.enable',
      false
    );
    sendDataToUrl(
      "IOWriteLifterEnable.html",
      '"HMI_PLC".FromHMI.Selection.Lifter.enable',
      true
    );
    // HMI_PLC.FromHMI.Selection.Lifter.enable = true;
  } else {
    sendDataToUrl(
      "IOWriteLifterEnable.html",
      '"HMI_PLC".FromHMI.Selection.Lifter.enable',
      false
    );
    sendDataToUrl(
      "IOWriteCarrierEnable.html",
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

function updateSensorsFromBits() {
  var Modulo_0 = readBits(gData.ShuttleToWMS_DI_Module0);
  var Modulo_1 = readBits(gData.ShuttleToWMS_DI_Module1);
  var Battery = gData.ShuttleToWMS_AI_Module_0_Channel_0 > 0 ? 1 : 0;

  const sensorDescriptions = {
    "sensor-400": "Reserved for future use",
    "sensor-401": "Reserved for future use",
    "sensor-402": "Speed Hole Detection",
    "sensor-403": "Stop Hole Detection",
    "sensor-404": "Before Cargo Detection on Side A",
    "sensor-405": "After Cargo Detection on Side A",
    "sensor-406": "Before Cargo Detection on Side B",
    "sensor-407": "After Cargo Detection on Side B",
    "sensor-408": "Side A Detects the Mother Car Is In Place",
    "sensor-409": "Side B Detects the Mother Car Is In Place",
    "sensor-410": "Lift Upper Limit",
    "sensor-411": "Jacking Lower Limit",
    "sensor-412": "Jacking Drive Failure",
    "sensor-413": "Travel Drive Failure",
    "sensor-414": "Reserved for future use",
    "sensor-415": "Reserved for future use",
    "sensor-416": "Side A Detects Goods Close To",
    "sensor-417": "Side A Detects Goods Far Away",
    "sensor-418": "Side B Detects Goods Close To",
    "sensor-419": "Side B Detects Goods Far Away",
    "sensor-420": "Cargo Hole Detection",
    "sensor-421": "Reserved for future use",
    "sensor-422": "Reserved for future use",
    "sensor-423": "Inspection of Return to Parent Vehicle",
    "sensor-424": "Reserved for future use",
    "sensor-425": "Reserved for future use",
    "sensor-426": "Reserved for future use",
    "sensor-427": "Reserved for future use",
    "sensor-428": "Reserved for future use",
    "sensor-429": "Reserved for future use",
    "sensor-430": "Reserved for future use",
    "sensor-431": "Reserved for future use",
    "sensor-432": "Battery Level",
  };
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
    let tooltip;
    if (sensorElement) {
      if (
        sensorId == "sensor-410" ||
        sensorId == "sensor-411" ||
        sensorId == "sensor-423"
      ) {
        tooltip = document
          .getElementById(`ArrowWrap_${sensorId}`)
          .querySelector(".tooltiptext");
      } else {
        tooltip = sensorElement.querySelector(".tooltiptext");
      }

      if (sensorId == "sensor-432") {
        if (sensorElement) {
          if (isActive) {
            sensorElement.classList.add("activeSensor");
          } else {
            sensorElement.classList.remove("activeSensor");
          }
        }
        continue;
      }
      const description = sensorDescriptions[sensorId];
      const activeText = isActive ? "True" : "False";
      tooltip.innerHTML = `<h5 style="color:white">Id: <span>${sensorId}</span><br>Active: <span>${activeText}</span><br>Description: <span>${description}</h5>`;
    }
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
  const batteryLevelElement = document.getElementById("battery-text");
  if (batteryLevelElement) {
    batteryLevelElement.style.width = `${batteryLevel}%`;
    batteryLevelElement.textContent = `${batteryLevel}%`;
    const description = sensorDescriptions["sensor-432"];

    document.getElementById(
      "tooltiptextBattery"
    ).innerHTML = `<h5>Id: <span>sensor-432</span><br>Battery: <span>${batteryLevel}%</span> <br>Description: <span>${description}<span></h5>`;

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

// // Initial call and also set an interval if the status changes over time
// updateSensorsFromBits();
// setInterval(updateSensorsFromBits, 1000); // Call every second or as needed

// Repeat for other sensors

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
