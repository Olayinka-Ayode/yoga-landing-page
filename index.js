const hamburger = document.getElementById("hamburger");
const topHam = document.getElementById("top");
const midHam = document.getElementById("mid");
const bottomHam = document.getElementById("bottom");
const cta = document.getElementById("cta");
const footer = document.getElementById("footer");
const menu = document.getElementById("menu");


hamburger.addEventListener("click", () => {
    midHam.classList.toggle("remove");
    menu.classList.toggle("remove");
    topHam.classList.toggle("top-rotate");
    bottomHam.classList.toggle("bottom-rotate");
    menu.classList.add("change-to-flex");
    cta.classList.toggle("add-margin");
})