/* 
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/

function describe_city(city_name: string, country_name: string = "Pakistan"){
    console.log(`${city_name} is in ${country_name}.`);
}

describe_city("Karachi"); // call with default country
console.log("-----------------------");
describe_city("Islamabad"); // call with default country
console.log("-----------------------");
describe_city("London"); // call with a city which is not in the default country
console.log("-----------------------");
describe_city("Venice", "Italy"); // call with user values

