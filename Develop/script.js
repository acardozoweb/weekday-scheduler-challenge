// display current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));



// current tiem variable
var currentTime = moment().hour();

// COLOUR-CODING TIMEBLOCKS
function auditTime() {
    // loop through all the timeblocks
    $(".time-block").each(function() {

        // VAR UNDEFINED
        var currentBlocksTime // ...
        // check time to see which colour/class to apply
        if (currentBLocksTime === currentTime) {
            $(this).addClass(".present");
        } if (currentBlocksTime > currentTime) {
            $(this).addClass(".future");
        } else {
            $(this).addClass(".past");
        }
    })
}

// run audit function
auditTime();


// save task when save button clicked
$(".save-Btn").click(function() {
    
    // GET task time and description
    var taskTime = $(this).parent().attr("id");
    var taskDescription = $(this).siblings(".description").val(); 

    // save tasks & descrips to localstorage
    localStorage.setItem(taskDescription, taskTime)
});


// show locally stored tasks

$("#time9 .description").text(localStorage.getItem("time9"));
$("#time10 .description").text(localStorage.getItem("time10"));
$("#time11 .description").text(localStorage.getItem("time11"));
$("#time12 .description").text(localStorage.getItem("time12"));
$("#time1 .description").text(localStorage.getItem("time1"));
$("#time2 .description").text(localStorage.getItem("time2"));
$("#time3 .description").text(localStorage.getItem("time3"));
$("#time4 .description").text(localStorage.getItem("time4"));
$("#time5 .description").text(localStorage.getItem("time5"));





