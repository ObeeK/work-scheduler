// Display current date - look in documentation for format
var currentDate = moment()
console.log(currentDate.hour());
// Set hour blocks / reference moment.js to identify if it's past/present/future & color code 
var textAreas = document.querySelectorAll("textarea");
// check hour of each - compare to current moment
for(var i = 0; i < textAreas.length; i++) {
    var currentEl = textAreas[i]
    var hourBlock = parseInt(textAreas[i].getAttribute("hour"))
    var currentHour = currentDate.hour()
    if (hourBlock < currentHour) {
        textAreas[i].classList.add("past")
    }
    console.log(hourBlock < currentHour, hourBlock, currentHour)
}

// Add save functionality
// using textareas array
// Add persistence
// using textareas array