/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order. 
• Print your array in its original order. 
• Print your array in alphabetical order without modifying the actual list. 
• Show that your array is still in its original order by printing it. 
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed. 
• Reverse the order of your list again. Print the list to show it’s back to its original order. 
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed. 
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. 

 */

let placesToVisit : string[] = ["Makkah", "Madina", "Italy", "Switzerland", "France"]

console.log(`Original List: `,placesToVisit)

console.log(`Sorted in alphabetical order without modifying the original list: `,[...placesToVisit].sort()) //this will sort the array without modifying the original one

//console.log(`alphabetically sorted without changing original list: `,placesToVisit.slice().sort())

console.log(`list not changed: `,placesToVisit)

console.log(`reversed alphabetical order without changing: `, placesToVisit.slice().sort().reverse())

console.log(`list not changed: `,placesToVisit)

console.log(`Reversed and changed: `, placesToVisit.reverse()) //reverse

//console.log(`changed: `,placesToVisit)

console.log(`Reversed Again and back to original order: `, placesToVisit.reverse()) //reverse again

console.log(`Sorted in alphabetical order: `,placesToVisit.sort())
console.log(`Sorted in reverse alphabetical order: `,placesToVisit.reverse())

