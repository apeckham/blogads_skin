$(window.parent.document).find('.container').prepend """
  <a class="ba_clickable_bg_left" href="#{dfpMacros.clickUrl}" target="_blank"></a>
  <a class="ba_clickable_bg_right" href="#{dfpMacros.clickUrl}" target="_blank"></a>
"""

$(window.parent.document.head).append """
  <style type="text/css">
    body {
      background: #FBF500 url('#{dfpMacros.imageUrl}') fixed no-repeat center top;
    }

    .container {
      position: relative;
      overflow-x: visible !important;
    }

    .ba_clickable_bg_left, .ba_clickable_bg_right {
      position: absolute;
      height: 100%;
      width: 160px;
      display: inline-block;
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