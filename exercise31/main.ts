/* 
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

//let usernames = ["Mathew", "Jennifer", "Admin", "Lisa", "Eric"];

let usernames: string[] = [];

if(usernames.length){ // if the length of the array is not 0
    usernames.forEach(user => {
        if(user == "Admin"){
            console.log(`Hello ${user}, would you like to see a status report?`);
        }else{
            console.log(`Hello ${user}, thank you for logging in again!`);
        }
    });
}else{
    console.log(`We need to find some users!`);
}