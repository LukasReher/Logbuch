// Get the button
let mybutton = document.getElementById("myBtn");
let timeline = document.getElementById("timeline");

console.log(timeline);

// When the user scrolls down, show the button
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 660 || document.documentElement.scrollTop > 660) {

    mybutton.classList.add("fade-in");
    mybutton.style.display = "block";
    timeline.style.display = "block";
    timeline.classList.add("fade-in");

  } else {

    mybutton.style.display = "none";
    timeline.style.display = "none";

  }
}

// Scroll back to top (SMOOTH)
function topFunction() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

//Hero

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const hero = document.querySelector(".hero");

  hero.style.transform =
    `translate3d(0, ${scroll / 100}%, 0) scale(${(100 - scroll / 100) / 100})`;
});


//menu
