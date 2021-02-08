
//use uquery and moment.js to update id currentDay to display day of week, Month, and calendar day (e.g., 'Thursday, September 5th') based on current day
$('#currentDay').text(moment().format('dddd, MMMM Do'));

// update elements based on time of day
$('#currentHour')
var tasks = {};

//save text from input
$('.input').on('click', function () {
    var text = $(this).text().trim();
    console.log(text);

});

// save button triggers saving task in local storage
$(".saveBtn").click(function () {
    console.log("button is working")
    // get form values based on closest element and class
    var taskText = $(this).siblings(".taskDescription").val();
    console.log(taskText);

    // create a variable of task date. assigning the 
    // value of the element w/class dueDate closest to the button 
    // we clicked
    var taskDate = $(this).siblings(".dueDate").text().trim();
    console.log(taskDate);

    if (taskText && taskDate) {
        localStorage.setItem(taskDate, JSON.stringify(taskText));
        console.log("task data is stored!");
    }
    else {
        event.preventDefault()
        console.log("no task data was stored");
    }
});

// unstringify the JSON value when page loads
// on page load check local storage, if if (taskText && taskDate) then unstringify

$("#nine").val(JSON.parse(localStorage.getItem("9:00")));
$("#ten").val(JSON.parse(localStorage.getItem("10:00")));
$("#eleven").val(JSON.parse(localStorage.getItem("11:00")));
$("#twelve").val(JSON.parse(localStorage.getItem("12:00")));
$("#thirteen").val(JSON.parse(localStorage.getItem("13:00")));
$("#fourteen").val(JSON.parse(localStorage.getItem("14:00")));
$("#fifteen").val(JSON.parse(localStorage.getItem("15:00")));
$("#sixteen").val(JSON.parse(localStorage.getItem("16:00")));
$("#seventeen").val(JSON.parse(localStorage.getItem("17:00")));

// show whether time of task deadline has passed yet
// create variable for functionality for creating or editing task due dates
var auditTask = function () {
    // get hour from task element
    // var date = $(taskEl).find("span").text().trim();
    var startHour = $(".hour").text().trim();

    // convert to moment object at 5:00pm
    // var time = moment(date, "L").set("hour", 17);
    var startTime = moment(startHour, "H");

    // change class if past due hour
    if (moment().isAfter(startTime)) {
        $(".taskDescription").removeClass("future present");
        $(".taskDescription").addClass("past");
    }
    // change class if currently due
    if (moment().isSame(startTime)) {
        $(".taskDescription").removeClass("future past");
        $(".taskDescription").addClass("present");
    }
};

auditTask();