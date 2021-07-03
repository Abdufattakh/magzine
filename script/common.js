$(document).ready(function () {
  $('.header-banner__hidden').on('click', function () {
    $('.header-banner').hide(500);
  });
  $('.catalog_parent').on('click', function (e) {
    e.preventDefault();
    $('.catalog').css({
      left: 0
    });
    $('body').css('overflow', 'hidden');
    $('body').addClass('bg');
  });
  $('.header-content__href').on('click', function (e) {
    e.preventDefault();
    $('.catalog').css({
      left: 0
    });
    $('.catalog').css('overflow', 'scroll');
    $('body').css('overflow', 'hidden');
    $('body').addClass('bg');
  }); //   $('.sliderSlim_content').slick({
  //       slidesToShow:3,
  //   });

  new Swiper(".sliderSlim_content", {
    // direction: 'vertical', 
    slidesPerView: 4,
    spaceBetween: 20,
    // loop: true,
    // rows:3,      
    // loopFillGroupWithBlank: true,
    // centeredSlides: true,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  new Swiper(".sliderCenter__inner", {
    slidesPerView: 2,
    spaceBetween: 100,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    // autoplay: {   
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination"
    }
  });
  new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar"
    },
    mousewheel: true
  });
});