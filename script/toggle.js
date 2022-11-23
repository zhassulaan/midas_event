if (window.innerWidth <= 768) {
  function openNavbar() {
    let header = document.getElementById("header");
    let container = document.getElementsByClassName("container");
    header.style.left = "0";
    header.style.transition = "all 0.5s ease-in-out";
  }

  function closeNavbar() {
    let header = document.getElementById("header");

    header.style.left = "-20rem";
    header.style.transition = "all 0.5s ease-in-out";
  }

  function clickLink() {
    let header = document.getElementById("header");

    header.style.left = "-20rem";
    header.style.transition = "all 0.5s ease-in-out";
  }
}