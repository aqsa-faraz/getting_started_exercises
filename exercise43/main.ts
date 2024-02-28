/* 
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/


let magician_name = ["Harry Houdini", "Chris Angel", "Darren Brown", "Dynamo"];

function show_magicians(magicians: string[]){
    
    magicians.forEach((magician)=>
    console.log(`${magician}`));
}

function make_great(magicians: string[]): string[]{
   for(let i = 0; i < magicians.length; i++){
    magicians[i] = magicians[i]+" the Great"
   }
   return magicians;
}

console.log();
show_magicians(magician_name); // magician's name array
console.log();
console.log(` GREAT MAGICIANS`);
console.log(`-----------------`);
let great_magicians = make_great(magician_name.slice());
show_magicians(great_magicians); // modified array of magician's names
console.log();
console.log(` ORIGINAL MAGICIANS`);
console.log(`--------------------`);
show_magicians(magician_name); // unchanged array