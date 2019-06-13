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

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":1499.3805191013182}},"color":{"value":"#ffc02f"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#ffc02f"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":6,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffc02f","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles');