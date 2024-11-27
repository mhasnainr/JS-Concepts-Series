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

// ----------------------------------------------- Day 2

// ---- tip Calculator

// function sum(a, b) {
//   return a + b;
// }

// function foodTotal(food, tip) {
//   tipPercentage = tip / 100;
//   tipAmount = food * tipPercentage;
//   totalAmount = sum(food, tipAmount);
//   return totalAmount;
// }

// console.log(foodTotal(530, 20));

// -----    ES6: Arrow Function ( => ) : allows to write shorter function syntax

// arrow function with explicit return
// const sumArrow = (a, b) => {
//   return a + b;
// };

// arrow function with implicit return
// note: for implicit return, remove squigglies/ curly braces
// const sumArrow2 = (a, b) => a + b;

// console.log(sumArrow2(10, 40));

// function foodTotal(food, tip) {
//   const tipPercentage = tip / 100;
//   const tipAmount = food * tipPercentage;
//   const totalAmount = sum(food, tipAmount);
//   return totalAmount;
// }

// console.log(foodTotal(530, 20));

// ------ Functions Ex

// let n1 = 32;
// let n2 = 21;

// const add = (a, b) => a + b;
// const subt = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const divd = (a, b) => a / b;

// function calc(result, n1, n2) {
//   console.log(`Result: ${result(n1, n2)}`);
// }

// calc(add, n1, n2);
// calc(subt, n1, n2);
// calc(mult, n1, n2);

// if (n2 === 0) {
//   console.log("Error: Division by zero");
// } else {
//   calc(divd, n1, n2);
// }

//

// ---------------------------------------------- Chapter 4: Arrays

// Basics
// methods: slice, push, indexOf, length

//

// ---------------------------------------------- Chapter 5: Objects {}:
// they are type of variables, quite similar to Arrays, but they have key-value pairs

// note: Propert is only one of the key value pairs

// const person = {
//   name: "Asif",
//   shirt: "black",
// };

// console.log(person);
// console.log(person.shirt);
// console.log(person["name"]);

// person.num = "432-343-3";
// console.log(person.num);

// person["car"] = "civic";
// console.log(person);

// below:
// ES6 Arrow function
// Object
// template literal
// Method: a property containing a function definition

// const introducer = (name, age) => {
//   const student = {
//     name: name,
//     age: age,
//     assets: 100000,
//     liabilities: 23000,
//     capital: function () {
//       return this.assets - this.liabilities;
//     },
//   };
//   const intro = `Hi! My name is ${student.name}, my age is ${
//     student.age
//   } and I have $${student.capital()} of capital available at the moment`;
//   return intro;
// };

// console.log(introducer("Hasn", 23));
// console.log(introducer("Asif", 13));

//

// ---------------------------------------------- Chapter 6: for Loop
