// DO NOT ELIMINATE THE FOLLOWING CODE, I NEED IT TO TEST THE CODE LOCALLY!

function createGDataObject() {
  return {
    StatusMachine: "&quot;EXECUTIVE&quot;",
    StatusMode: "&quot;MANUAL&quot;",
    Step: 1,
    CarrierInPosition: undefined,
    CarrierIsMoving: undefined,
    CarrierIsFault: undefined,
    CarrierActualSpeed: undefined,
    CarrierActualPosition_mm: 200,
    CarrierActualPosition_logical: undefined,
    LifterInPositionUp: undefined,
    LifterInPositionDown: undefined,
    LifterIsMoving: undefined,
    LifterIsFault: undefined,
    Position_result: 1,
    Position_mm: 2223,
    WMStoShuttle_Id: 300,
    WMStoShuttle_TaskNumber: 1,
    WMStoShuttle_Coordinate: "&quot;A-L01R02A20&quot;",
    WMStoShuttle_ECHOStatus: 0,
    WMStoShuttle_Execute: 1,
    WMStoShuttle_SelManAuto: 1,
    WMStoShuttle_Start: 0,
    WMStoShuttle_Stop: 1,
    WMStoShuttle_Reset: 0,
    ShuttleToWMS_Id: 400,
    ShuttleToWMS_TaskNumber: 2,
    ShuttleToWMS_Coordinate: "&quot;A-L01R019A20&quot;",
    ShuttleToWMS_Result: 1,
    ShuttleToWMS_ErrorCode: 0,
    ShuttleToWMS_TaskStatus: 1,
    ShuttleToWMS_CurrentMode: 0,
    ShuttleToWMS_CurrentState: 1,
    ShuttleToWMS_Carrier_Status: 1,
    ShuttleToWMS_Carrier_Position: "&quot;A-L01R019A20&quot;", //var encodedString = "&quot;EXECUTIVE&quot;";
    ShuttleToWMS_Lifter_Status: 1,
    ShuttleToWMS_Lifter_Position: 1,
    Alarms_Controller0_bit0: 1,
    Alarms_Controller0_bit1: 1,
    Alarms_Controller0_bit2: undefined,
    Alarms_Controller0_bit3: undefined,
    Alarms_Controller0_bit4: undefined,
    Alarms_Controller1_bit0: undefined,
    Alarms_Carrier0_bit0: undefined,
    Alarms_Carrier0_bit1: undefined,
    Alarms_Carrier0_bit2: undefined,
    Alarms_Carrier0_bit3: undefined,
    Alarms_Carrier0_bit4: undefined,
    Alarms_Carrier0_bit5: undefined,
    Alarms_Carrier0_bit6: undefined,
    Alarms_Lifter0_bit0: undefined,
    Alarms_Lifter0_bit1: undefined,
    Alarms_Lifter0_bit2: undefined,
    ShuttleToWMS_DI_Module0: undefined,
    ShuttleToWMS_DI_Module1: undefined,
    ShuttleToWMS_AI_Module_0_Channel_0: undefined,
  };
}

gData = createGDataObject();
