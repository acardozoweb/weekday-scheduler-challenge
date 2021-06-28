// display current date
$("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));


// save task when save button clicked
$(".saveBtn").click(function() {
    
    // use task time and description
    let taskTime = $(this).parent().attr("id");
    let taskDescription = $(this).siblings(".description").val(); 

    // save tasks & descrips to localstorage
    localStorage.setItem(taskDescription, taskTime)
});


// current time variable
let currentTime = moment().hour();


// COLOUR-CODING TIMEBLOCKS

function auditTime() {
    // loop through all the timeblocks
    $(".time-block").each(function() {
        
         // create a variable to get each block's time
        let currentBlocksTime = 
        parseInt($(this).attr("id").slice(4));

        // check against currentTime to see which styles to apply
        if (currentBlocksTime > currentTime) {
            $(this).addClass("future");
        } else if (currentBlocksTime === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}

// run audit function to show timeblocks in past/present/future 
auditTime();


// show locally stored tasks

$("#time9 .description").text(localStorage.getItem("time9"));
$("#time10 .description").text(localStorage.getItem("time10"));
$("#time11 .description").text(localStorage.getItem("time11"));
$("#time12 .description").text(localStorage.getItem("time12"));
$("#time13 .description").text(localStorage.getItem("time13"));
$("#time14 .description").text(localStorage.getItem("time14"));
$("#time15 .description").text(localStorage.getItem("time15"));
$("#time16 .description").text(localStorage.getItem("time16"));
$("#time17 .description").text(localStorage.getItem("time17"));





