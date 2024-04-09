document.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        gData = data;
      }
    };
    xhr.open("GET", "IORead.html", true);
    xhr.send();
  }, 1000);
});

// ============================================================

// Function to decode HTML entities using a regular expression
// function decodeHTMLEntity(htmlString) {
//   // Regular expression to match HTML entities like "&#x27;"
//   var entityRegex = /&#(?:x([\da-fA-F]+)|(\d+));/g;

//   // Replace HTML entities with their corresponding characters
//   return htmlString.replace(entityRegex, function (match, hex, dec) {
//     return hex
//       ? String.fromCharCode(parseInt(hex, 16))
//       : String.fromCharCode(dec);
//   });
// }

function decodeHTMLEntity(htmlString) {
  var doc = new DOMParser().parseFromString(htmlString, "text/html");
  return removeFirstAndLastChar(doc.documentElement.textContent);
}

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

function intToBits(int) {
  const bits = [];
  for (let i = 0; i < 32; i++) {
    bits.push(Boolean(int & (1 << i)));
  }
  return bits;
}
