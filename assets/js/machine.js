let optionsSelect = document.getElementById("standard-select"); // Correctly include both options
let manualSwitchButton = document.getElementById("manualSwitchButton");

optionsSelect.addEventListener("change", () => {
  if (optionsSelect.value !== "None") {
    manualSwitchButton.classList.add("active");
  } else {
    manualSwitchButton.classList.remove("active"); // Optionally remove the class if "None" is selected again
  }
});

const sidebarMode = document.querySelector(".sidebarMode");
const btnSwitchToManual = document.querySelector(
  ".switchMode button:nth-child(1)"
); // Assuming this is the "Switch To Manual Mode" button
const btnSwitchToAuto = document.querySelector(
  ".switchMode button:nth-child(2)"
); // Assuming this is the "Switch To Auto Mode" button
const btnMode = document.getElementById("btn_Mode"); // Button in the header to toggle sidebar

// Sidebar manual and auto mode buttons
const manualButton = sidebarMode.querySelector(".switch button:nth-child(1)");
const autoButton = sidebarMode.querySelector(".switch button:nth-child(2)");

btnSwitchToManual.addEventListener("click", function () {
  toggleSidebar(true); // Open sidebar
  switchToManual();
  btnMode.textContent = "X"; // Change mode button to 'X'
  manualSwitchButton.classList.remove("active"); // Remove the class if it was added
});

btnSwitchToAuto.addEventListener("click", function () {
  toggleSidebar(false); // Close sidebar
  switchToAuto();
  btnMode.textContent = "Mode"; // Reset mode button text
  manualSwitchButton.classList.remove("active");
  optionsSelect.value = optionsSelect.options[0].value; // Reset the select value
});

function toggleSidebar(open) {
  if (open) {
    sidebarMode.classList.add("open");
  } else {
    sidebarMode.classList.remove("open");
  }
}

function switchToManual() {
  // Programmatically click the manual button in the sidebar
  manualButton.click();
}

function switchToAuto() {
  // Programmatically click the auto button in the sidebar
  autoButton.click();
}

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
