$(document).ready(function () {
  let slideIndex = 1;
  displaySlide(slideIndex);

  $(".previous").click(function () {
    moveSlides(-1);
  });

  $(".next").click(function () {
    moveSlides(1);
  });

  $(".footerdot").click(function () {
    activeSlide($(this).index() + 1);
  });

  function moveSlides(n) {
    displaySlide((slideIndex += n));
  }

  function activeSlide(n) {
    displaySlide((slideIndex = n));
  }

  /* Main function */
  function displaySlide(n) {
    let i;
    let totalslides = $(".slide");
    let totaldots = $(".footerdot");

    if (n > totalslides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = totalslides.length;
    }
    totalslides.css("display", "none");
    totaldots.removeClass("active");
    $(totalslides[slideIndex - 1]).css("display", "block");
    $(totaldots[slideIndex - 1]).addClass("active");
  }
});
