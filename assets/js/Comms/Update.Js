document.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    // Home
    updateAGVPosition();
    updatePositionResult();
    updaterowTitle();
    updateStepDropdown();
    updateCurrentStep();
    //header
    updateHeaderStatus();
    //alarms
    createAlarmsTable();
    //wms
    updateWMSScreen();
    updateErrorTooltip();
    //position and machine
    updateAGVPositionHMI_mm(gData.CarrierActualPosition_mm);
    //machine
    updateSensorsFromBits();
    //sidebar
    updateSpeedLabels();
    updateStatusModeFromstring();
  }, 1000); // Update rate
});
