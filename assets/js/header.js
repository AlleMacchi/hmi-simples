const labelMode = document.getElementById("labelMode").querySelector("span"); // Correctly select the span within #labelMode
const labelState = document.getElementById("labelState").querySelector("span");

// =====================================================================

function updateHeaderStatus() {
  // var htmlString = gData.StatusMachine;
  // var decodedString = decodeHTMLEntity(htmlString);
  // var result = removeFirstAndLastChar(decodedString);
  labelState.textContent = Array_1;

  // htmlString = gData.StatusMode;
  // decodedString = decodeHTMLEntity(htmlString);
  labelMode.textContent = Array_2;
}



setInterval(updateHeaderStatus, 1000);

