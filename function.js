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

















