let currentMode = HMI_PLC.ToHMI.Status.Mode; // Use let for variable reassignment

// Update mode display in the header
function updateHeaderMode(mode) {
  labelMode.textContent = mode;
}

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

// btnMode.addEventListener("click", function () {
//   sidebarMode.classList.toggle("open");
//   btnMode.textContent = sidebarMode.classList.contains("open") ? "X" : "Mode";
// });

btnMode.addEventListener("click", function () {
  // Toggle sidebar on mode button click
  const isOpen = sidebarMode.classList.contains("open");
  toggleSidebar(!isOpen);
  // if (!isOpen) {
  //   // Update the current mode when opening the sidebar
  //   btnMode.style.width = "5%";
  // }
  btnMode.textContent = isOpen ? "MODE" : "X";
});

const btnManual = document.querySelector(".switch button:first-child");
const btnAuto = document.querySelector(".switch button:last-child");
const commandsContainer = document.querySelector(".commands");

function toggleMode(selectedMode) {
  HMI_PLC.FromHMI.Command.SelManAuto = selectedMode; // Update the currentMode

  currentMode = selectedMode === 0 ? "MANUAL" : "AUTO";
  updateHeaderMode(currentMode); // Update the header mode display

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

  checkControls();
  checkStepsControls();
  // console.log(`Mode: ${currentMode}`);   Man auto si to write checks are on actual Mode so to consider delay or implement check SelManAuto
  // console.log(HMI_PLC.FromHMI.Command.SelManAuto);
}

// Event listeners for mode buttons
btnManual.addEventListener("click", function () {
  toggleMode(0);
});
btnAuto.addEventListener("click", function () {
  toggleMode(1);
});

// Initialize the sidebar in MANUAL mode
toggleMode(currentMode);

// Button click visual effect
const commandButtons = document.querySelectorAll(".commands button");
const roundButtons = document.querySelectorAll("#roundCommands button");

// Function to handle start/stop/reset commands
function handleCommand(command, isActive) {
  HMI_PLC.FromHMI.Command[command] = isActive;
  // Additional command handling can go here
  console.log(`Command: ${command} is ${isActive ? "active" : "inactive"}`);
}

// Event listeners for round command buttons
document
  .getElementById("roundCommands")
  .querySelectorAll("button")
  .forEach((button, index) => {
    const commands = ["Start", "Stop", "Reset"];
    button.addEventListener("click", function () {
      handleCommand(`Command.${commands[index]}`, true);
      // setTimeout(() => handleCommand(`Command.${commands[index]}`, false), 500); // Example delay to rollback
    });
    // Adding "mousedown" event to simulate button press
    button.addEventListener("mousedown", function () {
      button.classList.add("clicked");
    });

    button.addEventListener("mouseup", function () {
      setTimeout(() => button.classList.remove("clicked"), 150);
    });

    button.addEventListener("mouseleave", function () {
      setTimeout(() => button.classList.remove("clicked"), 150);
    });
  });

// Implement continuous hold for UP/FWD/ON and DOWN/BWD/OFF buttons
const upFwdOnButton = document.querySelector(".commands button:first-child");
const downBwdOffButton = document.querySelector(".commands button:last-child");

let holdInterval;

function startHold(command) {
  // Start interval to continuously set command to true
  console.log(`Holding ${command}`);
  holdInterval = setInterval(() => {
    HMI_PLC.FromHMI.Command[command] = true;
  }, 100); // Repeat every 100ms as an example
}

function stopHold(command) {
  console.log(`Releasing ${command}`);
  // Clear interval and set command to false
  clearInterval(holdInterval);
  HMI_PLC.FromHMI.Command[command] = false;
}

// Helper function to prevent default behavior for touch events
function preventDefaultTouch(e) {
  e.preventDefault();
}

commandButtons.forEach((button) => {
  button.addEventListener("mousedown", function () {
    startHold("UpFwdOn");
    button.classList.add("clicked");
  });

  button.addEventListener("mouseup", function () {
    stopHold("UpFwdOn");
    setTimeout(() => button.classList.remove("clicked"), 150);
  });

  button.addEventListener("mouseleave", function () {
    stopHold("UpFwdOn");
    setTimeout(() => button.classList.remove("clicked"), 150);
  });
});

// Attach touch events for mobile/tablet
upFwdOnButton.addEventListener("touchstart", (e) => {
  preventDefaultTouch(e);
  upFwdOnButton.classList.add("clicked");
  startHold("UpFwdOn");
});
upFwdOnButton.addEventListener("touchend", () => {
  setTimeout(() => upFwdOnButton.classList.remove("clicked"), 150);
  stopHold("UpFwdOn");
});

downBwdOffButton.addEventListener("touchstart", (e) => {
  preventDefaultTouch(e);
  downBwdOffButton.classList.add("clicked");
  startHold("DownBwdOff");
});
downBwdOffButton.addEventListener("touchend", () => {
  setTimeout(() => downBwdOffButton.classList.remove("clicked"), 150);
  stopHold("DownBwdOff");
});
