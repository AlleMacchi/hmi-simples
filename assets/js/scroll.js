document.getElementById("btn_section1").addEventListener("click", function() {
    scrollToSection("section1");
});
document.getElementById("btn_section2").addEventListener("click", function() {
    scrollToSection("section2");
});

document.getElementById("btn_section3").addEventListener("click", function() {
    scrollToSection("section3");
});

document.getElementById("btn_section4").addEventListener("click", function() {
    scrollToSection("section4");
});


// Function to scroll to the specified section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}