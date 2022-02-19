$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  //   toggle menu/navbar Sscript
  $(".menu-button").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-button i").toggleClass("active");
  });
});

// MODAL IMAGE
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
//-------------------------------------------------------------------------
// IMAGE SLIDER FOR JAVA PROJECT
// let sliderImages = document.querySelectorAll(".slide"),
//   arrowLeft = document.querySelector("#arrow-left"),
//   arrowRight = document.querySelector("#arrow-right"),
//   current = 0;

// // Clear all images
// function reset() {
//   for (let i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.display = "none";
//   }
// }

// // Initial slide
// function startSlide() {
//   reset();
//   sliderImages[0].style.display = "block";
// }

// // Show previous
// function slideLeft() {
//   reset();
//   sliderImages[current - 1].style.display = "block";
//   current--;
// }

// // Show next
// function slideRight() {
//   reset();
//   sliderImages[current + 1].style.display = "block";
//   current++;
// }

// // Left arrow click
// arrowLeft.addEventListener("click", function () {
//   if (current === 0) {
//     current = sliderImages.length;
//   }
//   slideLeft();
// });

// // Right arrow click
// arrowRight.addEventListener("click", function () {
//   if (current === sliderImages.length - 1) {
//     current = -1;
//   }
//   slideRight();
// });

// startSlide();
