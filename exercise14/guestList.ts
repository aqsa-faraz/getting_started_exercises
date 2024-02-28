/* If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.
*/

let guestList : string[] = ["Mehwish", "Ramsha",
"Shahtaj",
"Areeba", "Maryam"];

let invite: string = "We are having a family dinner and we'd love to have you over for some food and laughter."

guestList.forEach(element =>{
    console.log(`Hey ${element}, ${invite}`);
});