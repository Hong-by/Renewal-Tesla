# Renewal-Tesla

![renewal01.JPG](./img/renewal01.jpg)

## Overview ๐


๋ฆฌ๋ด์ผ ํ๋ก์ ํธ์ ์ผํ์ผ๋ก Tasla ์น์ฌ์ดํธ๋ฅผ ๋ฆฌ๋ด์ผ ์ ์ํด ๋ณด์์ต๋๋ค.  ์ ์ฒด page ์ค index.html ๊ณผ modelS.html ํ์ด์ง๋ฅผ ์ ์ํ์์ผ๋ฉฐ scroll Event์ slide, wow plugin๋ฅผ ํ์ฉํ์ฌ ๋ง๋ค์์ต๋๋ค. index.html์ ๊ฒฝ์ฐ scroll Event์์ ์์ง ํด๊ฒฐ๋์ง ์์ [Issue](#issue)๊ฐ ์์ผ๋ ์๋ ํญ๋ชฉ์ ์ฐธ์กฐํด์ฃผ์๋ฉด ๊ฐ์ฌํ๊ฒ ์ต๋๋ค.

ํธ์คํ ๋งํฌ : [http://hby033.dothome.co.kr/renewal/index.html](http://hby033.dothome.co.kr/renewal/index.html)

## Requirement

- HTML
- CSS
- Javascript
- [Jquery 3.6.0](https://code.jquery.com/)

## Plugin

wow plugin์ Free ๋ฒ์ ์ ํ์ฉํ์ฌ ์ ์ํ์์ต๋๋ค.

mouse wheel plugin์ ๊ฒฝ์ฐ ์๋ ๋งํฌ๋ฅผ ์ฐธ์กฐํด ์ฃผ์ธ์.

- [wow plugin](https://wowjs.uk/)
- [jQuery mouse Wheel Plugin](https://github.com/jquery/jquery-mousewheel)

## Function

1. Navigation
    - modal menu
2. index page
    - mouse wheel plugin
    - When you control mousewheel, page auto move
3. modelS page
    - wow plugin
    - slide function

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)</br>Chrome | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)</br>Firefox | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)</br>IE/edge | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png)</br>opera | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)</br>safari
--- | --- | --- | --- | --- |
Latest โ | Latest โ | <span style="color:red">No Support</span></br>/ 10+ โ | Latest โ | 6.1+ โ |

## <a id="issue"> Issue</a>


ํ์ฌ ๋ง์ฐ์ค ์คํฌ๋กค์ index page ๋ด์์ auto move์ ์คํ์ํค๋ ๊ธฐ๋ฅ๊ณผ ํ์ฌ page์ ๋ง๋ ์ด๋ฏธ์ง๋ฅผ ์ถ๋ ฅํ๋ ๊ธฐ๋ฅ๊ณผ์ ์ถฉ๋์ด ์์ด ์ ์์ ์ธ scroll event๊ฐ ์คํ๋์ง ์๊ณ  ์์ต๋๋ค. ์ถํ update๋ฅผ ํตํด ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ  ์ ์๋๋ก ๋ธ๋ ฅํด๋ณด๊ฒ ์ต๋๋ค. ๋ฌธ์  ํด๊ฒฐ์ ์ํ ์ข์ ์๊ฒฌ์ด ์์ผ์๋ค๋ฉด ๋จ๊ฒจ์ฃผ์๋ฉด ๊ฐ์ฌํ๊ฒ ์ต๋๋ค.

```jsx
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

    //ํ์ฌ ์คํฌ๋กค ์์น์ ๋ง๋ ์ด๋ฏธ์ง ์ถ๋ ฅ
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
```
