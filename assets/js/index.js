//hour for current time
var currHr = parseInt(moment().format("H"));

//block that changes color
var schedule = $(".schedule-item");

//identifies the save class where the button is held
var saveBtn = $(".save");

//display current day at top of page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var colorChange= function() {
    schedule.each(function (i, schedule) {
        var i = parseInt($(this).attr("time"));
        if(currHr > i){
            $(schedule).removeClass("future")
            .removeClass("present")
            .addClass("past");
        }
        else if(currHr === i) {
            $(schedule).removeClass("future")
            .removeClass("past")
            .addClass("present");
        }
        else if(currHr < i) {
            $(schedule).removeClass("past")
            .removeClass("present")
            .addClass("future");
        };
    });
}

// update the color change function every second
setInterval(colorChange(),1000);

//save to local storage
saveBtn.on("click", function(event) {
    var taskId = $(this).attr("id");
    console.log(taskId);
    var taskText = $("#schedule-item" + taskId)
    console.log(taskText.val().trim());

    localStorage.setItem(taskText.attr("id"), taskText.val());
});

//retrieve from local storage on page load
$("#schedule-item8").text(localStorage.getItem("schedule-item8"));
$("#schedule-item9").text(localStorage.getItem("schedule-item9"));
$("#schedule-item10").text(localStorage.getItem("schedule-item10"));
$("#schedule-item11").text(localStorage.getItem("schedule-item11"));
$("#schedule-item12").text(localStorage.getItem("schedule-item12"));
$("#schedule-item13").text(localStorage.getItem("schedule-item13"));
$("#schedule-item14").text(localStorage.getItem("schedule-item14"));
$("#schedule-item15").text(localStorage.getItem("schedule-item15"));
$("#schedule-item16").text(localStorage.getItem("schedule-item16"));
$("#schedule-item17").text(localStorage.getItem("schedule-item17"));


