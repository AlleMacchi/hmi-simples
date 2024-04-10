// BUTTON SEL MAN / AUTO
$("#SelMan").click(function(){
  url="IOWriteManAuto.html";
  name='"HMI_PLC".FromHMI.Command.SelManAuto';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#SelAuto").click(function(){
  url="IOWriteManAuto.html";
  name='"HMI_PLC".FromHMI.Command.SelManAuto';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON START
$("#btnStart").mousedown(function(){

  url="IOWriteStart.html";
  name='"HMI_PLC".FromHMI.Command.Start';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
  
});

$("#btnStart").mouseup(function(){
  url="IOWriteStart.html";
  name='"HMI_PLC".FromHMI.Command.Start';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
  
});

// BUTTON STOP
$("#btnStop").mousedown(function(){
  url="IOWriteStop.html";
  name='"HMI_PLC".FromHMI.Command.Stop';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnStop").mouseup(function(){
  url="IOWriteStop.html";
  name='"HMI_PLC".FromHMI.Command.Stop';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON RESET
$("#btnReset").mousedown(function(){
  url="IOWriteReset.html";
  name='"HMI_PLC".FromHMI.Command.Reset';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnReset").mouseup(function(){
  url="IOWriteReset.html";
  name='"HMI_PLC".FromHMI.Command.Reset';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON FORWARD
$("#btnForward").mousedown(function(){
  url="IOWriteForward.html";
  name='"HMI_PLC".FromHMI.Command.UpFwdOn';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnForward").mouseup(function(){
  url="IOWriteForward.html";
  name='"HMI_PLC".FromHMI.Command.UpFwdOn';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON BACKWARD
$("#btnBackward").mousedown(function(){
  url="IOWriteBackward.html";
  name='"HMI_PLC".FromHMI.Command.DownBwdOff';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnBackward").mouseup(function(){
  url="IOWriteBackward.html";
  name='"HMI_PLC".FromHMI.Command.DownBwdOff';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON GO TO POSITION
$("#btnGo").mousedown(function(){
  url="IOWriteGoTo.html";
  name='"HMI_PLC".FromHMI.Command.GoToPosition';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnGo").mouseup(function(){
  url="IOWriteGoTo.html";
  name='"HMI_PLC".FromHMI.Command.GoToPosition';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON CARRIER ENABLE
$("#btnCarrierEnable").mousedown(function(){
  url="IOWriteCarrierEnable.html";
  name='"HMI_PLC".FromHMI.Selection.Carrier.enable';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnCarrierEnable").mouseup(function(){
  url="IOWriteCarrierEnable.html";
  name='"HMI_PLC".FromHMI.Selection.Carrier.enable';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON LIFTER ENABLE
$("#btnLifterEnable").mousedown(function(){
  url="IOWriteLifterEnable.html";
  name='"HMI_PLC".FromHMI.Selection.Lifter.enable';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnLifterEnable").mouseup(function(){
  url="IOWriteLifterEnable.html";
  name='"HMI_PLC".FromHMI.Selection.Lifter.enable';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON CARRIER MM OR LOGICAL
$("#btnCarrier_mm_or_logical").mousedown(function(){
  url="IOWriteCarrierMmOrLogical.html";
  name='"HMI_PLC".FromHMI.Selection.Carrier.mm_or_logical';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnCarrier_mm_or_logical").mouseup(function(){
  url="IOWriteCarrierMmOrLogical.html";
  name='"HMI_PLC".FromHMI.Selection.Carrier.mm_or_logical';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON CHARGE ENABLE
$("#btnChargeEnable").mousedown(function(){
  url="IOWriteChargeEnable.html";
  name='"HMI_PLC".FromHMI.Selection.Charging.enable';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnChargeEnable").mouseup(function(){
  url="IOWriteChargeEnable.html";
  name='"HMI_PLC".FromHMI.Selection.Charging.enable';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON NEW STEP
$("#btnConfirmStep").click(function(){
  url="IOWriteNewStep.html";
  name='"HMI_PLC".FromHMI.Setting.Machine.newStep';
  val=$('input[id=fstep]').val();
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON POSITION
$("#btnConfirmPosition").click(function(){
  url="IOWritePosition.html";
  name='"HMI_PLC".FromHMI.Setting.Carrier.PositionToReach_mm';
  val=$('input[id=fname]').val();
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON POSITION LOGICAL
$("#btnConfirmLogical").click(function(){
  url="IOWritePositionLogical.html";
  name='"HMI_PLC".FromHMI.Setting.Carrier.PositionToReach_logical';
  val=$('input[id=flogical]').val();
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON LIFTER SPEED
$("#btnConfirmLifterSpd").click(function(){
  url="IOWriteLifterSpeed.html";
  name='"HMI_PLC".FromHMI.Setting.Lifter.Speed';
  val=$('input[id=flifterSpd]').val();
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON CARRIER SPEED
$("#btnConfirmcarrerSpd").click(function(){
  url="IOWriteCarrierSpeed.html";
  name='"HMI_PLC".FromHMI.Setting.Carrier.Speed';
  val=$('input[id=fcarrerSpd]').val();
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// POSITION: POSITION LOGIC
$("#btnConfirmPosLog").click(function(){
  url="IOWritePositionLogic.html";
  name='"HMI_PLC".FromHMI.Position.logical';
  val=$('input[id=fPosLog]').val();
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// POSITION: POSITION mm
$("#btnConfirmPosMm").click(function(){
  url="IOWritePositionMM.html";
  name='"HMI_PLC".FromHMI.Position.mm';
  val=$('input[id=fPosMm]').val();
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON UPDATE
$("#btnUpdate").mousedown(function(){
  url="IOWriteUpdate.html";
  name='"HMI_PLC".FromHMI.Position.update';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnUpdate").mouseup(function(){
  url="IOWriteUpdate.html";
  name='"HMI_PLC".FromHMI.Position.update';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

// BUTTON REQUEST
$("#btnRequest").mousedown(function(){
  url="IOWriteRequest.html";
  name='"HMI_PLC".FromHMI.Position.request';
  val=1;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});

$("#btnRequest").mouseup(function(){
  url="IOWriteRequest.html";
  name='"HMI_PLC".FromHMI.Position.request';
  val=0;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
});