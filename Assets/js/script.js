//use uquery and moment.js to update id currentDay to display day of week, Month, and calendar day (e.g., 'Thursday, September 5th') based on current day


$('#currentDay').text(moment().format('dddd, MMMM Do'));

// var dt = moment(myDate.date, "YYYY-MM-DD HH:mm:ss")
// dt.format('dddd');
// console.log(moment(mydate).format('dddd'));



// $(document).ready(function () {
//     $('#calendar').eCalendar({

//         weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

//         months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

//         textArrows: { previous: '<', next: '>' },

//         eventTitle: 'Events',

//         url: '',

//         firstDayOfWeek: 0,

//         events: [

//             { title: 'Event 1', description: 'Description 1', < a href = "https://www.jqueryscript.net/time-clock/" > date</a > time: new Date(2014, 7, 15, 17)},

//         { title: 'Event 2', description: 'Description 2', datetime: new Date(2014, 7, 14, 16) },

//         { title: 'Event 3', description: 'jQueryScript.Net', datetime: new Date(2014, 7, 10, 16) }

//     ]});
//     });
