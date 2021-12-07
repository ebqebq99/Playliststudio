window.onload = function () {
  resizeBg(".bg-main-visual-content");
  resizeBg_m(".bg-main-visual-content-m");

  window.onresize = function (event) {
    resizeBg(".bg-main-visual-content");
    resizeBg_m(".bg-main-visual-content-m");
  }
}

function resizeBg(id) {
  var nowWidth = window.innerWidth;
  var nowHeight = window.innerHeight;
  var windowRatio = nowWidth / nowHeight;

  var target = document.querySelector(id);
  if (target != null) {
    if (windowRatio < 1.77) {
      target.style.width = (nowHeight * 1.77) + "px";
      target.style.height = nowHeight + "px";
    } else {
      target.style.width = "100%";
      target.style.height = "100%";
    }
  }
}

function resizeBg_m(id) {
  var nowWidth = window.innerWidth;
  var nowHeight = window.innerHeight;
  var windowRatio = nowWidth / nowHeight;

  var target = document.querySelector(id);
  if (target != null) {
    target.style.width = (nowHeight * 1.05) + "px";
    target.style.height = nowHeight + "px";
  }
}