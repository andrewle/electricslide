/*!
 * jQuery Electricslide Slideshow Plugin
 * Author: Andrew Le (@andrewle)
 * Version: 1
 * License: WTFPL 2 (http://sam.zoy.org/wtfpl/)
 * Requires: jQuery v1.2.6 or later
 */
(function ($) {    
    $.fn.electricslide = function(timeout) {
        var elem = this.children().first();
        timeout = (timeout === undefined) ? 3000 : timeout;

        this.css('position', 'relative');
        this.children().css({
            'position': 'absolute', 
            'left': '0', 
            'top': '0', 
            'display': 'none'
        });
        elem.css('display', 'block');

        setTimeout(shakeIt(elem, timeout), timeout);
    };
    
    function shakeIt(elem, timeout) {
        return function () {
            var next_elem = elem.next().length ? elem.next() : elem.siblings().first();
            elem.fadeOut(1000);
            next_elem.fadeIn(1000);
            setTimeout(shakeIt(next_elem, timeout), timeout);
        };
    }
})(jQuery);