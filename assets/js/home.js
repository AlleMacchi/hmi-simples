// Function to update the layer title based on PLC data
const updateLayerTitle = (layerNumber) => {
  const layerTitle = document.getElementById("layer-title");
  layerTitle.textContent = `Layer ${layerNumber}`;
};

// Function to update the position of the AGV based on PLC data
const updateAGVPosition = (newPosition) => {
  // First, remove the 'active' class from all squares
  document.querySelectorAll(".square.active").forEach((square) => {
    square.classList.remove("active");
  });

  // Add the 'active' class to the target square
  const targetSquare = document.querySelector(
    `.square[data-position="${newPosition}"]`
  );
  if (targetSquare) {
    targetSquare.classList.add("active");
  }
};

// Simulating PLC variable updates
var newPosition = 0;
var currentLayer = 1;

getPLCPosition = () => {
  newPosition = (newPosition % 38) + 1; // This will cycle the position from 1 to 38
  return newPosition;
};

getPLCLayer = () => {
  // Placeholder for actual PLC layer data retrieval
  // Update the currentLayer variable as needed based on your PLC data
  currentLayer = (currentLayer % 3) + 1; // This will cycle the layer from 1 to 3
  return currentLayer;
};

// Update function call
setInterval(() => {
  const newPosition = getPLCPosition(); // Replace with actual function to get data from PLC
  const newLayer = getPLCLayer(); // Replace with actual function to get data from PLC
  updateAGVPosition(newPosition);
  updateLayerTitle(newLayer);
}, 1000); // Update rate

const btnLogical = document.getElementById("btn_logical");
const btnPhysical = document.getElementById("btn_physical");
const logicalControls = document.getElementById("logical_controls");
const physicalControls = document.getElementById("physical_controls");
const btnGo = document.getElementById("btn_go");

btnLogical.addEventListener("click", function () {
  logicalControls.style.display = "block";
  physicalControls.style.display = "none";
});

btnPhysical.addEventListener("click", function () {
  physicalControls.style.display = "block";
  logicalControls.style.display = "none";
});

btnGo.addEventListener("click", function () {
  const isLogical = logicalControls.style.display === "block";
  let position;

  if (isLogical) {
    const layer = document.getElementById("layer_select").value;
    const positionNumber = document.getElementById("position_select").value;
    position = `Layer: ${layer}, Position: ${positionNumber}`;
  } else {
    const physicalPosition = document.getElementById("physical_position").value;
    position = `Physical Position: ${physicalPosition}`;
  }

  // Send the AGV to the specified position
  console.log("Sending AGV to:", position);
  // Here you would send the position to the AGV using your system's specific command
});
