$(document).ready(function(){
  $(".square").addClass('animation',2000, "easeOutBounce");
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

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":1499.3805191013182}},"color":{"value":"#ffc02f"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#ffc02f"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":6,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffc02f","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

// var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // ——————————————————————————————————————————————————
// var TextScramble = function () {
//   function TextScramble(el) {_classCallCheck(this, TextScramble);
//     this.el = el;
//     this.chars = '!<>-_\\/[]{}—=$+*^?#________';
//     this.update = this.update.bind(this);
//   }_createClass(TextScramble, [{ key: 'setText', value: function setText(
//     newText) {var _this = this;
//       var oldText = this.el.innerText;
//       var length = Math.max(oldText.length, newText.length);
//       var promise = new Promise(function (resolve) {return _this.resolve = resolve;});
//       this.queue = [];
//       for (var i = 0; i < length; i++) {
//         var from = oldText[i] || '';
//         var to = newText[i] || '';
//         var start = Math.floor(Math.random() * 40);
//         var end = start + Math.floor(Math.random() * 40);
//         this.queue.push({ from: from, to: to, start: start, end: end });
//       }
//       cancelAnimationFrame(this.frameRequest);
//       this.frame = 0;
//       this.update();
//       return promise;
//     } }, { key: 'update', value: function update()
//     {
//       var output = '';
//       var complete = 0;
//       for (var i = 0, n = this.queue.length; i < n; i++) {var _queue$i =
//         this.queue[i],from = _queue$i.from,to = _queue$i.to,start = _queue$i.start,end = _queue$i.end,char = _queue$i.char;
//         if (this.frame >= end) {
//           complete++;
//           output += to;
//         } else if (this.frame >= start) {
//           if (!char || Math.random() < 0.28) {
//             char = this.randomChar();
//             this.queue[i].char = char;
//           }
//           output += '<span class="dud">' + char + '</span>';
//         } else {
//           output += from;
//         }
//       }
//       this.el.innerHTML = output;
//       if (complete === this.queue.length) {
//         this.resolve();
//       } else {
//         this.frameRequest = requestAnimationFrame(this.update);
//         this.frame++;
//       }
//     } }, { key: 'randomChar', value: function randomChar()
//     {
//       return this.chars[Math.floor(Math.random() * this.chars.length)];
//     } }]);return TextScramble;}();


// // ——————————————————————————————————————————————————
// // Example
// // ——————————————————————————————————————————————————

// // set TextScramble
//   var phrases = ['REV/GROUP'];
//   var el = document.querySelector('h1.title');
//   var fx = new TextScramble(el);
//   var counter = 0;
//   var next = function next() {
//     fx.setText(phrases[counter]).then(function () {
//     });
//     counter = 1;
//   };
//   next();

