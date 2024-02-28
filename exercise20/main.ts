/*
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 */

const countries: string[] = [];


countries.push("Pakistan");
countries.push("Afghanistan");
countries.push("Indonesia");
countries.push("Malaysia");
countries.push("China");

console.log("List of countries: ");

for(let i of countries){
     console.log(i);
}
