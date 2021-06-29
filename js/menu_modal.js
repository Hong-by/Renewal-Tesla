$(function(){
  // Modal Menu Active Code
  const modal = document.querySelector('.modal');
  console.log(modal);
  $('.modal').click(function(){
    $('.modal_menu').addClass('modal_active');
    // optional_on();
    $('body').css('overflow', 'hidden');
    $('.modal_menu').css('overflow-y','initial !imortant')


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



});