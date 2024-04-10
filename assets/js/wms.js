function updateWMSScreen() {
  // Update WMS-to-PLC section
  document.getElementById("wms_plc_id").textContent = gData.WMStoShuttle_Id;
  document.getElementById("wms_plc_task_number").textContent =
    getTaskDescription(gData.WMStoShuttle_TaskNumber);
  document.getElementById("wms_plc_coordinate").textContent = decodeHTMLEntity(
    gData.WMStoShuttle_Coordinate
  );
  document.getElementById("wms_plc_echo_status").textContent =
    gData.WMStoShuttle_ECHOStatus;
  document.getElementById("wms_plc_execute").textContent =
    gData.WMStoShuttle_Execute ? "True" : "False";
  document.getElementById("wms_plc_selection").textContent =
    gData.WMStoShuttle_SelManAuto ? "1: AUTO" : "0: MANUAL";
  document.getElementById("wms_plc_start").textContent =
    gData.WMStoShuttle_Start ? "True" : "False";
  document.getElementById("wms_plc_stop").textContent = gData.WMStoShuttle_Stop
    ? "True"
    : "False";
  document.getElementById("wms_plc_reset").textContent =
    gData.WMStoShuttle_Reset ? "True" : "False";

  // Update PLC-to-WMS section
  document.getElementById("plc_wms_id").textContent = gData.ShuttleToWMS_Id;
  document.getElementById("plc_wms_task_number").textContent =
    getTaskDescription(gData.ShuttleToWMS_TaskNumber);
  document.getElementById("plc_wms_coordinate").textContent = decodeHTMLEntity(
    gData.ShuttleToWMS_Coordinate
  );
  document.getElementById("plc_wms_result").textContent = getResultDescription(
    gData.ShuttleToWMS_Result
  );
  document.getElementById("plc_wms_error_code").textContent =
    gData.ShuttleToWMS_ErrorCode;

  if (gData.ShuttleToWMS_ErrorCode !== 0) {
    document.getElementById("ErrorInfoIcon").style.display = "block";
    document.getElementById("plc_wms_error_code").style.color = "red";
    document.getElementById("plc_wms_error_code").style.fontWeight = "bold";
    document.getElementById("plc_wms_error_code").style.fontSize = "24px";
  }

  document.getElementById("plc_wms_task_status").textContent =
    getTaskStatusDescription(gData.ShuttleToWMS_TaskStatus);
  document.getElementById("plc_wms_current_mode").textContent =
    gData.ShuttleToWMS_CurrentMode;
  document.getElementById("plc_wms_current_state").textContent =
    gData.ShuttleToWMS_CurrentState;
  document.getElementById("plc_wms_carrier_status").textContent =
    gData.ShuttleToWMS_Carrier_Status;
  document.getElementById("plc_wms_carrier_position").textContent =
    decodeHTMLEntity(gData.ShuttleToWMS_Carrier_Position);
  document.getElementById("plc_wms_lifter_status").textContent =
    gData.ShuttleToWMS_Lifter_Status;
  document.getElementById("plc_wms_lifter_position").textContent =
    gData.ShuttleToWMS_Lifter_Position;
}

// Utility function to get task description
function getTaskDescription(TaskNumber) {
  const descriptions = {
    1: "1: Pick-up",
    2: "2: Drop-off",
    3: "3: Translation",
    60: "60: Pause",
    61: "61: Resume",
    63: "63: Erase",
  };
  return descriptions[TaskNumber] || "Unknown Task";
}

// Utility function to get result description
function getResultDescription(resultCode) {
  const descriptions = {
    0: "0: Stand-by",
    1: "1: Accepted",
    99: "99: Rejected",
  };
  return descriptions[resultCode] || "Unknown Result";
}

// Utility function to get task status description
function getTaskStatusDescription(statusCode) {
  const descriptions = {
    0: "0: Standby",
    1: "1: In progress",
    10: "10: In pause",
    99: "99: Erase",
  };
  return descriptions[statusCode] || "Unknown Status";
}

const infoIcon = document.getElementById("ErrorInfoIcon");
const errorCodeSpan = document.getElementById("plc_wms_error_code");
const errorDescription = document.getElementById("ErrorDescription");
const tooltipError = document.getElementById("ErrorDescription");

function updateErrorTooltip() {
  tooltipError.innerHTML = `Error: ${getErrorDescription(
    gData.ShuttleToWMS_ErrorCode
  )}`;
}

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
