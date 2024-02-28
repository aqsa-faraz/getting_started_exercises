/* 
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function make_car(manufacturer: string, model_name: string, ...options: any[]){

    let car: any = {
        car_manufacturer: manufacturer,
        model: model_name,
    };

    for(let [key, value] of options){
        car[key] = value;
    }

    return car;
}

let car1 = make_car("honda", "accord", ["year", 1991], ["color", 'white'], ["headlights", "popup"] );
console.log(car1);