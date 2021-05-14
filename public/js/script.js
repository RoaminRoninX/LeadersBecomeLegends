"Use Strict"
// **************************************************************************
// Element Selectors and Variables
const nav = document.querySelector(".regNav"); // nav 
let logo = document.querySelector(".logoImage"); // logo
const menuBtn = document.querySelector('.menu-btn'); // hamburger
let video = document.querySelector("video"); // video background
let shopcartbutton =  document.querySelector(".shop-cart-button"); //shopping cart 
let widthMatch = window.matchMedia("(min-width: 950px)");
let menuOpen = false;
// Element Selectors and Variables
// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************
//Functions
const hamburgerAnimation = _=>{
	if(!menuOpen) {
    	openMenu();
  } else {
  		closeMenu();
  }
}


const closeMenu = _=> {
	menuBtn.classList.remove('open');
    nav.classList.remove('regNavResponsive');
    nav.classList.add('regNav');
    video.style.display = 'block';
    logo.style.display = 'block';
    shopcartbutton.style.display = 'block';
    menuOpen = false;
}

const openMenu =_=> {
	menuBtn.classList.add('open');
    nav.classList.add('regNavResponsive');
    nav.classList.remove('regNav');
    logo.style.display = 'none';
    shopcartbutton.style.display = 'none';
    video.style.display = 'none';
    menuOpen = true;
}
//Functions
// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************
//Event Listeners
menuBtn.addEventListener('click',_=> hamburgerAnimation());

widthMatch.addEventListener("change", _=>{
	if(menuOpen){
		closeMenu();
	}
})
//Event Listeners
// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************

// **************************************************************************