// HEADER BUTTON KONTAKT SCROLL FUNCTION

function scrollFunction() {
  const element = document.getElementById("contactsection");
  element.scrollIntoView({ behavior: 'smooth'});
}
// HEADER BUTTON KONTAKT SCROLL FUNCTION

//DARKMODE

var sunmoonicon = document.getElementById("darklightmodeiconsvg");
var headerlogo = document.getElementById("headerlogo");
var aboutlogo = document.getElementById("aboutpagelogo");
// var serviceheadline = document.getElementById("");
// var clientsheadline = document.getElementById("");
// var contactheadline = document.getElementById("");

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
  aboutlogo.src = "../assets/RolupLogowhite.svg";
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
    aboutlogo.src = "../assets/RolupLogowhite.svg";
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
    sunmoonicon.src = "../assets/sun.svg";
    headerlogo.src = "../assets/RolupLogoblack.svg";
    aboutlogo.src = "../assets/RolupLogoblack.svg";
  }
});

// DARKMODE

// CLIENTSLIDER
if (window.innerWidth > 600){
  const slideContainer = document.querySelector('.clientsliderouterframe');
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
}
// CLIENTSLIDER

// CONTACT FORM

function validate() { 
  let email = 
      document.getElementById("emailinput").value; 
  let lastname = 
      document.getElementById("lastname").value; 
  let firstname = 
      document.getElementById("firstname").value; 
  let message = 
      document.getElementById("message").value; 
  let error_message = 
      document.getElementById("error-txt"); 

  error_message.style.padding = "10px"; 

  let errors = []; 

  if (email.indexOf("@") == -1 || email.length < 6) { 
      errors.push( 
          "ungültige Email-Adresse");} 
  if (lastname.length < 5) { 
      errors.push("Nachname erforderlich");} 
  if (firstname.length < 5) { 
      errors.push("Vorname erforderlich");} 
  if (message.length <= 10) { 
      errors.push( 
          "Please Enter More Than 10 Characters");} 
  if (errors.length > 0) { 
      error_message.innerHTML = 
          errors.join("<br>"); 
      return false;} 
  else { 
      alert( 
          "Ihre Nachricht wurde erfolgreich abgeschickt"); 
      return true;}}

// CONTACT FORM