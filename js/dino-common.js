// DinoWorks Common JS
$(document).ready(function() {
  preventDefaultAnchor();
  setCurrentNav();

});


function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}

function setCurrentNav() {
  var bodyClass = $('body').attr('class');
  var classArray = bodyClass.split(' ');
  if (classArray[0] === 'main') return false;
  
  $('#gnb > ul > li').each(function() {
    if ($(this).attr('data-menu') === classArray[1]) {
      $(this).addClass('on');
      return false;
    }
  });
  
  $('#gnb > ul > li.on > ul > li').each(function() {
    if ($(this).attr('data-menu') === classArray[2]) {
      $(this).addClass('on');
      return false;
    }
  });
}

