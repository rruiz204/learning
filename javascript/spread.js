console.log("Topic: Spread in Arrays");

const numbers_a = [1,2,3];
const numbers_b = [4,5,6];

const numbers_c = [...numbers_a, ...numbers_b];

function printNumbers(...numbers) {
	numbers.forEach((number) => console.log(number))
}

console.log("Topic: Spread in Objects");

const propertie_a = { name: "Sub Zero" };
const propertie_b = { rival: "Scorpion" };

const characters = { ...propertie_a, ...propertie_b };
console.log(characters);