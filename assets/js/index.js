//empty array to save in local storage
var tasks = {};

//hour for current time
var currHr = parseInt(moment().format("H"));

//block that changes color
var schedule = $(".schedule-item");

var saveBtn = $(".save");

$("#currentDay").text(moment().format("dddd, MMMM Do"));

var colorChange= function() {
    schedule.each(function (i, schedule) {
        var i = parseInt($(this).attr("id"));
        if(currHr > i){
            $(schedule).removeClass("bg-secondary")
            .removeClass("future")
            .removeClass("present")
            .addClass("past");
        }
        else if(currHr === i) {
            $(schedule).removeClass("bg-secondary")
            .removeClass("future")
            .removeClass("past")
            .addClass("present");
        }
        else if(currHr < i) {
            $(schedule).removeClass("bg-secondary")
            .removeClass("past")
            .removeClass("present")
            .addClass("future");
        };
    });
}

colorChange();