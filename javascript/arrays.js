console.log("Topic: Arrays");

let fruits = ["Banana", "Grapes", "Kiwi"];
let fruit = fruits[1];


console.log("Topic: Add and Extract");

let fruitsA = [...fruits];

fruitsA.push("Orange"); // adds items to the end.
console.log(fruitsA);

let lastFruitA = fruitsA.pop(); // extracts an item from the end.
console.log(fruitsA, lastFruitA);


let fruitsB = [...fruits];

fruitsB.unshift("Apple"); // adds items to the beginning.
console.log(fruitsB);

let lastFruitB = fruitsB.shift(); // extracts an item from the beginning
console.log(fruitsB, lastFruitB);


console.log("Topic: Methods");

fruits.forEach((fruit) => console.log(fruit));

const numbers = [1, 2, 3];

const mapNumbers = numbers.map((number) => number * 2);
console.log(mapNumbers);

const pairNombers = numbers.filter((number) => number % 2 == 0);
console.log(pairNombers);

const stackNumbers = numbers.reduce((stack, number) => stack += number, 0);
console.log(stackNumbers);