const ShuttleToWMS = {
  Message: {
    Id: 0, // Assuming initial value is 0, use actual initial values as needed
    TaskNumber: 0, // Same assumption as above
    Coordinate: "A-L01R019A03", // Example value
    Result: 0,
    ErrorCode: 0,
    TaskStatus: 0,
  },
  Status: {
    CurrentMode: 0,
    CurrentState: 0,
    Carrier: {
      Status: 0,
      Position: "A-L01R019A03", // Example value
    },
    Lifter: {
      Status: 0,
      Position: 0,
    },
  },
  Digital_Input: {
    Module0: new Array(32).fill(false), // Assuming a 16-bit integer, representing each bit as true/false
    Module1: new Array(32).fill(false), // Same as above
  },
  Analog_Input: {
    Module_0: {
      Channel_0: 0, // Assuming some initial value, for example, battery level
    },
  },
};

// To use this object to check the status of a digital input, you would convert the integer to bits
// Here's a function to convert an integer to an array of bits (booleans)
function intToBits(int) {
  const bits = [];
  for (let i = 0; i < 32; i++) {
    bits.push(Boolean(int & (1 << i)));
  }
  return bits;
}

// Example usage: Assuming 'digitalInputValue' is the integer read from the PLC for Module0
const digitalInputValue = 517; // This is a random example integer
ShuttleToWMS.Digital_Input.Module0 = intToBits(digitalInputValue);

// Now the 'ShuttleToWMS.Digital_Input.Module0' array contains the bit status as true/false



// Code to divide and see the individual bits of an integer:
// =============================================================================
// In Javascript:
//         function readBits(integer) {
//         var bits = [];
//         var mask = 1;
//             for (var i = 0; i < 32; i++) { // Assuming 32-bit integers
//                 bits.push(integer & mask ? 1 : 0);
//                 mask <<= 1;
//             }
//             return bits
//         }

//         // Example usage:
//         var Digital_Input = 3; // Example integer
//         var bits = readBits(Digital_Input);
//         console.log(bits);

//         var limit_Switch_Left = bits[1];
//         console.log(bits[0]);
//         console.log(limit_Switch_Left);
// =============================================================================