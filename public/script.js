// let menuBtn = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');
// // what the heck. ai code react a ke. aida common js code
// menuBtn.onclick = () =>{
//    menuBtn.classList.toggle('fa-times');
//    navbar.classList.toggle('active');
//    console.log("Hi");
// }

// window.onscroll = () =>{
//    menuBtn.classList.remove('fa-times');
//    navbar.classList.remove('active');
// }

var swiper = new Swiper(".course-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiperPagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".teachers-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});