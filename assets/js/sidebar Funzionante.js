// Toggle sidebar and update mode
const btnMode = document.getElementById("btn_Mode");
const sidebarMode = document.querySelector(".sidebarMode");

function toggleSidebar(open) {
  if (open) {
    sidebarMode.classList.add("open");
  } else {
    sidebarMode.classList.remove("open");
  }
}

btnMode.addEventListener("click", function () {
  // Toggle sidebar on mode button click
  const isOpen = sidebarMode.classList.contains("open");
  toggleSidebar(!isOpen);

  btnMode.textContent = isOpen ? "MODE" : "X";
});


// BUTTON FORWARD
$("#btnUpFwdOn").mousedown(function(){
  url="IOWriteForward.html";
  name='"HMI_PLC".FromHMI.Command.UpFwdOn';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnUpFwdOn").mouseup(function(){
  url="IOWriteForward.html";
  name='"HMI_PLC".FromHMI.Command.UpFwdOn';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON BACKWARD
$("#btnDownBwdOff").mousedown(function(){
  url="IOWriteBackward.html";
  name='"HMI_PLC".FromHMI.Command.DownBwdOff';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnDownBwdOff").mouseup(function(){
  url="IOWriteBackward.html";
  name='"HMI_PLC".FromHMI.Command.DownBwdOff';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});


