$(function(){
  $('nav').eq(0).children().css('visibility', 'visible');
  // const height = $('.bg').height();
  // let heightSum = 0;

  // const resetCss = ()=> {$('nav').children().addClass('fadeOut')};
  // const rseCss = ()=> {$('nav').children().removeClass('fadeIn')};

  // $(window).on('wheel', function(e){
  //   if(e.originalEvent.deltaY > 0) {
  //     heightSum += height;
  //     const idx = Math.floor(heightSum / height);
  //     if(heightSum > $('body').height() - height){
  //       heightSum -= height;
  //     }else {
  //       $("html, body").stop().animate({'scrollTop' : heightSum}, 1500);
  //       resetCss();
  //       rseCss();
  //       console.log($('nav').eq(idx).children());
  //       $('nav').eq(idx).children().addClass('fadeIn');
  //     }
  //   }else {
  //     heightSum -= height
  //     const idx = Math.floor(heightSum / height);
  //     console.log(idx);
  //     if(heightSum < 0){
  //       heightSum += height;
  //     }else{
  //       $("html, body").stop().animate({'scrollTop': heightSum}, 1500);
  //       resetCss();
  //       rseCss();
  //       console.log($('nav').eq(idx).children());
  //       $('nav').eq(idx).children().addClass('fadeIn');
  //     }
  //   }
  // });

  // When you control mousewheel, page auto move
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
      var secBtm = secTop + $(".bg").eq(i).innerHeight();
      secBtm_list[i] = secBtm;
    };
    
    console.log(secTop_list[i-1]);

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

    //현재 스크롤 위치에 맞는 이미지 출력
    const scrollImg = () => {
      for (var i = 0; i < $(".bg").length; i++) {
        if(scroll >= secTop_list[i]){
          resetCss();
          rseCss();
          $('nav').eq(i).children().addClass('fadeIn');
        } 
      };
    }
    scrollImg();
  });


});