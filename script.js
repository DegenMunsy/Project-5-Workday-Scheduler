//display current date/time using moment.js
var today = moment();
$("#currentDay").text(today.format("llll"));

// Button function to clear local storage and clear contents
$("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
});

// save reference to important DOM elements
var resetBtn = document.querySelectorAll(".saveBtn");
//variable created to store events
var saveButton = document.querySelectorAll(".saveBtn");
// variable to store past, prersent & future w/color
var hourEL = document.querySelectorAll (".hour");

// RETRIVE ITEM FROM STORAGE AFTER HITTING REFRESH BTN
//https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance

function allStorage() {
  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
  }
  return values;
}

for (let i = 0; i < 10; i++) {
  console.log(document.getElementById(`${i}`))
  document.getElementById(`${i}`).value = localStorage.getItem(`${i}`)
}

console.log(allStorage())

//grabs values from hour and entry divs and saves them to local storage
for ( var i = 0; i < saveButton.length; i++) { 
    $(".saveBtn").click(function (event) {
      var entry = event.target.previousElementSibling.value;
      if(entry == null) {
        return;
      }
      var timeName = event.target.previousElementSibling.getAttribute("id");
      console.log(timeName)
      localStorage.setItem(timeName,entry);
    })
};

//COMPARING TIMEBLOCK TO ACTUAL TIME
var mode = "present";
var currentHour= new Date(); 
console.log(currentHour.getHours()); //18
console.log (currentHour); //Mon Mar 28 2022 18:03:03 GMT-0700

// //IF Statement comparing id="12" vs. currentHour.getHours().
// function changeColor() {
//   if (mode ==="present") {
//     console.log ("present")
//      .getAttribute(".present");
//   } else if (hours>= 0){
//     mode ="past" ; //past hours shows in red
//     console.log ("past")
//   } else {
//     eventEL.css('background-color','Blue'); //future hours shows in blue
//     console.log ("future")
//   }
// }

// //The forloop to run thru each timeblocks (to change the color)
// for (var i=0; i < eventEL.length; i++ ) {
//    event.target.getAttribute("id");
// }