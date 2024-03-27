document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#settings-form input");
  const saveButton = document.getElementById("save-button");

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      saveButton.classList.add("active");
    });
  });

  saveButton.addEventListener("click", () => {
    // Here you would typically save the settings
    alert("Settings saved!");
    saveButton.classList.remove("active");
  });
});
