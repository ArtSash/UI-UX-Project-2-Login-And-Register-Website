const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const popupButton = document.querySelector('.Login-popup-button');
const iconClose = document.querySelector('.icon-close');
let list = document.querySelectorAll('.list .item')

document.addEventListener('DOMContentLoaded', () => {

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

popupButton.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const testimonialSwiper = new Swiper('.feedback',{ 
    speed: 400,
    loop: true,
    spaceBetween: 30,
    navigation:{
        nextEl: ".btn_next",
        prevEl: ".btn_previous",
    },
});

list.forEach(item => {
    const dropdown = item.querySelector('.dropdown');
    const text = item.querySelector('.text');
    
    text.addEventListener('click', function() {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });

    dropdown.addEventListener('click', function(event) {
    if (item.classList.contains('active')) {
        item.classList.remove('active');
    } else {
        item.classList.add('active');
    }
});
});

});