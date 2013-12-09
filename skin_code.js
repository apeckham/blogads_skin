// Generated by CoffeeScript 1.6.3
(function() {
  var container, _i, _len, _ref;

  _ref = window.parent.document.getElementsByClassName('container');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    container = _ref[_i];
    container.innerHTML = ("<a class=\"ba_clickable_bg_left\" href=\"" + dfpMacros.clickUrl + "\" target=\"_blank\"></a>\n<a class=\"ba_clickable_bg_right\" href=\"" + dfpMacros.clickUrl + "\" target=\"_blank\"></a>") + container.innerHTML;
  }

  $(window.parent.document.head).append("<style type=\"text/css\">\n  body {\n    background: #FBF500 url('" + dfpMacros.imageUrl + "') fixed no-repeat center top;\n  }\n\n  .container {\n    position: relative;\n    overflow-x: visible !important;\n  }\n\n  .ba_clickable_bg_left, .ba_clickable_bg_right {\n    position: absolute;\n    height: 100%;\n    width: 160px;\n    display: inline-block;\n    z-index: 2;\n  }\n\n  .ba_clickable_bg_left {\n    left: -160px;\n  }\n\n  .ba_clickable_bg_right {\n    left: 960px;\n  }\n</style>");

}).call(this);
