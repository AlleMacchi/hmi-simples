document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#settings-form input");
  const saveButton = document.querySelector("#save-button"); // Adjusted for ID selector
  const savedMessage = document.querySelector(".saved"); // Adjusted for ID selector


  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      saveButton.classList.add("active");
    });
  });

  saveButton.addEventListener("click", () => {
    saveButton.classList.remove("active");
    // Show the message
    savedMessage.style.display = "flex";

    // Hide the message after 10 seconds
    setTimeout(() => {
      savedMessage.style.display = "none";
    }, 3000);
  });

  // Adding "mousedown" event to simulate button press
  saveButton.addEventListener("mousedown", () => {
    saveButton.classList.add("clicked");
  });

  // Removing "clicked" class shortly after "mouseup" to simulate the visual effect
  saveButton.addEventListener("mouseup", () => {
    setTimeout(() => saveButton.classList.remove("clicked"), 150);
  });

  // Also remove "clicked" class on "mouseleave" to ensure the effect is cleared if the mouse leaves the button before mouseup
  saveButton.addEventListener("mouseleave", () => {
    setTimeout(() => saveButton.classList.remove("clicked"), 150);
  });
});
