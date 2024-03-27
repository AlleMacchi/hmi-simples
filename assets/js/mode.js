document.addEventListener("DOMContentLoaded", function () {
  let currentMode = "MANUAL"; // Use let for variable reassignment

  // Update mode display in the header
  function updateHeaderMode(mode) {
    const labelMode = document
      .getElementById("labelMode")
      .querySelector("span"); // Correctly select the span within #labelMode
    labelMode.textContent = mode;
  }

  // Toggle sidebar and update mode
  const btnMode = document.getElementById("btn_Mode");
  const sidebarMode = document.querySelector(".sidebarMode");

  btnMode.addEventListener("click", function () {
    sidebarMode.classList.toggle("open");
    btnMode.textContent = sidebarMode.classList.contains("open") ? "X" : "Mode";
  });

  const btnManual = document.querySelector(".switch button:first-child");
  const btnAuto = document.querySelector(".switch button:last-child");
  const commandsContainer = document.querySelector(".commands");

  function toggleMode(selectedMode) {
    currentMode = selectedMode; // Update the currentMode
    updateHeaderMode(currentMode); // Update the header mode display

    if (selectedMode === "MANUAL") {
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
  }

  // Event listeners for mode buttons
  btnManual.addEventListener("click", function () {
    toggleMode("MANUAL");
  });
  btnAuto.addEventListener("click", function () {
    toggleMode("AUTO");
  });

  // Initialize the sidebar in MANUAL mode
  toggleMode(currentMode);

  // Button click visual effect
  const commandButtons = document.querySelectorAll(".commands button");

  commandButtons.forEach((button) => {
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
});
