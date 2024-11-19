// Mixed practise Qs

// topics: Var & data types, operators, strings, if-else statements

// L1: Q1

// let temp = 32;
// let freezing = 0;

// if (temp > freezing) {
//   console.log(`Weather is intially cold`);
// } else {
//   console.log("Weather is cold");
// }

// L1: Q2

// let userAge = prompt("Enter your age");

// if (userAge >= 18) {
//   alert("You are eligible to vote");
// } else if (userAge >= 0 && userAge < 18) {
//   alert("You are not eligible to vote");
// } else {
//   alert("Enter a valid number");
// }

// L1: Q3

// let year = prompt("Enter an year");

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("It is a leap year");
// } else {
//   console.log("It is an ordinary year");
// }

// L2: Q1

// let weight = 32;
// let height = 154;

// if (weight >= 50 && weight <= 90 && height > 160) {
//   console.log("You are qualified for a fitness program");
// } else {
//   console.log("You are not qualified for a fitness program");
// }

// L2: Q2

// let day = prompt(`Enter the day of the week (1-7)`);

// if (day >= 1 && day <= 5) {
//   console.log("It is a weekday");
// } else if (day > 5 && day <= 7) {
//   console.log("It is a weekend");
// } else {
//   console.log("Enter a valid number");
// }

// L2: Q3 ------------

//

// let code = prompt("Enter password");
// let num = /\d/.test(code);
// let size = code.length >= 8;

// if (num && size) {
//   console.log("Password: Strong");
// } else {
//   console.log("Password: Weak");
// }

// L3: Q2

// let n1 = Number(prompt("Enter first number"));
// let n2 = Number(prompt("Enter second number"));

// let add = n1 + n2;
// let subt = n1 - n2;
// let multpl = n1 * n2;
// let dvd = n1 / n2;

// console.log(`${n1} + ${n2} = ${add}`);
// console.log(`${n1} - ${n2} = ${subt}`);
// console.log(`${n1} * ${n2} = ${multpl}`);
// console.log(`${n1} / ${n2} = ${dvd}`);

// --------------------------------------------------------

// Topic: loop

// for loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// while loop

// let correctPass = 12345;
// let userInput = "";

// while (userInput != correctPass) {
//   userInput = prompt("Enter your password");
// }

// console.log("Access is granted");

// do-while loop

// let num;

// do {
//   num = parseInt(prompt("Enter a positive number"));
// } while (num <= 0);

// console.log("You entered: ", num);

// break statement

// for (let i = 1; i <= 20; i++) {
//   if (i % 5 === 0) {
//     console.log(`First number divisible by 5 is: ${i}`);
//     break;
//   }
// }

// Continue Statement

// for (let i = 0; i <= 10; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// Practice Qs: loop

// L1: Q1: even number

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// L1: Q2: find sum

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }

// console.log(`Sum of numbers from 1 to 10 is: ${sum}`);

// L1: Q3: print in reverse

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// L2: Q1: find factorial  ----------

// let n = 4;
// let factorial = 1;

// for (let i = n; i >= 1; i--) {
//   factorial *= i;
// }

// console.log(`Factorial of ${n} is: ${factorial}`);

// L2: Q2: Divisor of a number

// let n = 42;
// console.log(`Divisors of ${n} are: `);

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// L2: Q3: Password Validator

// let password = "admin123";
// let askUser = "";

// while (askUser != password) {
//   askUser = prompt("Enter password");
// }
// console.log("Access");

// L3: Q1: prime number finder

// let num = 1;
// console.log(`Prime numbers are: `);

// for (let i = 1; i < 50; i++) {
//   if (i % num === 0) {
//     console.log(i);
//   }
// }

// L3: Q2: reverse a string

// L3: Q3: fibonacci sequence
