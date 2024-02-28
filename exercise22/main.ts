/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

function createFruit(name: string, color: string, taste: string){
    return { name, color, taste};
}

const fruits = [createFruit("Apple", "Red", "Sweet"),
createFruit("Banana", "Yellow", "Sweet"),
createFruit("Orange", "Orange", "Tangy"),
createFruit("Grapes", "Green", "Sweet"),
createFruit("Strawberry", "Red", "Sweet")];

const invalidIndex = 7;

// trying to access an invalid index
console.log(`Fruit at index ${invalidIndex} is: ${fruits[invalidIndex]}`);


console.log("-------------")
fruits.forEach((fruit)=>{
    console.log(`Name: ${fruit.name}\nColor: ${fruit.color}\nTaste: ${fruit.taste}`);
    console.log("-------------")
});





