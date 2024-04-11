const labelMode = document.getElementById("labelMode").querySelector("span"); // Correctly select the span within #labelMode
const labelState = document.getElementById("labelState").querySelector("span");

// =====================================================================

function updateHeaderStatus() {
  labelState.textContent = Array_1;
  labelMode.textContent = Array_2;
}

setInterval(updateHeaderStatus, 1000);

// const states = {
//   0: "Undefined",
//   1: "Clearing",
//   2: "Stopped",
//   3: "Starting",
//   4: "Idle",
//   5: "Suspended",
//   6: "Execute",
//   7: "Stopping",
//   8: "Aborting",
//   9: "Aborted",
//   10: "Holding",
//   11: "Held",
//   12: "Unholding",
//   13: "Suspending",
//   14: "Unsuspending",
//   15: "Resetting",
//   16: "Completing",
//   17: "Complete",
//   // ... add more states as needed
// };

// labelState.textContent = readBits(Array_2).forEach((bit, index) => {
//   // console.log(bit, index);
//   if (bit == 1) {
//     console.log(states[index]);
//   }
//   return states[index];
// });
// labelMode.textContent = readBits(Array_2)[2] ? "Auto" : "Manual";
