(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
//
//  // Show the navbar when the page is scrolled up
//  var MQL = 992;
//
//  //primary navigation slide-in effect
//  if ($(window).width() > MQL) {
//    var headerHeight = $('#mainNav').height();
//    $(window).on('scroll', {
//        previousTop: 0
//      },
//      function() {
//        var currentTop = $(window).scrollTop();
//        //check if user is scrolling up
//        if (currentTop < this.previousTop) {
//          //if scrolling up...
//          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
//            $('#mainNav').addClass('is-visible');
//          } else {
//            $('#mainNav').removeClass('is-visible is-fixed');
//          }
//        } else if (currentTop > this.previousTop) {
//          //if scrolling down...
//          $('#mainNav').removeClass('is-visible');
//          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
//        }
//        this.previousTop = currentTop;
//      });
//  }

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');

   add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + '50px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if

});
// DOMContentLoaded  end
