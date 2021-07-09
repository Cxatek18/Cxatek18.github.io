window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none'
};

// Прибавление числа
function addnumbers(count) {
    var minus = count.querySelector('.main__score__minus');
    var number = count.querySelector('.main__score__number');
    var plus = count.querySelector('.main__score__plus');
    plus.addEventListener('click', function() {
        number.innerText++;
    });
    minus.addEventListener('click', function() {
        if(number.innerText < 1) {
            number.innerText = 0;
        }  else {
            number.innerText--;
        }
    });
}

var counts = document.querySelectorAll('.main__score');
counts.forEach(addnumbers);

// Изменение цвета при нажатие на кнопку
var colorArray = ['#b40000', '#ca0599', '#0e8cd4'];
var i = 0; // итератор
var btncolor = document.querySelector('.main__follow')
var back = document.querySelector('.main__one')
var btncolor2 = document.querySelector('.main__follow__down')
var back2 = document.querySelector('.main__two')

function changeColor(){
    btncolor.addEventListener('click', function () {
        back.style.backgroundColor = colorArray[i];
        i++;
        if( i > colorArray.length - 1){
            i = 0;
        }
    });
}

function changeColor2(){
    btncolor2.addEventListener('click', function () {
        back2.style.backgroundColor = colorArray[i];
        i++;
        if( i > colorArray.length - 1){
            i = 0;
        }
    });
}

changeColor()
changeColor2()

// Изменение кубика

function randomCoube() {
    let images = ['7.png', '8.png', '9.png', '10.png', '11.png', '12.png'];
    coube = document.querySelector('.main__coube');

    coube.addEventListener('click', () => {
        coube.querySelector('img').src = './img/load_main/' + images[Math.floor(Math.random()*6)];
    });
}

randomCoube()

// Выведение карточки

function randomCart() {
    let carts = document.getElementById('cart');
    btnCart1 = document.querySelector('.main__button__lightning');

    btnCart1.addEventListener('click', () => {
        document.querySelector('.display_cart').style.display = 'flex';
        document.querySelector('.main').style.display = 'none';
    });
    btnCart2 = document.querySelector('.main__button__lightning2');
    
    btnCart2.addEventListener('click', () => {
        document.querySelector('.display_cart').style.display = 'flex';
        document.querySelector('.main').style.display = 'none';
    });
}

randomCart()