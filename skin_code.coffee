$(window.parent.document).find('#outer').prepend """
  <a class="ba_clickable_bg_left" href="#{dfpMacros.clickUrl}" target="_blank"></a>
  <a class="ba_clickable_bg_right" href="#{dfpMacros.clickUrl}" target="_blank"></a>
"""

$(window.parent.document.head).append """
  <style type="text/css">
    body {
      background: #FBF500 url('#{dfpMacros.imageUrl}') fixed no-repeat center top;
    }

    #outer {
      position: relative;
      overflow-x: visible;
    }

    .ba_clickable_bg_left, .ba_clickable_bg_right {
      width: 160px;
      height: 100%;
      display: inline-block;
      position: absolute;
      z-index: 2;
    }

    .ba_clickable_bg_left {
      left: -160px;
    }

    .ba_clickable_bg_right {
      left: 960px;
    }
  </style>
"""