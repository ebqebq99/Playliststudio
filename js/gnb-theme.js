$(window).on('scroll resize', function () {
  var scrollAmt = $(document).scrollTop();
  checkScroll(scrollAmt);
});

//scroll하면 #header 테마 변경
function checkScroll(scrollAmt) {
  if (scrollAmt > TriggerMargin) {
    $('#header').addClass('white');
  } else {
    $('#header').removeClass('white');
  }
}
