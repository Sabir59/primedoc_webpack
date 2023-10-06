$(document).ready(function () {
  //   Loader Removal
  // setTimeout(() => {
  $(".loader-container").fadeOut("slow", function () {
    $(this).remove();
  });
  // Slick Slider Starts
  $(".testimonial-slider").slick({
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    gap: 20,
  });
  // Slick Slider Ends

  // Mobile Navigation
  $(".icon_menu").click(function () {
    $(".mobile-menu").addClass("translate-x-0");
  });
  $(".mobile_icon_close").click(function () {
    $(".mobile-menu").removeClass("translate-x-0");
  });

  $(".mobile_droptoggler").click(function () {
    $(".mobile_dropdown").not($(this).next(".mobile_dropdown")).slideUp();
    $(this).next(".mobile_dropdown").slideToggle();
  });

  $(".accordion__item").click(function () {
    var currentP = $(this).find("p");
    currentP.slideToggle();

    // Toggle the image source for the clicked accordion item
    var currentImg = $(this).find("img");
    currentImg.attr("src", function (i, src) {
      return src === "assets/images/accordion_plus.png"
        ? "assets/images/accordion_expanded.png"
        : "assets/images/accordion_plus.png";
    });

    // Slide up all other p elements and reset their image sources
    $(this).siblings().find("p").slideUp();
    $(this).siblings().find("img").attr("src", "assets/images/accordion_plus.png");
  });

  $(".search_icon_toggler").click(function () {
    $(".search-form-container").removeClass("invisible opacity-0");
    $(".searchform").removeClass("invisible translate-y-4 opacity-0");
    $(".demo-form").addClass("translate-y-8 opacity-0");
  });

  $(".close-search").click(function (event) {
    $(".search-form-container").addClass("invisible opacity-0");
    $(".searchform").addClass("invisible translate-y-4 opacity-0");
    $(".demo-form").addClass("translate-y-8 opacity-0");
  });

  $(".close-icon-form").click(function (event) {
    $(".demo-form-container").addClass("invisible");
    $(".practice-form-container").addClass("invisible");
    $(".demo-form").addClass("translate-y-8 opacity-0");
  });

  $(".demo-form-toggler").click(function (event) {
    $(".demo-form-container").removeClass("invisible");
    $(".demo-form").removeClass("translate-y-8 opacity-0");
  });

  $(".pr-form-toggler").click(function (event) {
    $(".practice-form-container").removeClass("invisible");
    $(".demo-form").removeClass("translate-y-8 opacity-0");
  });

  $(".demo-form-container, .search-form-container, .practice-form-container").click(function (
    event
  ) {
    if (event.target === this) {
      $(this).addClass("invisible");
      $(".searchform").addClass("invisible translate-y-4 opacity-0");
      $(".demo-form").addClass("translate-y-8 opacity-0");
    }
  });

  AOS.init({
    duration: 800,
    offset: 60,
    startEvent: "DOMContentLoaded",
    once: true,
  });
});
