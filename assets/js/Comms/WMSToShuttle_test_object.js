const WMSToShuttle = {
  Message: {
    Id: 0, // Replace with the actual initial value or the value read from the PLC  200
    TaskNumber: 2, // Replace with the actual initial value or the value read from the PLC 201
    Coordinate: "A-L01R001A01", // This seems to be a default or example value 202
    ECHOStatus: 0, // Replace with the actual initial value or the value read from the PLC 203
    Execute: true, // Initial state assumed to be false 204
  },
  Command: {
    SelManAuto: false, // Initial state assumed to be false 205
    Start: false, // Initial state assumed to be false 206
    Stop: false, // Initial state assumed to be false 207 
    Reset: false, // Initial state assumed to be false 298
  },
};
