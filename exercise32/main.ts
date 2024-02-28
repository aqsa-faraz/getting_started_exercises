/* 
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users = ["Jennifer", "Eric", "Lisa", "John", "Matthew"];

let new_users = ["Rachel", "Daniel", "John", "Tom", "eric"];

// converting all usernames to lowercase for making it case insensitive
let current_users_lower: string[]= [];
current_users.map(user => {
        current_users_lower.push(user.toLowerCase())
    });


new_users.forEach(user => {
    if(current_users_lower.includes(user.toLowerCase())){
        console.log(`Sorry ${user}, that name is taken!`)
    }else{
        console.log(`Great! ${user} is still available.`)
    }
});


