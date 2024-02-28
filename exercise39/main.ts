/* 
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/

function city_country(city_name: string, country_name: string): string{
    return `${city_name}, ${country_name}`;
}


let c1 = city_country("Karachi", "Pakistan");
let c2 = city_country("Venice", "Italy");
console.log(c1);
console.log("------------------");
console.log(c2);
console.log("------------------");
console.log(city_country("Hamburg", "Germany"));