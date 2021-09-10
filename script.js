var timePlace = document.getElementById("currentDay");

// Display current date - look in documentation for format
var currentDate = moment()

timePlace.innerHTML = currentDate;

console.log(currentDate.hour());
// Set hour blocks / reference moment.js to identify if it's past/present/future & color code 
var textAreas = document.querySelectorAll("textarea");
var hourBlocks = document.querySelectorAll(".textblock")
// check hour of each - compare to current moment
for(var i = 0; i < hourBlocks.length; i++) {
    var currentEl = hourBlocks[i]
    var hourBlock = parseInt(hourBlocks[i].getAttribute("hour"))
    var currentHour = currentDate.hour()
    if (hourBlock < currentHour) {
        hourBlocks[i].classList.add("past")
    }
    if (hourBlock === currentHour) {
        hourBlocks[i].classList.add("present")
    }
    if (hourBlock > currentHour) {
        hourBlocks[i].classList.add("future")
    }
    console.log(hourBlock < currentHour, hourBlock, currentHour)
}

// Add save functionality  -- check WebAPIS local storage activities -- click event listener on save buttons
// using textareas array

// Add persistence
// using textareas array