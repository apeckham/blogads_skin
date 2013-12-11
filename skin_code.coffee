doc = window.parent.document

addClickableBg = (container, className) ->
  a = doc.createElement 'a'
  a.className = className
  a.href = CLICK_URL
  a.target = TARGET_WINDOW
  container.insertBefore a, container.firstChild

for container in doc.getElementsByClassName('container')
  addClickableBg container, 'ba_clickable_bg_left'
  addClickableBg container, 'ba_clickable_bg_right'

addCss = (css) ->
  style = doc.createElement 'style'
  style.type = 'text/css'
  if style.styleSheet
    style.styleSheet.cssText = css
  else
    style.appendChild doc.createTextNode(css)
  doc.head.appendChild style

addCss """
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
"""