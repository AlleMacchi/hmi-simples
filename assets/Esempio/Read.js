// Function to decode HTML entities using a regular expression
function decodeHTMLEntity(htmlString) {
  // Regular expression to match HTML entities like "&#x27;"
  var entityRegex = /&#(?:x([\da-fA-F]+)|(\d+));/g;

  // Replace HTML entities with their corresponding characters
  return htmlString.replace(entityRegex, function(match, hex, dec) {
      return hex ? String.fromCharCode(parseInt(hex, 16)) : String.fromCharCode(dec);
  });
}

$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  setInterval(function() {
      $.getJSON("IORead_Array.html", function(data){
        $('#Array_1').text(data.Array_1);  
        $('#Array_2').text(data.Array_2);
        $('#Array_3').text(data.Array_3);
        $('#Array_4').text(data.Array_4);
        $('#Array_5').text(data.Array_5);
        $('#Array_6').text(data.Array_6);
        $('#Array_7').text(data.Array_7);
        $('#Array_8').text(data.Array_8);
        $('#Array_9').text(data.Array_9);
        $('#Array_10').text(data.Array_10);
        $('#Array_11').text(data.Array_11);  
        $('#Array_12').text(data.Array_12);
        $('#Array_13').text(data.Array_13);
        $('#Array_14').text(data.Array_14);
        $('#Array_15').text(data.Array_15);
        $('#Array_16').text(data.Array_16);
        $('#Array_17').text(data.Array_17);
        $('#Array_18').text(data.Array_18);
        $('#Array_19').text(data.Array_19);
        $('#Array_20').text(data.Array_20);
        $('#Array_21').text(data.Array_21);  
        $('#Array_22').text(data.Array_22);
        $('#Array_23').text(data.Array_23);
        $('#Array_24').text(data.Array_24);
        $('#Array_25').text(data.Array_25);
        $('#Array_26').text(data.Array_26);
        $('#Array_27').text(data.Array_27);
        $('#Array_28').text(data.Array_28);
        $('#Array_29').text(data.Array_29);
        $('#Array_30').text(data.Array_30);
        $('#Array_31').text(data.Array_31);  
        $('#Array_32').text(data.Array_32);
        $('#Array_33').text(data.Array_33);
        $('#Array_34').text(data.Array_34);
        $('#Array_35').text(data.Array_35);
        $('#Array_36').text(data.Array_36);
        $('#Array_37').text(data.Array_37);
        $('#Array_38').text(data.Array_38);
        $('#Array_39').text(data.Array_39);
        $('#Array_40').text(data.Array_40);
        $('#Array_41').text(data.Array_41);
        $('#Array_42').text(data.Array_42);
      }
  )},1500);       
});