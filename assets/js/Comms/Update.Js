// Update function call
setInterval(() => {
  console.log(gData);
  updateAGVPosition(gData.ShuttleToWMS_Carrier_Position);
  console.log("Update AGV Completo");
  updaterowTitle();
  console.log("Update rowTitle Completo");
  updateHeaderStatus();
  console.log("Update HeaderStatus Completo");
  createAlarmsTable();
  console.log("Update AlarmsTable Completo");
  updateWMSScreen();
  console.log("Update WMSScreen Completo");
  updateAGVPositionHMI_mm(gData.CarrierActualPosition_mm);
  console.log("Update AGVPositionHMI_mm Completo");
  updateSensorsFromBits();
  console.log("Update SensorsFromBits Completo");
  updateCurrentStep();
  console.log("Update CurrentStep Completo");
  console.log("Update Completo");
}, 1500); // Update rate
