window.ba_clickable_ad_bg = (ad_click_tracker, ad_tracer_id, left_show, right_show) ->
  return if ad_click_tracker is ""
  ba_rand = Math.floor(Math.random() * 100000000)
  ba_winWidth = $parent.find("body").width()
  ba_winHeight = $parent.height()
  ba_contentOffset = $parent.find("#outer").offset()
  ba_leftWidth = ba_contentOffset.left
  ba_rightWidth = ba_winWidth - (ba_contentOffset.left + $parent.find("#outer").width() + parseInt($parent.find("#outer").css("padding-left")) + parseInt($parent.find("#outer").css("padding-right")))
  ba_tracer = "http://tracer.blogads.com/click.php?zoneid=" + ad_tracer_id + "&rand=" + ba_rand + "&url=" + encodeURIComponent(ad_click_tracker)
  $parent.find("body").prepend "<div id=\"ba_clickable_bg_left\" class=\"hidden-phone\" style=\"display: none;\"><img src=\"http://skins.blogads.com/blogads/blank.gif\"/></div>"  unless $parent.find("#ba_clickable_bg_left").width()
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
    window.open ba_tracer

  if ba_leftWidth > 0 and left_show is "yes"
    $parent.find("#ba_clickable_bg_left").show()
  else
    $parent.find("#ba_clickable_bg_left").hide()

  #Set right div.
  $parent.find("body").prepend "<div id=\"ba_clickable_bg_right\" class=\"hidden-phone\" style=\"display: none;\"><img src=\"http://skins.blogads.com/blogads/blank.gif\"/></div>"  unless $parent.find("#ba_clickable_bg_right").width()
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
    window.open ba_tracer

  if ba_rightWidth > 0 and right_show is "yes"
    $parent.find("#ba_clickable_bg_right").show()
  else
    $parent.find("#ba_clickable_bg_right").hide()

style_for_skin = """
  <style type="text/css">
    body {
        background: #FBF500 url('http://skins.blogads.com/urbandictionary/130726_ADHD/skin-saturday.jpg') fixed no-repeat center top;
    }

    .input-append .btn {
        z-index: 10;
    }

    #nav1 {
        text-align: right;
    }

    .ba_top_fixed_1x1 {
        top: 0px;
        left: 0px;
        width: 1px;
        height: 1px;
        position: fixed;
    }

    .ba_top_fixed_1x1 img {
        width: 1px;
        height: 1px;
        border: none;
    }

    .big-header .right > div {
        right: 5px !important;
    }
  </style>
"""

$parent = jQuery(window.parent.document)
$parent.find("head").append style_for_skin
ba_ad_click_tracker = "http://www.foxadhd.com/"
ba_ad_tracer_id = "ud_skin_test"

$parent.find(document).ready ->
  $parent.find(window).resize ->
    setTimeout "ba_clickable_ad_bg('" + ba_ad_click_tracker + "', '" + ba_ad_tracer_id + "', 'yes', 'yes')", 500
  setTimeout "ba_clickable_ad_bg('" + ba_ad_click_tracker + "', '" + ba_ad_tracer_id + "', 'yes', 'yes')", 500