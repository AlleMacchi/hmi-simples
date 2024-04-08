// Update function call
setInterval(() => {
    updateAGVPosition(gData.ShuttleToWMS_Carrier_Position);
    updaterowTitle();
    updateHeaderStatus();
    createAlarmsTable();
    updateWMSScreen();
    updateAGVPositionHMI_mm(gData.CarrierActualPosition_mm);
    // console.log("Update");
  }, 500); // Update rate