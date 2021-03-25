//display current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDate);

// compare hour blocks with current hour and set color accordingly
function setColor() {
    var currentHour = moment().hours();
    $(".description").each(function() {
        var hourBlock = parseInt($(this).attr("id"));
        if (hourBlock < currentHour) {
            $(this).addClass("past");
        }
        else if (hourBlock === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    });
}
    
setColor();
//execute setColor every minute to keep up to date  
setInterval(function () {
    setColor();
}, 60000);

//set events in local storage  
$(".saveBtn").click(function() {
    var hour = $(this).siblings(".description").attr("id");
    var event = $(this).siblings(".description").val();
    localStorage.setItem(hour, event);
});

//get events in local storage
function renderEvents() {
    for (var i = 9; i < 18; i++) {
        $("#" + [i]).val(localStorage.getItem([i]));
    }
}

renderEvents();







