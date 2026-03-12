// Get the button:
let mybutton = document.getElementById("myBtn");
let timeline = document.getElementById("timeline");
console.log(timeline)

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 660 || document.documentElement.scrollTop > 660) {
    mybutton.style.display = "block";
    timeline.style.display = "block";
    timeline.classList.add("fade-in");
  } else {
    mybutton.style.display = "none";
    timeline.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Hero

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const hero = document.querySelector(".hero");

  hero.style.transform =
    `translate3d(0, ${scroll / 100}%, 0) scale(${(100 - scroll / 100) / 100})`;
});