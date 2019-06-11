jQuery(window).bind('scroll', function () {
  if ($(window).scrollTop() > 80) {
    $('#TopMenu').addClass('fixed-shadow', 1000);
  } else {
    $('#TopMenu').removeClass('fixed-shadow', 1000);
  }

  if ($(window).scrollTop() > 220) {
    $("#to-top").css("bottom", "20px");
  } else {
    $("#to-top").css("bottom", "-60px");
  }

  var scrollDistance = $(window).scrollTop();
  $('.page-section').each(function(i) {
    if ($(this).position().top-20 <= scrollDistance) {
      $('.navbar-nav li.active').removeClass('active');
      $('.navbar-nav li').eq(i).addClass('active');
    }
  });
});
function toTop () {
  $("html, body").animate({ scrollTop: 0 }, 2000)
}

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 10
        }, 1000);
    }
});

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



$("#timeline-control li").on("click", function(event) {
  let self = $(this);
  let timelineID = $(this).find("a").attr("data-date");

  $("#timeline-content").find("li").each(function(){
    if ($(this).attr("data-date") === timelineID) {
      $("#timeline-control li").removeClass("selected",  "slow" );
      $("#timeline-content").find("li").hide( "slow" );
      self.addClass("selected", "slow" );
      $(".filling-line").animate({
        height: self.position().top + "px"
      }, 500);

      $(this).show( "slow" );
    }
  })
});