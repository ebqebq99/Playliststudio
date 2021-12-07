$('.expand-button').on('click', function () {
  $(this).toggleClass('open');
  if($(this).hasClass("stay")===false){
    $(this).addClass('down');
  }
  $(this).siblings(".expand-content").toggleClass('open');
});
