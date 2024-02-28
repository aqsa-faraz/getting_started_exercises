/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/

// defining the type of "object"
type Person = {
    firstname: string,
    lastname: string,
    age: number,
    city: string
}

// defining an array of objects
let persons: Person[] = [];

// creating an object of type "Person"
let person1: Person = {
    firstname: "Muhammad",
    lastname: "Ibrahim",
    age: 5,
    city: "Karachi"
};

persons.push(person1);

persons.push({
    firstname: "Muhammad",
    lastname: "Izhaan",
    age: 3,
    city: "Karachi"
});

let person3 = {
    firstname: "Abdul",
    lastname: "Rafay",
    age: 15,
    city: "Peshawar"
};

persons.push(person3);


console.log(`There are ${persons.length} objects in the list: `)
console.log("---------------------------------");

for(let person of persons){
    console.log(`Name: ${person.firstname} ${person.lastname}\nAge: ${person.age}\nCity: ${person.city}`);
    console.log("--------------")
}

