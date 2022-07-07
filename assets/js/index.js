//hour for current time
var currHr = parseInt(moment().format("H"));

//block that changes color
var schedule = $(".schedule-item");

var saveBtn = $(".save");

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

setInterval(colorChange(),1000);

saveBtn.on("click", function(event) {
    var taskId = $(this).attr("id");
    console.log(taskId);
    var taskText = $("#schedule-item" + taskId)
    console.log(taskText.val().trim());

    localStorage.setItem(taskText.attr("id"), taskText.val());
});