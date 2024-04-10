const ShuttleToWMS = {
  Message: {
    Id: 0, // Assuming initial value is 0, use actual initial values as needed 300
    TaskNumber: 2, // Same assumption as above 301
    Coordinate: "A-L01R019A03", // Example value 302
    Result: 0, // 303
    ErrorCode: 0, // 304
    TaskStatus: 0, //305
  },
  Status: {
    CurrentMode: 0, //306
    CurrentState: 0, //307
    Carrier: {
      Status: 0, //308
      Position: "A-L01R019A03", // Example value //309
    },
    Lifter: {
      Status: 0, //310
      Position: 0, //311
    },
  },
  Digital_Input: {
    Module0: intToBits(280), // Assuming a 16-bit integer, representing each bit as true/false
    Module1: intToBits(280), // Same as above
  },
  Analog_Input: {
    Module_0: {
      Channel_0: 0, // Assuming some initial value, for example, battery level
    },
  },
};

function intToBits(int) {
  const bits = [];
  for (let i = 0; i < 32; i++) {
    bits.push(Boolean(int & (1 << i)));
  }
  return bits;
}
