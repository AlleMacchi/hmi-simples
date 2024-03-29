document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        fetch("IORead.html")
            .then(response => response.json())
            .then(data => {

                gCarrierManSpeed = data.CarrierManSpeed;
                console.log("Read: " + gCarrierManSpeed);
            });
    }, 1500);
});
