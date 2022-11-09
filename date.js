function datePick() {

    var date1 = document.getElementById('date1').value;
    var dateOne = new Date(date1)
    var date2 = document.getElementById('date2').value;
    var dateTwo = new Date(date2)

    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    //days
    var diffDays = Math.abs((dateOne - dateTwo) / (oneDay));
    var day = document.getElementById("day")
    day.innerHTML = "The total days is " + diffDays
    //millisec
    var diffMilliSec = Math.abs(dateOne - dateTwo)
    var milliSec = document.getElementById("milliSec")
    milliSec.innerHTML = "The total  millisecond is " + diffMilliSec
    //hour
    var diffHour = Math.abs(diffMilliSec / 36e5)
    var hour = document.getElementById("hour")
    hour.innerHTML = "The total hour is " + diffHour
    //seconds
    var diffSec = Math.abs(diffMilliSec / 1000)
    var second = document.getElementById("second")
    second.innerHTML = "The total second is " + diffSec
    //minutes
    var diffMinute = Math.abs(diffSec /= 60)
    var minute = document.getElementById("minute")
    minute.innerHTML = "The total minute is " + diffMinute
    //month
    var months
    months = (dateTwo.getFullYear() - dateOne.getFullYear()) * 12;
    months -= dateOne.getMonth();
    months += dateTwo.getMonth();
    var month = document.getElementById("month")
    month.innerHTML = "The total month is " + months
    //year
    var years = new Date(new Date(dateTwo) - new Date(dateOne)).getFullYear() - 1970;
    var year = document.getElementById("year")
    year.innerHTML = "The total year is " + years
}