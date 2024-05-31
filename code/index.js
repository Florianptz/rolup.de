//DARKMODE

var sunmoonicon = document.getElementById("darklightmodeiconsvg");
var headerlogo = document.getElementById("headerlogo");
// var serviceheadline = document.getElementById("");
// var clientsheadline = document.getElementById("");
// var contactheadline = document.getElementById("");
var footerlogo = document.getElementById("footerlogo");

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#darklightmodeiconsvg');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
  sunmoonicon.src = "../assets/moon.svg";
  headerlogo.src = "../assets/RolupLogowhite.svg";
  footerlogo.src = "../assets/RolupLogoblack.svg";
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    sunmoonicon.src = "../assets/moon.svg";
    headerlogo.src = "../assets/RolupLogowhite.svg";
    footerlogo.src = "../assets/RolupLogoblack.svg";
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
    sunmoonicon.src = "../assets/sun.svg";
    headerlogo.src = "../assets/RolupLogoblack.svg";
    footerlogo.src = "../assets/RolupLogowhite.svg";
  }
});

// DARKMODE

// CLIENTSLIDER

const slideContainer = document.querySelector('.clientsliderframe');
const slide = document.querySelector('.clientslider');
const nextBtn = document.getElementById('nextimgbtn');
const prevBtn = document.getElementById('previmgbtn');
const interval = 5000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

// CLIENTSLIDER