$(function() {

  // Toggle menu
	$(".toggle").click(function () {
    $(this).closest("body").toggleClass("active");
  });

   // Magnific Popup
   $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  // Mail php
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $(".success").addClass("visible");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
        $(".success").removeClass("visible");
        $.magnificPopup.close();
      }, 3500);
    });
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });

  $("a.scroll").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

});
