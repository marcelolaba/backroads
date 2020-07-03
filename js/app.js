// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// ********** alert for submited ************
function myFunction() {
  alert("The form was submitted");
}

// ********** smooth scroll ************
// select links
// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     // prevent default
//     e.preventDefault();
//     links.classList.remove("show-links");

//     const id = e.target.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     //
//     let position = element.offsetTop - 62;

//     window.scrollTo({
//       left: 0,
//       // top: element.offsetTop,
//       top: position,
//       behavior: "smooth",
//     });
//   });
// });

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
