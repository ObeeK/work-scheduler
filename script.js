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
$(".saveBtn").on("click", function() {
    
   var textInput = $(this).siblings(".textblock").children("textarea").val();
   var hourNow = parseInt($(this).siblings(".textblock").attr("hour"));

   localStorage.setItem(hourNow, textInput)
})

// using textareas array

// Add persistence

var savedText = function () {
    // var value = localStorage.getItem(10);
    // $("textarea[hour='10']").val(value);

    var hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    hourArr.forEach(function(e) {
        $(`textarea[hour='${e}']`).val(localStorage.getItem(e));
 
    })
}


savedText()
// using textareas array