// . Write a program that takes a positive integer from user & 
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 

// var pro = +prompt("Enter your integer");
// document.write("number:" + " " +pro + "<br>" + "roundoff:" + " " + Math.round(pro) + "<br>" + "ceil:" + " " + Math.ceil(pro) + "<br>"
//  + "floor:" + " " +Math.floor(pro) + "<br>" )


//  2. Write a program that takes a negative integer from user & 
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 

// var pro = +prompt("Enter your negative integer");
// document.write("number:" + " " +pro + "<br>" + "roundoff:" + " " + Math.round(pro) + "<br>" + "ceil:" + " " + Math.ceil(pro) + "<br>"
//  + "floor:" + " " +Math.floor(pro) + "<br>" )
// 3. Write a program that takes a positive floating point number 
// from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var pro = +prompt("Enter your floating number");
// document.write("number:" + " " +pro + "<br>" + "roundoff:" + " " + Math.round(pro) + "<br>" + "ceil:" + " " + Math.ceil(pro) + "<br>"
//  + "floor:" + " " +Math.floor(pro) + "<br>" )

//  4. Write a program that takes a negative floating point
//  number from user & display the following in your browser.
//  a. number
//  b. round off value of the number
//  c. floor value of the number
//  d. ceil value of the number

//  var pro = +prompt("Enter your negative floating number");
//  document.write("number:" + " " +pro + "<br>" + "roundoff:" + " " + Math.round(pro) + "<br>" + "ceil:" + " " + Math.ceil(pro) + "<br>"
//   + "floor:" + " " +Math.floor(pro) + "<br>" )


// 5. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 


// var pro = +prompt("Enter your number");
// document.write("number" +pro + " " + "<br>" + Math.abs(pro));

// 6. Write a program that simulates a dice using random() method 
// of JS Math class. Display the value of dice in your browser.

// var a = Math.random()*7;
// var b = Math.floor(a);
// document.write(b)

// 7. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser.


// var a = Math.random()*2;
// var b = Math.floor(a);
// if (b === 1) {
//     document.write("heads")
// } else {
//     document.write("tails")
// }

// 8. Write a program that shows a random number between 1 and 
// 100 in your browser.

// function rand() {
//     return Math.floor((Math.random()*100+1));
// }
// document.write(rand());

// 9. Write a program that asks the user about his weight. Parse the 
// user input and display his weight in your browser. Possible user 
// inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var pro = prompt("Enter your Weight");
// var res = parseInt(pro);
// document.write("Your weight is:" + " " + res)

// 10. Write a program that stores a random secret number from 1 
// to 10 in a variable. Ask the user to input a number between 1 
// and 10. If the user input equals the secret number, congratulate 
// the user.

// var num = 9;
// var pro = +prompt("Enter your number 1-10")
// if (pro === 9) {
//     alert("Congratulations You win")
// } else {
//     alert("you lose")
// }

// 11. Write a program that displays current date and time in your 
// browser.

// var date = new Date();
// document.write(date);

// 12. Write a program that alerts the current month in words. For 
// example December
// var  months = [
//     "January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"
//   ];
  
//   var d = new Date();
//   var  currentMonth = d.getMonth();
  
//   var currentMonthInWords = months[currentMonth];
//   alert(currentMonthInWords);
  
// 13. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show Sun.
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// var b = d.getDay();
//   var day = dayNames[b];
//   alert(day);


// 14. Write a program that displays a message “It’s Fun day” if its 
// Saturday or Sunday today.
 
// const today = new Date();
// const currentDay = today.getDay();

// if (currentDay === 0 || currentDay === 6) {
//   alert("It's Fun day");
// } else {
//   alert("It's not Fun day");
// }

// 15. Write a program that shows the message “First fifteen days of the 
// month” if the date is less than 16th of the month else shows “Last 
// days of the month”

// const today = new Date();
// const currentDate = today.getDate(); // Get the day of the month

// if (currentDate <= 15) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// 16. Write a program that determines the minutes since midnight, Jan. 
// 1, 1970 and assigns it to a variable that hasn't been declared 
// beforehand. Use any variable you like to represent the Date object.

// const now = new Date();
// const minutesSince1970 = new Date("January 1, 1970");
// const newdate = minutesSince1970.getMinutes();

// console.log(newdate);














 
























































