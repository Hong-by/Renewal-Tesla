$(function(){
  $('nav').eq(0).children().css('visibility', 'visible')
  
  //When you control mousewheel, page auto move
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    let secTop_list= new Array();
    let secBtm_list = new Array();
    let mainCon = document.querySelectorAll('nav');
   
    const bg = $('.bg');

    const resetCss = ()=> {$('nav').children().addClass('fadeOut')};
    const rseCss = ()=> {$('nav').children().removeClass('fadeIn')};
    
    for (var i = 0; i < $(".bg").length; i++) {
      var secTop = $(".bg").eq(i).offset().top;
      secTop_list[i] = secTop;
      var secBtm = secTop + $(".bg").eq(i).outerHeight();
      secBtm_list[i] = secBtm;
    };
    

    var moveMouseWheel = function () {
      $(this).mousewheel(function (event, delta) {
        for (var i = 0; i < $(".bg").length; i++) {
          if(delta > 0){
            if(scroll > secTop_list[i] && scroll < secBtm_list[i] - 1){
              $("html,body").stop().animate({"scrollTop":secTop_list[i]}, 1500);
              resetCss();
              rseCss();
              $('nav').eq(i).children().addClass('fadeIn');

            };

          } else if(delta < 0){
            if(scroll > secTop_list[i] && scroll < secBtm_list[i] - 1){

              $("html,body").stop().animate({"scrollTop":secTop_list[i+1]}, 1500);
              resetCss();
              rseCss();
              $('nav').eq(i+1).children().addClass('fadeIn');
            }
          };
        };
      });
    };
    moveMouseWheel();
  });


  
});