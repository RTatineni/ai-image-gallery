// function openModal() {
//   $("#myModal").show() = "block";
// }

// function closeModal() {
//   $("#myModal").css("display", "none");
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = $(".mySlides");
//   var dots = $(".demo");
//   var captionText = $("#caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].css("display", "none");
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].attr("class") = dots[i].attr("class").replace(" active", "");
//   }
//   slides[slideIndex-1].show() = "block";
//   dots[slideIndex-1].attr("class") += " active";
//   captionText.html = dots[slideIndex-1].alt;
// }

// $('#myCarousel').on('slide.bs.carousel', function () {
//   // do something...
// })

$(function(){

  $('.carousel-control').click(function(e){
      e.preventDefault();
      $("#aaron-modal").carousel( $(this).data() );
  });

});