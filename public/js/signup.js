

// //BURGER NAVBAR
// document.addEventListener('DOMContentLoaded', () => {

//     // Get all "navbar-burger" elements
//     const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
//     // Check if there are any navbar burgers
//     if ($navbarBurgers.length > 0) {
  
//       // Add a click event on each of them
//       $navbarBurgers.forEach( el => {
//         el.addEventListener('click', () => {
  
//           // Get the target from the "data-target" attribute
//           const target = el.dataset.target;
//           const $target = document.getElementById(target);
  
//           // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//           el.classList.toggle('is-active');
//           $target.classList.toggle('is-active');
  
//         });
//       });
//     }
  
//   });


//WHITE SCROLL
$(document).ready(function() {

    $(window).scroll(function() {
      if ($(window).scrollTop() > 10) {
        $(".navbar").addClass("bg-dark");
      } else {
        $(".navbar").removeClass("bg-dark");
      }
    });

    // $(".navbar-toggler").click(function() {
    //   if (!$(".navbar-collapse").hasClass("show")) {
    //     $(".navbar").addClass("bg-dark");
    //   } else {
    //     if ($(window).scrollTop() < 10) {
    //       $(".navbar").removeClass("bg-dark");
    //     } else {
    //     }
    //   }
    // });

});


//  $(function() {
//     var header = $(".navbar");
  
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
//         if (scroll >= 50) {
//             header.addClass("bg-dark");
//         } else {
//             header.removeClass("bg-dark");
//         }
// });
// });







  