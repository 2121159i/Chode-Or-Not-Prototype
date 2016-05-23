/**
 * Created by 2121159i on 18/04/2016.
 */

var clock = $('#countdown_timer').FlipClock(3599, {
    countdown: true,
    clockFace: 'MinuteCounter'
});

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    if (clock.getTime().time == 0){
       setTimeout(function(){window.location.replace("/chodeOrNot/timeup");}, 2000);

    }
}




