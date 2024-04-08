const labelMode = document.getElementById("labelMode").querySelector("span"); // Correctly select the span within #labelMode
const labelState = document.getElementById("labelState").querySelector("span");

document.addEventListener("DOMContentLoaded", function () {
  labelState.textContent = gData.StatusMachine;
  labelMode.textContent = gData.StatusMode;
});

// =====================================================================

// Function to decode HTML entities using a regular expression
function decodeHTMLEntity(htmlString) {
  // Regular expression to match HTML entities like "&#x27;"
  var entityRegex = /&#(?:x([\da-fA-F]+)|(\d+));/g;

  // Replace HTML entities with their corresponding characters
  return htmlString.replace(entityRegex, function(match, hex, dec) {
      return hex ? String.fromCharCode(parseInt(hex, 16)) : String.fromCharCode(dec);
  });
}

function removeFirstAndLastChar(str) {
  // Check if the string has at least two characters
  if (str.length >= 2) {
      // Remove the first and last characters using substring
      return str.substring(1, str.length - 1);
  } else {
      // If the string has less than two characters, return an empty string
      return '';
  }
} 




function updateStatus(){

  var htmlString = gData.StatusMachine;
  var decodedString = decodeHTMLEntity(htmlString);
  var result = removeFirstAndLastChar(decodedString);
  labelState.textContent = decodedString;  


  htmlString = gData.StatusMode;
  decodedString = decodeHTMLEntity(htmlString);  
  labelMode.textContent = decodedString;  
}

setInterval(updateStatus, 1000);