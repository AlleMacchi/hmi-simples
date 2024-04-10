// Update function call
setInterval(() => {
  updateAGVPosition(gData.ShuttleToWMS_Carrier_Position);
  updaterowTitle();
  updateHeaderStatus();
  createAlarmsTable();
  updateWMSScreen();
  updateAGVPositionHMI_mm(gData.CarrierActualPosition_mm);
  updateSensorsFromBits();
  updateCurrentStep();
  // console.log("Update");
}, 1500); // Update rate
