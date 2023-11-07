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

// var d = new Date();
// var b = d.toDateString();
// console.log(b)


// var d = new Date();
// var  a = d.getMilliseconds('January 1, 1970');
// console.log(d.getMilliseconds()  + a)


// 19. Create a date object of the starting date of this Ramadan and alert 
// the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// // Define the starting date of 1st Ramadan
// const ramadanStartDate = new Date('2015-06-18');

// // Get the current date
// const currentDate = new Date();

// // Calculate the time difference in milliseconds
// const timeDifference = currentDate - ramadanStartDate;

// // Convert the time difference to days
// const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// // Alert the number of days passed since 1st Ramadan
// alert(`Number of days passed since 1st Ramadan: ${daysPassed} days`);

// 18. Write a program that creates a Date object for the last day of the 
// last month of 2020 and assigns it to variable named laterDate



// var later = new Date("December 31, 2023");
// console.log(later);


// 20. Write a program that displays in your browser the seconds that 
// elapsed between the reference date and the beginning of 2015.



// // Define the reference date (December 5, 2015)
// const referenceDate = new Date('2015-12-05');

// // Define the beginning of 2015
// const beginningOf2015 = new Date('2015-01-01');

// // Calculate the time difference in milliseconds
// const timeDifference = referenceDate - beginningOf2015;

// // Convert the time difference to seconds
// const secondsElapsed = Math.floor(timeDifference / 1000);

// // Display the number of seconds elapsed in the browser
// document.body.innerHTML = `Seconds elapsed between December 5, 2015, and the beginning of 2015: ${secondsElapsed} seconds`;

// 17. Write a program that tests whether it's before noon and alert “Its 
// AM” else “its PM”

// // Get the current date and time
// const currentDate = new Date();

// // Get the current hour (in 24-hour format)
// const currentHour = currentDate.getHours();

// // Check if it's before noon (AM) or not (PM)
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// // }


// 23. Write a program to ask the user about his age. Calculate and 
// show his birth year in your browser

// // Ask the user for their age
// const age = prompt("Please enter your age:");

// // Calculate the birth year
// const currentYear = new Date().getFullYear();
// const birthYear = currentYear - parseInt(age);

// // Display the birth year in the browser
// alert(`Your birth year is approximately ${birthYear}`);





// // Get input from the user
// const customerName = prompt("Enter Customer Name:");
// const currentMonth = prompt("Enter Current Month:");
// const numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
// const chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
// const dueDate = prompt("Enter Due Date (yyyy-mm-dd):");
// const latePaymentSurchargeRate = parseFloat(prompt("Enter Late Payment Surcharge Rate (%):"));

// // Calculate net amount payable
// const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// // Calculate late payment surcharge
// const currentDate = new Date();
// const dueDateObj = new Date(dueDate);
// const latePaymentSurcharge = (currentDate > dueDateObj) ? ((netAmountPayable * latePaymentSurchargeRate) / 100).toFixed(2) : "0.00";

// // Calculate gross amount payable
// const grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

// // Display the bill in the browser
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Current Month: " + currentMonth + "</p>");
// document.write("<p>Number of Units: " + numberOfUnits.toFixed(2) + "</p>");
// document.write("<p>Charges per Unit: $" + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable + "</p>");
// document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable + "</p>");




















 
























































