/**
 * Created by 2121159i on 18/04/2016.
 */
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}

var clock = $('#countdown_timer').FlipClock(3600, { countdown: true });

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    if (clock.getTime().time == 0){
       setTimeout(function(){window.location.replace("/chodeOrNot/timeup");}, 2000);

    }
}




