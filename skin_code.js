if (typeof(jQuery) == "undefined") {
	jquery_script_tag = document.createElement("script");
	jquery_script_tag.setAttribute("type", "text/javascript");
	jquery_script_tag.setAttribute("src", "http://code.jquery.com/jquery-1.8.3.min.js");
	document.getElementsByTagName('head')[0].appendChild(jquery_script_tag);
}

var style_for_skin = '<style type="text/css">\
    body {\
        background: #FBF500 url(\'http://skins.blogads.com/urbandictionary/130726_ADHD/skin-saturday.jpg\') fixed no-repeat center top;\
    }\
    \
    .input-append .btn {\
        z-index: 10;\
    }\
    \
    #nav1 {\
        text-align: right;\
    }\
\
    .ba_top_fixed_1x1 {\
        top: 0px;\
        left: 0px;\
        width: 1px;\
        height: 1px;\
        position: fixed;\
    }\
\
    .ba_top_fixed_1x1 img {\
        width: 1px;\
        height: 1px;\
        border: none;\
    }\
    \
    .big-header .right > div {\
    right:5px !important;\
    }\
    \
</style>';

jQuery('head').append(style_for_skin);

//CONFIGURATION
var ba_ad_click_tracker = 'http://www.foxadhd.com/'; //For example: http://blogads.com/{timestamp}, the OpenX will rewrite the {timestamp} tag
var ba_ad_tracer_id = 'ud_skin_test'; //For example: clickable_skin_test, this will appear in Blogads tracer statistics.
var ba_impression_tracker = 'http://skins.blogads.com/blogads/blank.gif?rand=' + Math.floor(Math.random() * 99999999); //For example: http://ad.doubleclick.net/ad/N3220/?ord={timestamp}, the OpenX will rewrite the {timestamp} tag.
// /CONFIGURATION
// /FUNCTIONS

function ba_clickable_ad_bg(ad_click_tracker, ad_tracer_id, left_show, right_show) {
	if (ad_click_tracker == '') return;

	var ba_rand = Math.floor(Math.random() * 100000000);
	var ba_winWidth = jQuery("body").width();
	var ba_winHeight = jQuery(window).height();
	var ba_contentOffset = jQuery("#outer").offset();
	var ba_leftWidth = ba_contentOffset.left;
	var ba_rightWidth = ba_winWidth - (ba_contentOffset.left + jQuery("#outer").width() + parseInt(jQuery("#outer").css("padding-left")) + parseInt(jQuery("#outer").css("padding-right")));
	var ba_tracer = 'http://tracer.blogads.com/click.php?zoneid=' + ad_tracer_id + '&rand=' + ba_rand + '&url=' + encodeURIComponent(ad_click_tracker);

	//Set left div.
	if (!jQuery("#ba_clickable_bg_left").width()) jQuery("body").prepend('<div id="ba_clickable_bg_left" class="hidden-phone" style="display: none;"><img src="http://skins.blogads.com/blogads/blank.gif"/></div>');

	jQuery("#ba_clickable_bg_left").css("width", "160px");
	jQuery("#ba_clickable_bg_left").css("height", "610px");
	jQuery("#ba_clickable_bg_left img").css("width", "160px");
	jQuery("#ba_clickable_bg_left img").css("height", "610px");
	jQuery("#ba_clickable_bg_left").css("background", "transparent");
	jQuery("#ba_clickable_bg_left").css("cursor", "pointer");
	jQuery("#ba_clickable_bg_left").css("border", "none");
	jQuery("#ba_clickable_bg_left").css("position", "fixed");
	jQuery("#ba_clickable_bg_left").css("z-index", "2");
	jQuery("#ba_clickable_bg_left").css("top", "0px");
	jQuery("#ba_clickable_bg_left").css("left", (ba_contentOffset.left - jQuery("#ba_clickable_bg_left").width()) + "px");
	jQuery("#ba_clickable_bg_left").unbind();
	jQuery("#ba_clickable_bg_left").click(function() {
		window.open(ba_tracer);
	});

	if (ba_leftWidth > 0 && left_show == 'yes') jQuery("#ba_clickable_bg_left").show();
	else jQuery("#ba_clickable_bg_left").hide();

	//Set right div.
	if (!jQuery("#ba_clickable_bg_right").width()) jQuery("body").prepend('<div id="ba_clickable_bg_right" class="hidden-phone" style="display: none;"><img src="http://skins.blogads.com/blogads/blank.gif"/></div>');

	jQuery("#ba_clickable_bg_right").css("width", "160px");
	jQuery("#ba_clickable_bg_right").css("height", "610px");
	jQuery("#ba_clickable_bg_right img").css("width", "160px");
	jQuery("#ba_clickable_bg_right img").css("height", "610px");
	jQuery("#ba_clickable_bg_right").css("background", "transparent");
	jQuery("#ba_clickable_bg_right").css("cursor", "pointer");
	jQuery("#ba_clickable_bg_right").css("border", "none");
	jQuery("#ba_clickable_bg_right").css("position", "fixed");
	jQuery("#ba_clickable_bg_right").css("z-index", "2");
	jQuery("#ba_clickable_bg_right").css("top", "0px");
	jQuery("#ba_clickable_bg_right").css("left", (ba_contentOffset.left + jQuery("#outer").width()) + "px");
	jQuery("#ba_clickable_bg_right").unbind();
	jQuery("#ba_clickable_bg_right").click(function() {
		window.open(ba_tracer);
	});

	if (ba_rightWidth > 0 && right_show == 'yes') jQuery("#ba_clickable_bg_right").show();
	else jQuery("#ba_clickable_bg_right").hide();
}
// /FUNCTIONS
//ACTIONS
if (location.href.search(/z.blogads.com/i) == -1 && location.href.search(/g.blogads.com/i) == -1) {
	jQuery(document).ready(function() {
		jQuery(window).resize(function() {
			setTimeout("ba_clickable_ad_bg('" + ba_ad_click_tracker + "', '" + ba_ad_tracer_id + "', 'yes', 'yes')", 500);
		});

		setTimeout("ba_clickable_ad_bg('" + ba_ad_click_tracker + "', '" + ba_ad_tracer_id + "', 'yes', 'yes')", 500);
	});

	if (ba_impression_tracker !== '') jQuery('body').append('<div id="ba_skin_impression_tracker" class="ba_top_fixed_1x1"><img src="' + ba_impression_tracker + '" /></div>');
}
// /ACTIONS
