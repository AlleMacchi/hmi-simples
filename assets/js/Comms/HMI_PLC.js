// Object to represent the data read from the PLC
const HMI_PLC = {
  ToHMI: {
    Status: {
      Machine: "EXECUTIVE", //  string
      Mode: "AUTO", //  string
      Step: 4, //  integer
      Carrier: {
        inPosition: false, //  boolean
        isMoving: false, //  boolean
        isFault: false, //  boolean
        actSpeed: 0.0, //  float
        actPosition_mm: 100.0, //  float
        actPosition_logical: "", //  string
      },
      Lifter: {
        inPositionUp: false, //  boolean
        inPositionDown: false, //  boolean
        isMoving: false, //  boolean
        isFault: false, //  boolean
      },
    },
  },
  FromHMI: {
    Command: {
      SelManAuto: false, //  boolean
      Start: false, //  boolean
      Stop: false, //  boolean
      Reset: false, //  boolean
      UpFwdOn: false, //  boolean
      DownBwdOff: false, //  boolean
      GoToPosition: false, //  boolean
      updateStep: false, //  boolean
    },
    Selection: {
      Carrier: {
        enable: false, //  boolean
        mm_or_logical: false, //  boolean
      },
      Lifter: {
        enable: false, //  boolean
      },
      Charging: {
        enable: false, //  boolean
      },
    },
    Setting: {
      Machine: {
        newStep: 0, //  integer
      },
      Carrier: {
        Speed: 0.0, //  float
        PositionToReach_mm: 0.0, //  float
        PositionToReach_logical: "", //  string
      },
      Lifter: {
        Speed: 0.0, //  float
      },
    },
  },
};

// Example usage: Reading status from PLC
// Replace this with actual PLC read logic
function readStatusFromPLC() {
  // ...PLC communication logic to read data...
  HMI_PLC.ToHMI.Status.Machine = "Some status from PLC"; // Example read data
}

// Example usage: Writing command to PLC
// Replace this with actual PLC write logic
function writeCommandToPLC(command, value) {
  // ...PLC communication logic to write data...
  if (HMI_PLC.FromHMI.Command.hasOwnProperty(command)) {
    HMI_PLC.FromHMI.Command[command] = value; // Example write data
  } else {
    console.error("Command not found in HMI_PLC_FromHMI_Command object.");
  }
}

// // Accessing a specific status value
// console.log(HMI_PLC.ToHMI.Status.Carrier.actSpeed);

// // Changing a command value in Selection
// HMI_PLC.FromHMI.Selection.Carrier.enable = true;

// // Print out the entire HMI_PLC object to see its current state
// console.log(HMI_PLC);

//More on write Positions?

// Position Mother Shuttle
// 100		"A-L01".Positions[1,9,0]	Float	(il numero centrale rimane sempre 9)
// 101		"A-L01".Positions[1,9,1]	Float	Il numero a sinistra da 1 a 38 e si alterna 0 e 1 con quello di destra,
// 102		"A-L01".Positions[2,9,0]	Float	pertanto 1,9,0 e 1,9,1
// 103		"A-L01".Positions[2,9,1]	Float	I prossimi sarrano 2,9,0 e 2,9,1
// 		…		e cosí via
// 		"A-L01".Positions[38,9,0]	Float
// 		"A-L01".Positions[38,9,1]	Float

// Position Baby Shuttle
// 100		"A-L01".Positions[1,1,0]	Float	array multidimensionale di 38 per 38 con il numero a destra sempre a 0
// 101		"A-L01".Positions[1,2,0]	Float
// 102		"A-L01".Positions[1,3,0]	Float
// 103		"A-L01".Positions[1,4,0]	Float
// 		…
// 		"A-L01".Positions[1,38,0]	Float

// 		"A-L01".Positions[2,1,0]	Float
// 		"A-L01".Positions[2,2,0]	Float
// 		"A-L01".Positions[2,3,0]	Float
// 		"A-L01".Positions[2,4,0]	Float
// 		…
// 		"A-L01".Positions[2,38,0]	Float

// 		Fino alla
// 		"A-L01".Positions[38,38,0]
