const menuBars = document.querySelector(".menu")
const menuClose = document.querySelector(".close")
const menuBarsOpen = document.querySelector(".nav-left-menu")

menuBars.addEventListener("click", () => {
    menuBarsOpen.classList.toggle("active");
});
menuClose.addEventListener("click", () => {
    menuBarsOpen.classList.remove("active");
});

const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")

let sneakersFirst = document.querySelector(".sneakers-first")
let sneakersSecond = document.querySelector(".sneakers-second")
let sneakersThird = document.querySelector(".sneakers-third")
let sneakersFourth = document.querySelector(".sneakers-fourth")


arrowLeft.addEventListener("click", () => {
    sneakersSecond.classList.add("active")
    sneakersFirst.classList.add("off")
})