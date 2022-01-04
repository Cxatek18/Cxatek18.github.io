const menuBtn    = document.querySelector('.burger');
      menu       = document.querySelector('.menu');
      burgerMenu = document.querySelector('.burger-menu__list');
      burger     = document.querySelector('.burger-menu');

const burgerLink = document.querySelectorAll('.burger-menu__link');

let active = true;

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

function closeMenu () {
  for (link of burgerLink) {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('burger__active');
      burgerMenu.classList.add('show');
      burger.style.display = 'none';
      active = false;
    })
  }
}

closeMenu();

let rangeMenu       = document.querySelector('.calculator__estimate-range');
let rangePage       = document.querySelector('.calculator__estimate-page');
let rangeMenuMobile = document.querySelector('.computing__estimate-range');
let rangePageMobile = document.querySelector('.computing__estimate-page');


rangeMenu.oninput = function(){
  rangePage.innerHTML = rangeMenu.value;
};

let adaptiveCheck   = document.querySelector('.adaptive'),
    layoutCheck     = document.querySelector('.layout'),
    designCheck     = document.querySelector('.design'),
    calculatorPrice = document.querySelector('.calculator__img-price');
  
let landPrice         = document.querySelector('.land'),
    businessCardPrice = document.querySelector('.business__card'),
    multiPage         = document.querySelector('.multipage'),
    onlineStore       = document.querySelector('.online__store');

let defaltPrice = 2500

function defaltPriceChange(){
  if(multiPage.checked || onlineStore.checked){
    defaltPrice = 3000;
  }else{
    defaltPrice = 2500;
  }
  
}
setInterval(defaltPriceChange, 10)

function changePrice(){
  if(adaptiveCheck.checked){
    calculatorPrice.innerHTML = (+rangeMenu.value * defaltPrice) + 5000;
  }else if(layoutCheck.checked){
    calculatorPrice.innerHTML = +rangeMenu.value * defaltPrice;
  }else if(designCheck.checked){
    if(defaltPrice == 3000){
      defaltPrice = 2800;
      calculatorPrice.innerHTML = +rangeMenu.value * defaltPrice;
    }else{
      defaltPrice = 2000;
      calculatorPrice.innerHTML = +rangeMenu.value * 2000;
    }
  }else{
    calculatorPrice.innerHTML = +rangeMenu.value * defaltPrice;
  };
  
}
setInterval(changePrice, 10);

rangeMenuMobile.oninput = function(){
  rangePageMobile.innerHTML = rangeMenuMobile.value;
};

let adaptiveCheckMobile   = document.querySelector('.adaptive-mobile'),
    layoutCheckMobile     = document.querySelector('.layout-mobile'),
    designCheckMobile     = document.querySelector('.design-mobile'),
    calculatorPriceMobile = document.querySelector('.computing__counter-price');
  
let landPriceMobile         = document.querySelector('.land-mobile'),
    businessCardPriceMobile = document.querySelector('.business__card-mobile'),
    multiPageMobile         = document.querySelector('.multipage-mobile'),
    onlineStoreMobile       = document.querySelector('.online__store-mobile');

let selectSolid = document.querySelector('.computing__services');

let defaltPriceMobile = 2500;


function defaltPriceChangeMobile(){
  let checkselectSolid = selectSolid.options[selectSolid.selectedIndex].text;
  if(checkselectSolid == "Многостраничный" || checkselectSolid == "Интернет-магазин"){
    defaltPriceMobile = 3000;
  }else{
    defaltPriceMobile = 2500;
  }
  
}
setInterval(defaltPriceChangeMobile, 10);

function changePriceMobile(){
  if(adaptiveCheckMobile.checked){
    calculatorPriceMobile.innerHTML = (+rangeMenuMobile.value * defaltPriceMobile) + 5000;
  }else if(layoutCheckMobile.checked){
    calculatorPriceMobile.innerHTML = +rangeMenuMobile.value * defaltPriceMobile;
  }else if(designCheckMobile.checked){
    if(defaltPriceMobile == 3000){
      defaltPriceMobile = 2800;
      calculatorPriceMobile.innerHTML = +rangeMenuMobile.value * defaltPriceMobile;
    }else{
      defaltPrice = 2000;
      calculatorPriceMobile.innerHTML = +rangeMenuMobile.value * 2000;
    }
  }else{
    calculatorPriceMobile.innerHTML = +rangeMenuMobile.value * defaltPriceMobile;
  };
  
}
setInterval(changePriceMobile, 10)

let btnCloseModal  = document.querySelector('.modal__cross');
let btnOpenModal = document.querySelectorAll('.btn__open-modal');

function addModal(){
  for(let item of btnOpenModal){
    item.addEventListener('click', () => {
      document.querySelector('.modal').style.display = 'block';
      document.querySelector('.overlay').style.display = 'block';
    })
  }
}

function closeModal(){
  btnCloseModal.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
  })
}

closeModal();
addModal();

let computing              = document.getElementById('link-comuting');
let mobileAdvantages       = document.getElementById('mobile-advantages');
let mobilePortfolio        = document.getElementById('mobile-portfolio');
let mobileFooterAdvantages = document.getElementById('mobile-footer-advantages');
let mobileFooterPortfolio  = document.getElementById('mobile-footer-portfolio');

function replacing_anchors(){
  if(window.screen.width < 1025){
    computing.href = `http://127.0.0.1:5501/index.html#calculator2`;
  }else{
    computing.href = `http://127.0.0.1:5501/index.html#calculator`;
  }
}
replacing_anchors();

function replacing_anchors_advantages(){
  if(window.screen.width < 415){
    mobileAdvantages.href = `http://127.0.0.1:5501/index.html#advantages2`;
  }else{
    mobileAdvantages.href = `http://127.0.0.1:5501/index.html#advantages`;
  }
}

replacing_anchors_advantages();

function replacing_anchors_portfolio(){
  if(window.screen.width < 415){
    mobilePortfolio.href = `http://127.0.0.1:5501/index.html#portfolio-mobile`;
    mobileFooterAdvantages.href = `http://127.0.0.1:5501/index.html#advantages2`;
    mobileFooterPortfolio.href  = `http://127.0.0.1:5501/index.html#portfolio-mobile`;
  }else{
    mobilePortfolio.href = `http://127.0.0.1:5501/index.html#portfolio`;
  }
}

replacing_anchors_portfolio();