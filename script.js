const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const popupButton = document.querySelector('.Login-popup-button');
const iconClose = document.querySelector('.icon-close');

document.addEventListener('DOMContentLoaded', () => {

const testimonialSwiper = new Swiper('.feedback',{ 
    speed: 400,
    loop: true,
    spaceBetween: 30,
    navigation:{
        nextEl: ".btn_next",
        prevEl: ".btn_previous",
    },
});

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
});