var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {  
      767: {
        slidesPerView: '1'
      },
      736: { 
        slidesPerView: '1'
      },
      667: { 
        slidesPerView: '1'
      },
      414: { 
        slidesPerView: '1'
      },
      375: { 
        slidesPerView: '1'
      },
      320: { 
        slidesPerView: '1'
      },
      1024: { 
        slidesPerView: '3'
      },  
    }
  });