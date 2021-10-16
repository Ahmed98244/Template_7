$(function () {
  "use strict";

  // add niceScroll plugin
  $("body").niceScroll({
    cursorcolor: "#f7600e",
    cursorwidth: 10,
    cursorborder: "1px solid #f7600e",
    zindex: "5",
    background: "rgba(0,0,0, 0.3)",
  });

  // change header height
  $(".header").height($(window).height());

  // scroll to features
  $(".header .arrow i").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".features").offset().top,
      },
      1000
    );
  });

  // work sectiom show hidden items
  $(".show").click(function () {
    $(".work .hidden").fadeIn(1000);
  });

  // testimonials
  var leftArow = $(".testi .left"),
    rightArrow = $(".testi .right");

  function checkClient() {
    $(".client:first").hasClass("active")
      ? leftArow.fadeOut()
      : leftArow.fadeIn();
    $(".client:last").hasClass("active")
      ? rightArrow.fadeOut()
      : rightArrow.fadeIn();
  }
  checkClient();

  $(".testi i").click(function () {
    if ($(this).hasClass("right")) {
      $(".testi .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
        checkClient();
      });
    } else {
      $(".testi .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();
        checkClient();
      });
    }
  });
});
