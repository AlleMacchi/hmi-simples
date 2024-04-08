const AGVBabyalarmsAndWarnings = [
  {
    id: 100,
    type: "Alarm",
    description: "Emergency Signal",
    active: gData.Alarms_Controller0_bit0, // Ensure these gData properties are updated accordingly
  },
  {
    id: 101,
    type: "Alarm",
    description: "Pallet Presence Lost",
    active: gData.Alarms_Controller0_bit1,
  },
  // Continuing with corrected references
  {
    id: 102,
    type: "Alarm",
    description: "Drive in fault",
    active: gData.Alarms_Carrier0_bit0,
  },
  {
    id: 103,
    type: "Alarm",
    description: "Out Of Tolerance",
    active: gData.Alarms_Carrier0_bit1,
  },
  {
    id: 104,
    type: "Alarm",
    description: "Timeout positioning",
    active: gData.Alarms_Carrier0_bit2,
  },
  {
    id: 105,
    type: "Alarm",
    description: "Limit Switch forward",
    active: gData.Alarms_Carrier0_bit3,
  },
  {
    id: 106,
    type: "Alarm",
    description: "Limit Switch backward",
    active: gData.Alarms_Carrier0_bit4,
  },
  {
    id: 107,
    type: "Alarm",
    description: "Encoder Error",
    active: gData.Alarms_Carrier0_bit5,
  },
  {
    id: 108,
    type: "Alarm",
    description: "Encoder Not Homed",
    active: gData.Alarms_Carrier0_bit6,
  },
  {
    id: 109,
    type: "Alarm",
    description: "Drive in fault",
    active: gData.Alarms_Lifter0_bit0,
  },
  {
    id: 110,
    type: "Alarm",
    description: "Timeout Positioning",
    active: gData.Alarms_Lifter0_bit1,
  },
  {
    id: 111,
    type: "Alarm",
    description: "Lifter location unknown",
    active: gData.Alarms_Lifter0_bit2,
  },
  // {
  //   id: 112,
  //   type: "Warning",
  //   description: "This is a dummy warning",
  //   active: Warnings.Dummy[0].bit0,
  // },
];

const AGVMotheralarmsAndWarnings = [
  {
    id: 200,
    type: "Alarm",
    description: "Emergency Signal",
    active: gData.Alarms_Controller0_bit0,
  },
  {
    id: 201,
    type: "Alarm",
    description: "Pallet Limit Left Engaged",
    active: gData.Alarms_Controller0_bit1,
  },
  {
    id: 202,
    type: "Alarm",
    description: "Pallet Limit Right Engaged",
    active: gData.Alarms_Controller0_bit2,
  },
  {
    id: 203,
    type: "Alarm",
    description: "Satellite Limit Left Engaged",
    active: gData.Alarms_Controller0_bit3,
  },
  {
    id: 204,
    type: "Alarm",
    description: "Satellite Limit Right Engaged",
    active: gData.Alarms_Controller0_bit4,
  },
  {
    id: 205,
    type: "Alarm",
    description: "Drive in fault",
    active: gData.Alarms_Carrier0_bit0,
  },
  {
    id: 206,
    type: "Alarm",
    description: "Position sensor in fault",
    active: gData.Alarms_Carrier0_bit1,
  },
  {
    id: 207,
    type: "Alarm",
    description: "Out of Tolerance Position",
    active: gData.Alarms_Carrier0_bit2,
  },
  {
    id: 208,
    type: "Alarm",
    description: "Timeout positioning",
    active: gData.Alarms_Carrier0_bit3,
  },
  {
    id: 209,
    type: "Alarm",
    description: "Limit Switch Forward",
    active: gData.Alarms_Carrier0_bit4,
  },
  {
    id: 210,
    type: "Alarm",
    description: "Limit Switch Backward",
    active: gData.Alarms_Carrier0_bit5,
  },
  {
    id: 211,
    type: "Warning",
    description: "Selection Maintenance WiFi Controller activated",
    active: gData.Alarms_Controller1_bit0,
  },
  // Add additional alarms and warnings as needed.
];
