const labelMode = document.getElementById("labelMode").querySelector("span"); // Correctly select the span within #labelMode
const labelState = document.getElementById("labelState").querySelector("span");

// =====================================================================

function updateHeaderStatus() {
  
  var htmlString = gData.StatusMachine;
  var decodedString = decodeHTMLEntity(htmlString);
  var result = removeFirstAndLastChar(decodedString);
  labelState.textContent = decodedString;

  htmlString = gData.StatusMode;
  decodedString = decodeHTMLEntity(htmlString);
  labelMode.textContent = decodedString;
}
