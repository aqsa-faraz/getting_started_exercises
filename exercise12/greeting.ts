/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
The text of each message should be the same, but each message should be personalized with the person’s name.
 */

let friendList : string[]= ["Mehwish", "Ramsha", "Areeba", "Shahtaj", "Firza", "Maria"];

for(let friend of friendList){
    console.log(`Hey ${friend}, Hope you're doing well.`);
}