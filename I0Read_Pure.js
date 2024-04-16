// $(document).ready(function () {
//   $.ajaxSetup({ cache: false });
//   setInterval(function () {
//     $.getJSON("IORead_Array.html", function (data) {
//       Array_1 = data.Array_1;
//       Array_2 = data.Array_2;
//     });
//   }, 1500);
// });

// var test = {};
// $(document).ready(function () {
//   $.ajaxSetup(
//     { cache: false },
//     { dataType: "html" },
//     { headers: { Accept: "application/json, text/javascript, */*; q=0.01" } }
//   );
//   setInterval(function () {
//     $.getJSON("IORead_Array.html", function (data) {
//       console.log(data);
//       test = data;
//       Array_1 = test.Array_1;
//       Array_2 = test.Array_2;
//     }).fail(function (jqXHR, textStatus, errorThrown) {
//       console.error("Error fetching data: ", textStatus, errorThrown);
//     });
//   }, 1500);
// });

// This works the Json format is wrong and the data is not being parse correctly after read
// therefore Javascript cannot convert to object;

//Soluzione in Edit di IORead_Array.html

// $(document).ready(function () {
//   $.ajaxSetup({ cache: false });
//   setInterval(function () {
//     $.ajax({
//       url: "IORead_Array.html",
//       dataType: "script", // Treat response as JSON
//       headers: {
//         Accept: "application/json, text/javascript, */*; q=0.01",
//       },
//       success: function (data) {
//         try {
//           Array_1 = data.Array_1;
//           console.log(data.Array_1);
//           // Array_2 = response.Array_2;
//         } catch (e) {
//           console.error("Error parsing JSON!", e);
//         }
//       },
//       error: function (jqXHR, textStatus, errorThrown) {
//         console.error("Error fetching data: ", textStatus, errorThrown);
//       },
//     });
//   }, 1500);
// });

//Soluzione in String Manipulation

var JsonObject = {};
setInterval(function () {
  $(document).ready(function () {
    $.ajax({
      url: "IORead_Array.html", // The path to your HTML file
      dataType: "text", // Treat the response as text
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json, text/javascript, */*; q=0.01",
      },
      success: function (data) {
        try {
          string = cleanData(data);
          console.log("Received data string:", string);

          JsonObject = JSON.parse(string);
          console.log("Received data object:", JsonObject);

          Array_1 = JsonObject.Array_1;
          Array_2 = JsonObject.Array_2;
          console.log("Array_1:", Array_1);
          console.log("Array_1:", Array_2);
        } catch (e) {
          console.error("Error parsing JSON!", e);
        }
      },
    });
  });
}, 1500);

function cleanData(data) {
  return data.replace(/(:=)(.*?)(:)/g, (match, p1, p2, p3) => {
    return `${p1}${p2.replace(/"/g, '\\"')}${p3}`;
  });
}
