/*let sliderPosition = 0;
const sliderContainer = document.querySelector('.slider__container');
const sliderTrack = document.querySelector('.slider__track');
const sliderItem = document.querySelector('.slider__item');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderItemWidth = sliderItem.offsetWidth;
const sliderContainerWidth = sliderContainer.offsetWidth;
const sliderTrackWidth = sliderItems.length * sliderItemWidth - sliderContainerWidth + (sliderItems.length-1) * 24; 
const sliderButtonPrev = document.querySelector('.slider__arrow_left');
const sliderButtonNext = document.querySelector('.slider__arrow_right');
sliderButtonPrev.onclick = function(){
  sliderPosition += (sliderItemWidth + 24);
  if (sliderPosition > 0) {
    sliderPosition = 0;
  }
  sliderTrack.style.transform= `translateX(${sliderPosition}px`;
  sliderButtons();
  };
sliderButtonNext.onclick = function(){
  sliderPosition -= (sliderItemWidth + 24);
  if (sliderPosition < -sliderTrackWidth) {
    sliderPosition = -sliderTrackWidth;
  }
  sliderTrack.style.transform=`translateX(${sliderPosition}px`;
  sliderButtons();
};
const sliderButtons = () => {
  if (sliderPosition == 0) {
    sliderButtonPrev.classList.add("disabled");
    sliderButtonPrev.setAttribute("disabled","disabled");
  } else {
    sliderButtonPrev.classList.remove("disabled");
    sliderButtonPrev.removeAttribute("disabled");
  }
  if (sliderPosition == -sliderTrackWidth) {
    sliderButtonNext.classList.add("disabled");
    sliderButtonNext.setAttribute("disabled","disabled");
  } else {
    sliderButtonNext.classList.remove("disabled");
    sliderButtonNext.removeAttribute("disabled");
  };
}*/

let counter = 0;
let burger = document.querySelector(".menu__icon_img");
let menu = document.querySelector(".menu__body");
let body = document.querySelector(".header");
burger.onclick = function(event){
  event.stopPropagation();
  counter++;
  if (counter%2 == 0){
    menu.classList.remove("menu__body_active");
   } else {
      menu.classList.add("menu__body_active");
   }
};
menu.addEventListener("click", (event)=>{
  let target = event.target;  
  if (target.tagName != 'A'){
  event.stopPropagation();
  }else {
    menu.classList.remove("menu__body_active");
    counter++;
  }
});
body.addEventListener("click" , () => {
  if (menu.classList.contains("menu__body_active")){
    menu.classList.remove("menu__body_active");
    counter++;
  }
});

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 300,
  framesCount = 20;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});
