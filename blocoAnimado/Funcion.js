const slides=document.querySelectorAll(".slide");
const carousel=document.getElementById("carousel");
const left=document.getElementById("left");
const right=document.getElementById("right");

const slides_count= slides.length;
let current_elide=0;
left.addEventListener("click", ()=>{
  current_elide--;
  if (current_elide<0) {
    current_elide = slides_count-1;
  }
  carouselPro();
})
right.addEventListener("click", ()=>{
  current_elide++;
  if (current_elide>slides_count-1) {
    current_elide = 0;
  }
  carouselPro();
})
function carouselPro() {
  carousel.style.transform=`translateX(${-current_elide * slides[0].offsetWidth}px)`;
  document.body.style.background=`#${slides[current_elide].getAttribute("bata-bg")}`;
}
