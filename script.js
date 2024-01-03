const menuBars = document.querySelector(".menu")
const menuClose = document.querySelector(".close")
const menuBarsOpen = document.querySelector(".nav-left-menu")

menuBars.addEventListener("click", () => {
    menuBarsOpen.classList.toggle("active");
});
menuClose.addEventListener("click", () => {
    menuBarsOpen.classList.remove("active");
});

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let sneakersFirst = document.querySelector(".sneakers1");
let sneakersSecond = document.querySelector(".sneakers2");
let sneakersThird = document.querySelector(".sneakers3");
let sneakersFourth = document.querySelector(".sneakers4");

let slideIndex = 0;
showSlides();
 
function showSlides() {
    let i;
 
    let slides = document.getElementsByClassName("sneakers");
 
 
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }
 
    slideIndex++;
 
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
 
    slides[slideIndex - 1].style.display = "block";


}
function showPreviousSlides() {
    let i;

    let slides = document.getElementsByClassName("sneakers");

    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } w droga strone 

    slides[slideIndex - 1].style.display = "block";

}
arrowLeft.addEventListener("click", (showPreviousSlides));
arrowRight.addEventListener("click", (showSlides));
