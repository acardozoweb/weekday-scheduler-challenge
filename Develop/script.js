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
        
         // create a variable to show present time as an object
        let currentBlocksTime = parseInt($(this).attr("id").replace(".hour", ''));
     
        // check time to see which styles to apply
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
$("#time1 .description").text(localStorage.getItem("time1"));
$("#time2 .description").text(localStorage.getItem("time2"));
$("#time3 .description").text(localStorage.getItem("time3"));
$("#time4 .description").text(localStorage.getItem("time4"));
$("#time5 .description").text(localStorage.getItem("time5"));





