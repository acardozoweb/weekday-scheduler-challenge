// display current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// "current time" variable



// COLOUR-CODING TIMEBLOCKS
function auditTime() {
    // loop through all the timeblocks
    $(".time-block").each(function() {
        // check time to see which colour to apply
        if (thisTime === currentTime) {
            $(this).addClass(".present");
        } if (thisTime > currentTime) {
            $(this).addClass(".future");
        } else {
            $(this).addClass(".past");
        }
    })
}








