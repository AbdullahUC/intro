const swiper = new Swiper('.wrapper', {
    loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    autoplay : {
    delay: 2000,
    pauseOnMouseEnter: true ,
    disableOnInteraction: true
  },



    breakpoints: {
    // when window width is >= 500px
    500: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }

 
});
