const labelMode = document.getElementById("labelMode").querySelector("span"); // Correctly select the span within #labelMode
const labelState = document.getElementById("labelState").querySelector("span");

document.addEventListener("DOMContentLoaded", function () {
  labelState.textContent = HMI_PLC.ToHMI.Status.Machine;
  labelMode.textContent = HMI_PLC.ToHMI.Status.Mode;
});
