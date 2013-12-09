window.ba_clickable_ad_bg = ->
  ba_contentOffset = $parent.find("#outer").offset()

  $parent.find("body").prepend """
    <a id="ba_clickable_bg_left" href="#{dfpMacros.clickUrl}" target="_blank"></a>
    <a id="ba_clickable_bg_right" href="#{dfpMacros.clickUrl}" target="_blank"></a>
  """
  $parent.find("#ba_clickable_bg_left").css "left", (ba_contentOffset.left - $parent.find("#ba_clickable_bg_left").width()) + "px"
  $parent.find("#ba_clickable_bg_right").css "left", (ba_contentOffset.left + $parent.find("#outer").width()) + "px"

$parent = jQuery(window.parent.document)
$parent.find("head").append """
  <style type="text/css">
    body {
      background: #FBF500 url('#{dfpMacros.imageUrl}') fixed no-repeat center top;
    }

    #ba_clickable_bg_left, #ba_clickable_bg_right {
      width: 160px;
      height: 610px;
      display: block;
      cursor: pointer;
      border: none;
      position: fixed;
      z-index: 2;
      top: 0px;
    }
  </style>
"""

$parent.find(document).ready ->
  $parent.find(window).resize ->
    setTimeout "ba_clickable_ad_bg()", 500
  ba_clickable_ad_bg()