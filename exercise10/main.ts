/*
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
*/


// FIRST PROGRAM: Removing white spaces from a string
let _personName : string ="\t    Muhammad Ibrahim    \n"; // storing person's name with white spaces at the beginning and the end
console.log(`with whitespaces: ${_personName}`);
console.log(`without whitespaces: ${_personName.trim()}`);//used string.trim() method to remove leading and trailing whitespaces from the string
console.log("\n------------------------------------\n");


// SECOND PROGRAM: Print a person’s name in lowercase, uppercase, and titlecase.
let person_name : string = "Muhammad ibrahim";

console.log(`Person Name: ${person_name}`);
console.log(`lower case: ${person_name.toLowerCase()}`);
console.log(`UPPER CASE: ${person_name.toUpperCase()}`);

let titlecase : string = "";

let tempstr : string[]= person_name.toLowerCase().split(' ');//converting the string to lowercase and then splitting it on spaces

for(var i=0; i<tempstr.length; i++){
    titlecase+=tempstr[i].charAt(0).toUpperCase()+tempstr[i].slice(1)+" ";//making the first character of every element uppercase
}


console.log(`Title Case: ${titlecase}`);