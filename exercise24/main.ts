/* 
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

// Equality and inequality test cases (with strings)
let color = "GREEN";

console.log("Is color != red? I predict True.")
console.log(color != "red");

console.log("Is color == green? I predict True.")
console.log(color == "green");
console.log("--------------------------------------------------");

// test using the lowercase() function
console.log("Is color.toLowerCase() == green? I predict True.")
console.log(color.toLowerCase() == "green");

console.log("Is color.toLowerCase() == orange? I predict False.")
console.log(color.toLowerCase() == "orange");
console.log("--------------------------------------------------");

// Numerical tests
let x = 10;
let y = 5;

console.log(`Is ${x} == ${y}? I predict False`);
console.log(x == y);
console.log(`Is ${x} === "10"? I predict False`);
console.log(x ==="10");
console.log(`Is ${x} != ${y}? I predict True`);
console.log(x!=y);
console.log(`Is ${x} !== "10"? I predict True`);
console.log(x !== "10"); // different data types
console.log(`Is ${x} > ${y}? I predict True`);
console.log(x > y);
console.log(`Is ${x} < ${y}? I predict False`);
console.log(x < y);
console.log(`Is ${x} >= ${y}? I predict True`);
console.log(x >= y);
console.log(`Is ${x} <= ${y}? I predict False`);
console.log(x <= y);
console.log("--------------------------------------------------");

// tests using and(&&) or(||) operators
let z = 15;

console.log(`Is ${x} < ${y} && ${y} < ${z}? I predict False`);
console.log(x < y && y < z);
console.log(`Is ${x} > ${y} || ${y} < ${z}? I predict True`);
console.log(x > y || y < z);
console.log(`Is !(${x} < ${y})? I predict True`);
console.log(!(x < y));
console.log("--------------------------------------------------");

// Test whether an item is in a array
const nums = [1, 3, 5, 7, 9];
console.log(`Does [${nums}], an array of odd numbers contain 3? I predict True`)
console.log(nums.includes(3));

// Test whether an item is not in a array
console.log(`Does [${nums}], an array of odd numbers contain 8? I predict False`)
console.log(nums.includes(8));






