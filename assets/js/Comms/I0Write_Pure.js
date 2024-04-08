// ============================================================
// FUNZIONE PER SCRIVERE
// ============================================================

function sendDataToUrl(url, name, val) {
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
}

// ============================================================
// FUNZIONE RICHIAMO
// ============================================================
let count = 0;

setInterval(function () {
  if (count < 32000) {
    count++;
  } else {
    count = 1; // Reset to 1 when count reaches 32000
  }

  var name = `"HMI_PLC".FromHMI.Watchdog`; // <!-- AWP_In_Variable Name='"HMI_PLC".FromHMI.Watchdog' -->
  sendDataToUrl("IOWrite.html", name, count);

  var name = `"HMI_PLC".FromHMI.Position.update`; // <!-- AWP_In_Variable Name='"HMI_PLC".FromHMI.Position.update' -->
  sendDataToUrl("IOWrite.html", name, 1); // TRUE

  name = `"HMI_PLC".FromHMI.Position.logical`; // <!-- AWP_In_Variable Name='"HMI_PLC".FromHMI.Position.logical' -->
  sendDataToUrl("IOWrite.html", name, "A-L01R003A001");
}, 1000);
