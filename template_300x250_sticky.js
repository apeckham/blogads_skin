(function() {
    var baWin, baDoc, baStickyDiv, baStop, baSetStopPos, baAddCss;

    baStop = 0;
    baWin = window.parent;
    baDoc = baWin.document;
    baStickyDiv = baDoc.getElementById(MACROS_300x250_STICKY.sticky_300x250_div_id);
    baStickyCopyrightDiv = baDoc.getElementById(MACROS_300x250_STICKY.sticky_copyright_div_id);

    //FUNCTIONS
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

    baSetStopPos = function(element) {
        var yPosition = 0;

        while (element) {
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }

        if (baStop < yPosition) {
            return yPosition;
        }
        
        else {
            return baStop;
        }
    };
    // /FUNCTIONS

    //ACTIONS
    baStop = baSetStopPos(baStickyDiv);
    baAddCss(".ba_sticky {top: 3px; position: fixed; margin-top: 0px;}\n.ba_sticky_copyright {top: 250px; position: fixed;}\n");

    baWin.onscroll = function(e) {
        var scrollTop = baWin.pageYOffset;

        if (scrollTop >= baStop) {
            baStickyDiv.className = 'ba_sticky';
            baStickyCopyrightDiv.className = baStickyCopyrightDiv.className + ' ba_sticky_copyright';
        } else {
            baStickyDiv.className = '';
            baStickyCopyrightDiv.className = baStickyCopyrightDiv.className.replace(/ ba_sticky_copyright/gi, '');
            baStop = baSetStopPos(baStickyDiv);
        }
    };
    // /ACTIONS
}).call(this);
