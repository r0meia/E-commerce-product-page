// left menu 
const menuBars = document.querySelector(".menu")
const menuClose = document.querySelector(".close")
const menuBarsOpen = document.querySelector(".nav-left-menu")

menuBars.addEventListener("click", () => {
    menuBarsOpen.classList.toggle("active");
});
menuClose.addEventListener("click", () => {
    menuBarsOpen.classList.remove("active");
});
// 
// images slider
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


};
function showPreviousSlides() {
    let i;
 
    let slides = document.getElementsByClassName("sneakers");
 
 
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }
 
    slideIndex--;
 
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
 
    slides[slideIndex - 1].style.display = "block";


};
    

arrowLeft.addEventListener("click", (showPreviousSlides));
arrowRight.addEventListener("click", (showSlides));
// 
// cart and amount added to cart
const cartButton = document.querySelector(".nav-cart");
const amount = document.querySelector(".number-amount");
const cartEmpty = document.querySelector(".cart-wrapper-wrapper");
const minus = document.querySelector(".icon-minus");
const plus = document.querySelector(".icon-plus");
let itemsNumber = document.querySelector(".number-amount");

const addToCart = document.querySelector(".add-to-cart");
const bin = document.querySelector(".bin");
const checkout = document.querySelector(".cart-bottom");
const cartPrice = document.querySelector(".cart-price");
const multiplier = document.querySelector(".multiplier");
const finalAmount = document.querySelector(".final-amount");


cartButton.addEventListener("click", (event) => {
    event.stopPropagation();
    
    cartEmpty.classList.add("active");

    document.addEventListener("click", () => {
        cartEmpty.classList.remove("active");
    });
});

cartEmpty.addEventListener("click", (event) => {
    event.stopPropagation();
});

function changeNumber(numberAmount) {

    const currentNumber = parseInt(itemsNumber.textContent.match(/\d+/)[0]);

    const newNumber = currentNumber + numberAmount;
    itemsNumber.textContent = newNumber;

}

plus.addEventListener("click", () => {
    changeNumber(1);
});

function subtractNumber(numberAmount) {

    let currentNumber = parseInt(itemsNumber.textContent.match(/\d+/)[0]);

    if(currentNumber > 0) {
        let newNumber = currentNumber - numberAmount;
        itemsNumber.textContent = newNumber;
    } else {
        itemsNumber.textContent = 0;
    }

}
minus.addEventListener("click", () => {
    subtractNumber(1);
});



