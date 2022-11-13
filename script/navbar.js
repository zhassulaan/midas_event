var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (window.innerWidth > 768) {
    if (window.scrollY >= 25) {
      document.getElementById("header").style.backgroundColor = "var(--clr-black)";
      document.getElementById("header").style.padding = "0.9375rem 0";
      document.getElementById("header").style.transition = "background-color 0.15s ease-in-out, padding 0.15s ease-in-out";
    } else {
      document.getElementById("header").style.backgroundColor = "transparent";
      document.getElementById("header").style.padding = "1.875rem 0";
      document.getElementById("header").style.transition = "background-color 0.15s ease-in-out, padding 0.15s ease-in-out";
    }
  }
}