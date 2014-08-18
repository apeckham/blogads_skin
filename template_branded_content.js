//CONFIGURATION
//Posts
var ba_bc_pinned_post_items = BA_BC_MACROS.pinned_post_items; //The pinned posts have higher priority, they appear at the top in the unit.
var ba_bc_post_items = BA_BC_MACROS.post_items;

var ba_bc_max_items = BA_BC_MACROS.max_items; //Max number of post items to display. Set 0 to include all.
var ba_bc_items_in_random_order = BA_BC_MACROS.items_in_random_order; //Posts in random order. Values: yes, no. If the value is "no", then they will showing up in reverse chronological order.
var ba_bc_rand = Math.floor(Math.random() * 99999999); //Do NOT modify.

//Third party trackers.
var ba_bc_default_tracer_id = BA_BC_MACROS.tracer_id;
var ba_bc_click_tracker_for_300x600_ad = BA_BC_MACROS.click_url; //For example: http://blogads.com/
var ba_bc_impression_tracker_for_300x600_ad = BA_BC_MACROS.impression_tracker; //For example: 'http://skins.blogads.com/blogads/blank.gif?rand=' + ba_bc_rand

//Video.
var ba_bc_video_width = BA_BC_MACROS.video_width;
var ba_bc_video_height = BA_BC_MACROS.video_height;
var ba_bc_videoplayer = BA_BC_MACROS.videoplayer;
var ba_bc_video_url = BA_BC_MACROS.video_url;
var ba_bc_video_first_frame = BA_BC_MACROS.video_first_frame;

//Sponsored tab for 300x600 unit.
var ba_bc_sponsored_tab_width = BA_BC_MACROS.sponsored_tab_width;
var ba_bc_sponsored_tab_height = BA_BC_MACROS.sponsored_tab_height;
var ba_bc_sponsored_tab_bg = BA_BC_MACROS.sponsored_tab_bg;

//Container.
var ba_bc_border_top_width = BA_BC_MACROS.border_top_width;
var ba_bc_border_top_height = BA_BC_MACROS.border_top_height;
var ba_bc_border_top_background = BA_BC_MACROS.border_top_background;
var ba_bc_border_left_width = BA_BC_MACROS.border_left_width;
var ba_bc_border_left_height = BA_BC_MACROS.border_left_height;
var ba_bc_border_left_background = BA_BC_MACROS.border_left_background;
var ba_bc_border_right_width = BA_BC_MACROS.border_right_width;
var ba_bc_border_right_height = BA_BC_MACROS.border_right_height;
var ba_bc_border_right_background = BA_BC_MACROS.border_right_background;

//List.
var ba_bc_list_width = BA_BC_MACROS.list_width;
var ba_bc_list_height = BA_BC_MACROS.list_height;
var ba_bc_list_padding = BA_BC_MACROS.list_padding;
var ba_bc_list_background = BA_BC_MACROS.list_background;
var ba_bc_list_font_size = BA_BC_MACROS.list_font_size;
var ba_bc_list_font_family = BA_BC_MACROS.list_font_family;
var ba_bc_list_title_font_size = BA_BC_MACROS.list_title_font_size;
var ba_bc_list_row_width = BA_BC_MACROS.list_row_width;
var ba_bc_list_row_border_bottom = BA_BC_MACROS.list_row_border_bottom;
var ba_bc_list_text_color = BA_BC_MACROS.list_text_color;
var ba_bc_list_text_a_normal_color = BA_BC_MACROS.list_text_a_normal_color;
var ba_bc_list_text_a_hover_color = BA_BC_MACROS.list_text_a_hover_color;
var ba_bc_list_border_width = BA_BC_MACROS.list_border_width;
var ba_bc_list_border_color = BA_BC_MACROS.list_border_color;

//Other variables.
var ba_bc_cookie_name = ba_bc_default_tracer_id + '_cookie';
var ba_bc_posts_in_the_unit = 0;
// /CONFIGURATION

//CSS
var ba_bc_css = '<style type="text/css"> \n\
#ba_bc_container { width: 300px; height: 600px; position: relative; }  \n\
#ba_bc_tab { width: ' + ba_bc_sponsored_tab_width + 'px; height: ' + ba_bc_sponsored_tab_height + 'px; position: relative; background: transparent url("' + ba_bc_sponsored_tab_bg + '") no-repeat scroll 0 0; cursor: pointer; }  \n\
#ba_bc_video { width: ' + ba_bc_video_width + 'px; height: ' + ba_bc_video_height + 'px; position: relative; }  \n\
#ba_bc_video_player { top: 0px; left: 0px; width: ' + ba_bc_video_width + 'px; height: ' + ba_bc_video_height + 'px; position: absolute; background: #000000; }  \n\
#ba_bc_list { width: ' + ba_bc_list_width + 'px; height: ' + ba_bc_list_height + 'px; padding: ' + ba_bc_list_padding + 'px; border-left: ' + ba_bc_list_border_color + ' ' + ba_bc_list_border_width + 'px solid; border-right: ' + ba_bc_list_border_color + ' ' + ba_bc_list_border_width + 'px solid; border-bottom: ' + ba_bc_list_border_color + ' ' + ba_bc_list_border_width + 'px solid; background: ' + ba_bc_list_background + '; overflow: auto; font-family: ' + ba_bc_list_font_family + '; font-size: ' + ba_bc_list_font_size + 'px; position: relative; }  \n\
#ba_bc_list .row { width: ' + ba_bc_list_row_width + 'px; height: auto; position: relative; border-bottom: ' + ba_bc_list_row_border_bottom + '; margin: 0 0 8px 0; text-align: left; line-height: 1.2; }\n\
#ba_bc_list .text { width: 100%; color: ' + ba_bc_list_text_color + '; float: left; padding: 0; line-height: 1.2; }  \n\
#ba_bc_list .text p {margin: 0 0 8px 0; padding: 0;}\n\
#ba_bc_list .text p a:link, \n\
#ba_bc_list .text p a:visited { color: #fabacb; text-decoration: none; }  \n\
#ba_bc_list .text p a:hover { text-decoration: underline; }  \n\
#ba_bc_list .text p.title { margin: 0 0 8px 0; }  \n\
#ba_bc_list .text p.title a:link, #ba_bc_list .text p.title a:visited { color: ' + ba_bc_list_text_a_normal_color + '; font-size: ' + ba_bc_list_title_font_size + 'px; font-weight: bold; text-decoration: none; }  \n\
#ba_bc_list .text p.title a:hover { color: ' + ba_bc_list_text_a_hover_color + '; text-decoration: none; background-color: transparent; } \n\
#ba_bc_list .clear { clear: both; margin: 0; padding: 0; }\n\
#ba_bc_list_loading {width: 100%; text-align: center; margin-top: 20px;}\n\
#ba_bc_list_loading img {vertical-align: middle;}\n\
#ba_bc_container .border_top {width: ' + ba_bc_border_top_width + 'px; height: ' + ba_bc_list_border_width + 'px; background: ' + ba_bc_list_border_color + '; top: 0px; left: 0px; position: absolute;}\n\
#ba_bc_container .border_left {width: ' + ba_bc_list_border_width + 'px; height: ' + ba_bc_border_left_height + 'px; background: ' + ba_bc_list_border_color + '; top: 0px; left: 0px; position: absolute;}\n\
#ba_bc_container .border_right {width: ' + ba_bc_list_border_width + 'px; height: ' + ba_bc_border_right_height + 'px; background: ' + ba_bc_list_border_color + '; top: 0px; right: 0px; position: absolute;}\n\
</style>';
// /CSS

//FUNCTIONS
function ba_bc_set_video(width, height, div_id, mute, autoplay) {
    var flashvars = 'video_url=' + ba_bc_video_url + '&first_frame=' + encodeURIComponent(ba_bc_video_first_frame) + '&mute=' + mute + '&autoplay=' + autoplay + '&click_tracker=' + encodeURIComponent(ba_bc_click_tracker_for_300x600_ad) + '&tracer_id=' + ba_bc_default_tracer_id;
    var html = '<object type="application/x-shockwave-flash" data="' + ba_bc_videoplayer + '" width="' + width + '" height="' + height + '">';
    html += '<param name="movie" value="' + ba_bc_videoplayer + '" />';
    html += '<param name="quality" value="high" />';
    html += '<param name="bgcolor" value="#ffffff" />';
    html += '<param name="allowscriptaccess" value="always" />';
    html += '<param name="wmode" value="transparent" />';
    html += '<param name="FlashVars" value="' + flashvars + '" />';
    html += '</object>';

    document.getElementById(div_id).innerHTML = html;
}

function ba_bc_init() {
    document.write(ba_bc_css);

    var html = '<div id="ba_bc_container">';
    html += '<div id="ba_bc_tab"';

    if (ba_bc_click_tracker_for_300x600_ad !== '') {
        html += ' onclick="ba_bc_client_btn(\'' + ba_bc_default_tracer_id + '_300x600_click_on_tab\');" style="cursor: pointer;"';
    }

    html += '></div>';
    html += '<div id="ba_bc_video">';
    html += '<div id="ba_bc_video_player"></div>';
    html += '</div>';
    html += '<div id="ba_bc_list"><div id="ba_bc_list_loading"><img src="http://skins.blogads.com/blogads/loading.gif" /> ...loading</div></div>';
    html += '<div class="border_top"></div>';
    html += '<div class="border_left"></div>';
    html += '<div class="border_right"></div>';
    html += '</div>';
    html += '<div id="ba_bc_impression_tracker" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute;"></div>';

    document.write(html);

    if (ba_bc_get_cookie(ba_bc_cookie_name) === null) {
        ba_bc_set_cookie(ba_bc_cookie_name, 'yes', 1);
        ba_bc_set_video(ba_bc_video_width, ba_bc_video_height, 'ba_bc_video_player', 'on', 'yes');
    }

    else {
        ba_bc_set_video(ba_bc_video_width, ba_bc_video_height, 'ba_bc_video_player', 'off', 'no');
    }

    ba_bc_set_items(ba_bc_pinned_post_items);
    ba_bc_set_items(ba_bc_post_items);
    ba_bc_set_impression_tracker();
    ba_bc_stat(ba_bc_default_tracer_id + '_300x600_impressions');
}

function ba_bc_hide_list() {
    document.getElementById("ba_bc_list").style.display = "none";
    document.getElementById("ba_bc_container").style.height = "300px";
}

function ba_bc_set_items(items) {
    if (typeof (document.getElementById("ba_bc_list_loading")) !== 'undefined') {
        document.getElementById("ba_bc_list_loading").style.display = "none";
    }

    if (typeof (items) !== 'object' || ba_bc_object_length(items) < 1)
        return;

    if (ba_bc_items_in_random_order == "yes")
        items = ba_bc_shuffle_array(items);

    var i;
    var html = '';

    for (i = 0; i < ba_bc_object_length(items); i++) {
        if (ba_bc_posts_in_the_unit >= ba_bc_max_items)
            break;

        if (typeof (items[i]) !== 'undefined') {
            html += ba_bc_get_row(items[i]);
            ba_bc_posts_in_the_unit = ba_bc_posts_in_the_unit + 1;
        }
    }

    document.getElementById("ba_bc_list").innerHTML = document.getElementById("ba_bc_list").innerHTML + html;
}

function ba_bc_get_row(item) {
    var content = item["co"];
    var url_for_title = 'http://tracer.blogads.com/click.php?zoneid=' + ba_bc_default_tracer_id + '_click_on_story_title_' + item["id"] + '&rand=' + Math.floor(Math.random() * 99999999) + '&url=' + encodeURIComponent(item["ul"]);

    var answer = '<div class="row">';
    answer += '<div class="text">';
    answer += '<p class="title"><a href="' + url_for_title + '" target="_top">' + item["ti"] + '</a></p>';
    answer += '<p>' + content + '</p>';
    answer += '</div>';
    answer += '<div class="clear"></div>';
    answer += '</div>';

    return answer;
}

function ba_bc_stat(id) {
    if (!document.getElementById(id)) {
        var div = document.createElement("div");
        div.id = id;
        div.style.top = "0px";
        div.style.left = "0px";
        div.style.width = "1px";
        div.style.height = "1px";
        div.style.position = "absolute";
        document.body.appendChild(div);
    }

    document.getElementById(id).innerHTML = '<img src="http://tracer.blogads.com/click.php?zoneid=' + id + '&rand=' + Math.floor(Math.random() * 99999999) + '" style="width: 1px; height: 1px; border: none;">';
}

function ba_bc_click_on(id, url) {
    ba_bc_stat(id);
    window.open(url);
}

function ba_bc_client_btn(id) {
    ba_bc_stat(id);
    window.open(ba_bc_click_tracker_for_300x600_ad);
}

function ba_bc_set_impression_tracker() {
    if (ba_bc_impression_tracker_for_300x600_ad !== '') {
        document.getElementById('ba_bc_impression_tracker').innerHTML = '<img src="' + ba_bc_impression_tracker_for_300x600_ad + '" />';
    }
}

function ba_bc_shuffle_array(array) {
    var currentIndex = ba_bc_object_length(array), temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function ba_bc_get_url_params() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function ba_bc_set_cookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
}

function ba_bc_get_cookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1)
        {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

function ba_bc_object_length(obj) {
    var c = 0;

    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            ++c;
    }

    return c;
}
// /FUNCTIONS

//ACTIONS
ba_bc_init();
// /ACTIONS
