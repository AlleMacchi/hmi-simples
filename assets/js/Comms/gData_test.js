// // DO NOT ELIMINATE THE FOLLOWING CODE, I NEED IT TO TEST THE CODE LOCALLY!

// gData = {
//   StatusMachine: "&quot;EXECUTIVE&quot;",
//   StatusMode: "&quot;Manual&quot;",
//   Step: 0,
//   CarrierInPosition: 0,
//   CarrierIsMoving: 0,
//   CarrierIsFault: 0,
//   CarrierActualSpeed: 50,
//   CarrierActualPosition_mm: 200,
//   CarrierActualPosition_logical: 0,
//   LifterInPositionUp: 0,
//   LifterInPositionDown: 0,
//   LifterIsMoving: 0,
//   LifterIsFault: 0,
//   LifterActualSpeed: 20, //I added this in read
//   Position_result: 1,
//   Position_mm: 2223,
//   WMStoShuttle_Id: 300,
//   WMStoShuttle_TaskNumber: 3,
//   WMStoShuttle_Coordinate: "&quot;A-L01R02A20&quot;",
//   WMStoShuttle_ECHOStatus: 0,
//   WMStoShuttle_Execute: 1,
//   WMStoShuttle_SelManAuto: 1,
//   WMStoShuttle_Start: 0,
//   WMStoShuttle_Stop: 1,
//   WMStoShuttle_Reset: 0,
//   ShuttleToWMS_Id: 400,
//   ShuttleToWMS_TaskNumber: 1,
//   ShuttleToWMS_Coordinate: "&quot;A-L01R019A20&quot;",
//   ShuttleToWMS_Result: 1,
//   ShuttleToWMS_ErrorCode: 90,
//   ShuttleToWMS_TaskStatus: 1,
//   ShuttleToWMS_CurrentMode: 0,
//   ShuttleToWMS_CurrentState: 1,
//   ShuttleToWMS_Carrier_Status: 1,
//   ShuttleToWMS_Carrier_Position: "&quot;A-L01R019A20&quot;", //var encodedString = "&quot;EXECUTIVE&quot;";
//   ShuttleToWMS_Lifter_Status: 1,
//   ShuttleToWMS_Lifter_Position: 1,
//   Alarms_Controller0_bit0: 1,
//   Alarms_Controller0_bit1: 1,
//   Alarms_Controller0_bit2: 0,
//   Alarms_Controller0_bit3: 0,
//   Alarms_Controller0_bit4: 0,
//   Alarms_Controller1_bit0: 0,
//   Alarms_Carrier0_bit0: 0,
//   Alarms_Carrier0_bit1: 0,
//   Alarms_Carrier0_bit2: 0,
//   Alarms_Carrier0_bit3: 0,
//   Alarms_Carrier0_bit4: 0,
//   Alarms_Carrier0_bit5: 0,
//   Alarms_Carrier0_bit6: 0,
//   Alarms_Lifter0_bit0: 0,
//   Alarms_Lifter0_bit1: 0,
//   Alarms_Lifter0_bit2: 0,
//   ShuttleToWMS_DI_Module0: 200,
//   ShuttleToWMS_DI_Module1: 100,
//   ShuttleToWMS_AI_Module_0_Channel_0: 90,
// };



// // DO NOT ELIMINATE THE FOLLOWING CODE, I NEED IT TO TEST THE CODE LOCALLY!

// function Test() {
//   function toggleAllBooleans() {
//     Object.keys(gData).forEach((key) => {
//       if (typeof gData[key] === "boolean") {
//         gData[key] = !gData[key];
//       } else if (
//         typeof gData[key] === "number" &&
//         (gData[key] === 0 || gData[key] === 1)
//       ) {
//         gData[key] = gData[key] === 0 ? 1 : 0;
//       } else if (typeof gData[key] === "string") {
//         gData[key] = "yes" || gData[key] === "no";
//       }
//     });
//     console.log(gData);
//   }

//   // Example usage: Call the function to toggle the values
//   toggleAllBooleans();
// }
