// Set the date we're counting down to
var countDownDate = new Date("Jul 24, 2017 00:00:00").getTime();
//var countDownDate = new Date().getTime();


// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if(seconds % 2 == 0) {
        document.getElementById("content").style.color= "red";
        document.getElementById("content").style.backgroundColor = "white";
    }

    if(seconds % 2 != 0) {
        document.getElementById("content").style.color= "white";
        document.getElementById("content").style.backgroundColor = "red";
    }

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "";
        document.getElementById("heading").innerHTML = "NU HÄNDER DET, AVSKEDSVECKAN ÄR IGÅNG!!!!"
    }
}, 1000);