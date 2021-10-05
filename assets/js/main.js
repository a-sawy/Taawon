var mobileMenu = document.querySelector('.mobile-menu');
var navComponents = document.querySelector('.nav-components');

mobileMenu.onclick = function menuExpand() {

    navComponents.classList.toggle("expand");
 }

 if ($("#image-btn")[0]) {

 var imageBtn = document.querySelector('#image-btn');
 var videoBtn = document.querySelector('#video-btn');
 var imgGallery = document.querySelector('.type-images');
 var vidGallery = document.querySelector('.type-videos');

 imageBtn.onclick = function menuExpand() {

    imageBtn.classList.add("active");
    videoBtn.classList.remove("active");
    imgGallery.classList.add("expand");
    vidGallery.classList.remove("expand");
 }

 videoBtn.onclick = function menuExpand() {

    imageBtn.classList.remove("active");
    videoBtn.classList.add("active");
    imgGallery.classList.remove("expand");
    vidGallery.classList.add("expand");
 }

}
//  Projects slider

$(document).ready(function () {

   $('.board-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      responsive: {
         0: {

            items:1
         },
         760: {
            nav: false,
            items: 2
         },

         1000: {
            nav: true,
            items: 3
         },
         
      }
   })


   $('.about-us-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
     
      responsive: {
         0: {

            items:1
         },
         800: {
            nav: false,
            items: 2
         },

         1000: {
            nav: true,
            items: 3
         },
         
      }
   })

   $('.staff-slider').owlCarousel({
      loop: false,
      margin: 0,
      nav: false,
      dots: false,
      responsive: {
         0: {

            items:1
         },
         800: {
            nav: false,
            items: 2
         },

         1000: {
            items: 3
         },
         
      }
   })


   $('.news-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      responsive: {
         0: {
            nav: false,
            items:1
         },
         600: {
            nav: false,
            items: 1
         },

         1000: {
            items: 1
         },
         
      }
   })


});