hoverGnb();
$(window).on('resize', function () {
  hoverGnb();
  if ($(window).width() >= 1024) {
    $('#gnb > ul > li > ul').removeAttr('style');
  }
});

function hoverGnb() {
  $('#gnb > ul > li > a').on('mouseenter focus', function () {
    if ($(window).width() > 850) {
      $('#gnb > ul > li > ul').css({
        'display': 'none'
      });
      $(this).next().css({
        'display': 'block'
      });
      $('#header').addClass('open');
    }
  });

  $('#header').on('mouseleave', function () {
    if ($(window).width() > 850) {
      $('#gnb > ul > li > ul').css({
        'display': 'none'
      });
      $('#header').removeClass('open');
    }

  });
}

// 모바일 gnb 오픈
$('#header a.menu').on('click', function () {
  $(this).toggleClass('close');
  $('#gnb').toggleClass('open');

  if ($('#gnb').hasClass("open") == true) {
    $('.gnb-box').attr({'tabindex': 0}).focus();

    $('.gnb-box').before('<a href="#"></a>').after('<a href="#"></a>');
    $('.gnb-box').prev().on('focusin', function() {
      $('.gnb-box').find('.last-focus').focus();
    });
    $('.gnb-box').next().on('focusin', function() {
      $('.gnb-box').focus();
    });
  }
  else if ($('#gnb').hasClass("open") == false) {
    $('.gnb-box').prev().remove();
    $('.gnb-box').next().remove();
  }
});


//사이드메뉴
clickSideMenu();
function clickSideMenu() {
  $('#side-menu-nav > ul > li > a').addClass("displaynone");
  //닫힌 사이드메뉴 열기
  $('#side-menu-nav').on('click', function () {
    if ($(window).width() > 850) {
      $(this).toggleClass('close');
      $(this).toggleClass('open');
      $('#side-menu-nav ul').toggleClass('open');
      $('#side-menu-nav > ul > li > a').removeClass("displaynone");
    }
  });

  //열린 사이드메뉴에 페이지 네비게이터 추가
  $('#side-menu-nav > ul > li > a').on('click', function() {
    var index = $('#side-menu-nav > ul > li').index($(this).parent());
    showPage(index + 1);

  });
}

//페이지 네비게이터
function showPage(n) {
  var scrollAmt = $('section.aboutPage:eq(' + (n - 1) + ')').offset().top;
  $('html').stop(true).animate({'scrollTop': scrollAmt}, 500, function() {
    //isBlocked = false;
  });
}