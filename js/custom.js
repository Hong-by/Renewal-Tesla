$(function(){
  
  //When you control mousewheel, page auto move
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    var moveMouseWheel = function () {
      $(".main-con").mousewheel(function (event, delta) {
        if(delta > 0){
          const prevSec = $(this).prev().offset().top;
          $("html,body").stop().animate({"scrollTop":prevSec}, 1500);
          $(this).prev().addClass("active");
          $(this).removeClass("active");


          
        } else if(delta < 0){
          const nextSec = $(this).next().offset().top;
          $("html,body").stop().animate({"scrollTop":nextSec}, 1500);
          $(this).next().addClass("active");
          $(this).removeClass("active");

        }
      });
    };
    moveMouseWheel();
  });


  // Modal Menu Active Code
  const modal = document.querySelector('.modal');
  console.log(modal);
  $('.modal').click(function(){
    $('.modal_menu').addClass('modal_active');
    // optional_on();
    $('.main').css('overflow', 'hidden');
    $('.modal_menu').css('overflow', 'auto')

  });
  $('.close').click(function(){
    $('.modal_menu').removeClass('modal_active');
    // optional_off();
    $('body').css('overflow', 'auto');
  });
  $(".menuigm").click(function(){
    if($('.modal_menu').hasClass('modal_active')){
      $('.modal_menu').removeClass('modal_active');
      // optional_off();
      $('body').css('overflow', 'auto');
    };
  });


  // modal option function

  function optional_on(){
    // $('html, body').css({'overflow': 'hidden', 'height': '100%'});

    $('.modal_menu').on('scroll touchmove mousewheel', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  };

  function optional_off(){
    $('html, body').css({'overflow': 'visivle', 'height': '100%'});

    $('.modal_menu').off('scroll touchmove mousewheel');
  };


});

