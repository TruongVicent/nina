// Event onscroll
let lastScrollHeader = 0;
let ninaTopHeader = document.getElementById("nina-top-header");
let ninaNavMenu = document.getElementById("nina-nav-menu");

window.addEventListener("scroll", function(){
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  // Top header hiden scroll 
  if(currentScroll > lastScrollHeader){
    ninaTopHeader.style.top = `-${ninaTopHeader.offsetHeight}px`;
    ninaNavMenu.style.top = "0";
  }

  // Khi cuộn lên, vị trí trên cùng vị trí ban đầu thì hiển thị lên
  if(currentScroll === 0){
    ninaTopHeader.style.top = "0";
    ninaNavMenu.style.top = `${ninaTopHeader.offsetHeight}px`;
  }

  lastScrollHeader = currentScroll;
})

// swiper slider form search domain 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 1,
  speed: 1000,
 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 0,
      
     
    }
  }
});
//setinterval
setInterval(() => {
  swiper.slideNext();
}, 2500);

