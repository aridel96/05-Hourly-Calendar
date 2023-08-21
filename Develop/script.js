// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var nineAM = $("#hour-9").children().eq(2)                // Selects the child element with the index of 2 for the element with the id of hour-number
  var tenAM = $("#hour-10").children().eq(2)
  var elevenAM = $("#hour-11").children().eq(2)
  var twelvePM = $("hour-12").children().eq(2)
  var onePM = $("hour-1").children().eq(2)
  var twoPM = $("hour-1").children().eq(2)
  var threePM = $("hour-1").children().eq(2)
  var fourPM = $("hour-1").children().eq(2)
  var fivePM = $("hour-1").children().eq(2)

  // var save = $(".saveBtn").on("submit", saveTask);

  // $("textarea").addClass("task");

  // let task = $('input[name="task"]').val();


  function addTask(goal) {
    goal.preventDefault()
    window.alert("submitted!")



  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // addClass and toggleClass


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // submit event

  // function saveTask(goal) {
  //   goal.preventDefault()
  //   window.alert("submitted!")
  // }

  // TODO: Add code to display the current date in the header of the page.











  nineAM.on('submit', addTask);
  tenAM.on('submit', addTask);
  elevenAM.on('submit', addTask);
  twelvePM.on('submit', addTask);
  onePM.on('submit', addTask);
  twoPM.on('submit', addTask);
  threePM.on('submit', addTask);
  fourPM.on('submit', addTask);
  fivePM.on('submit', addTask);

});
