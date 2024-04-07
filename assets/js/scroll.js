document.getElementById("btn_section1").classList.add("active");
scrollToSection("section1");

document.getElementById("btn_section1").addEventListener("click", function () {
  scrollToSection("section1");
});
document.getElementById("btn_section2").addEventListener("click", function () {
  btn_section1.classList.remove("active");
  scrollToSection("section2");
});

document.getElementById("btn_section3").addEventListener("click", function () {
  btn_section1.classList.remove("active");
  scrollToSection("section3");
});

document.getElementById("btn_section4").addEventListener("click", function () {
  btn_section1.classList.remove("active");
  scrollToSection("section4");
});

// document.getElementById("btn_section5").addEventListener("click", function () {
//   btn_section1.classList.remove("active");
//   scrollToSection("section5");
// });

document.getElementById("btn_section6").addEventListener("click", function () {
  btn_section1.classList.remove("active");
  scrollToSection("section6");
});

// Function to scroll to the specified section
// Function to scroll to the specified section with a top margin
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const topMargin = 90; // Adjust this value to your desired margin in pixels
    const topPosition =
      section.getBoundingClientRect().top + window.scrollY - topMargin;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   const navToggle = document.getElementById("nav-toggle");
//   const navbar = document.getElementById("navbar");

//   const content = document.getElementById("container-section");

//   navToggle.addEventListener("click", function () {
//     navbar.classList.toggle("closed");
//     content.classList.toggle("full-width");
//   });

//   // Keep your existing navigation logic here
// });
