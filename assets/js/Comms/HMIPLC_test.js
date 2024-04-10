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
