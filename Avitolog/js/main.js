const menuBtn = document.querySelector('.burger');
      menu = document.querySelector('.menu');
      burgerMenu = document.querySelector('.burger-menu__list')
      burger = document.querySelector('.burger-menu')
let active = false;

menuBtn.addEventListener('click', () =>{
    if(!active){
        menuBtn.classList.remove('burger__active');
        burgerMenu.classList.add('show');
        burger.style.display = 'none';
        active = true;
    } else{
        menuBtn.classList.add('burger__active');
        burgerMenu.classList.remove('show');
        burger.style.display = 'block';
        active = false;
    }
})

const btnWatch = document.querySelector('.font__btn-open');
const btnNoWatch = document.querySelector('.font__btn-close');

function addWath () {
    btnWatch.addEventListener('click', () => {
        document.querySelector('.no-watch').style.display = 'block';
        btnWatch.style.display = 'none';
        btnNoWatch.style.display = 'flex';
    })
    
}
addWath()

function NWath () {
    btnNoWatch.addEventListener('click', () => {
        document.querySelector('.no-watch').style.display = 'none';
        btnNoWatch.style.display = 'none';
        btnWatch.style.display = 'flex';
    })
    
}
NWath()