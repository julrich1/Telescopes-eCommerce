let slideIndex = 1;
let slideTimer = null;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  clearInterval(slideTimer);

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  if (slideIndex> slides.length) {slideIndex = 1;}

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-slide";

  slideIndex++;
  slideTimer = setInterval(showSlides, 3000);
}

// COMMENT: Remove all commented out code
// function showSlidesTimer() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex> slides.length) {slideIndex = 1;}
//     slides[slideIndex-1].style.display = "block";
//     slideTimer = setTimeout(showSlides, 3000);
// }
