function burgerMenu(){
    let menuBtn    = document.querySelector('.burger'),
        menu       = document.querySelector('.menu'),
        overlay    = document.querySelector('.overlay');

    let menuLink = document.querySelectorAll('.menu__link');

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', removeActive);
    menuLink.forEach(function(element){
        element.onclick = removeActive;
    });

    function toggleMenu(){
        if(menuBtn.classList.contains('burger__active')){
            menuBtn.classList.remove('burger__active');
            menu.style.display = 'none';
            overlay.style.display = 'none';
        }else{
            menuBtn.classList.add('burger__active');
            menu.style.display = 'flex';
            overlay.style.display = 'block';
        }
    }

    function removeActive(){
        menuBtn.classList.remove('burger__active');
        menu.style.display = 'none';
        overlay.style.display = 'none';
    }
}

burgerMenu();

function openImg(){
    let carts   = document.querySelectorAll('.type__cart');

    function open(){
        carts.forEach(item => {
            let btnCart = item.querySelector('.type__btn');
            btnCart.addEventListener('click', function(){
                let cartImg = item.querySelector('.type__img');
                cartImg.classList.toggle('display');
            })
        })
    }
    open();
}

openImg();