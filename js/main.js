

$(document).ready(function(){
  $('.js-about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
     infinite: true,
    nextArrow: '.about-slider__next',
    prevArrow: '.about-slider__prev',
    responsive: [
      {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         infinite: true,
        dots: true
      }
    }
    ]

  });
    $('.js-team__slider').slick({
      // dots: true,
 infinite: false,
 speed: 300,
 slidesToShow: 4,
 slidesToScroll: 0,
 // variableWidth: true,
 // centerMode: true,
 responsive: [
   {
   breakpoint: 1150,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 880,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 2,
       infinite: true,
       dots: true
     }
   }
 ]
    });
    $('.js-price__slider').slick({
      // dots: true,
 infinite: true,
 // speed: 300,
 slidesToShow: 3,
 slidesToScroll: 3,
 variableWidth: true,
 // centerMode: true,
 responsive: [
   {
   breakpoint: 1150,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 880,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       infinite: true,
     }
   }
 ]
    });

    $(".nav-mobile").click(function(){
      $(this).toggleClass("nav-mobile--active");
      $(".main-nav__list").toggleClass("mobile-show");
    })

});
