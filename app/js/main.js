'use strict'
SmoothScroll({ stepSize: 70,
    keyboardSupport   : true,  
    arrowScroll       : 70,
    accelerationDelta : 10,  // 50
    // accelerationMax   : 3,   // 3 
 })
window.addEventListener('scroll', function(e) {
    console.log(window.scrollY);
    if (scrollY >= 150) {
        document.querySelector('.header__content').classList.add('header__content--scrolled')
    }
    else{
        document.querySelector('.header__content').classList.remove('header__content--scrolled')
    }   
});