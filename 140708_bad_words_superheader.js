(function() {
    var doc, baCreateCookie, baReadCookie, baEraseCookie, baAddClickableBg, baAddCss, baTracking, baOpenLandingPage, baInitSh;

    doc = window.parent.document;

    function baCreateCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else
            var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/; domain=" + location.hostname;
    }

    function baReadCookie(name) {
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
    }

    function baEraseCookie(name) {
        createCookie(name, location.hostname, "", -367);
    }

    baTracking = function(id) {
        var img;
        img = doc.createElement('img');
        img.src = 'http://tracer.blogads.com/click.php?zoneid=' + MACROS.tracer_id + '_' + id + '&rand=' + Math.floor(Math.random() * 99999999);
        img.style.cssText = 'width: 1px; height: 1px; top: 0px; left: 0px; position: absolute; border: none;';
        return doc.body.appendChild(img);
    };

    baOpenLandingPage = function(id) {
        baTracking(id);
        window.open(MACROS.click_url);
    };

    baAddClickableBg = function(className) {
        var a;
        var e = doc.getElementById(className);
        var gutter_space = ((parent.innerWidth - 1310) / 2);

        if (e) {
            e.parentNode.removeChild(e);
        }

        a = doc.createElement('a');
        a.id = className;
        a.className = className;
        a.href = MACROS.click_url;
        a.target = MACROS.target_window;

        if (className == "ba_clickable_bg_left") {
            a.style.left = gutter_space + "px";
        }

        else if (className == "ba_clickable_bg_right") {
            a.style.right = gutter_space + "px";
        }

        a.onclick = function() {
            baTracking('click_on_client_btn');
        };

        return doc.body.appendChild(a);
    };

    baAddClickableBg('ba_clickable_bg_left');
    baAddClickableBg('ba_clickable_bg_right');

    baAddCss = function(css) {
        var style;
        style = doc.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(doc.createTextNode(css));
        }
        return doc.head.appendChild(style);
    };

    if (typeof MACROS.file_masthead !== "undefined" && MACROS.file_masthead == "") {
        baAddCss("body {background: " + MACROS.background_color + " url('" + MACROS.file_skin + "') scroll no-repeat center top;}\n#dark-top {width: 960px;margin: 0 auto;}\n.container {background-color: #4e7ca0;}\n.ba_clickable_bg_left, .ba_clickable_bg_right {top: 0px; width: 160px; height: 467px; position: absolute; background: transparent;}");
    }

    else {
        baAddCss("body {background: " + MACROS.background_color + " url('" + MACROS.file_skin + "') scroll no-repeat center top;}\n#logo {background-image: none !important;}\n.container{background: transparent url('" + MACROS.file_masthead + "') no-repeat scroll left top !important;position: relative; overflow-x: visible !important;}\n#dark-top {width: 960px;margin: 0 auto;}\n.container {background-color: #4e7ca0;}\n.ba_clickable_bg_left, .ba_clickable_bg_right {top: 0px; width: 160px; height: 467px; position: absolute; background: transparent;}");
    }

    baInitSh = function() {
        var cookie_name = '140708_ud_bad_words';
        var html = '';
        var div_id = 'ba_sh';
        var first = doc.body.children[0];
        var mute = '';
        var autoplay = '';

        var div = doc.createElement("div");
        div.id = div_id;
        div.style.width = "960px";
        div.style.height = "260px";
        div.style.background = "transparent url('" + MACROS.sh_bg + "') no-repeat scroll 0 0";
        div.style.position = "relative";
        div.style.margin = "0 auto";
        doc.body.insertBefore(div, first);

        if (!baReadCookie(cookie_name)) {
            baCreateCookie(cookie_name, '1', 1);
            mute = 'on';
            autoplay = 'yes';
        }

        else {
            mute = 'off';
            autoplay = 'no';
        }

        var flashvars = 'video_url=' + MACROS.video_url + '&first_frame=' + MACROS.video_thumb + '&mute=' + mute + '&autoplay=' + autoplay + '&click_url=' + MACROS.click_url + '&tracer_id=' + MACROS.tracer_id + '&video_version=1';

        html += '<div id="ba_sh_client_btn" style="top: 0px; left: 0px; width: 404px; height: 260px; background: transparent; position: absolute;"><a href="http://tracer.blogads.com/click.php?zoneid=' + MACROS.tracer_id + '_click_on_client_btn&rand=' + Math.floor(Math.random() * 99999999) + '&url=' + encodeURIComponent(MACROS.click_url) + '" target="' + MACROS.target_window + '"><img src="' + MACROS.blank_gif + '" style="width: 100%; height: 100%; border: none;" /></a></div>';
        html += '<div id="ba_sh_player" style="top: 1px; right: 51px; width: 456px; height: 258px; padding: 0; margin: 0; position: absolute; border: #ffc410 2px solid;">';
        html += '<object type="application/x-shockwave-flash" width="' + MACROS.video_width + '" height="' + MACROS.video_height + '" data="' + MACROS.video_player + '">';
        html += '<param name="movie" value="' + MACROS.video_player + '" />';
        html += '<param name="quality" value="high" />';
        html += '<param name="bgcolor" value="#ffffff" />';
        html += '<param name="allowscriptaccess" value="always" />';
        html += '<param name="wmode" value="transparent" />';
        html += '<param name="FlashVars" value="' + flashvars + '" />';
        html += '</object>';
        html += '</div>';

        doc.getElementById(div_id).innerHTML = html;
    };

    baInitSh();

    if (typeof MACROS.impression_tracker_skin !== 'undefined' && MACROS.impression_tracker_skin !== '') {
        document.write('<img id="ba_impression_tracker_skin" src="' + MACROS.impression_tracker_skin + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>');
    }

    if (typeof MACROS.impression_tracker_masthead !== 'undefined' && MACROS.impression_tracker_masthead !== '') {
        document.write('<img id="ba_impression_tracker_masthead" src="' + MACROS.impression_tracker_masthead + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>');
    }

    if (typeof MACROS.tracer_id !== 'undefined' && MACROS.tracer_id !== '') {
        document.write('<img id="ba_impression_tracker_for_blogads" src="http://tracer.blogads.com/click.php?zoneid=' + MACROS.tracer_id + '_impressions&rand=' + Math.floor(Math.random() * 99999999999) + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>');
    }

    parent.onresize = function(event) {
        baAddClickableBg('ba_clickable_bg_left');
        baAddClickableBg('ba_clickable_bg_right');
    };

}).call(this);
