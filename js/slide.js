// 슬라이드 이미지 변수 저장
const slide = document.querySelectorAll('.slideBox');

// 각 버튼 및 변경 항목 저장 저장
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const contxt = document.querySelectorAll('.slideTxt_body');

// 슬라이드 초기 값 설정
let click = 0;

//슬라이드 출력
function slideimg() {
  slide[click].style.display = 'block';
  dots[click].classList.add('active');
  contxt[click].style.display = 'block';
};
slideimg();

//이미지 초기화
const clearSlide = () => {
  for(let i = 0; i < slide.length; i++ ){
    slide[i].style.display = 'none';
    dots[i].classList.remove('active');
    contxt[i].style.display = 'none';
  };
};

//이미지 슬라이드 기능
function slideShow(){
  clearSlide();
  
  click += 1;

  if(click > slide.length-1){
    click = 0;
  } else if (click < 0){
    click=slide.length-1;
  };

  slideimg();
  return click;
};

//이전 버튼 클릭시
prev.addEventListener('click', function(){
  clearSlide();
  click -= 1;
  if (click < 0){
    click=slide.length-1;
  }
  // move = click;
  slideimg();
  return click;

});
//다음 버튼 클릭시
next.addEventListener('click', function(){
  clearSlide();
  click += 1;
  if(click > slide.length-1){
    click = 0;
  }
  // move = click;
  slideimg();
  return click;

});


//각각의 닷 버튼 지정
for(let n = 0; n < dots.length; n++){
  dots[n].addEventListener('click', function(){
    activeDot(n);
  });
}

//닷 버튼 클릭시 슬라이드 이동
function activeDot(n){
  clearSlide();
  click = n;
  slideimg();
  return click;
};

//슬라이드쇼 자동 실행
let start = setInterval(slideShow, 3000);

document.querySelector('.slideBox-wrap').addEventListener("mouseover", ()=>{
  clearInterval(start);
});

document.querySelector('.slideBox-wrap').addEventListener("mouseout", ()=>{
  start = setInterval(slideShow, 2000);
});

//파워트레일 슬라이드
//이미지 변수 저장
const trImg = document.querySelectorAll('.trImg');
const trainBtn = document.querySelectorAll('.trainIBtn');
const infoBox = document.querySelector('.infoBox')

//이미지 초기화
for(let j = 0; j < trImg.length; j++){
  trImg[j].style.display = 'none';
  trainBtn[j].classList.remove('check');
}


console.log(infoBox);