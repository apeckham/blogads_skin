(function() {
    var baWin, baDoc, baContID, baAtagID, baBannerID, baBtnOpenID, baBtnCloseID, baAnchorInit, baAnchorSetSizes, baAnchorStat, baAnchorClickOpenBtn, baAnchorClickCloseBtn;

    //CONFIGURATION
    baWin = window.parent;
    baDoc = baWin.document;
    baContID = "ba_mobile_anchor_container";
    baAtagID = "ba_mobile_anchor_atag";
    baBannerID = "ba_mobile_anchor_banner";
    baBtnOpenID = "ba_mobile_anchor_btn_open";
    baBtnCloseID = "ba_mobile_anchor_btn_close";
    // /CONFIGURATION

    //FUNCTIONS
    baAnchorInit = function() {
        if (!baDoc.getElementById(baContID)) {
            var div = baDoc.createElement("div");
            div.id = baContID;
            div.style.bottom = "0px";
            div.style.left = "0px";
            div.style.position = "fixed";
            div.style.display = "none";
            div.style.zIndex = "10000";
            baDoc.body.appendChild(div);
            
            var atag = baDoc.createElement("a");
            atag.id = baAtagID;
            atag.href = MACROS_MOBILE_ANCHOR.click_url;
            atag.target = "_blank";
            atag.onclick = function() {
                baAnchorStat(MACROS_MOBILE_ANCHOR.tracer_id + '_click_on_client_btn');
            };
            
            div.appendChild(atag);

            var banner = baDoc.createElement("img");
            banner.id = baBannerID;
            banner.src = MACROS_MOBILE_ANCHOR.file_banner;
            banner.style.top = "0px";
            banner.style.left = "0px";
            banner.style.position = "absolute";
            banner.style.cursor = "pointer";
            banner.style.zIndex = "10000";

            atag.appendChild(banner);

            var btn_open = baDoc.createElement("img");
            btn_open.id = baBtnOpenID;
            btn_open.src = MACROS_MOBILE_ANCHOR.file_btn_open;
            btn_open.style.top = "0px";
            btn_open.style.left = "0px";
            btn_open.style.position = "absolute";
            btn_open.style.cursor = "pointer";
            btn_open.style.display = "none";
            btn_open.style.zIndex = "10100";
            btn_open.onclick = function() {
                baAnchorStat(MACROS_MOBILE_ANCHOR.tracer_id + '_click_on_open_btn');
                baAnchorClickOpenBtn();
            };

            div.appendChild(btn_open);

            var btn_close = baDoc.createElement("img");
            btn_close.id = baBtnCloseID;
            btn_close.src = MACROS_MOBILE_ANCHOR.file_btn_close;
            btn_close.style.top = "0px";
            btn_close.style.left = "0px";
            btn_close.style.position = "absolute";
            btn_close.style.cursor = "pointer";
            btn_close.style.zIndex = "10100";
            btn_close.onclick = function() {
                baAnchorStat(MACROS_MOBILE_ANCHOR.tracer_id + '_click_on_close_btn');
                baAnchorClickCloseBtn();
            };

            div.appendChild(btn_close);
        }

        baAnchorSetSizes();
        baDoc.getElementById(baContID).style.display = "block";

        if (MACROS_MOBILE_ANCHOR.impression_tracker !== '') {
            var imp_tracker = baDoc.createElement("img");
            imp_tracker.style.top = "0px";
            imp_tracker.style.left = "0px";
            imp_tracker.style.width = "1px";
            imp_tracker.style.height = "1px";
            imp_tracker.style.position = "absolute";
            imp_tracker.src = MACROS_MOBILE_ANCHOR.impression_tracker;
            baDoc.body.appendChild(imp_tracker);
        }

        baAnchorStat(MACROS_MOBILE_ANCHOR.tracer_id + '_impession');
    };

    baAnchorSetSizes = function() {
        var winWidth = (baWin.innerWidth > 0) ? baWin.innerWidth : baWin.screen.width;
        var bannerWidth = MACROS_MOBILE_ANCHOR.banner_width;
        var aspectRatio = MACROS_MOBILE_ANCHOR.banner_height / MACROS_MOBILE_ANCHOR.banner_width;

        if (bannerWidth > winWidth) {
            bannerWidth = winWidth;
        }

        var bannerHeight = bannerWidth * aspectRatio;

        baDoc.getElementById(baContID).style.width = bannerWidth + 'px';
        baDoc.getElementById(baContID).style.height = bannerHeight + 'px';
        baDoc.getElementById(baBannerID).style.width = bannerWidth + 'px';
        baDoc.getElementById(baBannerID).style.height = bannerHeight + 'px';
        baDoc.getElementById(baBtnCloseID).style.height = bannerHeight + 'px';
        baDoc.getElementById(baBtnOpenID).style.height = bannerHeight + 'px';
        baDoc.body.style.paddingBottom = (bannerHeight + 10) + 'px';
    };

    baAnchorStat = function(id) {
        if (!baDoc.getElementById(id)) {
            var div = baDoc.createElement("div");
            div.id = id;
            div.style.top = "0px";
            div.style.left = "0px";
            div.style.width = "1px";
            div.style.height = "1px";
            div.style.position = "absolute";
            baDoc.body.appendChild(div);
        }

        baDoc.getElementById(id).innerHTML = '<img src="http://tracer.blogads.com/click.php?zoneid=' + id + '&rand=' + Math.floor(Math.random() * 99999999) + '" style="width: 1px; height: 1px; border: none;">';
    };

    baAnchorClickOpenBtn = function() {
        baDoc.getElementById(baBannerID).style.display = 'block';
        baDoc.getElementById(baBtnCloseID).style.display = 'block';
        baDoc.getElementById(baBtnOpenID).style.display = 'none';
        baDoc.getElementById(baContID).style.width = parseInt(baDoc.getElementById(baBannerID).offsetWidth) + "px";
    };

    baAnchorClickCloseBtn = function() {
        baDoc.getElementById(baBannerID).style.display = 'none';
        baDoc.getElementById(baBtnCloseID).style.display = 'none';
        baDoc.getElementById(baBtnOpenID).style.display = 'block';
        baDoc.getElementById(baContID).style.width = parseInt(baDoc.getElementById(baBtnOpenID).offsetWidth) + "px";
    };
    // /FUNCTIONS

    //ACTIONS
    setTimeout(baAnchorInit, 500);

    baWin.addEventListener("orientationchange", function() {
        setTimeout(baAnchorSetSizes, 500);
    }, false);
    // /ACTIONS
}).call(this);
