/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
 */

let newGuestList : string[] = ["Mehwish", "Ramsha",
"Shahtaj",
"Areeba", "Maryam"];

let guestWhoCantMakeIt: string = "Ramsha";

console.log(`${guestWhoCantMakeIt} won't be able to make it to the dinner.`);

let newGuest: string ="Jia";

let indexOfguestWhoCantMakeIt: number = newGuestList.indexOf(guestWhoCantMakeIt);

if(indexOfguestWhoCantMakeIt >=0){
    newGuestList[indexOfguestWhoCantMakeIt]=newGuest;
}

console.log("\nSecond set of invitation messages:");
console.log("----------------------------------")

newGuestList.forEach((guest)=>{
    console.log(`Hey ${guest}, you are cordially invited to a dinner at my place.`)
});

export default newGuestList;