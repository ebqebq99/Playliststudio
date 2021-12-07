function findParent(el, className) {
  var check = el.parentNode.classList.contains(className);

  if (check === true) {
    return el.parentNode;
  } else {
    return findParent(el.parentNode, className);
  }
}

function bindingTabEvent(wrap) {
  var wrapEl = document.querySelectorAll(wrap);

  wrapEl.forEach(function (tabArea) {
    var btn = tabArea.querySelectorAll('.btn_tab');

    btn.forEach(function (item) {
      item.addEventListener('click', function () {
        var parent = findParent(this, 'tab_area');
        var idx = this.dataset['idx'];
        var depth = this.dataset['depth'];
        var btnArr = parent.querySelectorAll('.btn_tab[data-depth="' + depth + '"]');
        var contentArr = parent.querySelectorAll('.content_area[data-depth="' + depth + '"]');

        btnArr.forEach(function (btn) {
          btn.classList.remove('act');
        });
        this.classList.add('act');
        contentArr.forEach(function (content) {
          content.classList.remove('act');
        });
        parent.querySelector('.content_area[data-idx="' + idx + '"][data-depth="' + depth + '"]').classList.add('act');
      });
    });
  });
}

bindingTabEvent('.tab_wrap');