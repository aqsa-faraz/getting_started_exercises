/* 
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

import chalk from "chalk";

let magician_name = ["Harry Houdini", "Chris Angel", "Darren Brown", "Dynamo"];

function show_magicians(magicians: string[]){
    console.log(chalk.bold.blue(` MAGICIANS`));
    console.log(chalk.bold.blue(`-----------`));
    magicians.forEach((magician)=>
    console.log(chalk.italic(`${magician}`)));
}

function make_great(magicians: string[]){
   for(let i = 0; i < magicians.length; i++){
    magician_name[i] = magicians[i]+" the Great"
   }
}

show_magicians(magician_name); // magician's name array
console.log();
make_great(magician_name);
show_magicians(magician_name); // modified array of magician's names