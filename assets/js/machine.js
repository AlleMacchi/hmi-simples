// 404   423  406        410
// 408   432  409        411
// 405        407

//         17

// Get the select element
const selection = document.getElementById("standard-select");

// Add event listener for 'change' event
selection.addEventListener("change", function (event) {
  // Reset selections to false
  HMI_PLC.FromHMI.Selection.Carrier.enable = false;
  HMI_PLC.FromHMI.Selection.Lifter.enable = false;

  // Set the corresponding selection to true based on the dropdown choice
  if (event.target.value === "Wheels") {
    HMI_PLC.FromHMI.Selection.Carrier.enable = true;
  } else if (event.target.value === "Lifter") {
    HMI_PLC.FromHMI.Selection.Lifter.enable = true;
  }else{
    HMI_PLC.FromHMI.Selection.Carrier.enable = false;
    HMI_PLC.FromHMI.Selection.Lifter.enable = false;
  }

  // Log or handle the updated HMI_PLC object as needed
  console.log("Carrier enabled: ", HMI_PLC.FromHMI.Selection.Carrier.enable);
  console.log("Lifter enabled: ", HMI_PLC.FromHMI.Selection.Lifter.enable);
});

function intToBits(int) {
  const bits = [];
  for (let i = 0; i < 32; i++) {
    bits.push(Boolean(int & (1 << i)));
  }
  return bits;
}

function updateSensorsFromBits() {
  // Mapping from sensor IDs to their respective bits in the ShuttleToWMS object
  const sensorMapping = {
    "sensor-404": ShuttleToWMS.Digital_Input.Module0[4],
    "sensor-405": ShuttleToWMS.Digital_Input.Module0[5],
    "sensor-406": ShuttleToWMS.Digital_Input.Module0[6],
    "sensor-407": ShuttleToWMS.Digital_Input.Module0[7],
    "sensor-408": ShuttleToWMS.Digital_Input.Module0[8],
    "sensor-409": ShuttleToWMS.Digital_Input.Module0[9],
    "sensor-410": ShuttleToWMS.Digital_Input.Module0[10],
    "sensor-411": ShuttleToWMS.Digital_Input.Module0[11],
    "sensor-416": ShuttleToWMS.Digital_Input.Module1[0],
    "sensor-417": ShuttleToWMS.Digital_Input.Module1[1],
    "sensor-418": ShuttleToWMS.Digital_Input.Module1[2],
    "sensor-419": ShuttleToWMS.Digital_Input.Module1[3],
    "sensor-420": ShuttleToWMS.Digital_Input.Module1[4],
    "sensor-423": ShuttleToWMS.Digital_Input.Module1[7],
    // The battery level isn't a binary sensor, so we'll handle it separately
  };

  console.log(sensorMapping);

  // Iterate over the sensorMapping and update the classes accordingly
  for (const [sensorId, isActive] of Object.entries(sensorMapping)) {
    const sensorElement = document.getElementById(sensorId);
    if (sensorElement) {
      if (isActive) {
        sensorElement.classList.add("active");
      } else {
        sensorElement.classList.remove("active");
      }
    }
  }

  // Update the battery level indicator
  const batteryLevel = ShuttleToWMS.Analog_Input.Module_0.Channel_0;
  const batteryLevelElement = document.getElementById("battery-level");
  if (batteryLevelElement) {
    batteryLevelElement.style.width = `${batteryLevel}%`;
    batteryLevelElement.textContent = `${batteryLevel}%`;
    // Add the 'low-battery' class if the battery level is below a threshold, e.g., 20%
    if (batteryLevel <= 20) {
      batteryLevelElement.classList.add("low-battery");
    } else {
      batteryLevelElement.classList.remove("low-battery");
    }
  }
}

// This function should be called whenever the ShuttleToWMS object is updated with new sensor data

updateSensorsFromBits();

function updatePosition(positionInMillimeters) {
  document.getElementById(
    "position-value"
  ).textContent = `${positionInMillimeters} mm`;
}

updatePosition(HMI_PLC.ToHMI.Status.Carrier.actPosition_mm);

// =================================================================================================

document
  .getElementById("standard-select")
  .addEventListener("change", function () {
    var selectedOption = this.value;
    if (selectedOption === "Wheels") {
      selWheelsON();
      selLifterOFF();
    }
    if (selectedOption === "Lifter") {
      selWheelsOFF();
      selLifterON();
    }
  });

function selLifterON() {
  event.preventDefault();
  var url = "IOWrite.html";
  var name = '"HMI_PLC".FromHMI.Command.selLifterMovements';
  var val = 1;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
}

function selLifterOFF() {
  event.preventDefault();
  var url = "IOWrite.html";
  var name = '"HMI_PLC".FromHMI.Command.selLifterMovements';
  var val = 0;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
}

function selWheelsON() {
  event.preventDefault();
  var url = "IOWrite.html";
  var name = '"HMI_PLC".FromHMI.Command.selCarrierMovements';
  var val = 1;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
}

function selWheelsOFF() {
  event.preventDefault();
  var url = "IOWrite.html";
  var name = '"HMI_PLC".FromHMI.Command.selCarrierMovements';
  var val = 0;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
}
