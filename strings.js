// 1. Write a program that takes two user inputs for first and last 
// name using prompt and merge them in a new variable titled 
// fullName. Greet the user using his full name.

// var pro1 = prompt("Enter your first name");
// var pro2 = prompt("Enter your last name");
// var res = pro1[0].toUpperCase()+pro1.slice(1).toLowerCase() +" " + pro2[0].toUpperCase()+pro2.slice(1).toLowerCase();
// alert("Good Morning" + " " + res);


// 2. Write a program to take a user input about his favorite mobile 
// phone model. Find and display the length of user input in your 
// browser

// var pro1 = prompt("Enter your favourite mobile name with model");
// var b = pro1.length;
// document.write(pro1 + " " + "<br>"+ "The length of a string is" + b);


// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser

// var a = "Pakistani";
// var b = a.indexOf("n");
// document.write(a + " " +"<br>"+ b )

// 4. Write a program to find the last index of letter “l” in the word 
// “Hello World” and display the result in your browser.

// var a = "Hello World";
// var b = a.lastIndexOf("l");
// document.write(a + " " +"<br>"+ b )



// 5. Write a program to find the character at 3rd index in the word 
// “Pakistani” and display the result in your browser.

// var a = "Pakistani";
// var b = a.charAt(3);
// document.write(a + " " +"<br>"+ b )


// 7. Write a program to replace the “Hyder” to “Islam” in the word 
// “Hyderabad” and display the result in your browser.

// var a = "Hyderabad";
// var b = a.replace("Hyder","Islam")
// document.write(a + "<br>"+ b);


// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. 

// var message = "Aliand Sami are best friends.They play cricket and football together.";
// var a = message.replace(/and/g,"&");
// document.write(a);

// 9. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

// var str = "472";
// var num = Number(str);
// document.write(str + "type of str" + " " + typeof(str)+ " <br>" + str + "type of str" + " " + typeof(num));

// Write a program that take a URL as user input in the 
// following format: (www.facebook.com / www.yahoo.com ). 
// Extract the domain name & show in your browser

// var pro1 = prompt("Enter Url");
// var a = pro1.slice(4);
// document.write("URL:" + " " + pro1 + " " + "<br>" + "Domain:" + " " + a);

// 11. Write a program that takes user input. Convert and show the 
// input in capital letters.

// var a = prompt("Enter User Input");
// var b = a.toUpperCase();
// document.write(a + " " +"<br>"+ b);

// 12. Write a program that takes user input. Convert and show the 
// input in small letters.

// var a = prompt("Enter User Input");
// var b = a.toLowerCase();
// document.write(a + " " +"<br>"+ b);


// 13. Write a program that takes user input. Convert and show the 
// input in title case.

// var pro1 = prompt("Enter User Input");
// var pro2 = pro1[0].toUpperCase() + pro1.slice(1).toLowerCase();
// document.write(pro1 + " " +"<br>"+ pro2);

// 14. Write a program that converts the variable num to string.
//  var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var change = num.toString().replace(".","");
// document.write(change);

// 15. Write a program to display the value of x in your browser if a=”3” 
// and b=”3”?
//  x = a + b

// var a = "3";
// var b = "3";
// var x = a + b;
// document.write("x = a + b = " + x)

// 16. Write a program to display the value of y in your browser if a=”3” 
// and b=”3”?
//  y = a - b;
// var a = "3";
// var b = "3";
// var y = a - b;
// document.write("y = a + b = " + y)


// 18. You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is 
// found in the list or not.

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// userInput = userInput.toLowerCase();
// if (items.includes(userInput)) {
//     alert("The item '" + userInput + "' is found in the list.");
// } else {
//     alert("The item '" + userInput + "' is not found in the list.");
// }

// 19. Write a program to take two input strings. Using string 
// comparison, tell which string is greater than other or if they 
// both are equal.
// var pro1 = prompt("Enter the first string:");
// var pro2 = prompt("Enter the second string:");
// if (pro1 === pro2) {
//     alert("Both strings are equal.");
// } else if (pro1 > pro2) {
//     alert(pro1 + "is greater than" + pro2);
// } else {
//     alert(pro2 + "is greater than the" + pro1);
// }

// 21. Write a program to convert the following string to an array 
// using string split method.
//  var university = “University of Karachi”;
// Display the elements of array in your browser

// var university = "University of Karachi";
// for (let i= 0; i < university.length; i++) {
//    document.write(university[i] + "<br>")
    
// }

// 22. Write a program to display the last character of a user input.
// var a = "Pakistan";
// var b = a.charAt(a.length-1);
// document.write(b)

// . You have a string “The quick brown fox jumps over the lazy 
// dog”. Write a program to count number of occurrences of word 
// “the” in given string

// var inputString = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";
// var count = 0;
// inputString = inputString.toLowerCase();
// wordToCount = wordToCount.toLowerCase();
// var words = inputString.split(" ");
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordToCount) {
//         count++;
//     }
// }
// alert("The word '" + wordToCount + "' appears " + count + " times in the string.");


// 24. Write a program to count number of vowels & consonants in 
// given string
//  var str = “Pakistan”

// var str = "Pakistan";
// var vowelsCount = 0;
// var consonantsCount = 0;
// str = str.toLowerCase();
// for (var i = 0; i < str.length; i++) {
//     var char = str.charAt(i);
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         vowelsCount++;
//     } else if (char >= 'a' && char <= 'z') {
//         consonantsCount++;
//     }
// }
// alert("Number of vowels in the string: " + vowelsCount);
// alert("Number of consonants in the string: " + consonantsCount);




