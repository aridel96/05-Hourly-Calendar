$(document).ready(function () {

  let nineAM = localStorage.getItem("hour-9");                // Retrieves the tasks previously entered
  let tenAM = localStorage.getItem("hour-10");
  let elevenAM = localStorage.getItem("hour-11");
  let twelvePM = localStorage.getItem("hour-12");
  let onePM = localStorage.getItem("hour-1");
  let twoPM = localStorage.getItem("hour-2");
  let threePM = localStorage.getItem("hour-3");
  let fourPM = localStorage.getItem("hour-4");
  let fivePM = localStorage.getItem("hour-5"); 

  let storeTask
  let date = dayjs()
  let today
  let hour
  
  let hour9 = $('#hour-9')
  hour9.children('textarea').text(nineAM);           // Sets the textarea elements text content to the value from local storage
  
  let hour10 = $('#hour-10')
  hour10.children('textarea').text(tenAM);
  
  let hour11 = $('#hour-11')
  hour11.children('textarea').text(elevenAM);
  
  let hour12 = $('#hour-12')
  hour12.children('textarea').text(twelvePM);
  
  let hour1 = $('#hour-1')
  hour1.children('textarea').text(onePM);
  
  let hour2 = $('#hour-2')
  hour2.children('textarea').text(twoPM);
  
  let hour3 = $('#hour-3')
  hour3.children('textarea').text(threePM);
  
  let hour4 = $('#hour-4')
  hour4.children('textarea').text(fourPM);
  
  let hour5 = $('#hour-5')
  hour5.children('textarea').text(fivePM);


  today = $('#currentDay')
  today.text(date.format('dddd, MMMM DD, YYYY'))          // Appends the current date as text to the element with the id currentDay
  hour = date.format('H')                           // Assigns the current hour in military format to the variable hour
  
  switch(hour) {                                // Switch to check what hour it is and change the background color of the time blocks
    case '9' :
      console.log("hey it's 9am!")

      present(hour9);
      future(hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5);

      break;

    case '10' :
      console.log("hey it's 10am!")

      past(hour9);
      present(hour10);
      future(hour11, hour12, hour1, hour2, hour3, hour4, hour5);

      break;

    case '11' :
      console.log("hey it's 11am!")

      past(hour9, hour10);
      present(hour11);
      future(hour12, hour1, hour2, hour3, hour4, hour5);
      
      break;

    case '12' :
      console.log("hey it's 12pm!")

      past(hour9, hour10, hour11);
      present(hour12);
      future(hour1, hour2, hour3, hour4, hour5);

      break;

    case '13' :
      console.log("hey it's 1pm!"); 

      past(hour9, hour10, hour11, hour12);
      present(hour1);
      future(hour2, hour3, hour4, hour5);   

      break;

    case '14' :
      console.log("hey it's 2pm!");

      past(hour9, hour10, hour11, hour12, hour1);
      present(hour2);
      future(hour3, hour4, hour5); 

      break;

    case '15' :
      console.log("hey it's 3pm!");

      past(hour9, hour10, hour11, hour12, hour1, hour2);
      present(hour3);
      future(hour4, hour5); 

      break;
      
    case '16' :
      console.log("hey it's 4pm!");

      past(hour9, hour10, hour11, hour12, hour1, hour2, hour3);
      present(hour4);
      future(hour5); 

      break;
      
    case '17' :
      console.log("hey it's 5pm!");

      past(hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4);
      present(hour5);

      break;
      
  //  case 'Current Hour':                                               // Test Case for current hour
  //    console.log("Test")

  //    past(hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5);  
  //    present(hour9);
  //    future(hour3); 

  //    break;
      
    default:
    console.log("Time to go home!")                        // Default case sets all time blocks to past 
    past(hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5);  
  }

  function past(...args) {          // Uses ...args to take multiple arguments
    // for (let timeBlock = 0; timeBlock < args.length; timeBlock++) {      
    //   let time = args[timeBlock];

    //   if(time.hasClass('present') || time.hasClass('future') ) {
    //     time.removeClass('present future')
    //   }
    //   time.addClass('past')
    // }

    $.each(args, function() {                         // Uses each for loop to iterate through the args array
      if($(this).hasClass('present') || $(this).hasClass('future') ) {      // Checks if the element at the current index has the classes present or future
        $(this).removeClass('present future')                                   // If it does have either one of the classes it removes both
      }
      $(this).addClass('past')                // Adds the class past
    })
  }

  function present(...args) {
    $.each(args, function() {
      if($(this).hasClass('past') || $(this).hasClass('future') ) {
        $(this).removeClass('past future')
      }
      $(this).addClass('present')
    })
  }

  function future(...args) {
    $.each(args, function() {
      if($(this).hasClass('present') || $(this).hasClass('past') ) {
        $(this).removeClass('present past')
      }
      $(this).addClass('future')
    })
  }

  function addTask(goal) {
    goal.preventDefault();
    let hourBlock = $(this).parent().attr('id');
    let task = $(this).siblings().eq(1).val()                 // Uses the siblings selector to get all the siblings of hourBlock. Eq gives us the sibling at index 1 and val gives us the value of this element which is user input
    storeTask = localStorage.setItem(hourBlock, task)       // Sets the value of hourBlock to task in local storage
    console.log(hourBlock + " " + task)
  }

  var save = $(".saveBtn")        // selects the element with the class saveBtn and stores it in the variable save
  
  save.on("click", addTask);      // attaches an event listener to the save variable. when the element is clicked it performs the actions in the function addTask
});
