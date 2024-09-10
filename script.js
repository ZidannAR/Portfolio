'use strict';



// add event listener on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len =  elements.length;i < len ; i++) {
        elements[i].addEventListener(eventType,callback);
    }
       
}




const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded")
});


// navbar
// navbar toggle for mobile
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

// slider

// const sliders = document.querySelectorAll("[data-slider]");

// const initSlider = function (currentSlider) {
//     const sliderContainer = currentSlider.querySelector("[data-slider-container]");
//     const sliderPrevBtn = currentSlider.querySelectorAll("[data-slider-prev]");
//     const sliderNextBtn = currentSlider.querySelectorAll("[data-slider-next]");

//     let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));

//     let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

//     let currentSlidePos = 0;

//     const moveSliderItems = function () {

//         sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
//     }

//     // next slide
//     const SlideNext = function () {
//     const slideEnd = currentSlidePos >= totalSlidableItems;
//         if (slideEnd) {
//             currentSlidePos = 0;
//         } else {
//             currentSlidePos++;
//         }
//         moveSliderItems();
//     }

//     sliderNextBtn.addEventListener("Click", SlideNext);
// }


// header

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }
 
  const slideNext = function () {
    const slideEnd = currentSlidePos = totalSlidableItems;
    if (slideEnd) {
    currentSlidePos = 0;
    } else {
    currentSlidePos++;
    }
    moveSliderItem();
    }
    sliderNextBtn.addEventListener("click", slideNext);
    }
    for (let i = 0, len = sliders.length; i < len; i++) { initSlider (sliders[i]); }