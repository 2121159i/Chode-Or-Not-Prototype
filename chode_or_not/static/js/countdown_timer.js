/**
 * Created by 2121159i on 18/04/2016.
 */
//jQuery.fn.center = function () {
//    this.css("position","absolute");
//    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
//                                                $(window).scrollTop()) + "px");
//    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
//                                                $(window).scrollLeft()) + "px");
//    return this;
//};

//var clock = $('#test').FlipClock(3600, { countdown: true });

//var myVar = setInterval(myTimer, 1000);
//
//function myTimer() {
//    if (clock.getTime().time == 0) {
//        setTimeout(function () {
//            window.location.replace("/chodeOrNot/timeup");
//        }, 2000);
//
//    }
//}






setInterval(function () {
        myTimer()
      }, 1000);

    	function myTimer() {
        $("#test").removeClass("play");
        var n = $("#test .fc-number.active");

        if (n.html() == undefined) {
            n = $("#test .fc-number").eq(0);
            n.addClass("before")
             .removeClass("active")
             .next(".fc-number")
             .addClass("active")
             .closest("#test")
             .addClass("play");
        }
        else if (n.is(":last-child")) {
            $("#test .fc-number").removeClass("before");
            n.addClass("before").removeClass("active");
            n = $("#test .fc-number").eq(0);
            n.addClass("active")
             .closest("#test")
             .addClass("play");
        }
        else {
            $("#test .fc-number").removeClass("before");
            n.addClass("before")
             .removeClass("active")
             .next(".fc-number")
             .addClass("active")
             .closest("#test")
             .addClass("play");
        }
      }

  		var clock;
//
//  		$(document).ready(function() {
//  			var clock;
//            clock = $('#clock').FlipClock(3600, { countdown: true });
//              //clock = $('#clock').FlipClock({
//  		    //    clockFace: 'DailyCounter',
//  		    //    autoStart: true,
//               // countdown: true
//  		    //});
//
//  		    clock.setTime(220880);
//  		    //clock.setCountdown(true);
//  		    clock.start();
//
//  		});
//var clock = $('#countdown_timer').FlipClock(3600, { countdown: true });
//
//var myVar = setInterval(myTimer, 1000);
//
//function myTimer() {
//    if (clock.getTime().time == 0){
//       setTimeout(function(){window.location.replace("/chodeOrNot/timeup");}, 2000);
//
//    }




