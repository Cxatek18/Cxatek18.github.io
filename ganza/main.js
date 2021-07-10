const   open = document.querySelector('.burger');
        menu = document.querySelector('.menu');

open.onclick = function () {
    open.classList.toggle('burger_active')
    menu.classList.toggle('visible')
}