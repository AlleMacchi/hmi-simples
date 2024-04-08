document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                gData = data;            }
        };
        xhr.open("GET", "IORead.html", true);
        xhr.send();
    }, 1000);
});

