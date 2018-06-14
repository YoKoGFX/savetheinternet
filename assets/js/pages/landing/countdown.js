function countdown() {

    const countDownDate = new Date("Jun 20, 2018 00:00:00").getTime();

    const countdownElements = document.getElementsByClassName("countdown");
    if (countdownElements.length == 0) return;
    const containerRoot = countdownElements[0];

    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("countdown-hours")[0].style.display = hours == 1 ? "none"   : "inline";
    document.getElementsByClassName("countdown-hour")[0].style.display  = hours == 1 ? "inline" : "none";

    document.getElementsByClassName("countdown-days")[0].style.display = days == 1 ? "none"   : "inline";
    document.getElementsByClassName("countdown-day")[0].style.display  = days == 1 ? "inline" : "none";

    // Display the result in the element with id="demo"
    containerRoot.getElementsByClassName("cdays")[0].innerHTML = days;
    containerRoot.getElementsByClassName("chours")[0].innerHTML = hours;
    //containerRoot.getElementsByClassName("cminutes")[0].innerHTML = minutes;
    //containerRoot.getElementsByClassName("cseconds")[0].innerHTML = seconds;
    //containerRoot.getElementsByClassName("cexpired")[0].style.display = "none";
    //containerRoot.getElementsByClassName("ccount")[0].style.display = "inline-block";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(javascriptCountdown);
        containerRoot.getElementsByClassName("cexpired")[0].style.display = "inline-block";
        containerRoot.getElementsByClassName("ccount")[0].style.display = "none";
    }
}

countdown();
const javascriptCountdown = setInterval(function() {countdown();}, 1000);
