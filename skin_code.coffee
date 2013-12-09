for container in window.parent.document.getElementsByClassName('container')
  container.innerHTML = """
    <a class="ba_clickable_bg_left" href="#{CLICK_URL_UNESC_DEST_URL}" target="_blank"></a>
    <a class="ba_clickable_bg_right" href="#{CLICK_URL_UNESC_DEST_URL}" target="_blank"></a>
  """ + container.innerHTML

window.parent.document.head.innerHTML += """
  <style type="text/css">
    body {
      background: #FBF500 url('#{FILE_JPG1}') fixed no-repeat center top;
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