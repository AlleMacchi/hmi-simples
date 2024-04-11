// Update mode display in the header
// function updateHeaderMode(mode) {
//   labelMode.textContent = mode;
// }

// Toggle sidebar and update mode
const btnMode = document.getElementById("btn_Mode");
const sidebarMode = document.querySelector(".sidebarMode");

function toggleSidebar(open) {
  if (open) {
    sidebarMode.classList.add("open");
  } else {
    sidebarMode.classList.remove("open");
  }
}

btnMode.addEventListener("click", function () {
  // Toggle sidebar on mode button click
  const isOpen = sidebarMode.classList.contains("open");
  toggleSidebar(!isOpen);

  btnMode.textContent = isOpen ? "MODE" : "X";
});

const btnManual = document.querySelector(".switch button:first-child");
const btnAuto = document.querySelector(".switch button:last-child");
const commandsContainer = document.querySelector(".commands");

function toggleMode(selectedMode) {
  // HMI_PLC.FromHMI.Command.SelManAuto = selectedMode; // Update the currentMode
  sendDataToUrl(
    "IOWriteManAuto.html",
    `"HMI_PLC".FromHMI.Command.SelManAuto`,
    selectedMode
  );

  if (selectedMode === 0) {
    btnManual.classList.add("button-active");
    btnAuto.classList.remove("button-active");
    // Enable command buttons
    Array.from(commandsContainer.querySelectorAll("button")).forEach(
      (button) => {
        button.classList.remove("disabled");
      }
    );
  } else {
    btnAuto.classList.add("button-active");
    btnManual.classList.remove("button-active");
    // Disable command buttons
    Array.from(commandsContainer.querySelectorAll("button")).forEach(
      (button) => {
        button.classList.add("disabled");
      }
    );
  }
  // checkStepsControls();
}

// Event listeners for mode buttons
btnManual.addEventListener("click", function () {
  toggleMode(0);
});
btnAuto.addEventListener("click", function () {
  toggleMode(1);
});

function StringTovariableMode(currentMode) {
  console.log(currentMode);
  if (currentMode === "Manual") {
    return 0;
  } else {
    return 1;
  }
}

// function updateStatusModeFromstring(){
//   StringTovariableMode(decodeHTMLEntity(gData.StatusMode))
// }
// // Initialize the sidebar in MANUAL mode
// toggleMode(updateStatusModeFromstring());

// Button click visual effect
const commandButtons = document.querySelectorAll(".commands button");
const roundButtons = document.querySelectorAll("#roundCommands button");

// Function to handle start/stop/reset commands

// Event listeners for round command buttons
document
  .getElementById("roundCommands")
  .querySelectorAll("button")
  .forEach((button, index) => {
    const commands = ["Start", "Stop", "Reset"];
    button.addEventListener("click", function () {
      sendDataToUrl(
        `IOWrite${commands[index]}.html`,
        `"HMI_PLC".FromHMI.Command.${commands[index]}`,
        true
      );
      console.log(`Clicked ${commands[index]}`);
      // setTimeout(() => handleCommand(`${commands[index]}`, false), 500); // Example delay to rollback
    });
    // Adding "mousedown" event to simulate button press
    button.addEventListener("mousedown", function () {
      button.classList.add("clicked");
      sendDataToUrl(
        `IOWrite${commands[index]}.html`,
        `"HMI_PLC".FromHMI.Command.${commands[index]}`,
        true
      );
    });

    button.addEventListener("mouseup", function () {
      sendDataToUrl(
        `IOWrite${commands[index]}.html`,
        `"HMI_PLC".FromHMI.Command.${commands[index]}`,
        false
      );
      setTimeout(() => button.classList.remove("clicked"), 150);
    });

    button.addEventListener("mouseleave", function () {
      sendDataToUrl(
        `IOWrite${commands[index]}.html`,
        `"HMI_PLC".FromHMI.Command.${commands[index]}`,
        false
      );
      setTimeout(() => button.classList.remove("clicked"), 150);
    });
  });


  function sendDataToUrl(url, name, val) {
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

           

// BUTTON FORWARD
$("#btnUpFwdOn").mousedown(function(){
  // url="IOWriteForward.html";
  // name='"HMI_PLC".FromHMI.Command.UpFwdOn';
  // val=1;
  // sdata=escape(name)+'='+val;
  // $.post(url,sdata,function(result){});
  var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
  sendDataToUrl("IOWriteForward.html", name, 1);
});

$("#btnUpFwdOn").mouseup(function(){
  url="IOWriteForward.html";
  name='"HMI_PLC".FromHMI.Command.UpFwdOn';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON BACKWARD
$("#btnDownBwdOff").mousedown(function(){
  url="IOWriteBackward.html";
  name='"HMI_PLC".FromHMI.Command.DownBwdOff';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnDownBwdOff").mouseup(function(){
  url="IOWriteBackward.html";
  name='"HMI_PLC".FromHMI.Command.DownBwdOff';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});


// // Implement continuous hold for UP/FWD/ON and DOWN/BWD/OFF buttons
// const upFwdOnButton = document.querySelector(".commands button:first-child");
// const downBwdOffButton = document.querySelector(".commands button:last-child");

// let holdInterval;

// // Helper function to prevent default behavior for touch events
// function preventDefaultTouch(e) {
//   e.preventDefault();
// }

// commandButtons.forEach((button) => {
//   button.addEventListener("mousedown", function () {
//     if (button.textContent == "upFwdOn") {
//       console.log(`Holding upFwdOn`);
//       holdInterval = setInterval(() => {
//         var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
//         sendDataToUrl("IOWriteForward.html", name, 1);
//       }, 100); // Repeat every 100ms as an example
//     } else if (button.textContent == "downBwdOff") {
//       console.log(`Holding downBwdOff`);
//       holdInterval = setInterval(() => {
//         var name = `"HMI_PLC".FromHMI.Command.DownBwdOff`;
//         sendDataToUrl("IOWriteBackward.html", name, 1);
//       }, 100); // Repeat every 100ms as an example
//     }
//     button.classList.add("clicked");
//   });

//   button.addEventListener("mouseup", function () {
//     if (button.textContent == "upFwdOn") {
//       console.log(`Holding upFwdOn`);
//       clearInterval(holdInterval);
//       var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
//       sendDataToUrl("IOWriteForward.html", name, 0);
//       // Repeat every 100ms as an example
//     } else if (button.textContent == "downBwdOff") {
//       clearInterval(holdInterval);
//       var name = `"HMI_PLC".FromHMI.Command.DownBwdOff`;
//       sendDataToUrl("IOWriteBackward.html", name, 0);
//       // Repeat every 100ms as an example
//     }
//     setTimeout(() => button.classList.remove("clicked"), 150);
//   });

//   button.addEventListener("mouseleave", function () {
//     if (button.textContent == "upFwdOn") {
//       console.log(`Holding upFwdOn`);
//       clearInterval(holdInterval);
//       var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
//       sendDataToUrl("IOWriteForward.html", name, 0);
//     } else if (button.textContent == "downBwdOff") {
//       clearInterval(holdInterval);
//       var name = `"HMI_PLC".FromHMI.Command.DownBwdOff`;
//       sendDataToUrl("IOWriteBackward.html", name, 0);
//     }
//     setTimeout(() => button.classList.remove("clicked"), 150);
//   });
// });

// // Attach touch events for mobile/tablet
// upFwdOnButton.addEventListener("touchstart", (e) => {
//   preventDefaultTouch(e);
//   upFwdOnButton.classList.add("clicked");
//   console.log(`Holding upFwdOn`);
//   holdInterval = setInterval(() => {
//     var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
//     sendDataToUrl("IOWriteForward.html", name, 1);
//   }, 100); // Repeat every 100ms as an example
// });
// upFwdOnButton.addEventListener("touchend", () => {
//   setTimeout(() => upFwdOnButton.classList.remove("clicked"), 150);
//   clearInterval(holdInterval);
//   var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
//   sendDataToUrl("IOWriteForward.html", name, 0);
// });

// downBwdOffButton.addEventListener("touchstart", (e) => {
//   preventDefaultTouch(e);
//   downBwdOffButton.classList.add("clicked");
//   console.log(`Holding downBwdOff`);
//   holdInterval = setInterval(() => {
//     var name = `"HMI_PLC".FromHMI.Command.DownBwdOff`;
//     sendDataToUrl("IOWriteBackward.html", name, 1);
//   }, 100); // Repeat every 100ms as an example
// });
// downBwdOffButton.addEventListener("touchend", () => {
//   setTimeout(() => downBwdOffButton.classList.remove("clicked"), 150);
//   clearInterval(holdInterval);
//   var name = `"HMI_PLC".FromHMI.Command.DownBwdOff`;
//   sendDataToUrl("IOWriteBackward.html", name, 0);
// });

// Elements for Carrier speed
var carrierSpeedInput = document.getElementById("carrier-speed-input");
var setCarrierSpeedButton = document.getElementById("set-carrier-speed");
var carrierCurrentSpeedLabel = document.getElementById("carrier-current-speed");

// Elements for Lifter speed
var lifterSpeedInput = document.getElementById("lifter-speed-input");
var setLifterSpeedButton = document.getElementById("set-lifter-speed");
var lifterCurrentSpeedLabel = document.getElementById("lifter-current-speed");

// function updateSpeedLabels() {
//   carrierCurrentSpeedLabel.textContent =
//     "Current Speed: " + gData.CarrierActualSpeed;
//   lifterCurrentSpeedLabel.textContent =
//     "Current Speed: " + gData.LifterActualSpeed;
// }

// // Event listener for setting Carrier speed
// setCarrierSpeedButton.addEventListener("click", function () {
//   var speed = carrierSpeedInput.value;
//   if (
//     speed >= 0 &&
//     speed <= 100 &&
//     speed != gData.CarrierActualSpeed &&
//     speed != ""
//   ) {
//     // Mock setting the Carrier speed in the PLC
//     console.log("Setting Carrier speed to:", speed); // For debugging
//     sendDataToUrl(
//       "IOWriteCarrierSpeed.html",
//       `"HMI_PLC".FromHMI.Setting.Carrier.Speed`,
//       speed
//     );
//     // HMI_PLC.FromHMI.Setting.Carrier.Speed = speed; // Uncomment for actual use
//     carrierCurrentSpeedLabel.textContent = "Current Speed: " + speed;
//   } else {
//     console.log("Please enter a speed value between 0 and 100 for Carrier.");
//   }
// });

// // Event listener for setting Lifter speed
// setLifterSpeedButton.addEventListener("click", function () {
//   var speed = lifterSpeedInput.value;
//   if (speed >= 0 && speed <= 100) {
//     // Mock setting the Lifter speed in the PLC
//     console.log("Setting Lifter speed to:", speed); // For debugging
//     sendDataToUrl(
//       "IOWriteLifterSpeed.html",
//       `"HMI_PLC".FromHMI.Setting.Lifter.Speed`,
//       speed
//     );
//     lifterCurrentSpeedLabel.textContent =
//       "Current Speed: " + gData.LifterActualSpeed;
//   } else {
//     console.log("Please enter a speed value between 0 and 100 for Lifter.");
//   }
// });

// Mock updating the current speed labels periodically
// setInterval(function () {
//   // These would be replaced with actual reads from the PLC
//   var currentCarrierSpeed = /* HMI_PLC.ToHMI.Status.Carrier.actSpeed */ "50"; // Placeholder
//   var currentLifterSpeed = /* HMI_PLC.ToHMI.Status.Lifter.actSpeed */ "20"; // Placeholder

//   carrierCurrentSpeedLabel.textContent = "Current: " + currentCarrierSpeed;
//   lifterCurrentSpeedLabel.textContent = "Current: " + currentLifterSpeed;
// }, 1000); // Update every second

// ============================================================
// COMMAND BUTTONS
// ============================================================

// function sendDataToUrl(url, name, val) {
//   var sdata = encodeURIComponent(name) + '=' + val;

//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", url, true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//           // Request finished, do something with the response if needed
//       }
//   };
//   xhr.send(sdata);
// }

// ============================================================
