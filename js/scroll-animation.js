const TriggerMargin = 300;

$(document).ready(function(){
  justshowAnimation('.sclljs');
});

$(window).on('scroll resize', function () {
  var scrollAmt = $(document).scrollTop();
  scrollTopBottom(scrollAmt);
  showAnimation('.sclls', scrollAmt);
  scrollAnimation('.scll', scrollAmt);
});

//scroll하면 div#top-bottom 등장
function scrollTopBottom(scrollAmt) {
  if (scrollAmt > (TriggerMargin-100)) {
    $('#scroll-top-bottom').addClass('displayblock');
  }
  else{
    $('#scroll-top-bottom').removeClass('displayblock');
  }
  if (scrollAmt > TriggerMargin) {
    $('#scroll-top-bottom').addClass('opacity1');
    $('#scroll-top').on('click', function () {
      $('html, body').stop().animate({
        'scrollTop': 0
      }, 500, function () {});
    });
    $('#scroll-bottom').on('click', function () {
      $('html, body').stop().animate({
        'scrollTop': $(document).height()
      }, 500, function () {});
    });
  } else {
    $('#scroll-top-bottom').removeClass('opacity1');
  }
}

//그냥 등장 애니메이션
function justshowAnimation(selector) {
  $(selector).each(function() {
    var $selector = $(this);
      $selector.addClass('show');
  });
}

//조금이라도 스크롤하면 등장 애니메이션
function showAnimation(selector, scrollAmt) {
  $(selector).each(function() {
    var $selector = $(this);

    if (scrollAmt ===0){
      $selector.removeClass('show');
    }
    else {
      $selector.addClass('show');
    }
  });
}

//scroll하면 등장 애니메이션
function scrollAnimation(selector, scrollAmt) {
  $(selector).each(function() {
    var $selector = $(this);
    var start = $selector.offset().top - $(window).height();
    var end = $selector.offset().top + $selector.outerHeight();
    
    if (scrollAmt < start) {
      $selector.removeClass('up show');
      $selector.addClass('down');
    } else if (scrollAmt > end) {
      $selector.removeClass('down show');
      $selector.addClass('up');
    } else {
      $selector.removeClass('down up');
      $selector.addClass('show');
    }
  });
}