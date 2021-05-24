var rowsEl = $(".row");
var hoursEl = $(".hour");
var saveBtnEl = $(".saveBtn");
var timeBlockEl = $(".time-block");
var tasksEl = $("textarea");




$(document).ready(function () {
    var now = moment();
    $("#currentDay").text(now.format("dddd MMMM Do YYYY, h:mm a"))

    console.log(now);
    
});


timeBlockEl.each(function (){
    var currentLabelEl = $(this).siblings("label");
    var hourLabel = currentLabelEl.text();
    
    var tasks = localStorage.getItem(hourLabel);

    $(this).val(tasks);
    




    var timeEl = parseInt($(this).parent().attr("id"));
    var currentTimeEl = parseInt(moment().format("H"));
    console.log(currentTimeEl);
    console.log(timeEl);
    console.log($(this));
    if (timeEl < currentTimeEl) {
        $(this).addClass("past");
        
    } 

    else if (timeEl === currentTimeEl) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }

})





$(".saveBtn").on("click", function() {
var currentLabelEl = $(this).siblings("label");
var hourLabel = currentLabelEl.text();
var currentTaskEl= $(this).siblings("textarea");
var currentTask = currentTaskEl.val();

console.log(hourLabel, currentTask);

localStorage.setItem(hourLabel, currentTask);

})