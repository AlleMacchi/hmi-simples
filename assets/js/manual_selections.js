document.getElementById("standard-select").addEventListener("change", function() {
    var selectedOption = this.value;
    if (selectedOption === "Wheels") {
        selWheelsON();
        selLifterOFF();
    }
    if (selectedOption === "Lifter") {
        selWheelsOFF();
        selLifterON();
    }
  });



  function selLifterON() {
    event.preventDefault();
    var url = "IOWrite.html";
    var name = '"HMI_PLC".FromHMI.Command.selLifterMovements';
    var val = 1;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}

function selLifterOFF() {
    event.preventDefault();
    var url = "IOWrite.html";
    var name = '"HMI_PLC".FromHMI.Command.selLifterMovements';
    var val = 0;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}


function selWheelsON() {
    event.preventDefault();
    var url = "IOWrite.html";
    var name = '"HMI_PLC".FromHMI.Command.selCarrierMovements';
    var val = 1;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}

function selWheelsOFF() {
    event.preventDefault();
    var url = "IOWrite.html";
    var name = '"HMI_PLC".FromHMI.Command.selCarrierMovements';
    var val = 0;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}
