"Use Strict";

//Hamburger button

let nav = document.getElementsByClassName("scollie");
let regNav = document.querySelector("nav");
let mainNav = document.querySelector(".navvie");
let menuBtn = document.querySelector('.menu-btn');
let logo = document.querySelector(".logo");
let sponsertitles = document.getElementsByClassName("sponsertitles");

let header = document.querySelector("header");
let shoppingCart = document.querySelector(".shop-cart-button");

let main = document.querySelector("main");
 //entire nav and logo
let section  = document.querySelector("section");
let footer  = document.querySelector("footer");
let widthMatch = window.matchMedia("(min-width: 967px)");

let contactcards = document.querySelector("#cards");
let sponsercards = document.getElementsByClassName("Sponser-cards");

let body = document.querySelector("body");



let menuOpen = false;
// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************
//FUNCTIONS
const hamburgerAnimation = _=>{
	if(!menuOpen) {
    	openMenu();
  } else {
  		closeMenu();
  }
}



const closeMenu = _=> {
	logo.style.display = "flex";
	header.style.display = "flex";
	if(document.getElementsByTagName('section').length === 2){
    for(let i = 0; i < sponsercards.length; i++){
      sponsercards[i].style.display = "flex";
    }
    for(let i = 0; i < sponsertitles.length; i++){
      sponsertitles[i].style.display = "flex";
    }
  }else {
    section.style.display = "flex";
  }
  main.style.backgroundColor = "#f6f9fc";
	footer.style.display = "block";
	shoppingCart.style.display = "block";
	menuBtn.classList.remove('open');
  mainNav.classList.remove('regNavResponsive');
  mainNav.classList.add('navvie');
  menuOpen = false;
}

const openMenu =_=> {
	logo.style.display = "none";
	header.style.display = "none";
	if(document.getElementsByTagName('section').length === 2){
    for(let i = 0; i < sponsercards.length; i++){
      sponsercards[i].style.display = "none";
    }
    for(let i = 0; i < sponsertitles.length; i++){
      sponsertitles[i].style.display = "none";
  }

  }else {
    section.style.display = "none";
  }
  main.style.backgroundColor = "lightblue";
	footer.style.display = "none";
	shoppingCart.style.display = "none";
	menuBtn.classList.add('open');
  mainNav.classList.add('regNavResponsive');
  mainNav.classList.remove('navvie');
  menuOpen = true;
  body.style.backgroundColor = "lightblue";
}

const scrollFunction = _=> {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      for(let i = 0; i < 4; i++){
        nav[i].classList.add("scrollnav");
      }

  } else {
      for(let i = 0; i < 4; i++){
        nav[i].classList.remove("scrollnav");
      }
  }
}

const ifMenuOpen = _=> {
  if(menuOpen){
    closeMenu();
  }
}
//FUNCTIONS^
// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************
//EVENT LISTENERS 
menuBtn.addEventListener('click', _=> hamburgerAnimation());

document.addEventListener('scroll', _=> scrollFunction());

widthMatch.addEventListener("change", _=> ifMenuOpen());
//EVENT LISTENERS ^
// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************



