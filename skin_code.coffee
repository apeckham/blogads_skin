doc = window.parent.document

trackClickableBg = (container) ->
  img = doc.createElement('img')
  img.src = 'http://tracer.blogads.com/click.php?zoneid=' + MACROS.tracer_id + '_click_on_skin&rand=' + Math.floor(Math.random() * 99999999)
  img.style.cssText = 'width: 1px; height: 1px; top: 0px; left: 0px; position: absolute; border: none;'
  container.insertBefore img, container.firstChild

addClickableBg = (container, className) ->
  a = doc.createElement 'a'
  a.className = className
  a.href = MACROS.click_url
  a.target = MACROS.target_window
  a.onclick = -> 
    trackClickableBg doc.getElementById('outer')
    return
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
body {background: #{MACROS.background_color} url('#{MACROS.file_skin}') fixed no-repeat center top;}
#logo {background: transparent url('#{MACROS.file_masthead}') no-repeat center top !important; height: 93px !important; width: 322px !important; margin: 0 10px 1px 10px !important;}
.container {position: relative; overflow-x: visible !important;}
.ba_clickable_bg_left, .ba_clickable_bg_right {position: absolute; height: 100%; width: 160px; display: inline-block; z-index: 2;}
.ba_clickable_bg_left {left: -160px;}
.ba_clickable_bg_right {left: 960px;}
"""

if typeof (MACROS.impression_tracker_skin) != 'undefined' && MACROS.impression_tracker_skin != ''
 document.write '<img id="ba_impression_tracker_skin" src="' + MACROS.impression_tracker_skin + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>'

if typeof (MACROS.impression_tracker_masthead) != 'undefined' && MACROS.impression_tracker_masthead != ''
 document.write '<img id="ba_impression_tracker_masthead" src="' + MACROS.impression_tracker_masthead + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>'

if typeof (MACROS.tracer_id) != 'undefined' && MACROS.tracer_id != ''
 document.write '<img id="ba_impression_tracker_for_blogads" src="http://tracer.blogads.com/click.php?zoneid=' + MACROS.tracer_id + '_impressions_skin&rand=%%CACHEBUSTER%%" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>'
