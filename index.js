$(document).ready(function () {
  $(".top").click(function () {
    $('html, body').stop().animate({
      scrollTop: $("#nav").offset().top
    }, 500);
  });
});
// $(document).ready(function () {
//   $("#about").click(function () {
//     $('html, body').animate({
//       scrollTop: $("#about").offset().top
//     }, 500);
//   });
// });
$(document).ready(function () {
  $("#portfolio-a").click(function () {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 500);
  });
});
$(document).ready(function () {
  $("#contact-a").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 500);
  });
});

// $(document).ready(function () {
//
//   var array = ["#about", "#portfolio", "#contact"];
//   var nav = {
//     element: '#about', '#about-container',
//   }
//   function scroll() {
//     $('html, body').animate({
//       scrollTop: $("").offset().top
//     }, 500);
//   };
//
//   for (var i = 0; i < array.length; i++) {
//     array[i]
//   }
// });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
