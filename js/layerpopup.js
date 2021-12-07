function openLayerPopup(id, closenum,videourl, returnElement){
  var $popup = $("#"+id);
  var $close = $("#close-"+closenum);
  var $mask = $(".layer-mask");
  var $button = $(returnElement);

  var newvVideourl = '<iframe id="videourl" src=' + videourl + '></iframe>';
  document.querySelector(".videowrap").innerHTML = newvVideourl;

  $mask.addClass("on");
  $popup.addClass("on");
  $close.addClass("on");

  $popup.prepend('<a href="#" class="start ir-hidden">팝업창 시작</a>');
  $popup.prepend('<a href="#" class="goto-end ir-hidden">팝업창 시작</a>');
   
  $popup.append('<a href="#" class="end ir-hidden">팝업창 끝</a>');
  $popup.append('<a href="#" class="goto-start ir-hidden">팝업창 끝</a>');
  
  $popup.find("a.start").trigger("focus");
  
  $popup.find(".close").on("click", function(){
    popupClose();
    $popup.find(".close").off("click");
  });

  $popup.find("a.goto-end").on("focus", function(){
    $popup.find("a.end").trigger("focus");
  });
  $popup.find("a.goto-start").on("focus", function(){
    $popup.find("a.start").trigger("focus");
  });

  function popupClose(){
    $button.trigger("focus");
    $popup.find("a.start, a.end, a.goto-end, a.goto-start").remove();
    $popup.removeClass("on");
    $mask.removeClass("on");
    $close.removeClass("on");
  };

}