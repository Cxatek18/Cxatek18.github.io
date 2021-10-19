// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const accordion = document.getElementsByClassName('contentBx');

for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

const btnCall = document.querySelector('.header__button');
const btnClose = document.querySelector('.form__close');
const btnInfo = document.querySelector('.main__button');
const btnDev = document.querySelector('.development__button');
const btnRev = document.querySelector('.reviews__button');
const btnAnalysis = document.querySelector('.opened__button');
const btnContract = document.querySelector('.contract__button');

function addform () {
    btnCall.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.fon').style.display = 'block';
        document.querySelector('.header').style.display = 'none';
    });
    btnInfo.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.fon').style.display = 'block';
        document.querySelector('.header').style.display = 'none';
    });
    btnDev.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.fon').style.display = 'block';
        document.querySelector('.header').style.display = 'none';
    });
    btnRev.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.fon').style.display = 'block';
        document.querySelector('.header').style.display = 'none';
    });
    btnAnalysis.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.fon').style.display = 'block';
        document.querySelector('.header').style.display = 'none';
    });
    btnContract.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.fon').style.display = 'block';
        document.querySelector('.header').style.display = 'none';
    });
    btnClose.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.fon').style.display = 'none';
        document.querySelector('.header').style.display = 'block';
    });
}

addform();