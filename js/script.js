$(document).ready(function(){
  AOS.init();
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if (scroll > 300) {
        $(".bg-light").attr("style", "background-color: #ffffff !important");
        $(".carousel").scrollTop(1000);
    }
    else{
        $(".bg-light").attr("style", "background-color: transparent !important");
    }
  })
  $('.slick-carousel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1
  });
})