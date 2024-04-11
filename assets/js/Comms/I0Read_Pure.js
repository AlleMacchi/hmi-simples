$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  setInterval(function () {
    $.getJSON("IORead_Array.html", function (data) {
      Array_1 = data.Array_1;
      Array_2 = data.Array_2;
      Array_3 = data.Array_3;
      Array_4 = data.Array_4;
      Array_5 = data.Array_5;
      Array_6 = data.Array_6;
      Array_7 = data.Array_7;
      Array_8 = data.Array_8;
      Array_9 = data.Array_9;
      Array_10 = data.Array_10;
      Array_11 = data.Array_11;
      Array_12 = data.Array_12;
      Array_13 = data.Array_13;
      Array_14 = data.Array_14;
      Array_15 = data.Array_15;
      Array_16 = data.Array_16;
      Array_17 = data.Array_17;
      Array_18 = data.Array_18;
      Array_19 = data.Array_19;
      Array_20 = data.Array_20;
      Array_21 = data.Array_21;
      Array_22 = data.Array_22;
      Array_23 = data.Array_23;
      Array_24 = data.Array_24;
      Array_25 = data.Array_25;
      Array_26 = data.Array_26;
      Array_27 = data.Array_27;
      Array_28 = data.Array_28;
      Array_29 = data.Array_29;
      Array_30 = data.Array_30;
      Array_31 = data.Array_31;
      Array_32 = data.Array_32;
      Array_33 = data.Array_33;
      Array_34 = data.Array_34;
      Array_35 = data.Array_35;
      Array_36 = data.Array_36;
      Array_37 = data.Array_37;
      Array_38 = data.Array_38;
      Array_39 = data.Array_39;
      Array_40 = data.Array_40;
      Array_41 = data.Array_41;
      Array_42 = data.Array_42;
      Array_43 = data.Array_43;
      Array_44 = data.Array_44;
      Array_45 = data.Array_45;
      Array_46 = data.Array_46;
      Array_47 = data.Array_47;
      Array_48 = data.Array_48;
      Array_49 = data.Array_49;
      Array_50 = data.Array_50;
      Array_51 = data.Array_51;
    });
  }, 1000);
});

// ============================================================

// Function to decode HTML entities using a regular expression
function decodeHTMLEntity(htmlString) {
  // Regular expression to match HTML entities like "&#x27;"
  var entityRegex = /&#(?:x([\da-fA-F]+)|(\d+));/g;

  // Replace HTML entities with their corresponding characters
  return htmlString.replace(entityRegex, function (match, hex, dec) {
    return hex
      ? String.fromCharCode(parseInt(hex, 16))
      : String.fromCharCode(dec);
  });
}

// function decodeHTMLEntity(htmlString) {
//   var doc = new DOMParser().parseFromString(htmlString, "text/html");
//   return removeFirstAndLastChar(doc.documentElement.textContent);
// }

function removeFirstAndLastChar(str) {
  // Check if the string has at least two characters
  if (str.length >= 2) {
    // Remove the first and last characters using substring
    return str.substring(1, str.length - 1);
  } else {
    // If the string has less than two characters, return an empty string
    return "";
  }
}
function readBits(integer) {
  var bits = [];
  var mask = 1;
  for (var i = 0; i < 32; i++) {
    // Assuming 32-bit integers
    bits.push(integer & mask ? 1 : 0);
    mask <<= 1;
  }
  return bits;
}

// // Example usage:
// var Digital_Input = 3; // Example integer
// var bits = readBits(Digital_Input);
// console.log(bits);

// var limit_Switch_Left = bits[1];
// console.log(bits[0]);
// console.log(limit_Switch_Left);
