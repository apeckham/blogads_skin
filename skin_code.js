(function() {
    var addClickableBg, addCss, doc, trackClickableBg, gutter_space;

    doc = window.parent.document;
    gutter_space = ((parseInt(window.innerWidth) - 1280) / 2);

    trackClickableBg = function() {
        var img;
        img = doc.createElement('img');
        img.src = 'http://tracer.blogads.com/click.php?zoneid=' + MACROS.tracer_id + '_click_on_skin&rand=' + Math.floor(Math.random() * 99999999);
        img.style.cssText = 'width: 1px; height: 1px; top: 0px; left: 0px; position: absolute; border: none;';
        return document.body.appendChild(img);
    };

    addClickableBg = function(className) {
        var a;
        a = doc.createElement('a');
        a.className = className;
        a.href = MACROS.click_url;
        a.target = MACROS.target_window;
        a.onclick = function() {
            trackClickableBg();
        };
        return document.body.appendChild(a);
    };

    addClickableBg('ba_clickable_bg_left');
    addClickableBg('ba_clickable_bg_right');

    addCss = function(css) {
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
        addCss("body {background: " + MACROS.background_color + " url('" + MACROS.file_skin + "') fixed no-repeat center top;}\n#dark-top {width: 960px;margin: 0 auto;}\n.container {background-color: #4e7ca0;}\n.ba_clickable_bg_left, .ba_clickable_bg_right {top: 0px; width: 160px; height: 100%; position: fixed; background: transparent;}\n.ba_clickable_bg_left {left: " + gutter_space + "px;}\n.ba_clickable_bg_right {right: " + gutter_space + "px;}");
    }

    else {
        addCss("body {background: " + MACROS.background_color + " url('" + MACROS.file_skin + "') fixed no-repeat center top;}\n#logo {background-image: none !important;}\n.container{background: transparent url('" + MACROS.file_masthead + "') no-repeat scroll left top !important;position: relative; overflow-x: visible !important;}\n#dark-top {width: 960px;margin: 0 auto;}\n.container {background-color: #4e7ca0;}\n.ba_clickable_bg_left, .ba_clickable_bg_right {top: 0px; width: 160px; height: 100%; position: fixed; background: transparent;}\n.ba_clickable_bg_left {left: " + gutter_space + "px;}\n.ba_clickable_bg_right {right: " + gutter_space + "px;}");
    }

    if (typeof MACROS.impression_tracker_skin !== 'undefined' && MACROS.impression_tracker_skin !== '') {
        document.write('<img id="ba_impression_tracker_skin" src="' + MACROS.impression_tracker_skin + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>');
    }

    if (typeof MACROS.impression_tracker_masthead !== 'undefined' && MACROS.impression_tracker_masthead !== '') {
        document.write('<img id="ba_impression_tracker_masthead" src="' + MACROS.impression_tracker_masthead + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>');
    }

    if (typeof MACROS.tracer_id !== 'undefined' && MACROS.tracer_id !== '') {
        document.write('<img id="ba_impression_tracker_for_blogads" src="http://tracer.blogads.com/click.php?zoneid=' + MACROS.tracer_id + '_impressions_skin&rand=' + Math.floor(Math.random() * 99999999999) + '" style="top: 0px; left: 0px; width: 1px; height: 1px; border: none; position: absolute;"/>');
    }

}).call(this);
