'use strict'

window.addEventListener('scroll', function(e) {
    console.log(window.scrollY);
    if (scrollY >= 200) {
        document.querySelector('.header__content').classList.add('header__content--scrolled')
    }
    else{
        document.querySelector('.header__content').classList.remove('header__content--scrolled')
    }   
});