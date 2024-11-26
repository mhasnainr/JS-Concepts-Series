// Day 1

// ---------------------------------------------- Chapter 1: Basics

// console.log("Welcome to JS");
// console.log("Hasnain");
// console.log("Lunch");

// name = "Cedar";
// console.log(name);

// words = "This is a sentence";
// console.log(words);

// comments

// food = 21;
// console.log(food);

// -------- operators

// food = Number(prompt("How much was the food?"));
// tip = Number(prompt("Enter tip:")) / 100;
// tipAmount = food * tip;
// totolAmount = food - tipAmount;

// console.log(`Tip: ${tipAmount}\nTotal Amount: ${totolAmount}`);

// ---------------------------------------------- Chapter 2: Baby Weather App

// ---- Data types

// Math methods:

// floor: rounds down/ backwards
// console.log(Math.floor(1.94));

// ceil: rounds up/ forward
// console.log(Math.ceil(1.21));

// random: b/w two numbers: 0 (inclusive) and 1 (exclusive) - math.random() * 4
// console.log(Math.random() * 4);

// console.log(Math.floor(Math.random() * 4));

// ---- Conditional Operators:
// ==, ===, >, <, >=, <=, !=, !==

// ---- Weather App

// let weather = "Rain";

// if (weather == "Rain") {
//   console.log("Grab umbrella");
// } else {
//   console.log("Wear sunglasses");
// }

// ---------------------------------------------- Chapter 3: Dynamic Functions

// ----Basic Functions

// function tellMyName() {
//   console.log("Hasnain");
// }
// tellMyName();

// ---- Dynamic

// note: function arguments behave as variables

// function tellMyName(name) {
//   console.log(name);
// }
// tellMyName("Hasnain");

// function greetings(name) {
//   console.log(`Welcome ${name}`);
// }

// greetings('Hasnain');

// the last code above does:
// have a function called 'greetings' with an argument named 'name'
// it logs out the console msg

// ---- return: this makes the function reusable

// function sum(a, b) {
//   return a + b;
//   //   console.log(a + b); undefined
// }

// console.log(sum(1, 4));

// // or

// num1 = sum(1, 4);
// console.log(num1);

// if inside the function console was done in place of return, this will return undefined error

// ---- tip Calculator

// function foodTotal(params) {}

// food = Number(prompt("How much was the food?"));
// tip = Number(prompt("Enter tip:")) / 100;
// tipAmount = food * tip;
// totolAmount = food - tipAmount;

// console.log(`Tip: ${tipAmount}\nTotal Amount: ${totolAmount}`);

// Resume from: 1:00:15
