// 1.	Create a block of code that you can use several times.

// function add(a,b) {
//     return a+b;

// }
// let a = add(3,4);
// console.log(a)
// let b = add(10,5);
// console.log(b);


// 2.	Write a function that displays current date & time in your browser.

// var date = new Date();
//     document.write(date)


// 3.	Write a function that takes first & last name and then it greets the user using his full name.
// function greet() {
//     let a = prompt("Enter Your First Name");
//     let b = prompt("Enter Your Last Name");
//     return a +" "+ b;
// }
// alert("Good Morning" +" " + greet());


// 4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function sum() {
//     let num1 = +prompt("Enter Your First Number");
//     let num2 = +prompt("Enter Your Second Number");
//     return num1 + num2;
// }
//     alert(sum());
// 5.	 Calculator: 
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
// Return and show the desired result in your browser.


// function performOperation(num1, num2, operator) {
//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       if (num2 === 0) {
//         return "Division by zero is not allowed";
//       }
//       return num1 / num2;
//     default:
//       return "Invalid operator";
//   }
// }
// let  num1 = 16;
// let num2 = 5;
// let operator = '/';
// let result = performOperation(num1, num2, operator);

// document.write("Result:"+ num1 + operator + num2 + "=" + result);

// 6.	 Write a function that squares its argument.

// function squareNumber(number) {
//     return number * number;
//   }
//   const inputNumber = 5;
//   const squared = squareNumber(inputNumber);
//   alert(`The square of ${inputNumber} is ${squared}`);

// 7.	 Write a function that computes factorial of a number. //going back till 1
//   function factorial(number) {
//     if (number === 0) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   }
//   const num = 5;
//   const result = factorial(num);
//   console.log(`The factorial of ${num} is ${result}`); // Output: "The factorial of 5 is 120"

// 8.	Write a function that take start and end number as inputs & display counting in your browser.
// function number(start,end) {
//     for ( i = start; i <=end; i++){
//         document.write(i + "<br>")
//     }
// }

// let start = +prompt("Input starting number");
// let end = +prompt("Input ending number");
// document.write(number(start,end))

// 9.	Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//       return number * number;
//     }

//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);
  
//     const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
  
//     return hypotenuse;
//   }
  
//   const baseLength = 2;
//   const perpendicularLength = 6;
//   const result = calculateHypotenuse(baseLength, perpendicularLength);
//   console.log(`The hypotenuse is ${result}`);
  
//   10.	Write a function that writes variable length arguments list in your browser.

// function logArguments() {
//     const argsArray = Array.from(arguments);
//     console.log(...argsArray);
//   }
//   logArguments("Argument 1", 42, "true" ,  { key: "value"});


  
// 11.	Write a function that accepts any number of arguments & find largest of the number.

// 13.	Write a function that receives an array & returns the sorted array.

// 15.	Execute & monitor the output of following JS program:
// var param = function inner() { 
//        return typeof inner; 
// }
// alert(param()); 
// 26.	The Age Calculator
// Forgot how old you are? Calculate it!
// •	Write a function named calculateAge that:
// o	takes 2 arguments: birth year, current year.
// o	calculates the 2 possible ages based on those years.
// o	outputs the result to the screen like so: "You are either NN or NN"
// •	Call the function three times with different sets of values.
// •	Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// function age() {
// var year = 2023;
// var birth = 1997;
// var result1 = (year - birth);
// var result2 = (year - birth - 1);
// document.write("<h1>"+ "The Age Calculator"+"</h1>"+ "<br>"+ "Curent Year:" + " "+year + "<br>" + "Birth year:" + " "+ birth + "<br>"+
//     "She is either"+ " " + result1+" " +"or"+" "+ result2+" "+ "years old");
// }
// document.write(age());

// 27.	The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// •	Write a function named calculateSupply that:
// o	takes 2 arguments: age, amount per day.
// o	calculates the amount consumed for rest of the life (based on a constant max age).
// o	outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// •	Call that function three times, passing in different values each time.

// function calculator() {
// var snack = prompt("Enter Your favourite Snack");
// var age = +prompt("Enter Your Current age");
// var maxAge = +prompt("Enter Your maximun Age");
// var amount = +prompt("Enter Your  estimated amount per day");
// var result = (maxAge-age)*amount;
// document.write("<h1>"+ "The Lifetime Supply Calculator:"+"</h1>" + "<br>" +
// "Favourite Snack:" + " " + snack + "<br>" + 
// "Current Age:" + " " + age + "<br>" +
// "Maximum Age:" + " " + maxAge + "<br>" +
// "Amount of Snacks per day:" + " " + amount + "<br>" +
// "You will need"+" " +result+" " +"to last you until the ripe old age of"+ " "+maxAge);
// }
// document.write(calculator());

// 28.	The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// •	Pass the radius to the function.
// •	Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// •	Pass the radius to the function.
// •	Calculate the area based on the radius, and output "The area is NN".
// var r = 12;
// var pie = 3.142;

// function radius() {
//     var r = 12;
//     var pie = 3.142;
//     return 2*pie*r;
// }
// function cal() {
//     var r = 12;
//     var pie = 3.142;
//     return pie*(r*r);
//     document.write("Radius of a circle is:" + " "+ r + "<br>" + "Circumference of a circle is:" + " "+ radius() + "<br>"+
//         "The area is"+ " " + cal());
// }
// document.write(document.write("Radius of a circle is:" + " "+ r + "<br>" + "Circumference of a circle is:" + " "+ radius() + "<br>"+
// "The area is"+ " " + cal()))

// 29.	The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// •	Store a celsius temperature into a variable.
// •	Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// •	Now store a fahrenheit temperature into a variable.
// •	Convert it to celsius and output "NN°F is NN°C."


// function converterC() {
// var userInput1 = +prompt("Enter Temperature in Celsius");
// var convertIntoF = (userInput1*9)/5+32;
// document.write(userInput1+ "C" + " " + "is" + convertIntoF +" "+"F");
// }
// function converterF() {
// var userInput1 = +prompt("Enter Temperature in F");
// var convertIntoF = (userInput1-32)*5/9;
// document.write(userInput1+ "F" + " " + "is" + convertIntoF +" "+"C");
// }
// document.write(converterC());


//  var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//  if (charsInMonth > 3) {
//  monthAbbrev = month.slice(0, 3);
//  }

//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  break



