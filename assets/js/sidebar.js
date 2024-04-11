// Toggle sidebar and update mode
const btnMode = document.getElementById("btn_Mode");
const sidebarMode = document.querySelector(".sidebarMode");
const btnManual = document.querySelector(".switch button:first-child");
const btnAuto = document.querySelector(".switch button:last-child");
const commandsContainer = document.querySelector(".commands");
// Button click visual effect
const commandButtons = document.querySelectorAll(".commands button");
const roundButtons = document.querySelectorAll("#roundCommands button");

// Function to handle start/stop/reset commands
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");
const upFwdOnButton = document.getElementById("btnUpFwdOn");
const downBwdOffButton = document.getElementById("btnDownBwdOff");
function preventDefaultTouch(e) {
  e.preventDefault();
}

// Elements for Carrier speed
var carrierSpeedInput = document.getElementById("carrier-speed-input");
var setCarrierSpeedButton = document.getElementById("set-carrier-speed");
var carrierCurrentSpeedLabel = document.getElementById("carrier-current-speed");

// Elements for Lifter speed
var lifterSpeedInput = document.getElementById("lifter-speed-input");
var setLifterSpeedButton = document.getElementById("set-lifter-speed");
var lifterCurrentSpeedLabel = document.getElementById("lifter-current-speed");

// ===================================
// Update Read
// ===================================

function updateSpeedLabels() {
  carrierCurrentSpeedLabel.textContent = "Current Speed: " + Array_43;
  // lifterCurrentSpeedLabel.textContent =
  //   "Current Speed: " + gData.LifterActualSpeed;
}

setInterval(updateSpeedLabels, 1000);

// ===================================
// Toggle sidebar on mode button click
// ===================================

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

// ===================================
// Toggle Man/Auto
// ===================================

// Event listeners for mode buttons
btnManual.addEventListener("click", function () {
  sendDataToUrl(
    "IOWriteManAuto.html",
    `"HMI_PLC".FromHMI.Command.SelManAuto`,
    0
  );

  btnManual.classList.add("button-active");
  btnAuto.classList.remove("button-active");
  // Enable command buttons
  // Array.from(commandsContainer.querySelectorAll("button")).forEach((button) => {
  //   button.classList.remove("disabled");
  // });
});

btnAuto.addEventListener("click", function () {
  sendDataToUrl(
    "IOWriteManAuto.html",
    `"HMI_PLC".FromHMI.Command.SelManAuto`,
    0
  );

  btnAuto.classList.add("button-active");
  btnManual.classList.remove("button-active");
  // Disable command buttons
  // Array.from(commandsContainer.querySelectorAll("button")).forEach((button) => {
  //   button.classList.add("disabled");
  // });
});

// ===================================
// Command buttons
// ===================================

btnStart.addEventListener("click", function () {
  btnStart.classList.add("clicked");
  sendDataToUrl(`IOWriteStart.html`, `"HMI_PLC".FromHMI.Command.Start`, 1);
});
// Adding "mousedown" event to simulate button press
btnStop.addEventListener("mousedown", function () {
  btnStop.classList.add("clicked");
  sendDataToUrl(`IOWriteStop.html`, `"HMI_PLC".FromHMI.Command.Stop`, 1);
});

btnReset.addEventListener("mousedown", function () {
  btnReset.classList.add("clicked");
  sendDataToUrl(`IOWriteRest.html`, `"HMI_PLC".FromHMI.Command.Rest`, 1);
});

btnStart.addEventListener("mouseup", function () {
  sendDataToUrl(`IOWriteStart.html`, `"HMI_PLC".FromHMI.Command.Start`, 0);
  setTimeout(() => btnStart.classList.remove("clicked"), 150);
});

btnStop.addEventListener("mouseup", function () {
  sendDataToUrl(`IOWriteStop.html`, `"HMI_PLC".FromHMI.Command.Stop`, 0);
  setTimeout(() => btnStop.classList.remove("clicked"), 150);
});

btnReset.addEventListener("mouseup", function () {
  sendDataToUrl(`IOWriteReset.html`, `"HMI_PLC".FromHMI.Command.Reset`, 0);
  setTimeout(() => btnStart.classList.remove("clicked"), 150);
});

// BUTTON FORWARD
$("#btnUpFwdOn").mousedown(function () {
  var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
  sendDataToUrl("IOWriteForward.html", name, 1);
});

$("#btnUpFwdOn").mouseup(function () {
  var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
  sendDataToUrl("IOWriteForward.html", name, 0);
});

// BUTTON BACKWARD
$("#btnDownBwdOff").mousedown(function () {
  var name = '"HMI_PLC".FromHMI.Command.DownBwdOff';
  sendDataToUrl("IOWriteForward.html", name, 1);
});

$("#btnDownBwdOff").mouseup(function () {
  var name = '"HMI_PLC".FromHMI.Command.DownBwdOff';
  sendDataToUrl("IOWriteForward.html", name, 0);
});

// // Attach touch events for mobile/tablet
upFwdOnButton.addEventListener("touchstart", (e) => {
  preventDefaultTouch(e);
  upFwdOnButton.classList.add("clicked");
  console.log(`Holding upFwdOn`);
  holdInterval = setInterval(() => {
    var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
    sendDataToUrl("IOWriteForward.html", name, 1);
  }, 100); // Repeat every 100ms as an example
});
upFwdOnButton.addEventListener("touchend", () => {
  setTimeout(() => upFwdOnButton.classList.remove("clicked"), 150);
  clearInterval(holdInterval);
  var name = `"HMI_PLC".FromHMI.Command.UpFwdOn`;
  sendDataToUrl("IOWriteForward.html", name, 0);
});

downBwdOffButton.addEventListener("touchstart", (e) => {
  preventDefaultTouch(e);
  downBwdOffButton.classList.add("clicked");
  console.log(`Holding downBwdOff`);
  holdInterval = setInterval(() => {
    var name = `"HMI_PLC".FromHMI.Command.DownBwdOff`;
    sendDataToUrl("IOWriteBackward.html", name, 1);
  }, 100); // Repeat every 100ms as an example
});
downBwdOffButton.addEventListener("touchend", () => {
  setTimeout(() => downBwdOffButton.classList.remove("clicked"), 150);
  clearInterval(holdInterval);
  var name = `"HMI_PLC".FromHMI.Command.DownBwdOff`;
  sendDataToUrl("IOWriteBackward.html", name, 0);
});

// Event listener for setting Carrier speed
setCarrierSpeedButton.addEventListener("click", function () {
  var speed = carrierSpeedInput.value;
  // if (
  //   speed >= 0 &&
  //   speed <= 100 &&
  //   speed != gData.CarrierActualSpeed &&
  //   speed != ""
  // ) {
  // Mock setting the Carrier speed in the PLC
  console.log("Setting Carrier speed to:", speed); // For debugging
  sendDataToUrl(
    "IOWriteCarrierSpeed.html",
    `"HMI_PLC".FromHMI.Setting.Carrier.Speed`,
    speed
  );
  // HMI_PLC.FromHMI.Setting.Carrier.Speed = speed; // Uncomment for actual use
  // carrierCurrentSpeedLabel.textContent = "Current Speed: " + speed;
  // } else {
  //   console.log("Please enter a speed value between 0 and 100 for Carrier.");
  // }
});

// Event listener for setting Lifter speed
setLifterSpeedButton.addEventListener("click", function () {
  var speed = lifterSpeedInput.value;
  // if (speed >= 0 && speed <= 100) {
  //   // Mock setting the Lifter speed in the PLC
  console.log("Setting Lifter speed to:", speed); // For debugging
  sendDataToUrl(
    "IOWriteLifterSpeed.html",
    `"HMI_PLC".FromHMI.Setting.Lifter.Speed`,
    speed
  );
  lifterCurrentSpeedLabel.textContent = "Current Speed: " + speed; //TODO This should be current Actual speed When you do Readign
  // } else {
  //   console.log("Please enter a speed value between 0 and 100 for Lifter.");
  // }
});
