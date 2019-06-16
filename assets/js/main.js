$(document).ready(function(){
  $(".square").addClass('animation',2000, "easeOutBounce");
  var merchant_key = 'Revollet 12c940cfd8e2ae089c58a61cad99d593e7373cf7:7177c4d5c554a9c1eca98f562a1b45193fbc102c2275c58221f5c99010ab769c'
  get_news(merchant_key, 'news-items'); 
  // new WOW().init();
});
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

function showNewsModal(){
  $(".btn-detail").on("click", function(){
    let idNews = $(this).attr("data-news");  
    let currentNews = $(".card-news[data-news='" + idNews +"']");
    let idCardNews = currentNews[0]["id"];

    let srcImage = $("#"+idCardNews).find(".img-wrapper img").attr("src");
    let htmlTitle = $("#"+idCardNews).find(".content .title").html();
    let htmlDescription = $("#"+idCardNews).find(".news-description").html();
    
    $("#modal-news-detail").find(".img-wrapper img").attr("src", srcImage);
    $("#modal-news-detail").find(".modal-header .modal-title").html(htmlTitle);
    $("#modal-news-detail").find(".modal-body").html(htmlDescription);
  })
}
function get_news(key, news_id){
  $.ajax({
    url: "https://prod-staging.revollet.io/api/v2/news",
    type: "GET",
    headers: {
      'Authorization': key,
    },
    beforeSend: function(xhr){xhr.setRequestHeader('Authorization', key);},
    success: function(data) {
      if(data.news.length > 0) {
        var str_news = '';
        $.each(data.news, function(i, news) {
          str_news += '<div class=\"col-md-4\"><article id=\"card-news-'+news.id+'\" data-news=\"'+news.id+'\"  class=\"wow fadeInRight card-news\"><a data-toggle=\"modal\" data-target=\"#modal-news-detail\" data-news=\"'+news.id+'\" class=\"btn-detail\"><div class=\"img-wrapper box-shadow\"><img src=\"https://prod-staging.revollet.io'+news.photo+'\" alt=\"\" class=\"img-fluid\"></div></a><div class=\"content\"><p class=\"date\">'+news.created_at+'</p><a data-toggle=\"modal\" data-target=\"#modal-news-detail\" data-news=\"'+news.id+'\" class=\"btn-detail\"><h3 class=\"title limit-2-line\">'+news.title+'</h3></a><div class=\"brief\">'+news.description+'</div></div><div class=\"hidden news-description\" data-news=\"'+news.id+'\">'+news.body+'</div></article></div>';
        });
        $("#"+news_id).html(str_news)
      }
      showNewsModal();
    }
  });
}



particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":1499.3805191013182}},"color":{"value":"#ffc02f"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#ffc02f"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":6,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffc02f","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


