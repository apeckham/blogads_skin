// Generated by CoffeeScript 1.6.3
(function() {
  var addClickableBg, addCss, container, doc, _i, _len, _ref;

  doc = window.parent.document;

  addClickableBg = function(container, className) {
    var a;
    a = doc.createElement('a');
    a.className = className;
    a.href = '#{CLICK_URL_UNESC_DEST_URL}';
    a.target = '_blank';
    return container.insertBefore(a, container.firstChild);
  };

  _ref = doc.getElementsByClassName('container');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    container = _ref[_i];
    addClickableBg(container, 'ba_clickable_bg_left');
    addClickableBg(container, 'ba_clickable_bg_right');
  }

  addCss = function(css) {
    var style;
    style = doc.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }
    return doc.head.appendChild(style);
  };

  addCss("body {\n  background: #FBF500 url('" + FILE_JPG1 + "') fixed no-repeat center top;\n}\n\n.container {\n  position: relative;\n  overflow-x: visible !important;\n}\n\n.ba_clickable_bg_left, .ba_clickable_bg_right {\n  position: absolute;\n  height: 100%;\n  width: 160px;\n  display: inline-block;\n  z-index: 2;\n}\n\n.ba_clickable_bg_left {\n  left: -160px;\n}\n\n.ba_clickable_bg_right {\n  left: 960px;\n}");

}).call(this);
