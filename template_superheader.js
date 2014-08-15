(function() {
    var baDoc, baCreateCookie, baReadCookie, baEraseCookie, baAddClickableBg, baAddCss, baTracking, baOpenLandingPage, baInitSh;

    baDoc = window.parent.document;

    //FUNCTIONS
    baCreateCookie = function(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else
            var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/; domain=" + location.hostname;
    };

    baReadCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    baEraseCookie = function(name) {
        createCookie(name, location.hostname, "", -367);
    };

    baTracking = function(id) {
        var img;
        img = baDoc.createElement('img');
        img.src = 'http://tracer.blogads.com/click.php?zoneid=' + MACROS_SH.tracer_id + '_' + id + '&rand=' + Math.floor(Math.random() * 99999999);
        img.style.cssText = 'width: 1px; height: 1px; top: 0px; left: 0px; position: absolute; border: none;';
        return baDoc.body.appendChild(img);
    };

    baOpenLandingPage = function(id) {
        baTracking(id);
        window.open(MACROS_SH.click_url);
    };

    baAddClickableBg = function(className) {
        var a;
        var e = baDoc.getElementById(className);
        var gutter_space = ((parent.innerWidth - 1310) / 2);

        if (e) {
            e.parentNode.removeChild(e);
        }

        a = baDoc.createElement('a');
        a.id = className;
        a.className = className;
        a.href = MACROS_SH.click_url;
        a.target = MACROS_SH.target_window;

        if (className == "ba_clickable_bg_left") {
            a.style.left = gutter_space + "px";
        }

        else if (className == "ba_clickable_bg_right") {
            a.style.right = gutter_space + "px";
        }

        a.onclick = function() {
            baTracking('click_on_client_btn');
        };

        return baDoc.body.appendChild(a);
    };

    baAddCss = function(css) {
        var style;
        style = baDoc.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(baDoc.createTextNode(css));
        }
        return baDoc.head.appendChild(style);
    };

    baInitSh = function() {
        var cookie_name = '140708_ud_bad_words';
        var html = '';
        var div_id = 'ba_sh';
        var first = baDoc.body.children[0];
        var mute = '';
        var autoplay = '';

        if (baDoc.getElementById(div_id))
            return;

        var div = baDoc.createElement("div");
        div.id = div_id;
        div.style.width = "960px";
        div.style.height = "260px";
        div.style.background = "transparent";
        div.style.position = "relative";
        div.style.margin = "0 auto";
        baDoc.body.insertBefore(div, first);

        if (!baReadCookie(cookie_name)) {
            baCreateCookie(cookie_name, '1', 1);
            mute = 'on';
            autoplay = 'yes';
        }

        else {
            mute = 'off';
            autoplay = 'no';
        }

        var flashvars = 'video_url=' + MACROS_SH.video_url + '&first_frame=' + MACROS_SH.video_thumb + '&mute=' + mute + '&autoplay=' + autoplay + '&click_url=' + encodeURIComponent(MACROS_SH.click_url) + '&tracer_id=' + MACROS_SH.tracer_id + '&video_version=1';

        html += '<div id="ba_sh_client_btn" style="top: 0px; left: 0px; width: 960px; height: 260px; background: transparent; position: absolute;"><a href="http://tracer.blogads.com/click.php?zoneid=' + MACROS_SH.tracer_id + '_click_on_client_btn&rand=' + Math.floor(Math.random() * 99999999) + '&url=' + encodeURIComponent(MACROS_SH.click_url) + '" target="' + MACROS_SH.target_window + '"><img src="' + MACROS_SH.blank_gif + '" style="width: 100%; height: 100%; border: none;" /></a></div>';
        html += '<div id="ba_sh_player" style="top: ' + MACROS_SH.video_top_pos + 'px; right: ' + MACROS_SH.video_right_pos + 'px; width: ' + MACROS_SH.video_width + 'px; height: ' + MACROS_SH.video_height + 'px; padding: 0; margin: 0; position: absolute;">';
        html += '<object type="application/x-shockwave-flash" width="' + MACROS_SH.video_width + '" height="' + MACROS_SH.video_height + '" data="' + MACROS_SH.video_player + '">';
        html += '<param name="movie" value="' + MACROS_SH.video_player + '" />';
        html += '<param name="quality" value="high" />';
        html += '<param name="bgcolor" value="#ffffff" />';
        html += '<param name="allowscriptaccess" value="always" />';
        html += '<param name="wmode" value="transparent" />';
        html += '<param name="FlashVars" value="' + flashvars + '" />';
        html += '</object>';
        html += '</div>';

        baDoc.getElementById(div_id).innerHTML = html;
    };
    // /FUNCTIONS

    //ACTIONS
    baAddCss("body {background: " + MACROS_SH.background_color + " url('" + MACROS_SH.file_skin + "') scroll no-repeat center top;}\n#dark-top {width: 960px;margin: 0 auto;}\n.container {background-color: #4e7ca0;}\n.ba_clickable_bg_left, .ba_clickable_bg_right {top: 0px; width: 160px; height: 445px; position: absolute; background: transparent;}");
    
    if (typeof MACROS_SH.impression_tracker_skin !== 'undefined' && MACROS_SH.impression_tracker_skin !== '') {
        document.write('<img id="ba_impression_tracker_skin" src="' + MACROS_SH.impression_tracker_skin + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>');
    }

    if (typeof MACROS_SH.tracer_id !== 'undefined' && MACROS_SH.tracer_id !== '') {
        document.write('<img id="ba_impression_tracker_for_blogads" src="http://tracer.blogads.com/click.php?zoneid=' + MACROS_SH.tracer_id + '_impressions&rand=' + Math.floor(Math.random() * 99999999999) + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>');
    }

    baAddClickableBg('ba_clickable_bg_left');
    baAddClickableBg('ba_clickable_bg_right');
    baInitSh();

    parent.onresize = function(event) {
        baAddClickableBg('ba_clickable_bg_left');
        baAddClickableBg('ba_clickable_bg_right');
    };
    // /ACTIONS
}).call(this);
