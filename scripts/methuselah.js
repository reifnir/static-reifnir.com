(function () {
    var minimumAcceptableIeVersion = 10,
        isInternetExplorer = (navigator.appName === 'Microsoft Internet Explorer'),
        isJqueryLoadedYet = (typeof(jQuery) === 'function');

    function isOldInternetExplorer() {
        var msg = "You're not using Internet Explorer.";
        var ver = getInternetExplorerVersion();

        if (!isInternetExplorer)
            return false;
        else if (ver >= minimumAcceptableIeVersion)
            return false;
        else
            return true;
    }

    // Returns the version of Internet Explorer or a null (indicating the use of another browser).
    function getInternetExplorerVersion() {
        var rv = null;

        if (isInternetExplorer) {
            var ua = navigator.userAgent;
            var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
            if (re.exec(ua) !== null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    }

    function createIncompatabilityInline() {
        var span = jQuery('<span/>');
        span.text("If you're looking at my resume in an old version of Internet Explorer, I'll assume that you're checking for cross browser compatability. This site has only been tested with IE10 as that's the only one I have at hand right now.\nSeriously... upgrade. :)");
        return span;
    }

    function createIncompatabilityContainer() {
        return jQuery("<div class='alertModal'/>");
    }

    function createIncompatabilityDom() {
        return createIncompatabilityContainer().append(createIncompatabilityInline());
    }

    function displayIncompatabilityMessage() {
        var result = createIncompatabilityDom();
        
        jQuery('body').append(createIncompatabilityDom());
    }

    function detect() {
        //This is the only code that actually runs when this module is loaded
        if (!isJqueryLoadedYet)
            alert('Hey! Developer!! Place this script after the jQuery script');
        if (isOldInternetExplorer())
            displayIncompatabilityMessage();
    }

    var Methuselah = Methuselah || {
        detect: detect
    };

    window.Methuselah = Methuselah;
})()