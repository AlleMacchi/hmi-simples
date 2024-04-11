$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  setInterval(function () {
    $.getJSON("IORead_Array.html", function (data) {
      
      Array_1 = data.Array_1;
      Array_2 = data.Array_2;
      
    });
  }, 1000);
});




