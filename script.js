$(document).ready(function () {
  let fiveAM = localStorage.getItem("hour-5"); 
  let sixAM = localStorage.getItem("hour-6"); 
  let sevenAM = localStorage.getItem("hour-7"); 
  let eightAM = localStorage.getItem("hour-8"); 
 
  let nineAM = localStorage.getItem("hour-9");                // Retrieves the tasks previously entered
  let tenAM = localStorage.getItem("hour-10");
  let elevenAM = localStorage.getItem("hour-11");
  let twelvePM = localStorage.getItem("hour-12");
  let onePM = localStorage.getItem("hour-13");
  let twoPM = localStorage.getItem("hour-14");
  let threePM = localStorage.getItem("hour-15");
  let fourPM = localStorage.getItem("hour-16");
  let fivePM = localStorage.getItem("hour-17"); 

  let sixPM = localStorage.getItem("hour-18"); 
  let sevenPM = localStorage.getItem("hour-19"); 
  let eightPM = localStorage.getItem("hour-20"); 
  let ninePM = localStorage.getItem("hour-21"); 
  let tenPM = localStorage.getItem("hour-22"); 
  let elevenPM = localStorage.getItem("hour-23"); 

  let storeTask
  let date = dayjs()
  let today
  let hour

  let hour5 = $('#hour-5')
  hour5.children('textarea').text(fiveAM);

  let hour6 = $('#hour-6')
  hour6.children('textarea').text(sixAM);

  let hour7 = $('#hour-7')
  hour7.children('textarea').text(sevenAM);

  let hour8 = $('#hour-8')
  hour8.children('textarea').text(eightAM);

  let hour9 = $('#hour-9')
  hour9.children('textarea').text(nineAM);           // Sets the textarea elements text content to the value from local storage
  
  let hour10 = $('#hour-10')
  hour10.children('textarea').text(tenAM);
  
  let hour11 = $('#hour-11')
  hour11.children('textarea').text(elevenAM);
  
  let hour12 = $('#hour-12')
  hour12.children('textarea').text(twelvePM);
  
  let hour13 = $('#hour-13')
  hour13.children('textarea').text(onePM);
  
  let hour14 = $('#hour-14')
  hour14.children('textarea').text(twoPM);
  
  let hour15 = $('#hour-15')
  hour15.children('textarea').text(threePM);
  
  let hour16 = $('#hour-16')
  hour16.children('textarea').text(fourPM);
  
  let hour17 = $('#hour-17')
  hour17.children('textarea').text(fivePM);

  let hour18 = $('#hour-18')
  hour18.children('textarea').text(sixPM);

  let hour19 = $('#hour-19')
  hour19.children('textarea').text(sevenPM);

  let hour20 = $('#hour-20')
  hour20.children('textarea').text(eightPM);

  let hour21 = $('#hour-21')
  hour21.children('textarea').text(ninePM);

  let hour22 = $('#hour-22')
  hour22.children('textarea').text(tenPM);

  let hour23 = $('#hour-23')
  hour23.children('textarea').text(elevenPM);



  today = $('#currentDay')
  today.text(date.format('dddd, MMMM DD, YYYY'))          // Appends the current date as text to the element with the id currentDay
  hour = date.format('H')                           // Assigns the current hour in military format to the variable hour
  
  switch(hour) {                                // Switch to check what hour it is and change the background color of the time blocks
    case '5' :
      console.log("hey it's 5am!")

      present(hour5);
      future(hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);

      break;

    case '6' :
      console.log("hey it's 6am!")

      past(hour5)
      present(hour6);
      future(hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);
  
      break;

    case '7' :
      console.log("hey it's 9am!")
    
      past(hour5, hour6)
      present(hour7);
      future(hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);
    
      break;

    case '8' :
      console.log("hey it's 9am!")
      
      past(hour5, hour6, hour7)
      present(hour8);
      future(hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);
      
      break;
    
    case '9' :
      console.log("hey it's 9am!")

      past(hour5, hour6, hour7, hour8)
      present(hour9);
      future(hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);

      break;

    case '10' :
      console.log("hey it's 10am!")

      past(hour5, hour6, hour7, hour8, hour9);
      present(hour10);
      future(hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);

      break;

    case '11' :
      console.log("hey it's 11am!")

      past(hour5, hour6, hour7, hour8, hour9, hour10);
      present(hour11);
      future(hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);
      
      break;

    case '12' :
      console.log("hey it's 12pm!")

      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11);
      present(hour12);
      future(hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);

      break;

    case '13' :
      console.log("hey it's 1pm!"); 

      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12);
      present(hour13);
      future(hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);   

      break;

    case '14' :
      console.log("hey it's 2pm!");

      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13);
      present(hour14);
      future(hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23); 

      break;

    case '15' :
      console.log("hey it's 3pm!");

      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14);
      present(hour15);
      future(hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23); 

      break;
      
    case '16' :
      console.log("hey it's 4pm!");

      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15);
      present(hour16);
      future(hour17, hour18, hour19, hour20, hour21, hour22, hour23); 

      break;
      
    case '17' :
      console.log("hey it's 5pm!");

      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16);
      present(hour17);
      future(hour18, hour19, hour20, hour21, hour22, hour23)

      break;

    case '18' :
      console.log("hey it's 6pm!");
  
      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17);
      present(hour18);
      future(hour19, hour20, hour21, hour22, hour23)
  
      break;

    case '19' :
      console.log("hey it's 7pm!");
    
      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18);
      present(hour19);
      future(hour20, hour21, hour22, hour23)
    
      break;

    case '20' :
      console.log("hey it's 8pm!");
      
      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19);
      present(hour20);
      future(hour21, hour22, hour23)
      
      break;

    case '21' :
      console.log("hey it's 9pm!");
        
      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20);
      present(hour21);
      future(hour22, hour23)
        
      break;

    case '22' :
      console.log("hey it's 10pm!");
          
      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21);
      present(hour22);
      future(hour23)
          
      break;

    case '23' :
      console.log("hey it's 11pm!");
            
      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22);
      present(hour23);
            
      break;
      
  //  case 'Current Hour':                                               // Test Case for current hour
  //    console.log("Test")

  //    past(hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5);  
  //    present(hour9);
  //    future(hour3); 

  //    break;
      
    default:
      console.log("Time to go home!")                        // Default case sets all time blocks to past 
      past(hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23);  
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
