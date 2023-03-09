new Swiper('.swiper-container6', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  simulateTouch: true,
  touchRatio: 2,
  grabCursor: true,
  slideToClickedSlide: true,
  
  keyboard: {
    enabled: true,
    onlyInVieport: true,
    pageUpDown: true,
    
  },
  speed: 1000,
  loop: true,
  
});




new Swiper('.swiper-container7', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  simulateTouch: true,
  touchRatio: 2,
  grabCursor: true,
  slideToClickedSlide: true,
  
  keyboard: {
    enabled: true,
    onlyInVieport: true,
    pageUpDown: true,
    
  },

  loop: true,
  
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  speed: 1000,

  slidesPerView:1.5,
});

$(document).ready(function () {
  $(`.content1`).click(function(event) {
    $(`.1-unfold`).toggleClass(`visible`);
    $(`.content1 .burger-visible .burger-content, .content1 .burger-visible .unfold-title`).toggleClass(`active`);
  });
});

$(document).ready(function () {
  $(`.content2`).click(function(event) {
    $(`.2-unfold`).toggleClass(`visible`);
    $(`.content2 .burger-visible .burger-content, .content2 .burger-visible .unfold-title`).toggleClass(`active`);
  });
});

$(document).ready(function () {
  $(`.content3`).click(function(event) {
    $(`.3-unfold`).toggleClass(`visible`);
    $(`.content3 .burger-visible .burger-content, .content3 .burger-visible .unfold-title`).toggleClass(`active`);
  });
});

$(document).ready(function () {
  $(`.content4`).click(function(event) {
    $(`.4-unfold`).toggleClass(`visible`);
    $(`.content4 .burger-visible .burger-content, .content4 .burger-visible .unfold-title`).toggleClass(`active`);
  });
});

$(document).ready(function () {
  $(`.content5`).click(function(event) {
    $(`.5-unfold`).toggleClass(`visible`);
    $(`.content5 .burger-visible .burger-content, .content5 .burger-visible .unfold-title`).toggleClass(`active`);
  });
});