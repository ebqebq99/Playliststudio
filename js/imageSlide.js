var slide0 = new ImageSlideInfinite('playlist-slider', {
  isTimerOn:true
});

var slide9 = new ImageSlideInfinite('about-slider', {
  isTimerOn:true
});

var slide2 = new ImageSlideInfinite('drama-main-visual-mobile', {
  isTimerOn:true,
  timerSpeed:5000
});

var slide3 = new ImageSlideInfinite('drama-main-visual', {
  isTimerOn:true,
  timerSpeed:5000
});

var slide10 = new ImageSlideInfinite('drama-subpage', {
  isTimerOn:true,
  timerSpeed:5000
});

var slide7 = new ImageSlideInfinite('commercemd-main-visual-mobile', {
  isTimerOn:true,
  timerSpeed:5000
});

var slide8 = new ImageSlideInfinite('commercemd-main-visual', {
  isTimerOn:true,
  timerSpeed:5000
});

var slide4 = new ImageSlideInfinite('basic-imgSlide', {
  isTimerOn:true
});
var slide5 = new ImageSlideInfinite('multiple-imgSlide', {
  isTimerOn:true
});

function ImageSlideInfinite(id, options) {
  var $selector = $('#' + id);
  var numSlide = $selector.find('.slide li').length;
  var slideNow = 0;
  var slidePrev = 0;
  var slideNext = 0;
  var slideFirst = (options === undefined || options.slideFirst === undefined) ? 1 : options.slideFirst;
  var timerId = '';
  var isTimerOn = (options === undefined || options.isTimerOn === undefined) ? false : options.isTimerOn;
  var timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;
  var startX = 0;
  var startY = 0;
  var delX = 0;
  var delY = 0;
  var offsetX = 0;
  var isBlocked = false;
  var direction = '';
  var onAnimation = false;

  setInitialStatus();
  setEvent();

  function setInitialStatus() {
    $selector.find('.slide li').each(function(i) {
      // $(this).css({'left': (i * 100) + '%', 'display': 'block'});
      $selector.find('.slideIndicator').append('<li><a href="#">' + (i + 1) + '번 슬라이드</a></li>\n');
    });
    if (isTimerOn === true) {
      $selector.find('a.play').addClass('on');
    } else {
      $selector.find('a.play').removeClass('on');
    }
    setSlide(slideFirst);
  }

  function setEvent() {
    $selector.find('.slideIndicator li a').on('click', function() {
      stopTimer();
      var index = $selector.find('.slideIndicator li').index($(this).parent());
      setSlide(index + 1);
    });

    $selector.find('a.prev').on('click', function() {
      stopTimer();
      //$(this).find('img').stop(true).animate({'left': '-10px'}, 80).animate({'left': 0}, 160);
      showPrev();
    });

    $selector.find('a.next').on('click', function() {
      stopTimer();
      //$(this).find('img').stop(true).animate({'right': '-10px'}, 80).animate({'right': 0}, 160);
      showNext();
    });

    $selector.find('a.play').on('click', function() {
      if (isTimerOn === true) {
        stopTimer();
      } else {
        startTimer();
      }
    });
  }

  function removeEvent() {
    $selector.find('.slideIndicator li a, a.prev, a.next, a.play').off('click');
    $selector.find('.slide').off('mousedown touchstart');
  }

  function stopTimer() {
    clearTimeout(timerId);
    $selector.find('a.play').removeClass('on');
    isTimerOn = false;
    $selector.find('span.bar').remove();
  }

  function startTimer() {
    timerId = setTimeout(function() {showNext();}, timerSpeed);
    $selector.find('a.play').addClass('on');
    isTimerOn = true;
    $selector.append('<span class="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
  }

  function restartTimer() {
    clearTimeout(timerId);
    $selector.find('span.bar').remove();
    timerId = setTimeout(function() {showNext();}, timerSpeed);
    $selector.append('<span class="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
  }

  function showPrev() {
    $selector.find('.slide').css({'transition': 'left 0.5s', 'left': '100%'}).one('transitionend', function() {
      setSlide(slidePrev);
    });
  }

  function showNext() {
    $selector.find('.slide').css({'transition': 'left 0.5s', 'left': '-100%'}).one('transitionend', function() {
      setSlide(slideNext);
    });
  }

  function showNow() {
    $selector.find('.slide').css({'transition': 'left 0.5s', 'left': 0}).one('transitionend', function() {
      setSlide(slideNow);
    });
  }

  function setSlide(n) {
    slideNow = n;
    slidePrev = (n === 1) ? numSlide : (n - 1);
    slideNext = (n === numSlide) ? 1 : (n + 1);
    $selector.find('.slide li').css({'display': 'none', 'transition': 'none'});
    $selector.find('.slide').css({'transition': 'none', 'left': 0});
    $selector.find('.slide li:eq(' + (slidePrev - 1) + ')').css({'display': 'block', 'left': '-100%'});
    $selector.find('.slide li:eq(' + (slideNow - 1) + ')').css({'display': 'block', 'left': 0});
    $selector.find('.slide li:eq(' + (slideNext - 1) + ')').css({'display': 'block', 'left': '100%'});
    $selector.find('.slideIndicator li').removeClass('on');
    $selector.find('.slideIndicator li:eq(' + (slideNow - 1) + ')').addClass('on');
    if (isTimerOn === true) restartTimer();
  }
}