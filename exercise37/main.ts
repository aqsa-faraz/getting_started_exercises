/* 
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt(size: string = "large", text: string = "I love TypeScript!"){
    console.log(`I am going to make a ${size} size t-shirt.`);
    console.log(`It will say, "${text}".`);
}

make_shirt(); // call with default values
console.log("------------------------------------")
make_shirt("medium"); // call with size(medium) and default message
console.log("------------------------------------")
make_shirt("small", "Hello World!"); // call with custom values
