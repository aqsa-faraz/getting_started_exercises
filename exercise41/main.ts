/* 
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

import chalk from "chalk";

let magician_name = ["Harry Houdini", "Chris Angel", "Darren Brown", "Dynamo"];

function show_magicians(magicians: string[]){
    console.log(chalk.bold.blue(`FAMOUS MAGICIANS`));
    console.log(chalk.bold.blue(`----------------`));
    magicians.forEach((magician)=>
    console.log(chalk.italic(`${magician}`)));
}

show_magicians(magician_name);