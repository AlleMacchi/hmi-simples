function updateWMSScreen() {
  // Update WMS-to-PLC section
  document.getElementById("wms_plc_id").textContent = WMSToShuttle.Message.Id;
  document.getElementById("wms_plc_task_number").textContent =
    getTaskDescription(WMSToShuttle.Message.TaskNumber);
  document.getElementById("wms_plc_coordinate").textContent =
    WMSToShuttle.Message.Coordinate;
  document.getElementById("wms_plc_echo_status").textContent =
    WMSToShuttle.Message.ECHOStatus;
  document.getElementById("wms_plc_execute").textContent = WMSToShuttle.Message
    .Execute
    ? "Yes"
    : "No";
  document.getElementById("wms_plc_selection").textContent = WMSToShuttle
    .Command.SelManAuto
    ? "Manual"
    : "Auto";
  document.getElementById("wms_plc_start").textContent = WMSToShuttle.Command
    .Start
    ? "Yes"
    : "No";
  document.getElementById("wms_plc_stop").textContent = WMSToShuttle.Command
    .Stop
    ? "Yes"
    : "No";
  document.getElementById("wms_plc_reset").textContent = WMSToShuttle.Command
    .Reset
    ? "Yes"
    : "No";

  // Update PLC-to-WMS section
  document.getElementById("plc_wms_id").textContent = ShuttleToWMS.Message.Id;
  document.getElementById("plc_wms_task_number").textContent =
    getTaskDescription(ShuttleToWMS.Message.TaskNumber);
  document.getElementById("plc_wms_coordinate").textContent =
    ShuttleToWMS.Message.Coordinate;
  document.getElementById("plc_wms_result").textContent = getResultDescription(
    ShuttleToWMS.Message.Result
  );
  document.getElementById("plc_wms_error_code").textContent =
    ShuttleToWMS.Message.ErrorCode.toString();
  if (ShuttleToWMS.Message.ErrorCode !== 0) {
    let errorC = document.getElementById("plc_wms_error_code");
    errorC.style.color = "red";
    errorC.style.fontWeight = "bold";
    errorC.style.fontSize = "24px";
  }

  document.getElementById("plc_wms_task_status").textContent =
    getTaskStatusDescription(ShuttleToWMS.Message.TaskStatus);
  document.getElementById("plc_wms_current_mode").textContent =
    ShuttleToWMS.Status.CurrentMode;
  document.getElementById("plc_wms_current_state").textContent =
    ShuttleToWMS.Status.CurrentState;
  document.getElementById("plc_wms_carrier_status").textContent =
    ShuttleToWMS.Status.Carrier.Status;
  document.getElementById("plc_wms_carrier_position").textContent =
    ShuttleToWMS.Status.Carrier.Position;
  document.getElementById("plc_wms_lifter_status").textContent =
    ShuttleToWMS.Status.Lifter.Status;
  document.getElementById("plc_wms_lifter_position").textContent =
    ShuttleToWMS.Status.Lifter.Position;
}

updateWMSScreen();

// Utility function to get task description
function getTaskDescription(TaskNumber) {
  const descriptions = {
    1: "Pick-up",
    2: "Drop-off",
    3: "Translation",
    60: "Pause",
    61: "Resume",
    63: "Erase",
  };
  return descriptions[TaskNumber] || "Unknown Task";
}

// Utility function to get result description
function getResultDescription(resultCode) {
  const descriptions = {
    0: "Stand-by",
    1: "Accepted",
    99: "Rejected",
  };
  return descriptions[resultCode] || "Unknown Result";
}

// Utility function to get task status description
function getTaskStatusDescription(statusCode) {
  const descriptions = {
    0: "Standby",
    1: "In progress",
    10: "In pause",
    99: "Erase",
  };
  return descriptions[statusCode] || "Unknown Status";
}

const infoIcon = document.getElementById("ErrorInfoIcon");
const errorCodeSpan = document.getElementById("plc_wms_error_code");
const errorDescription = document.getElementById("ErrorDescription");

// Function to get error description
function getErrorDescription(errorCode) {
  const errorDescriptions = {
    0: "No Error",
    90: "Cannot add tasks because the task status is not in standby",
    91: "Task not in run mode or there are no conditions to pause",
    92: "Resume is not possible because there are no paused tasks",
    93: "It is not possible to erase because there are no tasks",
    10: "Incorrect coordinates",
    11: "Task does not exist",
    12: "Store does not exist",
    13: "Layer does not exist",
    14: "Position does not exist",
    15: "Pick up not possible because I have a pallet on board",
    16: "Drop off not possible because I don't have a pallet on board",
    17: "Translation not possible because I don't have the baby shuttle on board",
    18: "Translation not possible because the coordinate column is different from that of the shuttle",
  };
  return errorDescriptions[errorCode] || "Unknown error";
}

// Show error description on hover
infoIcon.addEventListener("mouseenter", function () {
  const errorCode = parseInt(errorCodeSpan.textContent);
  errorDescription.textContent = getErrorDescription(errorCode);
  errorDescription.style.display = "flex";
});

infoIcon.addEventListener("mouseleave", function () {
  errorDescription.style.display = "none";
});

// =============================================================================

//       ERR_CODE         |       DESCRIPTION
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             90          |           Cannot add tasks because the task status is not in standby
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             91          |           Task not in run mode or there are no conditions to pause
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             92          |           Resume is not possible because there are no paused tasks
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             93          |           It is not possible to erase because there are no tasks
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             10          |           Incorrect coordinates
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             11          |           Task does not exist
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             12          |           Store does not exist
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             13          |           Layer does not exist
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             14          |           Position does not exist
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             15          |           Pick up not possible because I have a pallet on board
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             16          |           Drop off not possible because I don't have a pallet on board
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             17          |           Translation not possible because I don't have the baby shuttle on board
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             18          |           Translation not possible because the coordinate column is different from that of the shuttle
//       -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task List
// Pick-up : 1
// Drop-off : 2
// Translation: 3
// Pause: 60
// Resume: 61
// Erase: 63

// Result Code
// Stand-by: 0
// Accepted: 1
// Rejected: 99

// Task Status
// Standby: 0
// in progress: 1
// in pause: 10
// erase: 99

// =============================================================================
