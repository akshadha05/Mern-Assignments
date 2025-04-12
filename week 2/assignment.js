// Task 1: Declare a variable `age` and assign it a value of 25.

let age = 25;
let isAdult = age >= 18; 
console.log("Is Adult:", isAdult); 

// Task 2: Given x = 10 and y = 5, perform the following operations and store the results:
let x = 10;
let y = 5;

let addition = x + y; 
let multiplication = x * y;
let modulus = x % y; 

console.log("Addition:", addition); 
console.log("Multiplication:", multiplication); 
console.log("Modulus:", modulus); 

// Task 3: Write a program that checks if a number n is even or odd and stores the result in a variable.
let n = 7; 
let isEven = n % 2 === 0; 
console.log(`Is ${n} even?`, isEven);

// Task 4: Write a for loop to store numbers from 1 to 5 in an array.
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
  numbersArray.push(i); 
}
console.log("Numbers Array:", numbersArray); 

// Task 5: Write a function `square` that takes a number as input and returns its square.
function square(number) {
  return number * number; 
}

let result = square(4); 
console.log("Square of 4:", result); 