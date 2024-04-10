// // DO NOT ELIMINATE THE FOLLOWING CODE, I NEED IT TO TEST THE CODE LOCALLY!

// gData = {
//   StatusMachine: "&quot;EXECUTIVE&quot;",
//   StatusMode: "&quot;Manual&quot;",
//   Step: 0,
//   CarrierInPosition: 0,
//   CarrierIsMoving: 0,
//   CarrierIsFault: 0,
//   CarrierActualSpeed: 1,
//   CarrierActualPosition_mm: 1,
//   CarrierActualPosition_logical: 0,
//   LifterInPositionUp: 0,
//   LifterInPositionDown: 0,
//   LifterIsMoving: 0,
//   LifterIsFault: 0,
//   LifterActualSpeed: 20, //I added this in read
//   Position_result: 1,
//   Position_mm: 1,
//   WMStoShuttle_Id: 1,
//   WMStoShuttle_TaskNumber: 1,
//   WMStoShuttle_Coordinate: "&quot;A-L01R02A20&quot;",
//   WMStoShuttle_ECHOStatus: 0,
//   WMStoShuttle_Execute: 1,
//   WMStoShuttle_SelManAuto: 1,
//   WMStoShuttle_Start: 0,
//   WMStoShuttle_Stop: 1,
//   WMStoShuttle_Reset: 0,
//   ShuttleToWMS_Id: 1,
//   ShuttleToWMS_TaskNumber: 1,
//   ShuttleToWMS_Coordinate: "&quot;A-L01R019A20&quot;",
//   ShuttleToWMS_Result: 1,
//   ShuttleToWMS_ErrorCode: 1,
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
//   ShuttleToWMS_DI_Module0: 1,
//   ShuttleToWMS_DI_Module1: 1,
//   ShuttleToWMS_AI_Module_0_Channel_0: 70,
// };

// var newGData = {
//   Array_1: 1,
//   Array_2: 1,
//   Array_3: 1,
//   Array_4: 1,
//   Array_5: 1,
//   Array_6: 1,
//   Array_7: 1,
//   Array_8: 1,
//   Array_9: 1,
//   Array_10: 1,
//   Array_11: 1,
//   Array_12: 1,
//   Array_13: 1,
//   Array_14: 1,
//   Array_15: 1,
//   Array_16: 1,
//   Array_17: 1,
//   Array_18: 1,
//   Array_19: 1,
//   Array_20: 1,
//   Array_21: 1,
//   Array_22: 1,
//   Array_23: 1,
//   Array_24: 1,
//   Array_25: 1,
//   Array_26: 1,
//   Array_27: 1,
//   Array_28: 1,
//   Array_29: 1,
//   Array_30: 1,
//   Array_31: 1,
//   Array_32: 1,
//   Array_33: 1,
//   Array_34: 1,
//   Array_35: 1,
//   Array_36: 1,
//   Array_37: 1,
//   Array_38: 1,
//   Array_39: 1,
//   Array_40: 1,
//   Array_41: 1,
//   Array_42: 1,
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
//         if (gData[key] == "yes") {
//           gData[key] = "no";
//         } else if (gData[key] == "no") {
//           gData[key] = "yes";
//         } else {
//           gData[key] = "yes";
//         }
//       }
//     });
//     console.log(gData);
//   }

//   // Example usage: Call the function to toggle the values
//   toggleAllBooleans();
// }
