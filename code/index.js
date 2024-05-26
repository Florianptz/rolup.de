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

//DARKMODE
