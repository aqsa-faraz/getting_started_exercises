/*
 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
function make_sandwich(...sandwich: string[]){
    console.log(`\nI'll make you a great sandwich: `);
    sandwich.forEach(item => {
        console.log(`...adding ${item} to your sandwich.`);
    });
    console.log(`Your sandwich is ready!\n`);
}

make_sandwich("grilled chicken", "cheddar cheese", "lettuce");
console.log(`---------------------------------`);
make_sandwich("turkey", "honey mustard sauce", "cherry tomatoes", "lettuce");
console.log(`---------------------------------`);
make_sandwich("roasted beef", "caramelized onions", "lettuce", "jalapeno", "chipotle sauce");
