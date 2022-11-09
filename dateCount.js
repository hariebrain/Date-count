function dateCount() {
    var date1 = document.getElementById("date").value
    var date = new Date(date1)
    var count = document.getElementById("count").value
    //Date convert to millisecond
    var milliSec = date.getTime()
    //Number feild convert to millisecond
    var numMilli = Number(count) * 86400000
    //Add date
    var addDate = milliSec + numMilli
    var newDate = new Date(addDate)
    var addNewDay = document.getElementById("newDate")
    addNewDay.innerHTML = "<b>New add date</b> " + newDate
    //subraction date
    var minusDate = milliSec - numMilli
    var subDate = new Date(minusDate)
    var subNewDate = document.getElementById("subDate")
    subNewDate.innerHTML = "<b>New subraction date</b> " + subDate
}