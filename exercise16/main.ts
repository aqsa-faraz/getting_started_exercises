/*
 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/

/* let guestList: Array<string> = ["Mehwish", "Jia",
"Shahtaj",
"Areeba", "Maryam"]; */ //array can be declared like this also

let guestList : string[] = ["Mehwish", "Jia",
"Shahtaj",
"Areeba", "Maryam"];

for( let guest of guestList){
    console.log(`Hi ${guest}, we are happy to tell you that we just found a bigger dinner table so we thought of having more guests at our dinner party.`);
}

guestList.unshift("Firza"); // adding a guest at the beginning of the array

let midArray = Math.floor(guestList.length/2) //returs the quotient, which is the mid point in our case 

guestList.splice(midArray,0,"Tooba"); // adding a guest to the middle of the array
guestList.push("Maria"); // adding a guest at the end of the array


console.log(`\nSending new Invitations:\n`)
for(let i = 0; i < guestList.length; i++){
    console.log(`Hey ${guestList[i]}, you are cordially invited to a dinner at our place.`)
}

