// Select the div elements
let div1 = document.querySelector('#WMS-to-PLC');
let div2 = document.querySelector('#PLC-to-WMS');


// Function to create a new paragraph with random text
function createParagraph() {
  let p = document.createElement('p');
  p.textContent = 'Random text ' + Math.floor(Math.random() * 100); // Generate random text
  return p;
}

// Set an interval to run every second
setInterval(function() {
  // Append a new paragraph to each div
  div1.appendChild(createParagraph());
  div2.appendChild(createParagraph());
}, 500);