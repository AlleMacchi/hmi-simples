const WMSToShuttle = {
  Message: {
    Id: 0, // Replace with the actual initial value or the value read from the PLC
    TaskNumber: 0, // Replace with the actual initial value or the value read from the PLC
    Coordinate: "A-L01R001A01", // This seems to be a default or example value
    ECHOStatus: 0, // Replace with the actual initial value or the value read from the PLC
    Execute: false, // Initial state assumed to be false
  },
  Command: {
    SelManAuto: false, // Initial state assumed to be false
    Start: false, // Initial state assumed to be false
    Stop: false, // Initial state assumed to be false
    Reset: false, // Initial state assumed to be false
  },
};
