/* 
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

let alien_color = "green";

// version for 'green alien'
console.log(`Alien is ${alien_color}`);

if(alien_color == "green"){
    console.log(`You earned 5 points!`);
}else if(alien_color == "yellow"){
    console.log(`You earned 10 points!`);
}else{
    console.log(`You earned 15 points!`);
}
console.log("--------------------");

// version for 'yellow alien'
alien_color = "yellow";

console.log(`Alien is ${alien_color}`);

if(alien_color == "green"){
    console.log(`You earned 5 points!`);
}else if(alien_color == "yellow"){
    console.log(`You earned 10 points!`);
}else{
    console.log(`You earned 15 points!`);
}
console.log("--------------------");

// version for 'red alien'
alien_color = "red";

console.log(`Alien is ${alien_color}`);

if(alien_color == "green"){
    console.log(`You earned 5 points!`);
}else if(alien_color == "yellow"){
    console.log(`You earned 10 points!`);
}else{
    console.log(`You earned 15 points!`);
}