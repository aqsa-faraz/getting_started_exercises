/* Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let person_name : string = "Muhammad ibrahim";

console.log(`Person Name: ${person_name}`);
console.log(`lower case: ${person_name.toLowerCase()}`);
console.log(`UPPER CASE: ${person_name.toUpperCase()}`);

let titlecase : string = "";

let tempstr : string[]= person_name.toLowerCase().split(' ');

for(var i=0; i<tempstr.length; i++){
    titlecase+=tempstr[i].charAt(0).toUpperCase()+tempstr[i].slice(1)+" ";
}

/*function titlecase(str){
    str = str.toLowerCase().split(' '); //converting the string to lowercase and then splitting it on spaces
    for(var i = 0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1); //making the first character of every element uppercase
    }
    return str.join(' '); //joining the string back on blankspaces
}*/

console.log(`Title Case: ${titlecase}`);