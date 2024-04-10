// Update function call
setInterval(() => {
  console.log(gData);
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
