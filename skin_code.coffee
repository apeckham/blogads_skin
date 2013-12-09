window.ba_clickable_ad_bg = ->
  ba_winWidth = $parent.find("body").width()
  ba_contentOffset = $parent.find("#outer").offset()
  ba_leftWidth = ba_contentOffset.left
  ba_rightWidth = ba_winWidth - (ba_contentOffset.left + $parent.find("#outer").width() + parseInt($parent.find("#outer").css("padding-left")) + parseInt($parent.find("#outer").css("padding-right")))

  $parent.find("body").prepend """
    <div id="ba_clickable_bg_left" class="hidden-phone" style="display: none;"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
  """
  $parent.find("#ba_clickable_bg_left").css "width", "160px"
  $parent.find("#ba_clickable_bg_left").css "height", "610px"
  $parent.find("#ba_clickable_bg_left img").css "width", "160px"
  $parent.find("#ba_clickable_bg_left img").css "height", "610px"
  $parent.find("#ba_clickable_bg_left").css "background", "transparent"
  $parent.find("#ba_clickable_bg_left").css "cursor", "pointer"
  $parent.find("#ba_clickable_bg_left").css "border", "none"
  $parent.find("#ba_clickable_bg_left").css "position", "fixed"
  $parent.find("#ba_clickable_bg_left").css "z-index", "2"
  $parent.find("#ba_clickable_bg_left").css "top", "0px"
  $parent.find("#ba_clickable_bg_left").css "left", (ba_contentOffset.left - $parent.find("#ba_clickable_bg_left").width()) + "px"
  $parent.find("#ba_clickable_bg_left").unbind()
  $parent.find("#ba_clickable_bg_left").click ->
    window.open dfpMacros.clickUrl

  if ba_leftWidth > 0
    $parent.find("#ba_clickable_bg_left").show()
  else
    $parent.find("#ba_clickable_bg_left").hide()

  $parent.find("body").prepend """
    <div id="ba_clickable_bg_right" class="hidden-phone" style="display: none;"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
  """
  $parent.find("#ba_clickable_bg_right").css "width", "160px"
  $parent.find("#ba_clickable_bg_right").css "height", "610px"
  $parent.find("#ba_clickable_bg_right img").css "width", "160px"
  $parent.find("#ba_clickable_bg_right img").css "height", "610px"
  $parent.find("#ba_clickable_bg_right").css "background", "transparent"
  $parent.find("#ba_clickable_bg_right").css "cursor", "pointer"
  $parent.find("#ba_clickable_bg_right").css "border", "none"
  $parent.find("#ba_clickable_bg_right").css "position", "fixed"
  $parent.find("#ba_clickable_bg_right").css "z-index", "2"
  $parent.find("#ba_clickable_bg_right").css "top", "0px"
  $parent.find("#ba_clickable_bg_right").css "left", (ba_contentOffset.left + $parent.find("#outer").width()) + "px"
  $parent.find("#ba_clickable_bg_right").unbind()
  $parent.find("#ba_clickable_bg_right").click ->
    window.open dfpMacros.clickUrl

  if ba_rightWidth > 0
    $parent.find("#ba_clickable_bg_right").show()
  else
    $parent.find("#ba_clickable_bg_right").hide()

$parent = jQuery(window.parent.document)
$parent.find("head").append """
  <style type="text/css">
    body {
      background: #FBF500 url('#{dfpMacros.imageUrl}') fixed no-repeat center top;
    }
  </style>
"""

$parent.find(document).ready ->
  $parent.find(window).resize ->
    setTimeout "ba_clickable_ad_bg()", 500
  setTimeout "ba_clickable_ad_bg()", 500