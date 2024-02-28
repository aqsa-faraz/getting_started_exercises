/* 
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let car = 'subaru';
let CAR = 'SUBARU';

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
console.log("-----------------------------------");

console.log("Is car == 'honda'? I predict False.");
console.log(car == "honda");
console.log("-----------------------------------");

console.log("Is car == 'CAR'? I predict True.")
console.log(car == CAR)
console.log("-----------------------------------");

console.log("Is car === 'CAR'? I predict True.")
console.log(car === CAR)
console.log("-----------------------------------");

console.log("Is car == CAR.toLowerCase()? I predict True.")
console.log(car == CAR.toLowerCase())
console.log("-----------------------------------");

let age = 5;
console.log("Is age == '5'? I predict False.");
console.log(age == "5");
console.log("-----------------------------------");

console.log("Is age != 5? I predict False.");
console.log(age != 5);
console.log("-----------------------------------");

console.log("Is age <= 10? I predict True.");
console.log(age <= 10);
console.log("-----------------------------------");

console.log("Is age >=5? I predict True.");
console.log(age >= 5);
console.log("-----------------------------------");

console.log("Is age < 5? I predict False.");
console.log(age < 5);
console.log("-----------------------------------");











