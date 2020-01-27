function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'flex') ? 'none' : 'flex';
}


var modal = document.getElementById('write-us');

var btn = document.getElementById("write-but");

var span = document.getElementsByClassName("imgclose")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
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
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 1;
showDeli(slideIndex);

// Thumbnail image controls
function currentDeli(n) {
  showDeli(slideIndex = n);
}

function showDeli(n) {
    var i;
    var slides = document.getElementsByClassName("deli");
    var dots = document.getElementsByClassName("button");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
  }

  function search(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'initial') ? 'none' : 'initial';
}

var modal = document.getElementById('map-modal');

var btn = document.getElementById("map-btn");

var span = document.getElementsByClassName("imgclose")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}